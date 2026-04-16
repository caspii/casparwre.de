---
layout: post
title: I built a bot to track when startups die
description: A retrospective on Deathwatch, my Twitter bot that monitored the health of tech startups by watching their tweet activity — and what it taught me about building things.
image: /images/deathwatch.jpg
---

Back in 2016, I built a Twitter bot called Deathwatch. The premise was simple: most startups die quietly. There's no press release, no farewell blog post — they just stop tweeting one day and slowly fade from memory. Deathwatch was my attempt to make that invisible graveyard visible.

## The idea

Silicon Valley loves the beginning of a story. The launch on Product Hunt, the TechCrunch feature, the funding announcement. What it doesn't love — or even notice — is the end.

"You always catch the beginning of the wave, but rarely the tail end," I told a journalist at the time. "That's one thing that motivated me to make something like this. It's very hard to measure when companies die, but measuring when they stop tweeting is a fairly good metric. When a company stops tweeting it's usually an early sign that it's in trouble."

So I built something to track it.

## How it worked

Deathwatch monitored startups listed in [Crunchbase](https://www.crunchbase.com/) — TechCrunch's startup database — that had at least 300 Twitter followers. The logic was straightforward:

- **40 days without a tweet**: the company is declared "unwell"
- **180 days without a tweet**: the company is officially pronounced dead

I ran separate bots for startups in the US, Germany, India, and the UK. At its peak, Deathwatch was monitoring thousands of companies — most of which you've probably never heard of.

## What it found

The results were sobering. Scrolling through Deathwatch's list of the dead, you'd notice patterns. Food social networks. Another one. And another. Local discovery apps. Daily deal clones. The startup graveyard is full of companies solving the same problems in slightly different ways, all convinced they had cracked the code.

One example that stuck with me: Floqq, a video-learning marketplace once featured in both VentureBeat and TechCrunch, quietly vanished. No tweets since April, Android app last updated the previous March, gone from iTunes. The founding team had updated their LinkedIn profiles. It was clearly dead — but nobody had announced it.

That was the point of Deathwatch. To make the obvious visible.

## When it got things wrong

Of course, the bot wasn't perfect. It once declared Ripple Labs — a well-known Bitcoin startup — dead. They'd merely changed Twitter handles. Another time it called the death of gun.io, a hacker talent agency, who responded that they were just "listening."

These false positives were embarrassing but also kind of interesting. They revealed a flaw in the metric: some companies go quiet on purpose. Silence isn't always death.

## The press

In 2016, Deathwatch got picked up by a journalist who wrote about it for Fusion (a now-defunct media outlet, fittingly enough). The article was titled *"This guy built a bot to expose dead start-ups"*. I remember thinking there was something poetic about a piece written about startup death ending up on a website that itself later shut down.

The Tumblr bot-watch community also covered it, which introduced the project to a new audience. For a side project I'd built mostly for myself, the attention was gratifying.

## Why I shut it down

Deathwatch ran until the Twitter API became prohibitively expensive. When Twitter (now X) changed its pricing model, the economics stopped making sense for a hobby project. So I turned it off.

There's something fittingly circular about that. A bot built to track the deaths of startups, killed by a platform decision. Deathwatch became one of its own data points.

## What I learned

Building Deathwatch was an early lesson in the value of a **clear, concrete metric for an abstract problem**. "Is this startup healthy?" is hard to answer. "Has this startup tweeted in the last 180 days?" is easy. Reducing a complex question to a measurable proxy is often the most useful thing you can do.

It also taught me that the best side projects are the ones that scratch your own itch. I genuinely wanted to know which startups had died. That curiosity was enough to sustain the project for years.

And I learned that timing matters. Building Deathwatch when the Twitter API was free made it a fun experiment. Building it today — at current API prices — would be economically absurd.

Some projects only work in their moment. That's okay.

---

*Deathwatch is offline.*
