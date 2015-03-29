---
layout: post
title: How to take daily automatic screenshots in Ubuntu / Linux using the command line
---
For some reason you may want to automatically take screenshots every day. Maybe you want to spy on someone, maybe you want to keep a visual diary of what you're doing on your computer, maybe you just really really love screenshots.

Here's how to do it using just command-line tools on Ubuntu.

### Step 1
Install the scrot package

{% highlight bash %}
sudo apt-get install scrot
{% endhighlight %}

### Step 2
Create the following script and call it `screenshots`

Note: you must give a values for FILEPATH. This must be absolute e.g. /home/bob/Dropbox.

You must also give a value for MYUSERNAME (e.g. bob). Do not not use $USER because the script will run as root.

{% highlight bash%}
#!/bin/bash

FILEPATH=TODO
MYUSERNAME=TODO

DATE=$(date +%F)
FILENAME="$(date +%F-%R)-$(hostname).jpg"
su $MYUSERNAME -c "DISPLAY=:0 scrot -q 70 $FILEPATH$FILENAME"
{% endhighlight %}

### Step 3
Change the owner of the file, make it executable and move it to the cron folder.
{% highlight bash%}
chmod +x screenshots
sudo chown root:root screenshots
sudo mv screenshots /etc/cron.daily
{% endhighlight %}

### Step 4
Test that it's working. After running the following command, a new file should be created in the folder you specifified in the FILEPATH variable.
{% highlight bash%}
sudo /etc/cron.daily/screenshots
{% endhighlight %}

