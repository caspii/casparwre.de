---
layout: post
title: "Breaking Down the Costs of a Bootstrapped SaaS with $11,000 Monthly Revenue"
image: /images/saas_costs.jpg
custom_js:
  - node_modules/tocbot/dist/tocbot.js
---

![Operating costs of SAAS](/images/saas_costs.jpg)

How much does running a webapp in production actually cost? An interesting and related question is: what services does an app like this use? In this post, I will dive into both questions for the product I'm building. I'll also provide some explanation for each service.

First, a quick bit of background information. My product, [Keepthescore.com](https://keepthescore.com/), is built using Python Flask for the backend and Vue for the frontend. In a typical month, it has 250k visitors and 1.3 million pageviews. If you want to discover more about my journey and lessons learned, [read this](https://casparwre.de/blog/lessons-learned-after-10k-revenue/).

Let's look at the operating costs per month. I will include non-tech related costs (such as an SEO tool subscription), but not the costs of freelancers, which I consider to be investments.

<div class="js-toc"></div>


## Critical infrastructure

This is the stuff without which the app would stop working immediately.

### DigitalOcean: $317 /mo

The app runs on two DigitalOcean servers (8 vCPUs, 16GB RAM, 320GB disk). I use a [blue-green deployment](https://casparwre.de/blog/webapp-python-deployment/), which is a great way of running and hosting a webapp but it does mean that you need 2 identical production servers.

The database is a hosted Postgres instance also on DigitalOcean.

By the way: it has been pointed out several times that my setup is oversized. This is true. What is also true is that I don't care enough to optimize it. 



### Google Cloud: $37 /mo

I use Google Firebase for the [realtime sport scoreboards](https://keepthescore.com/multi-sport-scoreboard/). Firebase is a great product which takes a lot of work out of my hands.

Overall it must be said that the Google Cloud APIs are great value for money.

### DNSimple $10 /mo

I registered my domain with DNSimple.com.

### Cloudflare $24 /mo

CloudFlare is a security behemoth that sits in front of a large number of internet-facing applications. In my case, I am using it for

* Caching of static assets like images and CSS
* SSL encryption making Keepthescore.com available via https.
* Protection from denial of service attacks (not required so far!)

### Ubuntu Linux: $0 

The servers run Ubuntu as the operating system, which is free! Ubuntu is totally great, by the way. I used to use it as my desktop operating system, but am now on Mac.


---

## Non-critical infrastructure

### SendGrid $20 /mo

I use the SendGrid API to send transactional mails. Currently those are:

* A welcome mail on signup
* Reset password mail

My app currently sends 4000 mails per month.

### Amazon Web Services (AWS) $49 /mo

I host images uploaded by users on AWS in an S3 bucket.

### APIFlash $180 /mo

This is an API I use to create screenshots of scoreboards and leaderboards. These generated images are used to:

* Show a preview of the scoreboard or leaderboard when sharing on social media. They are sometimes called open-graph images
* Users can download the images locally. This is a premium feature.

It may seem like an immense expense for such a non-critical feature, but I tried building a solution for this myself and then gave up. 

### Hyvor Chat $42 /mo

This is a commenting system that adds comments to my blog (including this post) and also to leaderboards. In the past I used Disqus for this, but that product turned into a privacy nightmare.


---

## Monitoring and operations

These are tools that allow me to find errors in production quickly.

### Sentry.io $34 /mo
Sentry is an error tracking service that helps developers monitor and fix crashes in real time.

### Papertrail.com $35 /mo

Papertrail provides cloud-hosted log management, enabling developers to aggregate, manage, and analyze logs from all parts of their application in one place. 

I think that the feature-set of Papertrail has not changed in 10 years. But it doesn't need to, it's a fantastic product.

---

## Office and productivity tools


### Microsoft Office 365: $14 /mo

I don't really use Office much, but like everyone else, sometimes I come across Microsoft files that I need to open.

### Google Workspace $5 /mo
I only use this to have Gmail for the keepthescore.com domain.

### Microsoft Sharepoint 365: $4 /mo
My product can be integrated in Sharepoint, hence this subscription.

### iStock images $20 /mo

Stock images are waaay too expensive. I suspect that this industry will get totally flattened by generative AI.

### Buffer.com $24 /mo

I use Buffer to schedule social media posts. It's definitely not a critical tool, but it saves time and Buffer seems like a very nice company.


### Midjourney $12 /mo

Midjourney is a generative AI tool for creating images. I use it create images for my blog posts.

### ShadowPC $10 /mo

I work on a Mac but I sometimes need to run Windows software. ShadowPC allows you to run a Windows PC in the cloud and connect to it whenever required. It's not as quick as running it locally (e.g. using Parallels) but it's good enough for my needs.

### MailerLite $50 /mo

This is the tool I use for sending my monthly newsletters. It's a low-cost version of MailChimp. It's not perfect and has (in my opinion) messed up the upgrade path to their new version. I will probably switch to something else in the future.

---
## Coding tools

### JetBrains PyCharm $70 /year

I use PyCharm as my IDE for coding. I love it.

### ChatGPT $10 /mo

ChatGPT helps me write blog posts, generate images for use in blog posts (including the one at the top) and for writing code.

Like most people who have tried it, I can no longer imagine working without it.

### GitHub Co-Pilot $10 /mo

This is a tool which directly integrates into PyCharm and helps me write code. It's really slow, so I usually use ChatGPT instead.

---

## Analytics and business intelligence

### Ahrefs $193 /mo

Ahrefs is a SEO tool. I use it for research and gathering data on my own product and my competitors. It's fairly expensive but worth every cent: SEO (and content marketing) is my main way of acquiring new users, and I spend a lot of time on it. 

### Fathom Analytics $74 /mo

Fathom Analytics is a privacy-friendly version of Google Analytics. It has very few features, but is good for what it does.

### Metabase $85 /mo

Metabase is an open source tool for creating dashboards and querying data in a database. It is absolutely awesome. I use it to track long-term data in aggregate like revenue and user stats.

I used to run the free version on an AWS instance, but the cost was almost the same as the hosted version, and I had the hassle of doing manual upgrades to the software. So I switched to the hosted version.

### Amplitude $0

Amplitude is an industrial-grade product analytics solution. Whenever a user clicks something in my product, it gets sent to Amplitude. I use it for basic A/B tests and to understand user behavior. In the end, I use about 5% of what Amplitude can do. 

I am currently on a "Startup Scholarship" plan, which means I can use the product for free. However, this expires in March 2024 and the cost after that is ... spicy. I'm not sure how I will proceed once I have to pay for it.

### ProfitWell $0

This is a tool that provides subscription analytics -- if you are not running a SaaS you have no idea how deep this particular rabit hole is.

ProfitWell also takes care of chasing up customers whose credit card payments have failed using automated email sequences. 

It comes bundled for free with my payment provider, Paddle.com, which is nice.


## Grand Total and Summary

Adding all of this together results in approximately **$1300** per month.

Considering my gross monthly revenue of $11 000, this results in a gross margin of just under 90%. This is an average margin for these types of businesses, so I am content. I could invest a lot of time in optimising some of these costs and finding cheaper solutions, but I want to spend my time on product development and acquiring new customers.

That's all for now! Thanks for reading and feel free to ask questions below.

> Follow my journey on ~~Twitter~~ [LinkedIn](https://www.linkedin.com/in/casparwrede/).

<script>

tocbot.init({
    tocSelector: '.js-toc',
    contentSelector: '.entry',
    headingSelector: 'h1, h2, h3',
    collapseDepth: 3,
});
</script>

[//]: # (<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.18.2/tocbot.css">)