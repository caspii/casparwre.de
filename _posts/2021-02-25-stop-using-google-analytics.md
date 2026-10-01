---
layout: post
title: 'Google Analytics: Stop feeding the beast'
description: "Google Analytics is only very superficially free. Why I removed it, what it really costs your users, and the privacy-friendly alternatives I use instead."
last_modified_at: 2026-10-01
image: /images/google-godzilla.jpg
---

!['The Google Beast'](/images/google-godzilla.jpg){:class="img-responsive"}

_Updated October 2026: I refreshed the numbers and added [what has changed since 2021](#what-has-changed-since-2021). The short version: the beast got bigger._

## The beast that is Google
There was a time when Google was a small, quirky company with a single product so awesome that it blew away the competition. That time is long gone.

These days Google is a gigantic multinational mega-corp. But that’s understating it a little. Think of Google as a kind of Godzilla that slurps up data about its users at one end and craps out gold ingots at the other. It does both of these at huge scale.

When thinking about Google, there are three things that are not easy to grasp but which are immensely important:
1. Google is not a search engine, it is not simply a maker of productivity tools. Google is a giant advertising platform.
2. Google is spectacularly, awesomely, frighteningly successful as an advertising platform. The gold ingots are coming out at an alarming rate and being used for all kinds of other things.
3. Google’s success, the fact that it is so good at what it does, the fact that it is crapping out a mountain of gold ingots, is terrible for us and society.

Let’s take a quick tour of these points before getting onto Google Analytics. 

## Google is not a search engine
Google is an advertising platform. Everything it does, all of its products, are geared towards selling advertising. Most of its products are free, many of them are useful, and a few are even great. But they all exist to suck up more data so that it can become even better at selling advertising.

The way Google turns data into gold ingots is as follows:

* Step 1: Google collects as much data about you as it can. 
* Step 2: Google uses this data to get to know you very very well: what you like, what you don’t like, whether you are pregnant, whether you are gay, where your friends live, where you spend your time, what you purchase online.
* Step 3: Google uses its extensive knowledge of you to show you advertising that fits you like a tailor-made suit.
* Step 4: Lots of gold ingots.

It’s called [surveillance capitalism](https://en.wikipedia.org/wiki/Surveillance_capitalism) and it’s certainly not about giving you a great user experience, it’s about making money.

To give just one perfect example of the point I’m making: look at the way that paid search results (i.e. adverts) have become ever harder to identify in Google’s search results. 

!['Google Ads timeline'](/images/google-evolution.jpg){:class="img-responsive"}

_[Google Ads Timeline compiled by Search Engine Land](https://searchengineland.com/search-ad-labeling-history-google-bing-254332){:class="text-center"}_

This is not the evolution you expect to see for a company that loves its users. This is what you expect from a mega-corp that wants ever more profits.

## Google is spectacularly, awesomely, frighteningly successful as an advertising platform
Many of Google’s products have an absolutely staggering market share. Google has several products with more than two billion users each, including Search, YouTube, Android, Chrome and Gmail. Google Chrome is the most popular web browser with a market share of [around 69%](https://gs.statcounter.com/browser-market-share). Google’s Android is the most popular operating system on mobile devices with a market share of [around 69%](https://gs.statcounter.com/os-market-share/mobile/worldwide). Google’s products are being used by most internet connected humans on earth. 

Combine this with the fact that Google has a monopoly on online advertising. Ok, that’s not quite true. It shares the market with Meta (Facebook) and, increasingly, Amazon. But in 2025 a US court did rule that Google [illegally monopolised key parts of the ad-tech market](https://www.axios.com/2026/09/02/google-ad-tech-antitrust-remedies). Facebook is guilty of most of the things I mention in this post, and is probably worse, but I’m saving my venom for Facebook for another day.

The result of all this is that Google's revenue is eye-wateringly massive. When I first wrote this post, it was around 180 billion USD (2020), roughly the GDP of New Zealand. In 2025 it was [over 400 billion USD](https://www.sec.gov/Archives/edgar/data/0001652044/000130817926000344/goog014907-ars.pdf), roughly the GDP of Denmark. The revenue more than doubled in 5 years. Wow!

This mountain of gold ingots used to flow to newspapers and magazines -- but no more. The result has been the decimation of local news and the magazine industry. It is true that  news organizations have been terrible at innovation in the past three decades and now they have been steam-rollered as a result. Why is this bad? Read on.

## Google’s success is not good for us as a society

Google’s success is good for Google and its shareholders. It’s not good for us, the consumers. We live in a world where local news is either stone dead or barely surviving. As we have learned in the past few years, a functioning media is essential to democracy.

So has the market done its magic and filled the gap? Has the creation part of [creative destruction](https://en.wikipedia.org/wiki/Creative_destruction) happened? Do we now have a better and superior solution for local news? 

Nope. Online news articles are a hideous cluster-fuck of click-baiting headlines, cookie banners, privacy nightmares and top heavy with advertising and it's mostly Google’s fault. Producers of news are desperately wringing every last pathetic drop of profit from their content.

Do you know why online recipes now begin with the author’s life story and are an interminable bore until you reach the actual beef? It’s because of Google. It’s because even writers of online recipes are prostrating themselves before the omnipotent online God that is Google.

And that huge growing pile of gold ingots? That’s in itself a problem. 

> "For many years, the astonishing torrent of money thrown off by Google’s Web-search monopoly has fueled invasions of multiple other segments, enabling Google to bat aside rivals who might have brought better experiences to billions of lives. 
>
> Google Apps and Google Maps are both huge presences in the tech economy. Are they paying for themselves, or are they using search advertising revenue as rocket fuel? Nobody outside Google knows.”  -- [Break up Google](https://www.tbray.org/ongoing/When/202x/2020/06/25/Break-Up-Google)

There are many other nuanced and large problems created by Google’s size and profitability and I’ve only scratched the surface here. 

## So what about Google Analytics?
Google is harvesting data across all of its products, so why pick on Google Analytics? Because for most of the products, if you choose to use them, it’s your data that is harvested. It’s different for Analytics. You as a web developer are making a choice that affects all of your users.

Google Analytics is still by far the most popular website stats tool. According to [W3Techs](https://w3techs.com/technologies/details/ta-googleanalytics), around 47% of all websites track their visitors with Google Analytics. Among sites that use a known analytics tool, it's around 83%.

When I first began to develop websites, it was a no-brainer to add Google Analytics to anything I created: "It’s free! It’s good! It’s what everyone uses!"

Actually it’s not that good really:

* It’s a bloated script that affects your site speed
* It’s overkill for the majority of site owners
* It’s a privacy liability and requires an extensive privacy policy
* It worsens the user experience due to the necessity of annoying prompts.
* It’s blocked by ad blockers and privacy-focused browsers (e.g. Brave), so the data is not very accurate.

There are more reasons. You can read the full list [here](https://plausible.io/blog/remove-google-analytics#its-owned-by-google-the-largest-ad-tech-company-in-the-world).

Has Google ever revealed what it does with data from Analytics internally? Nope. But we don’t even need to speculate. It seems pretty obvious to me that they’re using it to guzzle up even more data and to crap out ever more gold ingots.

## Alternatives to Google Analytics
So are there alternatives? Sure, there’s a bunch and some cost money. I think it’s money worth spending.

[Here is a comprehensive and curated list](https://github.com/oxnr/awesome-analytics) of analytics tools, including privacy focussed analytics.

I use [Fathom Analytics](https://usefathom.com) for this blog and for [keepthescore.com](https://keepthescore.com). It's not free: I currently pay around 74 USD per month ([here's what my whole stack costs](/blog/costs-of-running-a-saas/)). The analytics for this blog are public, [you can see them here](https://app.usefathom.com/share/folzoonq/casparwre.de). Other good privacy-friendly options are [Plausible](https://plausible.io) and [Umami](https://umami.is), which you can also host yourself for free.

I believe it is a moral imperative for web developers to think about the “free” tools they are using to provide their products. In the case of Google Analytics, the tool is only very superficially free. We are all paying the hidden costs. 

If you want to make the world a better place, stop feeding the beast.

## What has changed since 2021

A few things have happened since I first wrote this post:

* **Google killed the old Google Analytics.** "Universal Analytics" stopped collecting data in July 2023. Everyone had to move to Google Analytics 4, which is harder to use. Old data was deleted in 2024. So much for "it's free and easy".
* **European regulators ruled it illegal (for a while).** In 2022, data protection authorities in Austria, France and Italy ruled that some uses of Google Analytics broke EU privacy law, because data was sent to the US. A new EU-US data agreement in July 2023 made it legal again, for now.
* **US courts ruled Google is a monopolist. Twice.** In 2024 a judge found that Google illegally monopolised search. In 2025 another judge found the same for parts of the ad-tech market. In both cases the judges decided _not_ to break up Google ([search](https://www.cnbc.com/2025/09/02/google-antitrust-search-ruling.html), [ad tech](https://www.adexchanger.com/antitrust/google-wont-have-to-break-up-its-ad-tech-business-judge-brinkema-rules/)). Google must instead follow some rules for six years.
* **I fed the beast myself.** In 2022 I [sheepishly added Google Analytics back](/blog/12-months-as-a-solo-developer/) to keepthescore.com, because some ad networks require it. Lesson learned: when money is on the line, principles get tested. keepthescore.com now runs on Fathom.



