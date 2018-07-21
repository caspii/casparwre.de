---
layout: post
title: Z-shell in Ubuntu 16.04  
---

!['Beautiful Z-Shell'](/images/2016-05-zsh.png){:class="img-responsive"}

All the cool kids are using z-shell instead of bash these days. I won't go into details here, other than saying:

* zsh has much better tab completion behavior than bash
* it makes working with git much more pleasant and productive

Here's what you need to do to install zsh, install [Oh-My-Zsh](http://ohmyz.sh/) (a prepackaged bunch of themes and addons) and get the fonts working on Ubuntu 16.04.

## 1. Install prerequisite packages

`sudo apt install git-core zsh`

## 2. Install Oh My Zsh

`sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

## 4. Get the "Powerline" fonts required for a fancy theme

`sudo apt install fonts-powerline`

## 5. Set up a fancy theme
Open up ~/.zshrc and change `ZSH_THEME` variable:

`ZSH_THEME="agnoster"`

---
Any questions? Do ask below.
