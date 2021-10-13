---
layout: post
title: An expensive mistake &mdash; a short CTO war story 
description: How to waste money as a CTO
image: /images/balloons.jpg
---

This story was recounted to me many years ago by the CTO of a startup. He himself was responsible for this error which cost the company tens of thousands of USD.

!['3D Secure als Bild'](/images/facepalm.jpg){:class="img-responsive"}

The startup built an online multiplayer game. Users had to register and all registered users were represented by the same type of animal within the game. Let's say that all users were cats.

One day, sometime after the site had launched and was performing really nicely, the backend locked up solid. The tech team rebooted the server and things ticked along for a few hours until it happened again. For some reason, the logs were of no help in finding the error.

The lockup kept on occurring at irregular intervals but no one was able to find out what caused it. Eventually, because the tech team were at their wits' end, some external consultants were hired at great cost to try and find the problem.

They rolled back the code bit by bit to try and isolate the error. At some point they reverted to a version that was released **long before the lockup first occurred** but it was still happening.

At this point the consultants were almost ready to give up too. None of them had seen behaviour like this before. Eventually they ended up instrumenting almost every other line of code in the backend in an effort to find the root cause. After a few more days of pulling their hair out, the the error was finally found! 

The problem was this: if during registration you picked a username that was already taken, the system would recommend a similar username by sticking a number on the end. Obviously **cat** was the most sought after username, which meant that once it was taken, the system recommended **cat1**, then **cat2**, and so on. However, once this algorithm reached a threshold (let's say **cat999**), it would loop round and suggest cat1 again. This was not a problem whilst usernames between **cat1** and **cat999** were still available. However, once they were all gone and a new user wanted the **cat** username: Tada! Endless loop and system lockup. Of course, this only happened when someone actually chose **cat** during registration -- it would be hours and even days between these incidents.

The CTO himself was responsible for writing this faulty code, so he only had himself to blame. He was able to laugh about it when he told the story.

Anyway, that’s all for now 👋. Follow me [on Twitter](https://twitter.com/wrede) for more.

---

See how this post is performing on [Fathom Analytics](https://app.usefathom.com/share/folzoonq/casparwre.de) (affiliate link). 