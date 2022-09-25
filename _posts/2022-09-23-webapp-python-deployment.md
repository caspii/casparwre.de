---
layout: post
title: Deployment and infrastructure for a bootstrapped webapp with 150k monthly users
description: How I deploy my webapp using blue-green deployment and absolutely no rocket-science
image: /images/rocket_launch.jpg
---

![Deploying an app](/images/deployment.png)

I am a one-man show building my own software product. Some quick facts about my app:

* 150k visitors per month
* 15k registered users
* 3k US$ revenue per month
* 70 requests per second at peak-time

This is a technical post looking at the infrastructure that runs my app with a focus on how I deploy it.

## Summary

* I use 2 VPS (virtual private servers) running on DigitalOcean
* The database is Postgres and is fully managed by DigitalOcean
* I use a blue-green deployment
* Deployment is done via `git` and `ssh`.
* No CI/CD
* No containers 
* Absolutely no Kubernetes

By the way, I am a strong advocate of using "boring technology". I am also the only developer of the app, which makes many things simpler.

## The application infrastructure

The app is written in Python Flask. It is a CRUD monolith that is deployed as one artefact. I use nginx and gunicorn to serve the app.

The app runs on 2 virtual private servers, one of which is the production server, the other of which is the staging server. During deployment, they switch roles. This is a so-called _blue-green deployment_, more on that later.

I'm using a DigitalOcean droplet with 8 shared CPUs, 16GB of memory and 80 GB of storage for each server.  They both run Ubuntu which I have to administrate.

There is a single Postgres database, which is always in production. It is fully managed by DigitalOcean, which means I have to do no house-keeping. Currently, it has 4 shared CPUs, 8 GB of memory and 115 GB of storage.

Overall, the setup is absolutely rock solid. Also, all my technology is older than 10 years (OK, not 100% sure about this, but probably true).

## Why I chose blue-green deployment

Before I switched, my deployments worked as follows:

 * There was one app server running on DigitalOcean, plus the hosted Postgres database.
 * To deploy, I used a script that SSHed into that server and did a `git pull`
 
 This was fine to begin with however there were several issues:
 
1. My setup compiles and minifies CSS and Javascript on the server.  This resulted in up to 10 seconds for the server respond after a deployment. Some users also ran into `Bad Gateway` errors 💥.
2. A bug in production could be fixed by checking out the previous commit. However, this invariably took too long and always involved frenzied googling of the correct git commands.
3. There was no way of testing the production setup, other than in production.
 
![Testing in production](/images/testing-in-production.jpg)

## What is blue-green deployment?

Here's how I would explain blue-green deployment: 

1. There are two identical and independent servers hosting the application. One is called "green", the other "blue".
2. There is a shared production database that both servers can access.
3. There is a quick and painless way of routing traffic to the green or the blue server. 

One of the 2 servers is serving production traffic (the live server), the other is idle. When a new release is ready, it gets deployed to the idle server. Here it can be tested and issues fixed. Remember, the idle server is still accessing the production database, so the application can be tested with real data.

Once you're satisfied that you're ready, you switch traffic from the live server to the idle server. If any problems occur, you can simply switch back to the previously live server within seconds, effectively doing a roll-back.

Simple, no?
  
## How I do blue-green deployment 

I've already mentioned my 2 application servers. But the magic  thing that makes it all possible is a  [floating IP address from DigitalOcean](https://www.digitalocean.com/docs/networking/floating-ips/). 

This is a publicly-accessible static IP addresses that you can assign to a server and instantly remap between other servers in the same datacenter. My app domain (keepthescore.co) resolves to this static IP address. Internally, however, the IP is pointing to either the green or the blue server.

Both of my servers expose their hostname via a publicly accessible route: [https://keepthescore.co/hostname/](https://keepthescore.co/hostname/). Give it a try by clicking on the link! 

So now it's possible for a human or a machine (using `curl`) to discover which the current live server is (blue or green).

The deployment script can use this information to always automatically deploy to the **idle** server. Here's my (simplified) BASH deployment script:

```bash
# Get the current production server and 
# set TARGET to the other server 
CURRENT=$(curl -s https://keepthescore.co/hostname)
if [ "$CURRENT" = "blue-production" ]; then
  TARGET="green-production"
else 
  TARGET="blue-production"

echo "Current deployment is " $CURRENT
echo "Deploying to " $TARGET

# Do deployment
ssh -q root@$TARGET "git pull"
echo "Deploy to " $TARGET " complete"
```

Once I've run the script I can test the deployment on my development machine by simply pointing my browser to `blue.keepthescore.co` or `green.keepthescore.co`. Once I'm sure that everything's working I route traffic to the newly deployed idle server using DigitalOceans's web interface. (I could do this via script too, but haven't got round to it yet). 

Result: My users get routed to the newly deployed software without noticing (hopefully). 

Voilá! ✨

## What about continuous integration / continuous deployment?

I have no CI/CD pipeline. I do have a bunch of integration tests, but I run them manually. I will eventually get round to setting up some kind of automated testing, but so far there's been no need.

## What about the database?

There is only one database instance, so you might think this could be a problem. Martin Fowler, who wrote a [great article about blue-green deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html) says the following:

> Databases can often be a challenge with this technique, particularly when you need to change the schema to support a new version of the software. The trick is to separate the deployment of schema changes from application upgrades. So first apply a database refactoring to change the schema to support both the new and old version of the application, deploy that, check everything is working fine so you have a rollback point, then deploy the new version of the application. (And when the upgrade has bedded down remove the database support for the old version.)"

I've been using this method so far, and it's worked fine. In fact, I have never done an automated schema migration of my database. It's worked great so far, so why do it differently?

## That's all

Thanks for reading my article! You can follow my journey as a bootstrapped one-man startup [on Twitter](https://twitter.com/wrede). See you in the next post!