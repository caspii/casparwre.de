---
layout: post
title: Costs of running a Python webapp for 55k monthly users
description: What are the monthly costs of running a webapp on DigitOcean? I dig into the numbers here.
image: /images/isometric-app-flow.jpg
---

How much does running a webapp in production actually cost? Maybe more than you think. [keepthescore.com](https://keepthescore.com/) is a Python flask application running on DigitalOcean and Firebase. It currently has around 55k unique visitors per month, per day it's around 3.4k. (In terms of page views, this is around 700k per month, 25k per day.)

> I have written a [new post on this topic](/blog/costs-of-running-a-saas/) and updated it for 2024

![App flow and costs](/images/isometric-app-flow.jpg)

Here's a monthly breakdown with some background information on each cost:

### Servers and database on DigitalOcean
**Costs per month: $95**

The webapp runs on two identical DigitalOcean servers (4 vCPUs, 8GB RAM, 80GB disk). We use a [blue-green deployment](/blog/webapp-python-deployment/), which is a great way of running and hosting a webapp but it does mean that you need 2 identical production servers.

The database is a hosted Postgres instance also on DigitalOcean.

Note: the servers are oversized for the load we're currently seeing. The reason for that is that we tried to solve a production issue by increasing the server specs. It didn't solve the problem, and now we can't down-size the servers without re-provisioning them 🤷‍♀️.


### Code repo on GitHub
**Costs per month: $0**

This is free. Thanks GitHub!

### Amazon Web Services
**Costs per month: $60**

We use a reporting tool called [Metabase](https://www.metabase.com/) to generate insights and reports from the database. The tool itself is opensource and free, but hosting it is fairly expensive. Currently it runs on an EC2 instance. There are definitely some savings that could be realised here.

### Google Cloud
**Costs per month: $1.32**

We use Firebase for the [realtime basketball scoreboard](https://keepthescore.com/basketball-scoreboard/). We also use the Google Sheets API for some custom scoreboards. Overall it must be said that the Google Cloud APIs are great value for money (so far).

We have plans to move away from DigitalOcean and onto Google Cloud infrastructure in the next year.

### DNS hosting
**Costs per month: $5**

Our domain is registered with [DNSimple.com](https://dnsimple.com/).

### Disqus
**Costs per month: $10**

Scoreboards and this blog have the option of allowing a discussion on the same page -- this used to use the [Disqus](https://disqus.com/) service. Disqus has a free tier but they began showing ads so we were forced to move to the paid tier. 

We have since moved to [Hyvor Talk](https://talk.hyvor.com/) which is cheaper, has no ads, and respects your privacy. 

## Is it worth it? Is there revenue?

In total that's around **$171 USD per month**. If you're running a company with employees that would be peanuts, but in this case the cost is being borne by a single indie-developer out of his own pocket. 

The bigger issue is that on the revenue side there's a big fat zero. This is the reason why we are currently working on monetization. This will include banner ads and payments via Stripe. Expect to see these features land by next week! Anyway, more about that in a future post.

## You are spending way too much money!
This post generated an interesting discussion on [Hacker News](https://news.ycombinator.com/item?id=24372084). One recurring theme 
was that our stack is large and expensive and that we could massively reduce costs.

This is true. But here are some things that are also true:

* "Reducing costs" is not our primary objective at the moment: time is more valuable than money right now.
* Our primary objective _right now_ is velocity of product development.
* We are not devops experts and optimizing operations takes time.


There will be a follow up post once we do optimize our stack.

Thanks for listening and so long, 👋