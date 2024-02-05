---
layout: post
title: "How much does it cost to run a bootstrapped SaaS with $10,000 USD revenue?"
---

![Operating costs of SAAS](/images/saas_costs.jpg)

How much does running a webapp in production actually cost? An interesting and related question is: what services does an app like this  use? In this post, I will dive into both questions for the product I'm building.

First, a quick bit of background information. My product, [Keepthescore.com](https://keepthescore.com/) is a Python flask application. In a typical month, it has 250k visitors and 1.3 million pageviews. If you want to read some more about the revenue side and how I got started, [read this](/blog/lessons-learned-after-10k-revenue/).

Let's look at the operating costs per month. I will include non-tech related costs (such as an SEO tool subscription), but not the costs of freelancers, which I consider to be investments.

## Critical infrastructure costs

This is the stuff without which the app would stop working immediately.

### 2 Servers and a Database on DigitalOcean: $317 /mo

The webapp runs on two identical DigitalOcean servers (4 vCPUs, 8GB RAM, 80GB disk). I use a [blue-green deployment](/blog/webapp-python-deployment/), which is a great way of running and hosting a webapp but it does mean that you need 2 identical production servers.

The database is a hosted Postgres instance also on DigitalOcean.

By the way: it has been pointed out several times that my setup is oversized. This is true. What is also true is that I don't care enough to optimize it. 

### Ubuntu Linux: 0 USD

The servers run Ubuntu as the operating system, which is of course free! Ubuntu is also totally great.

### Google Cloud: 37 USD

I use Google Firebase for the [realtime basketball scoreboard](https://keepthescore.com/basketball-scoreboard/). Overall it must be said that the Google Cloud APIs are great value for money (so far).

### DNS Hosting

### Cloudflare

## Amazon Web Sevices 49 USD


---

## Non-critical infrastructure
TODO


---

### Office tools

## Google Workspace $5 
Emails from a custom domain


## Microsoft Sharepoint 365: $4
TODO

## Microsoft Office 365: $14

I don't really use office much, but like every else, sometimes I come across files that I need to open.

## iStock images 20 USD
Grrrr

---
## Software tools

### Midjourney 11.90 USD



## Analytics and business intelligence

### Ahrefs $193

* Fathom Analytics

### Metabase $85
TODO

* Amplitude


> Follow my journey on ~~Twitter~~ [LinkedIn](https://www.linkedin.com/in/casparwrede/).
> 
> 
> 