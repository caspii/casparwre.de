---
layout: post
title: Why I chose Python to build my  SaaS
description: The advantages of using Python when coding your own product from scratch
image: /images/rocket_launch.jpg
---

I am a one-man show building my own software product. It currently has 11,000 registered users and revenue of around 1,500 USD per month. In this post I go into the reasons why I chose Python to build it.

> UPDATE (November 2023): my product is now making 10,000 USD per month and has 47,000 registered users! 

!['Rocket launch'](/images/rocket_launch.jpg){:class="img-responsive"}

## But first, what is a SaaS product?

SaaS stands for _software as a service_. A SaaS product is a web-based software product that people pay to use. An example of a small SaaS product would be a tool to help you schedule your social media posts. Large SaaS products are Salesforce or the Google suite of office products (Google Docs, Google Sheets and so on).

The product I'm building allows you to create scoreboards and leaderboards and share them via a link. I started building it as a toy project 5 years ago and since then it has been transformed into a fully fledged business.  You can see a dashboard with all my public metrics [here](https://keepthescore.com/open/). 

## Why did I initially choose Python?

When I first started the project it was not my intention to build a business. Instead, I wanted to build a small webapp to learn full-stack development.

 I settled on Python as the language. I had been dabbling in Python for some time already and used it to do small tasks, such as renaming files in bulk or scraping some data off a website.

This initial exposure gave me a feel for the language, and it felt good. People often talk about Python being extremely beginner-friendly, and they are right. But as I learned more about the language I found it to be very intermediate-friendly too.

In general, Python is very good at hiding its advanced features until you need them. Here's an example for Java, which is absolutely not good at hiding its "advanced" features:

```java
public class HelloWorld {
       public static void main (String[] args) {
             System.out.println("Hello World!");
       }
}
```
To write Hello World in Java you are already being confronted with objects and object-oriented programming, as well as that absolutely hideous method signature. This is not beginner-friendly.

In Python Hello World is:
```python
print("Hello world")
```

Python has a very gentle learning curve, that extends beyond the beginner phase. For instance, I used Python for many years before I even knew, let alone used, dunder methods (e.g. `__init__`). Now I'm at an intermediate level, I am still learning new stuff, but I also feel confident in what I know. With JavaScript, it's a different story: despite no longer being a JavaScript noob, I often feel that there are dark and ineffable secrets that are eluding me, and that someday, this will cause my code to collapse. Not so with Python.

Back when I made the decision to build my project in Python, the language was already well into it's ascendancy in the world of machine-learning and data-science. Committing to a language that is used in a wide range of scenarios was not a hard decision.

The next fundamental decision I had to take was which "web-framework" to use.

## What is a web-framework?

A web-framework is a ready-made module or library that allows your code to become available on the Internet. Being part of the internet means you need to adhere to various rules and react in pre-defined ways when something or somebody asks your app for information. A web-framework takes most of this work off you.

There are a large number of Python web-frameworks, including Flask, Django, and FastAPI. Django is probably the most grown-up of the lot, and is used by heavyweights such as Spotify, Instagram and Pinterest.

## Choosing Python Flask

I chose Flask. And again, the main reason was that it was extremely easy for a beginner to get started. You can find a flask tutorial and have your first working code within 5-10 minutes.

Python Flask is a micro-framework, which means it is stripped down to the bare essentials. Some would argue that this is a disadvantage: it means that you have to add extra modules by hand once you need to extend the basic functionality. The opposite design-paradigm would be Django, which prides itself on having "batteries included".

I think using a micro-framework is actually an advantage. It means that the cognitive overhead of getting started is much lower, because there is simply less _stuff_ there to understand. As your product develops you will add new modules as you go, and hopefully have a solid understanding of _why_ you included each one.


A disadvantage of micro frameworks is that you will have to manage a lot of dependencies. This can be painful, as I have experienced on many occasions.

## Server-side rendering for the win

Another advantage of Python  Flask is that it uses good old server-side rendering. This  has many (often forgotten) advantages. The main ones, in my view,  are that your app has much less complexity and is considerably more robust. The disadvantage is that some parts of the application may not feel as slick as an app using a fancy Javascript framework like Angular or Vue.

The first version of my product was almost entirely server-side rendered with minimal Javascript. You can see a fully working version of this release [here](https://v1.keepthescore.co/) (I've preserved it in ~~amber~~ Docker). I eventually relented and quite a bit more JavaScript (Vue.js) to the product. This was not a big deal due to the modularity of Flask.

One more advantage of server side rendering is that SEO works out of the box, which is vital for my product.

The final thing to note is that there are projects like [HTMX](https://htmx.org/) and [Alpine.js](https://alpinejs.dev/) which can give your app a modern and reactive feel, whilst avoiding adding huge blobs of JavaScript. These solutions are seeing some traction and are actually leading to a renaissance of sorts for server-side frameworks like Flask, Django, Ruby on Rails, and others.

## Scaling with Python
So far my product has had no major issues with scaling. Actually, scaling is not the problem that it once was. Unless you are building an application that has "planet-scale" requirements (free advice: you are not building an app like this), and you haven't fallen down the microservice rabbit hole, scaling should be relatively easy.

Many of today's cloud services include auto-scaling, which means that in theory you don't need to worry about scaling at all.

The biggest scaling bottleneck in your SaaS product will probably be your database. However, you will have a  long and storied journey behind you once you get to the limit of what a Postgres database can do. And until you do, you should worry about other things. 

If you're building a SaaS with Python, keep it monolithic and runnable via Docker for as long as you can, and you will be fine.

For the record, my Python app is hosted on DigitalOcean. My database is hosted there too. I am still a long way away from having to do any fancy scaling work, and I will hopefully never -- _never_ -- have to use Kubernetes. 

## That’s all for now

Thanks for reading my article and please share your reasons for using Python below. 

By the way, you can [follow my journey on LinkedIn](https://www.linkedin.com/in/casparwrede/). I'm now longer on Twitter since it has turned into flaming dumpster fire.

Photo by <a href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a href="https://unsplash.com/s/photos/rocket?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  




