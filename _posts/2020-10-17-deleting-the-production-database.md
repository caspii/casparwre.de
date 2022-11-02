---
layout: post
title: I deleted the production database by accident 💥
description: This is pure disaster porn. It's the story of how I drank some wine and then managed to delete the production database. Thankfully there was a backup.
---


Today at around 10:45pm CET, after a couple of glasses of red wine, I deleted the production database by accident 😨. Over 300.00 scoreboards and their associated data were vaporised in an instant. By the way, I'm a one-man show, building a software product for a living. My product is Keepthescore.co, an online scoreboard and leaderboard tool.

Thankfully my database is a managed database from DigitalOcean, which means that DigitalOcean automatically do backups once a day. After 5 minutes of blind panic, I took the website into maintenance mode and worked on restoring a backup. At around 11:15pm CET, 30 minutes after the disaster, I went back online, however 7 hours of scoreboard data was gone forever 😵. 

To be precise, any scoreboards created or scores added on the 17th October 2020 between 15:47 CET and 23:21 CET have been lost. I am extremely sorry about this.


![Production Disaster ](/images/disaster.jpg)

## What happened?

It's tempting to blame the disaster on the couple of glasses of red wine. However, the function that wiped the database was written whilst sober. It's a function that deletes the local database and creates all the required tables from scratch. This evening, whilst doing some late evening coding, the function connected to the production database and wiped it. Why? This is something I'm still trying to figure out.

Here is the code that caused the disaster:
```python
def database_model_create():
    """Only works on localhost to prevent catastrophe"""
    database = config.DevelopmentConfig.DB_DATABASE
    user = config.DevelopmentConfig.DB_USERNAME
    password = config.DevelopmentConfig.DB_PASSWORD
    port = config.DevelopmentConfig.DB_PORT
    local_db = PostgresqlDatabase(database=database, user=user, password=password, host='localhost', port=port)
    local_db.drop_tables([Game, Player, Round, Score, Order])
    local_db.create_tables([Game, Player, Round, Score, Order])
    print('Initialized the local database.')
```
Note that `host` is hardcoded to `localhost`. This means it should **never connect to any machine other than the developer machine**.  Also: **of course** I use different passwords and users for development and production. I'm too tired to figure it out right now.

## UPDATE from 20th May 2022

Now, after 1.5 years, I have some more insight into what happened. Basically, my lack of understanding of the [ORM library I'm using](http://docs.peewee-orm.com/en/latest/) caused the error. 

The code above does indeed open a connection to the **local** database. However, in my code, each class representing a database table gets an instance of a database connection. And this connection was being initialised with the live database. Why? Because I was not setting the correct environment variable before running the above code. For Python Flask, you have to set `export FLASK_ENV=development`to ensure you are running in a development environment. My IDE usually takes care of this, however (and this is the key) if I run a script from the command line, I have to do it manually. 

## What have I learned? Why won't this happen again?

I've learned that having a function that deletes your database is too dangerous to have lying around. The problem is, you can never really test the safety mechanisms properly, because testing it would mean pointing a gun at the production database.

I've learned that having a backup which allows a quick recovery is absolutely essential. Thanks DigitalOcean, for making this part reliable and simple.

I've learned that even a disaster can have some up-sides. This blog post generated a lot of interest. When life gives you citrus fruits, and so on.

The truth is, I can never be 100% sure that something like this won't happen again. Computers are just too complex and there are days when the complexity gremlins win. However, I will figure out what went wrong and ensure that this _particular_ error doesn't happen again.

## Some perspective

Thankfully nobody's job is at risk due to this disaster. I am not going to fire the developer -- because they are one and the same person. 

Also, this webapp is just a side-project (Update: [this is no longer true](https://casparwre.de/blog/becoming-an-indie-hacker/).) It's not the software that's running a power-plant. Nonetheless, I have many users, some of them paying customers, and I try our very best to make them happy. Today I let those users down and that hurts. 

The wonderful irony is that not 4 days earlier I tweeted a _hilarious_ meme about deleting your production database:
{{< tweet user="keep_the_score" id="1315552102299598851" >}}


Again, I am very sorry. Good night. 

PS This generated some [great discussion on Hackernews](https://news.ycombinator.com/item?id=24813795).
PPS You can [follow my journey on Twitter here](https://twitter.com/wrede).


<span>Photo by <a href="https://nikovirtanen.com/">Niko Virtanen</a> license Creative Commons</span>




