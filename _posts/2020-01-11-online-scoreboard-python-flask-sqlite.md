---
layout: post
title: Creating an online scoreboard with Python Flask and SQLite
---

I recently wanted to learn something new and decided to make a webapp using Python Flask. Webapps are often under-appreciated next to their native cousins, especially when some kind of user collaboration is required. Not only are webapps an order of magnitude easier to implement, their usability can actually be superior to native apps in certain situations: collaboration paired with no-registration onboarding is an unbeatable combination. I think this has been wonderfully demonstrated by [Kittysplit.com](https://kittysplit.com), which I made with a bunch of friends.

## Keeping score online

So I searched around for an idea and hit upon making a scoreboard for keeping track of scores in a group. A scan of the Google Play Store showed that there are at least 20 apps trying to solve the problem. Some are [pretty](https://play.google.com/store/apps/details?id=com.nolanlawson.keepscore) [good](https://play.google.com/store/apps/details?id=com.publicobject.rounds), most are not. All of them have the same problem: it's very hard to share a scoreboard with someone else and -- you've guessed it -- collaborate.

So here's what I made: [Keethescore.co: a webapp for keeping score](http://keepthescore.co). Let me know what you think.

## Using SQLite and Flask

My learnings so far are that Flask is truly awesome for building small projects. I also discovered that SQLite is more than sufficient for a side-project.

It's much easier to handle SQLite than MySQL or Postgres, simply because your database is just a single file. That makes it very convenient to debug, for instance: you just copy the production database to your local machine and off you go. It also makes administration an absolute breeze, because basically there is no administration.

My experiences got me wondering: why is Wordpress (and others) so often paired up with MySQL? From what I can see, most small to medium Wordpress instances would be perfectly served with SQLite. Why have the hassle, security implications and administration overhead of MySQL? That's a question I can't answer.
