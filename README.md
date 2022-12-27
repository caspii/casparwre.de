Code for casparwre.de
============

The website is generated with [Jeykll](https://jekyllrb.com/).

### 1. Install Jekyll
On Mac OSX
```
brew install chruby ruby-install
ruby-install ruby-3.1.1
chruby ruby-3.1.1 
gem install github-pages jekyll jekyll-seo-tag webrick
```

On Ubuntu
```sudo apt-get install ruby ruby-dev make gcc nodejs
sudo gem install jekyll --no-rdoc --no-ri
sudo gem install github-pages --no-rdoc --no-ri
```

###  2. Install yarn

See here: https://classic.yarnpkg.com/en/docs/install

### 3. Install packages

Run `yarn install`

### Updating jekyll
`gem update jekyll`

## Generating the site

Run jekyll with `jekyll serve` in the root directory and follow instructions.

## Resize Images from command line
 `sips -Z 1024 money-tree.jpg` 
 -Z Ensures aspect ratio is kept. 1024 is maximum resolution. 