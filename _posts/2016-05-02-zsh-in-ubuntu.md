---
layout: post
title: z-shell in Ubuntu    
---

![_config.yml]({{ site.baseurl }}/images/2016-05-zsh.png)

All the cool kids are using z-shell instead of bash these days. I won't go into details here, other than saying:

* zsh has much better tab completion behavior than bash
* it makes working with git much more pleasant and productive

Here's what you need to do to install zsh, install "Oh My zsh" (a prepackaged bunch of themes and addons) and get the fonts working on Ubuntu 16.04.

## 1. Install prerequisite packages

`sudo apt-get install git-core zsh`

## 2. Install Oh My Zsh

`curl -L http://install.ohmyz.sh | sh`

If you saw this error message `chsh: PAM: Authentication failure` then the script is having trouble setting ZSH as the default shell.

We'll fix that next.

## 3. Set it to be the default shell

`chsh -s /bin/zsh`

You'll only see this is in action once you've rebooted (right at the end).

## 4. Get the "Powerline" fonts required for a fancy theme
Install this font repo (you can delete it afterwards):

 `git clone git@github.com:powerline/fonts.git`

Run the install script:
```
cd fonts
./install.sh

```
Delete the repo:
```
cd ..
rm -fr fonts
```


## 5. Set up a fancy theme
Open up ~./zshrc and change `ZSH_THEME` variable:

`ZSH_THEME="agnoster"`

## 6. Change the font of your terminal
For Gnome Terminal go to _Edit > Profile preferences_ and set the font to one of the newly installed powerline fonts, for example *Droid Sans Mono for Powerline Regular*

## 7. Reboot
You're ready to go.

---
Any questions? Do ask below.
