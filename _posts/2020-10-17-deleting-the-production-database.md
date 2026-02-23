---
layout: post
title: I deleted the production database by accident 💥
description: This is pure disaster porn. It's the story of how I drank some wine and then managed to delete the production database. Thankfully there was a backup.
image: /images/disaster.jpg
---


Today at around 10:45pm CET, after a couple of glasses of red wine, I deleted the production database for my online product ([Leaderboarded.com, an online scoreboard app](https://leaderboarded.com/)) by accident 😨. Over 300.00 scoreboards and their associated data were vaporised in an instant. By the way, I'm a one-man show, building a software product for a living. 

Thankfully my database is a managed database from DigitalOcean, which means they automatically do backups once a day. After 5 minutes of blind panic, I took the website into maintenance mode and worked on restoring a backup. At around 11:15pm CET, 30 minutes after the disaster, I went back online, however 7 hours of scoreboard data was gone forever 😵. 

To be precise, any scoreboards created or scores added on the 17th October 2020 between 15:47 CET and 23:21 CET have been lost. I am extremely sorry about this.


![Production Disaster ](/images/disaster.jpg)

## What happened?

The function that wiped the database was written to delete the **local** database and create tables from scratch. However, it connected to the production database and wiped it due to a misconfiguration.

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
The `host` is hardcoded to `localhost`, so it should only connect to the developer machine. However, the connection was initialized with the live database due to an incorrect environment variable setting. For Python Flask, you must set `export FLASK_ENV=development` to ensure you are running in a development environment. Argh 🙈.

## What have I learned? Why won't this happen again?

I've learned that having a function that deletes your database is too dangerous to have lying around. The problem is, you can never really test the safety mechanisms properly, because testing it would mean pointing a gun at the production database.

I've learned that having a backup which allows a quick recovery is absolutely essential. Thanks DigitalOcean, for making this part reliable and simple.

I've learned that even a disaster can have some up-sides. This blog post generated a lot of interest. When life gives you citrus fruits,... and so on.

The truth is, I can never be 100% sure that something like this won't happen again. Computers are just too complex and there are days when the complexity gremlins win. However, I will figure out what went wrong and ensure that this _particular_ error doesn't happen again.

## Some perspective

Thankfully nobody's job is at risk due to this disaster. I am not going to fire the developer -- because I am the developer. 

Also, this webapp is just a side-project (Update: [this is no longer true](https://casparwre.de/blog/becoming-an-indie-hacker/).) It's not the software that's running a power-plant. Nonetheless, I have many users, some of them paying customers, and I try our very best to make them happy. Today I let those users down and that hurts. 

The wonderful irony is that not 4 days earlier I tweeted a _hilarious_ meme about deleting your production database:

<blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/mOlFqWal08">pic.twitter.com/mOlFqWal08</a></p>&mdash; keepthescore.com (@keep_the_score) <a href="https://twitter.com/keep_the_score/status/1315552102299598851?ref_src=twsrc%5Etfw">October 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Epilogue

This generated a [controversial and active discussion on Hackernews](https://news.ycombinator.com/item?id=24813795). The top comment is:

> I'm appalled at the way some people here receive an honest postmortem of a human fuck-up. The top 3 comments, as I write this, can be summarized as "no, it's your fault and you're stupid for making the fault".
This is not good! We don't want to scare people into writing less of these. We want to encourage people to write more of them. An MBA style "due to a human error, we lost a day of your data, we're tremendously sorry, we're doing everything in our power yadayada" isn't going to help anybody.
> 
> Yes, there's all kinds of things they could have done to prevent this from happening. Yes, some of the things they did (not) do were clearly mistakes that a seasoned DBA or sysadmin would not make. Possibly they aren't seasoned DBAs or sysadmins. Or they are but they still made a mistake.
> 
> This stuff happens. It sucks, but it still does. Get over yourselves and wish these people some luck.




<span>Photo by <a href="https://nikovirtanen.com/">Niko Virtanen</a> license Creative Commons</span>




