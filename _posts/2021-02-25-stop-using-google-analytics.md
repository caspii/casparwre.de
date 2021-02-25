---
layout: post
title: 'Google Analytics: Stop feeding the beast'
description: Google Analytics is only very superficially free. You should not be using it. Here\'s why.
tags: [test, test2]
image: /images/google-godzilla.jpg
---

!['The Google Beast'](/images/google-godzilla.jpg){:class="img-responsive"}

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
Many of Google’s products have an absolutely staggering market share. Google has nine products with more than one billion users each. Google Chrome is the most popular web browser with a market share of 64%. Google’s Android is the most popular operating system on mobile devices with a market share of 72%. Google’s products are being used by most internet connected humans on earth. 

Combine this with the fact that Google has a monopoly on online advertising. Ok, actually that’s not true. It has a duopoly along  with Facebook. Facebook is guilty of most of the things I mention in this post, and is probably worse, but I’m saving my venom for Facebook for another day.

The result of all this is that Google's revenue is eye-wateringly massive: around 180 billion USD in 2020, which is around the GDP of New Zealand. Now consider that only four years ago, Google's revenue was 90 billion USD, which means that the revenue doubled in 4 years. Wow!

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

> Google Analytics is the most popular website stats tool. More than 53% of all sites on the web track their visitors using Google Analytics. 84% of sites that do use a known analytics script use Google Analytics. It’s the most popular third-party request on the web. It accounts for 0.64% of all network requests.” -- [Plausible.io blog](https://plausible.io/blog/remove-google-analytics#its-owned-by-google-the-largest-ad-tech-company-in-the-world)

When I first began to develop websites, it was a no-brainer to add Google Analytics to anything I created. It’s free! It’s good! It’s what everyone uses!

But actually it’s not that good really:

* It’s a bloated script that affects your site speed
* It’s overkill for the majority of site owners
* It’s a privacy liability and requires an extensive privacy policy
* It worsens the user experience due to the necessity of annoying prompts.
* It’s blocked by many browsers (e.g. Firefox) so the data is not very accurate.

There are more reasons. You can read the full list [here](https://plausible.io/blog/remove-google-analytics#its-owned-by-google-the-largest-ad-tech-company-in-the-world).

Has Google ever revealed what it does with data from Analytics internally? Nope. But we don’t even need to speculate. It seems pretty obvious to me that they’re using it to guzzle up even more data and to crap out ever more gold ingots.

So are there alternatives? Sure, there’s a bunch and some cost money. I think it’s money worth spending. For instance, there’s [Plausible.io](https://plausible.io) and there’s [Fathom](https://usefathom.com/ref/1VCHR3) (which I use on this blog) and a whole load of self-hosted solutions.

I believe it is a moral imperative for web developers to think about the “free” tools they are using to provide their products. In the case of Google Analytics, the tool is only very superficially free. We are all paying the hidden costs. 

If you want to make the world a better place, stop feeding the beast.
<br>
<br>

---
By the way, I'm building my [own bootstrapped app](https://keepthescore.co/). Follow me [on Twitter](https://twitter.com/wrede) to keep updated.



