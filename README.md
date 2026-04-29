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

## Generating the site

`bundle exec jekyll serve`

## Updating gems

`bundle update`

## Resizing images from the command line

```
sips -Z 1024 money-tree.jpg
```

`-Z` keeps aspect ratio. `1024` is the maximum dimension.
