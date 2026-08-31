#!/usr/bin/env bash
#
# Starts the local Jekyll dev server.
#
# Run it as ./run.sh -- do NOT put `exec` in front of it. In zsh, a leading
# `exec` replaces your terminal's shell with the command, so any error message
# disappears along with the window.

set -uo pipefail
cd "$(dirname "$0")" || exit 1

PORT="${PORT:-4000}"
WANTED_RUBY=$(tr -d '[:space:]' < .ruby-version)   # e.g. ruby-3.3.10

die() { printf '\n\033[31mrun.sh: %s\033[0m\n' "$1" >&2; exit 1; }
note() { printf '\033[36m==> %s\033[0m\n' "$1"; }

# --- 1. Make sure the right Ruby is active ---------------------------------
# chruby is normally loaded by ~/.zshrc, but this script may run from cron, an
# IDE, or a bare shell where that never happened.
if [ "$(ruby -e 'print "ruby-#{RUBY_VERSION}"' 2>/dev/null)" != "$WANTED_RUBY" ]; then
  for chruby_sh in /opt/homebrew/opt/chruby/share/chruby/chruby.sh \
                   /usr/local/opt/chruby/share/chruby/chruby.sh; do
    if [ -f "$chruby_sh" ]; then
      # chruby.sh reads unset variables, so -u has to come off around it.
      set +u
      # shellcheck disable=SC1090
      source "$chruby_sh"
      chruby "$WANTED_RUBY" 2>/dev/null
      set -u
      [ "$(ruby -e 'print "ruby-#{RUBY_VERSION}"' 2>/dev/null)" = "$WANTED_RUBY" ] && break
    fi
  done
fi

ACTIVE_RUBY=$(ruby -e 'print "ruby-#{RUBY_VERSION}"' 2>/dev/null) \
  || die "No usable ruby found. Install it with: ruby-install ruby ${WANTED_RUBY#ruby-}"

if [ "$ACTIVE_RUBY" != "$WANTED_RUBY" ]; then
  die "Wrong Ruby: got $ACTIVE_RUBY, need $WANTED_RUBY.
     Install it with: ruby-install ruby ${WANTED_RUBY#ruby-}"
fi
note "Ruby $ACTIVE_RUBY"

# --- 2. Make sure bundler and the gems are there ---------------------------
command -v bundle >/dev/null 2>&1 || die "bundler is missing. Install it with: gem install bundler"

if ! bundle check >/dev/null 2>&1; then
  note "Gems are out of date -- running bundle install"
  bundle install || die "bundle install failed. See the output above."
fi

# --- 3. Clear a stale server off the port ----------------------------------
# `jekyll serve --detach` leaves a server running in the background. A second
# run then dies with "Address already in use".
STALE_PID=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | head -1)
if [ -n "$STALE_PID" ]; then
  STALE_CMD=$(ps -o command= -p "$STALE_PID" 2>/dev/null)
  if printf '%s' "$STALE_CMD" | grep -q jekyll; then
    note "Killing old Jekyll server on port $PORT (pid $STALE_PID)"
    kill "$STALE_PID" 2>/dev/null
    sleep 1
  else
    die "Port $PORT is taken by something that is not Jekyll (pid $STALE_PID):
       $STALE_CMD
     Stop it, or pick another port: PORT=4001 ./run.sh"
  fi
fi

# --- 4. Serve --------------------------------------------------------------
# `bundle exec` is what pins Jekyll to the version in Gemfile.lock. Without it
# a newer Jekyll on the PATH loads mismatched gems and crashes on startup.
note "Starting server on http://127.0.0.1:$PORT/  (ctrl-c to stop)"
bundle exec jekyll serve --port "$PORT" "$@"
