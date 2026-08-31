---
layout: post
title: "Anatomy of a scam campaign, from the point of view of a link shortener"
description: "An affiliate ad operation pushed 89,826 clicks through Zip1.io in 48 hours. What it looked like from inside the shortener: how it hid, who runs this kind of thing, and what it was actually worth."
image: /images/zip1-scam-hero.jpg
custom_js:
  - /js/scam-charts.js
---

![A pencil sketch of a paper luggage tag reading zip1.io/jip. Scissors have just cut the string on one side, while a hand ties a fresh string to the same tag on the other.](/images/zip1-scam-hero.jpg)

[Zip1.io](https://zip1.io) is a URL shortener. You paste in a long link and it
hands back a short one, like `zip1.io/jip`. The part after the slash is called
the **slug**, and you can pick your own.

I forked it from an MIT-licensed Flask project on GitHub, rebranded it, and
shipped it. A few thousand people a day use it. It
is a side project, and I run the whole
thing with AI. Claude does the code, the infrastructure, and most of the
security work. I make the judgement calls.

Last week's monthly abuse sweep turned up a destination that had taken **89,826
clicks in 48 hours**, more than everything else on the platform combined.

I deleted the links from the database. Two minutes later, they were back. What followed was a back and forth (not going to say whack-a-mole) as I attempted and eventually succeeded in stopping this scam. The nice thing is that, as a link shortener, I got to see quite a few interesting details of the operation. 



## How I run the abuse sweep

Most of the abuse is caught when you try and initially shorten a link. There is a blacklist for links that are submitted, including a call to the Google Safe Browsing API. 

However, bad URLs sometimes get through and need to be found later, after they are already live. This is what the abuse scan is for.  

I routinely run an "abuse" skill to sweep the database for suspicious URLs. It lives as a runbook in the repository, and I start it by typing
`/abuse-scan` into Claude Code. 

The scan is read-only. It scores all 75,000 links in the database
looking for cheap domains, brand names in odd places, and paths that sound like
login pages or other phishing attacks.

Claude runs the sweep, does the analysis, and proposes what to block. I decide
what actually gets deleted from the production database. Each scan usually results in the blacklist mentioned above being expanded. 

## The bad link arrives

The destination was `hai8g.com/4/11395320`, an ordinary
dot com address with a numeric path. There was nothing about it to recognise. 

What gave it away was volume: three slugs, all pointing to the same destination and drawing thousands of clicks. I only saw
it because I sorted the database by clicks instead of by suspicion, which I had
never thought to do. 

Sorting by clicks is now a permanent step in the runbook. It costs one query,
and it is the only view that catches something with no visible tells.

## What the link actually did

I fetched the destination from my laptop and got 963 bytes of HTML whose only
instruction was: send this visitor to google.com. Harmless. 

Then I fetched it again, this time pretending to be an Android phone opening the
link inside the Facebook app, which is what the click data said real visitors
were.

<div class="viz" data-fig="cloaking"></div>

One address, three answers, depending on what you used to acces it. This is called cloaking, and the clean destinations are not a fallback.
They are the disguise. Anyone who investigates casually sees Google and concludes
there is nothing there.

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

It also worked on me. I never reached the final page: the network kept deciding I
was not a real visitor and sending me to Yahoo instead. So I can tell you what
the machinery is, and not what the last screen says. The templated fields in the
code, for a logo, a headline, a button and some terms text, look most like a
prompt asking for permission to send notifications. That is an inference, not
something I confirmed.

## Who runs an operation like this

My first assumption was that all this machinery was aimed at people like me. It
mostly is not.

This is an affiliate operation with four layers. An **advertiser** wants app
installs. An **ad network** sells a single link that decides what to show based
on the visitor's country and device. An **affiliate**, the contractor I was
actually fighting, finds traffic for that link however they can. And a **traffic
source** supplies the people, here Facebook.

The affiliate is paid per valid action, and bot traffic ruins their numbers. So
the automation-detection is not paranoia about researchers, it is quality
control. They are protecting their invoice. The cloaking does double duty: it
defeats investigation, but its main job is keeping Facebook's own scanners from
flagging the link.

Every one of those URLs carries the number `11395320`, which is the affiliate's
account identifier. It is how the network knows whom to pay. The operation signs
its own name in every request.

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
headline, a button label and terms text, which the ad network fills in per
country. Localisation is the network's job, so the affiliate never needs to know
what the final page says. Delivering people is the entire job.

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

## What it was all worth

Very little, which is the part that surprised me most.

Latin American mobile traffic is among the cheapest there is. A push notification
subscription pays fractions of a cent, and only a small share of clicks convert
at all. My rough estimate is that the whole burst grossed somewhere in the tens
to low hundreds of dollars, though the real ranges are wide. The recurring value
is the prize: once a phone accepts notifications, ads can be pushed to it
indefinitely. The click is the acquisition cost. The subscriber list is the
asset.

Those economics explain every strange thing I watched. When a click is worth a
fraction of a cent, volume is the only strategy, two minutes to recover a slug
with an existing audience is obviously worth spending, and nothing sophisticated
is ever aimed at any individual victim, because no individual victim is worth it.

I was not up against a hacker. I was up against a small business, and one of its
input costs was my domain's good name.
