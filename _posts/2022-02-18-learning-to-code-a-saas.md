---
layout: post
title: Strongly opinionated advice on learning to code a SaaS Product 
description: A bunch of learnings I'm sharing about how I built my SaaS product
image: /images/rocket_launch.jpg
---

This post is aimed at people who want to learn to code &mdash; with the explicit aim of creating their own SaaS product. It covers the purely technical aspects (not marketing nor product development).

!['Rocket launch'](/images/rocket_launch.jpg){:class="img-responsive"}

I’ve spent the last 5 years building a [software product](https://keepthescore.co/) and want to share my learnings. The tl;dr version is: go old-school whenever you can. Don’t listen to the siren-calls of shiny new technology. Instead, aim to learn the technical fundamentals whilst shipping a product as soon as possible. This is absolutely possible.

## What is a SaaS product?

A SaaS product is a web-based software product that people pay to use. 

Learning to build a SaaS product is different from just learning to code. Why? Because you’re aiming for a different outcome.

The outcome is a functional product that solves some kind of problem. If you just want to learn to code the outcome is a stack of knowledge that you have crammed into your brain.

Of course, there’s nothing wrong with just wanting to learn to code. But there are many motivations for doing it: _"All my friends know React and I want to get on board too"_, or _"If I learn JAVA I’ll be more employable"_. These are noble aims, but we’re not going to handle them here.

When you build a SaaS product you should care much more about your destination (having a product) and less about the journey (which tech can I use?). The ends justify the means. 

Be honest with yourself: if you actually just want to learn the latest JavaScript framework, then just do it.

## Choosing the right tech

If you are already familiar with any kind of tech stack, then use it, simple as that. Do not bother learning something else, it’ll only delay getting your product in front of real customers. 

But you’re reading this because you are not familiar with a tech stack and need some guidance. 

So I’m now going to lay my first strong opinion on the table: do not learn any of the Javascript frameworks. Yet. Do not learn React, Angular or Vue. 

You may find this disappointing, because everyone is learning React, Angular or Vue. Why can’t you?

## Why no Javascript framework?

I strongly believe that anyone learning to code with the intention of building a SaaS should use a _server-side rendering_ language. Some common ones are PHP, Ruby, Python and Java.

Server-side rendering is "the old way" of doing things. It  involves the server making every page in your webapp up front and then sending it over the Internet to the browser ready-baked. The equivalent would be ordering a meal and having it delivered ready-made to your door.

The other way is the new, hip way and makes use of Javascript frameworks. It’s called client-side rendering and involves the server sending just data and a bunch of Javascript which then self-assembles in the browser. The equivalent would be ordering a meal-kit and doing the cooking yourself.

Going the old way, which is what I’m advocating, is the quickest way of starting from zero and shipping a usable product. (Disclaimer: this will not be true if you are already a proficient coder). 

There are other important advantages:

* You will give you  a really solid understanding of web principles, including the HTTP request-response cycle, the interaction between HTML and CSS, and submitting forms and form validation
* It’s much simpler to get your UX right if everything is based on links and whole page loads.
* SEO will work more or less out of the box
A* ll the existing server-side rendered frameworks are battle-tested, mature and come with large existing libraries of plugins

If you choose to go the new hip way then you will get a less solid understanding of fundamental web principles. 

Further disadvantages are:
* You will have to learn technologies that move ridiculously quickly. Some would say too quickly.
* You will have to deal with the immense complexity of modern Javascript tooling.
* You will build a product that is technically twice as complex as a server-rendered one and much harder to build right.
* There’s a good chance you will get lost in the weeds building your own API (which is hard).

Some top-tier JavaScript frameworks are now being retrofitted with server-side rendering which seems like madness to me.

## What language worked for my SaaS?

I say learn Python. It’s an all-round language that works well for web-development, machine-learning, data analysis and general automation and scripting. It’s also extremely beginner-friendly.

If you ever find yourself reaching the limits of what Python can do, congratulations: you’ve come very far.

There are several Python web-frameworks including Django, Flask and FastAPI. I say learn [Flask](https://www.fullstackpython.com/flask.html). You will be productive within less than an hour of starting your first tutorial.

I learned Flask and coded my SaaS in the evenings whilst holding down a full-time job, a social life, and having 2 small kids. It took me 3 months from first commit to finishing version 1. If I had focussed on it full-time, I estimate it would have been done in 2 weeks (including learning).

When I launched my app, the homepage looked like this:

!['Version1 of Keepthescore'](/images/version1.png){:class="img-responsive"}

It was completely server-side rendered with minimal Javascript in a few places. Despite being very rudimentary people started using it. I started getting feedback which I could iterate on. You can have a look at a working version of what was launched [here](https://v1.keepthescore.co). 

These days my app has an API and does use a Javascript framework (Vue.js). The point is, version 1 was good enough to get started with.

## Using a CSS framework
You should definitely use a CSS framework.

I used [Bootstrap](https://getbootstrap.com). Sometimes you will hear arguments that all sites using Bootstrap look the same. This is frankly moronic. No end user has ever said this and no SaaS has failed because they used Bootstrap.

Another CSS framework that has been gaining a lot of traction recently is [Tailwind CSS](https://tailwindcss.com). I have no experience with it and hence no opinion.


## Which Database should you use?


Humans like to store their digital stuff in files and folders. Apps store their stuff in databases. As you might expect there is a bewildering array of choice when it comes to databases.

My strong opinion is: use an SQL database like Postgres or MySQL. Avoid NoSQL (e.g. MongoDB)  for now. You can learn it later, if at all. 

I went with Postgres which is extremely reliable and mature. Due to its maturity it has a fantastic array of tools that work with it. To mention 2: I use [Postico](https://eggerapps.at/postico/) (Mac only) and [Metabase](https://www.metabase.com).

If you go with Python Flask, I can recommend using [Peewee](https://www.fullstackpython.com/peewee.html) to talk to your database. It’s much easier to learn than [SQLAlchemy](https://www.sqlalchemy.org).


## Hosting
Your SaaS has to live and run somewhere.

For my product I went with [DigitalOcean](https://www.digitalocean.com) but these days I would recommend [Heroku](https://www.heroku.com) or one of its equivalents. Yes, Heroku costs money, and I understand why people want to host their apps for free. But I’m convinced it’ll keep you honest if you pay for good high-quality hosting.

The biggest cost by far for your SaaS will be the time you invest in it. Trying to save $10 per month on hosting costs sounds like you’re optimising for the wrong thing. If you don’t believe in your app enough to pay the hosting cost, then should you even be building it? 

There are also solutions like Firebase, which bundle all your tech needs in one package. My experience is that if you want to prototype something quickly, these services are great. However:

* After an initial honeymoon period you will probably run into edge cases and complexity down the road, because one-size-fits all will only work for a limited time. This happened to me.
* What you learn will be very focussed on one platform. This may be fine for you. Buyer beware.
 
## Other misc. Recommendations
* You need to learn how to use Git and GitHub (or alternatives). This is non-negotiable.
* Don’t even think about using Kubernetes 
* You don’t need serverless 
* Use Stripe to accept payments
* You can possibly get away with [initially not having a login](https://casparwre.de/blog/launching-a-product-without-a-login/). I did!


That’s all for now. You can [follow my journey on Twitter](https://twitter.com/wrede).

Photo by <a href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a href="https://unsplash.com/s/photos/rocket?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  




