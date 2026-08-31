Code for casparwre.de
============

The website is generated with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

## Setup (macOS)

```
brew install chruby ruby-install
ruby-install ruby 3.3.10
chruby ruby-3.3.10
gem install bundler
bundle install
```

The repo's `.ruby-version` pins `ruby-3.3.10`, which `chruby auto.sh` will pick up automatically when you `cd` into the directory.

## Running the site locally

```
./run.sh
```

Then open <http://127.0.0.1:4000/>. The script picks the right Ruby, installs
missing gems, clears a stale server off port 4000, and starts Jekyll. Extra
arguments are passed straight through, e.g. `./run.sh --incremental`, and the
port can be changed with `PORT=4001 ./run.sh`.

Under the hood it runs `bundle exec jekyll serve`. The `bundle exec` part is
not optional: without it a newer Jekyll on the `PATH` loads mismatched gems and
dies on startup with a `Gem::LoadError`.

Do **not** put `exec` in front of the command. In zsh, a leading `exec` replaces
your terminal's shell with the command, so if it fails the window closes and
takes the error message with it.

## Updating gems

`bundle update`

## Resizing images from the command line

```
sips -Z 1024 money-tree.jpg
```

`-Z` keeps aspect ratio. `1024` is the maximum dimension.
