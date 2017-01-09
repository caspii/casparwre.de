---
layout: post
title: Using Python to find domains; finding out if a domain is registered
---
I made a Python script to create domain names and then check if they are free. It uses a python `whois` module.

Here's what you need to do.

## 1. Checkout the code
This bit is quite easy

`git clone git@github.com:caspii/domainfinder.git`

## 2. Create your own building blocks
This bit is also quite easy.

Open the file `input.txt` in your favorite text editor. You'll see that it contains a section called "--prefixes" and one called "--suffixes". Simply edit these sections as you see fit, taking care not to delete the actual section titles.

The python script will take each prefix, combine it with every suffix and then check if the resulting .com domain is free. For example, if you only have the prefix "ilove" and the two suffixes, "money" and "myself", then the script will check if the following domains are free:

* ilovemoney.com
* iloveymyself.com


## 3. Run the script
This is the easiest bit.

Run the command `./find.py` and the script will take the inputs you specified in step 2 and begin checking which domains are free.

## 4. Rejoice
You'll see the output as each domain is checked and the result in your console. All free domains are saved into a file called `free-domains.txt` for later perusal.

## Tweak
If you're feeling adventurous, change the script so that other top level domains are checked, such as .net or .de.

# That's all
If you have any questions, let me know.
