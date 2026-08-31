---
layout: post
title: "Anatomy of a scam campaign, from the point of view of a link shortener"
description: "A scam ad operation pushed 89,826 clicks through Zip1.io in 48 hours. What it looked like from inside the shortener: how the links hid what they were doing, and why deleting them only helped the operator."
image: /images/zip1-scam-hero.jpg
custom_js:
  - /js/scam-charts.js
---

![A pencil sketch of a paper luggage tag reading zip1.io/jip. Scissors have just cut the string on one side, while a hand ties a fresh string to the same tag on the other.](/images/zip1-scam-hero.jpg)

I run a link shortener as a side project. I forked a project
on GitHub, rebranded it, and shipped it. It has a few thousand people using it a day, and about 75,000 links sitting
in the database. Once a week I go through them looking for the ones that are
up to no good. 

Last week's sweep turned up one destination that had taken **89,826 clicks in 48
hours**. More than everything else on the site combined.

I deleted the links from the database. Two minutes later, they were back.

What followed was three rounds of me deleting and the operator re-registering (and I will not use the phrase "whack-a-mole"). Running the shortener meant I got to watch the
whole operation from underneath: how the links hid what they were doing, what was sending me the links and where they were going.

One piece of vocabulary, and then the story. The part of a short link after the
slash is called the **slug**, and you get to pick your own, so mine look like
`zip1.io/jip`. Remember the slug. It turns out to be the whole story. 



## How I run the abuse sweep

Most of the abuse is caught when you try and initially shorten a link. Links that are submitted are first checked against a blacklist and are then checked against the Google Safe Browsing API. 

However, bad URLs sometimes get through and need to be found later, after they are already live. This is what the abuse scan is for.  

The scan is read-only. It scores all 75,000 links in the database
looking for cheap domains, brand names in odd places, other URL-shorteners, and paths that sound like
login pages or other phishing attacks.

Claude Code runs the sweep, does the analysis, and proposes what to block. I decide
what actually gets deleted from the production database. Each scan usually results in the blacklist mentioned above being expanded. 

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

One address, three answers, depending on what you used to access it. That is
forty-four times more content for the phone than for my laptop. This is called
cloaking. Anyone who investigates casually sees Google and concludes there is nothing
there.

The 42,748 bytes were more interesting. The code was deliberately scrambled, but
once untangled, the page:

- looked for the fingerprints that testing tools like Selenium and Puppeteer
  leave behind
- checked whether an ad blocker was running
- sampled the visitor's mouse movements, eighty positions at a time, to confirm
  a human hand was moving them
- fingerprinted the graphics hardware, screen size, battery and time zone
- and if any of that failed, played a success animation and then silently did
  nothing

That last detail is my favourite. It does not show an error. It congratulates you
and quietly bins you, so you never learn you were caught.


## How the links reached people

<div class="viz" data-fig="facebook"></div>

Four in five clicks came from a Facebook-owned client. The in-app browser is the
one embedded in the Facebook app, so someone tapped a link without ever leaving
it. FacebookBot is Facebook's own crawler, which fetches a link every time
somebody posts it. Five thousand crawler visits means the link was posted a great
many times, across a great many accounts.

## Where the operator was

<div class="viz" data-fig="geography"></div>

Whoever created the links was somewhere else entirely: one address in the
Asia-Pacific region, then a Pakistani one. They almost certainly do not speak
Spanish.

That gap is not a coincidence. Buried in the page code were fields for a logo, a
headline, a button label and terms text, all filled in per country by the
advertising network behind the link. Localisation is the network's job, so
whoever bought this traffic never needs to know what the final page says.
Delivering people is the entire job.

## What I tried first, and why it failed

I assumed the valuable thing was the destination, so I blocked it.

Four hours later they were back with the same three slugs, pointing at two new
domains I had never seen. Both did nothing except forward straight to
`hai8g.com`. Same destination, same code, same tracking. They had simply added a
step in the middle.

<div class="viz" data-fig="timeline"></div>

They had not lost anything they cared about. A destination is replaceable. What
they could not replace were the slugs.

Their Facebook posts said `zip1.io/jip`. Those posts were already out there,
already circulating, already being clicked. The slug was the asset. The
destination was interchangeable, and deleting the links had actually helped them,
because it freed the slugs. They re-registered the same three within two minutes.
One of them had zero clicks. It was a spare, registered in advance in case one
got taken.

That also told me what they were using my site *for*. Facebook blocks domains it
knows are bad. A fresh `zip1.io` link has no history and hides whatever sits
behind it. My domain's clean reputation was the product, and I was laundering it
for them for free.

## The fix: reserving slugs

The fix was not a better scanner. It was to stop giving the slugs back.

When I remove an abusive link now, its slug is reserved rather than released.
Anyone trying to claim it gets the ordinary "alias already exists" message,
deliberately identical to a normal collision. A distinctive error would tell an
operator exactly which of their slugs had been burned.

One detail mattered more than it looks. The first version reserved each slug
*after* deleting the link, leaving a fraction of a second where it was free.
Having watched someone re-register inside two minutes, I was not willing to
assume nobody was watching. It reserves first now.

`zip1.io/jip` returns "not found" and always will. That particular Facebook
audience now points at a dead end that cannot be revived.

## The project

The site is [Zip1.io](https://zip1.io), and I run the whole thing with AI: Claude does
the code, the infrastructure, and most of the security work. I make the
judgement calls.