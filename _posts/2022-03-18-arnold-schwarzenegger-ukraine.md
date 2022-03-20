---
layout: post
title: Hiding Arnold Schwarzenegger in my product to help the Ukraine 
description: Here's how I made some quick tweaks to show users in Russia the Schwarzenegger video
image: /images/arnold.jpg
---

!['Arnold in Russia'](/images/arnold.jpg){:class="img-responsive"}

Yesterday I watched Arnold Schwarzenegger's video, "A message to the Russian people", and boy, is it good. I think it's
a masterclass in communication. He respects his intended Russian audience, builds empathy with some anecdotes and then 
delivers a crisp and simple message. He intersperses it with well-chosen footage of the crisis and makes it crystal clear
who is to blame. I'm assuming that most Russians know Arnold and are more likely to listen to him than some unfamiliar
journalist or Western corporation.

Everything that I could say about the "special military operation" has been said by Arnold. So I'm not going to add
anything more about that topic. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4e1BndTE6Lg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Getting facts into Russia  is probably going to help in some way. So I've been idly wondering why
Google, Apple and Microsoft, as gatekeepers of the major operating systems, are not using their power to spread
the truth. They could show an information banner baked into the OS for example. For Russian censors it would be a major headache to 
ban a whole operating system.

Maybe the gatekeepers are doing that, maybe there are very good reasons for not doing it. I have no idea. 

The other big question would be: what information would they link to? The BBC? CNN? Wikipedia? 

Once I saw Arnold's video, I thought: "that would be an excellent bit of content to link to". 

And then I thought, "why not link to it from MY product?". 

And then I thought, "why not do that AND write a post about it?". 

So here we are.

## How many visits from Russian are there in my product?

[My product](https://keepthescore.co) allows you to make online scoreboards and leaderboards. According to my website analytics, I've had 1.1K 
visitors from the Russian Federation this year. That's not a huge number, but something to work with at least.

!['Russian Website'](/images/ukraine_1.png){:class="img-responsive"}

## How did I do it?

I now needed to solve 2 problems

1. Identify the visitors from Russia
2. Show them something in a non-intrusive way.

Both solutions needed to give maximum bang for minimum buck.

For the first problem I was not prepared to do any kind of fancy geolocation: I have
no idea how to do it, and I assume its messy and complicated. Instead, I used a filter in my analytics to find the URLs
that were being accessed in Russia.

!['Russian Website'](/images/ukraine_2.png){:class="img-responsive"}

So now I had a list of scoreboards that are being accessed in Russia. Unfortunately I have to keep the list updated manually
&mdash; but it won't take a lot of effort (max 10 mins per week, definitely not worth automating).

Secondly I need to show these visitors something. Thankfully I already had a ready-built solution for that:

!['Russian Website'](/images/ukraine_3.png){:class="img-responsive"}

My product can show a banner on the admin interface according to the "maturity" of the scoreboard. After creation,
for instance, they see the banner above. So that's what I hijacked for the scoreboards that I identified in 
the previous step. The result is as follows:

!['Russian Website'](/images/ukraine_4.png){:class="img-responsive"}

The final problem that occurred to me was that the YouTube video was very probably blocked in Russia. So instead I downloaded
the file, plonked it into an AWS bucket, and linked to that instead.

## Am I afraid of retaliation?

There's a chance that some Russian hacker collective gets wind of my little ruse and tries to retaliate in some way. Well,
I have CloudFlare on my product, which would deflect a denial of service attack. Any other attacks could do more damage
but quite frankly, it's a risk I'm prepared to take. My software does not run a hospital or power grid and it also contains
very little personal data. So fuck it 🧘.

## Will this make a difference?

Well, probably not. But then again, it only took me 20 mins to implement so it's worth trying it out. Also, maybe this post (which took 
far longer than the technical implementation) inspires others to do the same. Maybe even the Gatekeepers and our technical
overloads at Apple, Google and Microsoft take note.

That's all for now. 🇺🇦