---
layout: post
title: Python Flask - From 59 lines of tutorial code to 260,000 lines powering a production SaaS
description: Ever wondered what Python Flask looks like in production? Here are some insights into my codebase which powers an app with over 150 thousand users
image: /images/flask-app.jpg
---

Ever wondered what Flask looks like in production? Here are some insights into a Flask app with over 150 thousand users. Enjoy!

![A python flask app](/images/flask-app.jpg)

## 🚀 How it started

In 2016, I started a Flask tutorial because I had an idea for a simple app. I knew a little bit about HTML and CSS but
almost nothing about database driven apps. I continued building on this codebase for nine years. Now,
that same app has hundreds of thousands of registered users, earns thousands
of revenue per month, and has changed my life forever.


Despite its unglamorous beginnings I never rewrote the app from scratch, I just kept on adding to it (and sometimes
taking away). Whenever I faced a
problem or a challenging requirement, I churned, ground and didn't give up until it was fixed. Then I moved on to the
next task.

## 📊 Some stats

Some usage stats:

* 400k visitors per month
* 1.5 million page views per month
* 8k signups per month with 180k signed-up users overall
* 80 requests per second

Some code stats:
 - Python: **51,537 lines**
 - Vue/JavaScript: **193,355 lines**
 - HTML: **16,414 lines**
 - **Total: ~261,000 lines of code**

## 🏗️ The architecture and customizations

OK, onto the code! Here is a top-level overview:

* The main database is Postgres and I use Peewee as an ORM -- highly recommended and easier to learn than SQLAlchemy.
* I also use Google Firestore as a real-time database. The app writes to Firestore both from the frontend and the backend.
* The static frontend (landing pages, documentation) uses classic Jinja2 templating
* The app frontend uses Vue which is built by Vite
* A REST API allows communication between the Vue client and the backend
* The CSS framework is Bootstrap 5.
* Memcached is used for application-level caching and rate-limiting
* I use Paddle.com as my payment provider (instead of Stripe.com)
* Transactional emails (such as password reset mails) are sent via Sendgrid using the Sendgrid Python package
* Log files are forwarded to a log aggregator (Papertrail)

Here are some notable features or customizations I have added over the years:

### 🏢 Multi-tenant app

As the app matured, it turned out I was trying to handle too many different use-cases. This was mainly a marketing
problem, not a technical one. The solution was to split my app into two: the same backend now powers 2 different
domains, each showing different content.

How is this done? I use a `@app.before_request` to detect which domain the request comes from. Then I store the domain
in Flask's `g` object, making it available everywhere and allowing the correct content to be displayed.

### 🧪 Split Testing Framework

A painful lesson that I had to learn is that you should not just make changes to your pricing or landing pages
because you have a _good feeling_ about it. Instead, you need to A/B test these changes.

I implemented a session based testing framework, where every visitor to the app is put into a particular test bucket. Visitors in different test buckets see different content. When a visitor signs up and becomes a user, I store the test bucket they are in which means I can continue tracking their behavior.

For any test, I can then look at some top level metrics, for instance number of signups or aggregated lifetime value, for each bucket to decide how to proceed.

### 🔐 Authentication

I put off implementing authentication for my app as long as possible. I think I was afraid of screwing it up. This meant it was possible to use my app for years without signing up. I even added payment despite not having auth!

Then I added authentication using `flask-login` and it turned out to be fairly simple. All the FUD (fear, uncertainty, doubt)
that exists around this topic seems to emanate from companies that want to sell you cloud-based solutions.

### ✍️ Blog

My app gets 80% of its users through SEO (Google searches), which means a blog and the ability to publish lots of content is essential.

When implementing the blog, my number one requirement was to have all the content in the repo as markdown files. This was vindicated when the age of AI arrived and it turned out that rewriting and creating new markdown files is what AI does very well.

I use `flask-flatpages` to render my markdown files, which works perfectly. I have added some customizations, the most notable one being the ability to include the same markdown "snippet" in multiple posts. 

### ⚙️ Admin pages

I built my own administration frontend, despite Flask having a ready-made package. Initially I only needed the ability to reset user passwords, so learning to use a new dedicated package was overkill.

Then I began to add more functionality bit by bit, but only as it became necessary. Now I have a fully-fledged custom-built admin interface.

## 💪 What was hardest thing?

The hardest issues I faced was setting up Gunicorn and ngnix properly.

As traffic increased, I would sporadically run into the problem of not enough workers being available. I was able to fix this by finally getting acquainted with: 

* connection pools for the database.
* The proper ratio of workers and threads. 

Once these problems were sorted out, the app ran rock-solid, and I never had problems again.

## 💭 Reflections on Flask

So what are my feelings about Python Flask? Well, the simple truth is that it is the only web framework I know, so I have no comparison.

I think Flask is fantastic for beginners because you can get a working web application with 10 lines of code. What my journey has shown is that you can continue working on this foundation and create a fully functional SaaS that makes significant revenue. 

I was able to deal with every challenge I had and Flask never got in the way. Never once did I think: I need to use Django here, or an async solution, or serverless. A lot of current solutions seem to have "blazing fast" as one of their selling points. I believe that Flask is fast enough.

A fundamental realization I had is that web frameworks have a very simple job. In the end, every framework does the following:

1. Receives a request
2. Possibly query a database.
3. Construct a response that is either HTML or JSON.
4. Send the response.

That does not require something complex. 

Overall, I find many of the discussions about performance and modern development to be mystifying. Unless you have a very specialist application, you do not need to host your assets on "the edge". You do not need serverless functions. You do not need auto-scaling. You do not need complex build pipelines. 

What you need is:

- A small to medium server
- A relational database
- Some monitoring

and you are ready to serve a robust and featureful web application that will satisfy 95% of use cases.

Happy to answer questions below.

