---
layout: post
title: "Anatomy of a scam campaign, from the point of view of a link shortener"
description: "A scam ad operation pushed 89,826 clicks through Zip1.io in 48 hours. What it looked like from inside the shortener: how the links hid what they were doing, and why deleting them only helped the operator."
image: /images/zip1-scam-hero.jpg
custom_js:
  - /js/scam-charts.js
---


I run a link shortener as a side project. A few thousand people use it a day, and about 75,000 links sit
in the database. Once a week I go through them looking for the ones that are
up to no good.

Last week's sweep turned up one destination that had taken **89,826 clicks in 48
hours**. More than everything else on the site combined.

I deleted the links from the database. Two minutes later, they were back.

What followed was three rounds of me deleting and the operator re-registering. Running a link shortener meant I got to watch the
whole operation from underneath: how the links hid what they were doing, what was sending me the links and where they were going.

But before we get into it: the part of a short link after the
slash is called the **slug**, and you get to pick your own, so mine look like
`zip1.io/jip`. The slug is `jip`. Remember the slug 🐌. 



## How I run the abuse sweep

Most of the bad links are caught when you initially shorten a link. Submitted links are first checked against a **blacklist** and  then checked against the Google Safe Browsing API. 

However, bad URLs sometimes get through and need to be found later, after they are already live. This is what the abuse scan is for.  

The scan is read-only. It scores all 75,000 links in the database
looking for cheap domains, brand names in odd places, other URL-shorteners, and paths that sound like
login pages or other phishing attacks.

Claude Code runs the sweep, does the analysis, and proposes what to block. I decide
what actually gets deleted from the production database. Each scan usually results in the above-mentioned blacklist being expanded.

Side note: I don't do this just to be a good online citizen. If I didn't do this, Google would eventually mark me as a bad actor and stop sending me search traffic.

## The bad link arrives

The destination was `hai8g.com/4/11395320`, an ordinary
dot com address with a numeric path. There was nothing suspicious about the link itself.

What gave it away was volume: three slugs, all pointing to the same destination and drawing thousands of clicks. 

## What the link actually did

I fetched the destination from my laptop and got 963 bytes of HTML whose only
instruction was: send this visitor to google.com. Harmless. 

So I fetched it twice more. Once from a rented server in a data centre, which is
where an automated scanner would be coming from, and got a redirect to
yahoo.com. Then once pretending to be an Android phone opening the link inside
the Facebook app, which is what the click data said real visitors were.

| What I fetched it with | What came back |
| --- | --- |
| An ordinary desktop browser | 963 bytes, redirecting to google.com |
| A server in a data centre | A redirect to yahoo.com |
| An Android phone, from Facebook | 42,748 bytes of machinery |

One address, three answers, depending on what you used to access it. 

The 42,748 bytes were interesting. The code was deliberately scrambled, but
once untangled, the page:

- looked for the fingerprints that testing tools like Selenium and Puppeteer
  leave behind
- checked whether an ad blocker was running
- sampled the visitor's movements across the screen, eighty positions at a time,
  to confirm a real hand was behind them
- fingerprinted the graphics hardware, screen size, battery and time zone
- and if any of that failed, played a success animation and then silently did
  nothing

That last detail is my favourite. It does not show an error. It congratulates you
and quietly bins you, so you never learn you were caught.

I looked up the domain itself too, expecting something disposable. It isn't.
Ahrefs gives `hai8g.com` a Domain Rating of 50, which is a measure of link
strength out of 100. This blog scores 43. `zip1.io` scores 24.

That comes from 371,000 inbound links across 575 sites, and the sites are all
pirate streaming and free music downloads: Nigerian MP3 archives, Arabic anime,
half a dozen movie mirrors, one called `tvparapobres.online`. TV for poor
people. The links aren't really links. They're the same ad tag sitting on every
page of every one of those sites.

So it isn't a throwaway domain, it's infrastructure, and my shortener was a
sideline for whoever was renting it. Malwarebytes blocks it as riskware. Nothing
blocks `zip1.io`, which is the whole reason I was worth using.


## How the links reached people

<div class="viz" data-fig="facebook"></div>

Four in five clicks came from a Facebook-owned client: the in-app browser is the
one embedded in the Facebook app, so someone tapped a link without ever leaving
it. FacebookBot is Facebook's own crawler, which fetches a link every time
somebody posts it. Five thousand crawler visits means the link was posted a great
many times, across a great many accounts.

## Who clicked, and who sent them

<div class="viz" data-fig="geography"></div>

The people doing the clicking were overwhelmingly in Latin America. Mexico,
Colombia and Venezuela alone accounted for 40% of all clicks, and seven of the
top nine countries are Spanish-speaking. Whatever the page said, it said it in
Spanish.

Whoever created the links was somewhere else entirely: one address in the
Asia-Pacific region, then a Pakistani one. They almost certainly do not speak
Spanish.

That gap is not a coincidence. Buried in the page code were fields for a logo, a
headline, a button label and terms text, all filled in per country by the
advertising network behind the link. Localisation is the network's job, so
whoever bought this traffic never needs to know what the final page says.
Delivering people is the entire job.

## 3 rounds of fix and purge

I assumed the important thing was the destination, so I deleted the slugs and added the destination domain to the blacklist.

Four hours later they were back with the same three slugs, pointing at two new
domains. Both did nothing except forward straight to
`hai8g.com`. They had simply added a
step in the middle.

<div class="viz" data-fig="timeline"></div>

As mentioned, my product allows you to specify which slug you want for your link. So they recreated their shortened link with the old slug. Whatever they were spreading on Facebook had the slug baked in: `zip1.io/jip` so it was essential that it kept working.

The fix was to stop allowing new links to be shortened using the old slugs.

When I remove an abusive link now, its slug is reserved rather than released.
Anyone trying to claim it gets the ordinary "alias already exists" message,
deliberately identical to a normal collision.

`zip1.io/jip` returns "not found", and it will keep doing that. The Facebook
posts are still out there, but they lead nowhere (or my 404 page, to be precise). Even 24 hours later, they are still sending traffic my way.

## The project

The site is [Zip1.io](https://zip1.io). I forked it from a [project
on GitHub](https://github.com/spoo-me/spoo), rebranded it, and shipped it, all done with Claude Code. Claude
 also setup the infrastructure on DigitalOcean, and does most of the security work. I make the
judgement calls. 

The project makes no money (and costs me 27 USD a month to run).