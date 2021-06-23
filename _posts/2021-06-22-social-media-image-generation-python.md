---
layout: post
title: Using Python Flask and Docker to generate social media images for any website
description: How to turbo-charge your social media presence with Python, Docker and Google Cloud Platform
image: /images/automatic.jpg

---

In today's attention economy you need to stand out when you post your content on social media: that means having some kind of image as part of the package. This is easy if you're sharing a blog post with photos (or other images) because you can setup your system to use one of these photos. But what if you're sharing content that doesn't come with a pre-made image?

This is a problem I was facing. I'm building an [online scoreboard and leaderboard app](https://keethescore.co) whose content regularly gets shared on Twitter, Facebook and elswhere. However, these leaderboards do not come with images: they are HTML and CSS. How to do I ensure they always have an image to use on social media without resorting to something generic?

## Summary

In this post I'll dig into the topic of social media images a little more. Why do you need them and how do they work.

Then I'll present the solution I built: a few lines of Python code (using the Flask framework), running inside a Docker container (on Google Cloud Run,  a container service).

The whole thing is capable of generating a social media preview image for **any** given webpage/URL and is pretty much a "set and forget" solution.

## Why do you need a social media image?

To begin, let's agree on what we are even talking about. Social media images are also called:

* Open Graph images
* sharing images or
* social graph images

They are used to make your content much much more appealing on social media. Let's look at Twitter as an example. 

Here's a link posted to Twitter that doesn't have a social media image included:


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A Project of One&#39;s Own: <a href="https://t.co/lImAG4RyUQ">https://t.co/lImAG4RyUQ</a></p>&mdash; Paul Graham (@paulg) <a href="https://twitter.com/paulg/status/1402212618786463744?ref_src=twsrc%5Etfw">June 8, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<br>

Now here's a link I posted to Twitter that does have a social media image:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve quit my job <a href="https://t.co/hyBCmZllbH">https://t.co/hyBCmZllbH</a></p>&mdash; Caspar von Wrede 🐿️ (@wrede) <a href="https://twitter.com/wrede/status/1377001339738329092?ref_src=twsrc%5Etfw">March 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

In both cases, the automated systems at Twitter will have crawled the link once it was posted, looking for some nice meta-data (including the social media image) to add to the post. In the first case, Twitter found nothing, so the link remains naked and boring. This is fine because Paul Graham is a fantastic writer and doesn't need to worry about such arcane and earthly things as social media images. I, however, do have to worry about these things so I added a social media image.

## What is an Open Graph Image?

For this to work, you need to add the appropriate metadata to the HTML of your content. This is all part of something called "open graph" metdadata and you can read all about it [here on css-tricks.com](https://css-tricks.com/essential-meta-tags-social-media/). Today we are concerned with the images, which are also the hardest part. The HTML code that I added for my blog post above is this:

```html 
<meta property="og:image" content="https://casparwre.de/images/nebelmeer.jpg" />
```

The nice thing is that this will also work for Facebook, iMessage, Slack, Telegram, WhatsApp and probably for most places where you're posting links that are visible to other people. In all of these places the content will be crawled, the metadata extracted and then used to make the post iteself look nicer ✨. Isn't that something that we all want?

## Autogenerating social media images

As I mentioned above, if your content is mainly blog posts, then the chances are high that you already have an image per blog post -- which you can  use as a social media image.

In the case of my app, [Keepthescore.co](https://keepthescore.co), these images don't exist, so I decided I wanted to generate them on demand.  I decided to basically use a screenshot of the particular scoreboard as the social media image. 

Now it is absolutely correct that there are already a vast number of screenshot APIs and services out there and I could have used any one to solve my problem instantly.

However, like any  ~~self-deluded~~ self-respecting developer out there, I simulataneously believe in "buy it, don't build it"  and was also sure that I could build a really small and quick solution myself. 

Well, it wasn't quick (surprise!) but it was small. And it works. Now, when you post a link to a scoreboard it looks like this. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Example scoreboard <a href="https://t.co/63ZFWHZFf7">https://t.co/63ZFWHZFf7</a></p>&mdash; Keepthescore.co (@keep_the_score) <a href="https://twitter.com/keep_the_score/status/1407323531516461062?ref_src=twsrc%5Etfw">June 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The image you can see is automatically generated by a (dare I say it?) _microservice_ 🙏. And this will work for Slack, Facebook, etc. 🦄

Let's get on to the technology behind it (which is probably why you're here).


## The Tech Stack
I use a headless browser in my Selenium integration tests -- and because Selenium also allows you to make screenshots, this seemed like a good solution for generating the social media images.

### Initial monolithic solution

The first thing I tried was to add a route to my Python Flask application for rendering the images. When this route was called, a headless browser instance was started and a screenshot of the appropriate scoreboard was created and returned.

This actually worked great ... until it didn't.

My app began to have downtimes in the middle of the night (when else?) because some actor was fetching their social media images in batches. This resulted in the app becoming very busy cooking up all these beautiful images and not having time for regular boring requests. The result was timeouts for my users. Now this was obviously not acceptable and with a heavy heart I changed the route to deliver a generic static image instead.

I began to think about a better solution.

### Enter Docker and Container Services

In the past I have played around with container services like [Google Cloud Run](https://cloud.google.com/run/) or [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform/). What I liked about both of them was their simplicity:  pushing to the git repo would trigger the building and deployment of a new container with no further intervention required. (For what it's worth, I still feel that AWS services are too complicated -- but I haven't checked them out recently.) Anyway, this is the level of complexity I was prepared to deal with. 

After some very rudimentary testing it turned out that Google Cloud Run was the way to go.

Also, because I've currently got my tent in the Python camp, I wanted to go with Python. However, if you research this topic it seems that Pupeteer is the way to go for most people (which is Javacript / Node.js I believe).

So, the hard part was not generating the image. The actual Flask code to generate the image itself is only 11 lines:

```python
app = Flask(__name__)
browser = Browser('firefox', headless=True)

@app.route('/image/<path:encoded_url>.png')
def generate_image(encoded_url):
    """
    Returns an image (PNG) of a URL. The URL is encoded in the path of the image being requested.
    """
    url_to_fetch = urllib.parse.unquote_plus(encoded_url)
    app.logger.debug(f'Generating preview for {url_to_fetch}')
    browser.driver.set_window_size(1200, 630)
    browser.visit(url_to_fetch)
    screenshot_path = '/tmp/'
    screenshot = browser.screenshot(screenshot_path)
    return send_file(screenshot, mimetype='image/png')
```

What turned out to be the hard part was creating a Docker image with Python and a working headless browser. But after a lot of futzing and hand-wringing I finally managed to get  it working and also learned a lot about Docker. It turns out that using the headless version of Firefox seems to be faster than using Chrome.

I have put all my code into [this repo](https://github.com/caspii/social-media-image-service) for your enjoyment. You can take it and deploy it to Google Cloud Run (or wherever else you can run containers) and be up and running in minutes.

Note that you have to supply the domain for which you'll be generating the images in an ENV varible. This is to prevent the service being used for mischief, seeing as it has no authentication.

On my app, I used the following Jinja2 code to produce the correct link to my deployed microservice:

{% highlight jinja %} {% raw %}
{% set encoded_path = request.base_url[:-1] | urlencode %} 
{% set image_url = '<MICROSERVICE URL>/image/' + encoded_path + '.png'%}
<meta property="og:image" content="{{ image_url }}" />
{% endraw %}
{% endhighlight %}

2 things to note here:

* Jinja2 comes with a builtin `urlencode` filter! Don't believe the top Google result (which claims something else)
* I have to remove the trailing '/' from ````request.base_url````  otherwise the resulting filename would end with ```/.png``` which won't work

## Performance, reliability, price

The really pleasant thing about this microservice is that neither performance nor reliability are that important. Performance-wise, the generated social media images are requested asyncronously, so it doesn't matter (too much) if the response is slow. Reliability-wise, if the service goes down no critical part of my app is affected. I can live with no social media image on links for a few hours or even days.

As far as the price goes, Google Cloud Run is much cheaper than the DigitalOcean Apps platform. Although I don't have the data yet, I predict a container with 2GB ram running for 1 month will cost around 5 USD. That's frankly amazing.

Anyway, that’s all for now 👋. Follow me [on Twitter](https://twitter.com/wrede) to keep updated.