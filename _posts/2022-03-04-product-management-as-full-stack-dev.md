---
layout: post
title: Things I learned about product management by becoming a full-stack developer 
description: I switched careers from product management to development. Here's what I learned.
image: /images/bridge.jpg
---

!['A nice bridge'](/images/bridge.jpg){:class="img-responsive"}

I spent most of my career as a product manager / product owner. In 2021 I “crossed the aisle”, so to speak, and became a full-stack developer. Well, actually I decided to build, run and grow my [own software product](https://keepthescore.com). This means that on top of being a developer, I am still a product manager, as well as doing customer support and a lot of other things. But I would say that I am now _mainly_ a full-stack developer.

Here are 8 things that I have learned that would have helped me in my old role.

## It is possible to ship a feature in a week
In my new role, my awareness of the time available to do work has become much more pronounced. I have a simple roadmap which I try to stick to as much as humanly possible. It consists of a bunch of problems I want to solve each week. I usually have the next 8-12 weeks mapped out ahead of me.

Of course I underestimate development tasks: that’s never going to change for me or for you or anyone. Unexpected things also happen. Errors start occurring in some part of your app that has been stable for the last 6 months.

However, I’ve found that it is possible to break features down into smaller and smaller chunks until you find a way of shipping SOMETHING by the end of the week. This often means taking technical shortcuts or stripping away features, but it turns out this is absolutely fine. Shipping something means you can start learning.

In my old role, I would often feel the urge to do things _properly_ and deliver something that was _complete_. It turns out it's very hard to get a grip on what “properly” or “complete” actually mean. Instead, I have accepted that stuff is going to remain unfinished. Which brings me to my next topic.

## Everything is always going to be unfinished. Get comfortable with that
Insisting on getting stuff finished is an anti-pattern that afflicts non-agile teams. I totally empathise with this thinking. If you are in a ["feature-factory"](https://cutle.fish/blog/12-signs-youre-working-in-a-feature-factory) team (i.e. a team that is not agile) then you have no choice but to complete things 100%. You know you’re not going to revisit the feature you’re working on for months or even years after you’ve done it so you want to make sure that it really is 100% done, tested, stable and complete. This produces immense waste. Why?

Because whatever you’re building is based on some assumptions that will turn out to be wrong once you launch. So it just doesn’t make sense to build things to 100% completion. Also, as we all know, the final 20% takes up 80% of the time. And time is the most valuable thing you have. So why not stop at 80% and invest the time elsewhere?

In my new role I’ve gotten comfortable with leaving stuff unfinished. This does NOT mean leaving things broken or buggy. It means leaving out the bells and whistles. You can always add them later, if it makes sense.

Here’s an example: I wanted to get my user login finished in a week. Halfway through I realised that having a user login also requires a password reset flow, which means sending transactional mails. Well, I didn’t have transactional mails (and still don’t). How did I solve this? I left out the password reset flow. 

Of course my users forget their passwords, but when they do, they write me a support email. I built myself a super simple password reset function and manually reset the passwords for these users. As a bonus, it means I am directly in touch with people and will sometimes get valuable feedback.

I do about 2-3 manual password resets every week and guess what: it’s absolutely fine. In aggregate I’ve still saved a vast chunk of time which I have invested elsewhere. One day I will build the password reset function, just not yet.

Resist the urge to automate everything. Resist the urge to complete features to 100%. 

## The path to hell is paved with shiny technology
You’ve heard the adage ["use boring technology"](http://boringtechnology.club). In the past I understood this to be technical advice. I’ve now come to realise that "shiny technology syndrome" often begins with product management. 

Here’s an example from my new life: I assumed that my users would want changes to scoreboards to propagate instantly. The state-of-the-art way of doing this is using a technology called web sockets. Implementing this would have required fundamental changes to my whole tech-stack and would have taken weeks of work.

But there is another old and unsexy way of solving the data propagation requirement: polling. The disadvantage of polling is that it is not instant (changes take seconds to propagate) and it puts more load on the server.

After a few experiments it turned out that my users do not care about instant propagation. They are fine with a 5 second delay and my server doesn’t care about the extra load. So I 
scrubbed web sockets from my backlog and moved on.

I think in my old life I would have insisted on instant propagation. 

## Keep large technical decisions on the boil and revisit them often before committing
In my new role, I have a list of big future topics that are often technical in nature (for instance migrating my app to a PaaS like Heroku).

I’ve learned that keeping these issues top-of-mind and regularly thinking about them leads to a much better understanding of the requirements, motivations and potential pitfalls. I’ve seen that over time, these topics shrink or even evaporate completely – all without writing any code.

In my old role, I had an urge to keep these big technical topics at arm’s length – until the time finally came to do them. Big technical topics are intimidating, which meant that I procrastinated about tackling them. As a product manager, you have so many things on your mind, that dealing with huge topics is always being pushed back and – this is the mistake – you’re not chipping away at them. 

As a full-stack dev I’ve learned that this chipping away, before writing any code, makes technical topics more digestible in the long run. It also leads to much better solutions.

## Avoid big bangs, especially when it comes to tech debt
Tech debt is a fact of life. It will accumulate and you will have to deal with it sooner or later. Once you have identified some tech debt that you want to pay off, the urge is strong to pay it off all at once. But again, I learned to get comfortable with paying it off slowly, bit by bit.

An example from my new life was upgrading a major component of my app: the CSS framework. I was using a very old version and I knew I had to tackle it.

In my old life, I would have leaned on the developers to get it all done in one chunk. "It’s cleaner that way, we’ll have it behind us and be free to focus on other things".

In my new life I started doing it months ago and I’m still doing it. I have accepted that there are parts of my app that will possibly never get the upgrade … and it’s absolutely fine. My old me would have been horrified by this, but the fact is that I’ve saved huge chunks of time. 

## Product managers need to do customer support
You knew this anyway, but it really bears repeating. They don’t need to do all of it, but if product managers don’t have direct access to the customers then something is very wrong.

## Keep your dependencies minimal
Dependencies are to developers what features are to product managers: good in moderation.

Dependencies are the ready-made libraries and code from other developers that speed up your development. _However_, once you have too many glued into your system they start gumming things up. And when you need to update a library here or a component there things get ugly very quickly. The most famous recent example of a dependency that suddenly needed to be updated the day before yesterday is Log4J.

As a developer I’ve had to embrace the pain of updating dependencies. I have fully understood that the best way of minimising this pain is by having less dependencies in the first place. 

A well functioning product team should constantly be pushing back against new technical dependencies. Questions you should be asking are:
 
* Is this feature really really required to solve the problem?
* Can we loosen this constraint if it means fewer dependencies?
* Are we sure about this assumption?

Which brings me to my final learning:

## Product managers need to be REALLY tight with their dev teams 
I’ve now had the experience of maximum interlock between development and product management: both are combined in my person. I think the overarching realisation is how much of a 2 way street the interplay is.

I would have been a better product manager if I had always made my assumptions clear and ruthlessly pushed for features to be pared down. I should have pushed for more communication, laying out options, discussing technical implications, getting feedback, and always getting development involved early on.

This requires a culture of healthy communication. You need to be honest and on one level with your team. The product manager should _never_ ever be seen as the “boss”. The product manager needs to be available, involved, helping with the daily decisions and present in the discussions (no discussion is ever purely technical). You need to be on the front-line.

Anyway, that’s all for now. If you want to see my journey as a solo developer then [follow me on Twitter](https://twitter.com/wrede).

---
Photo by <a href="https://unsplash.com/@adriencesard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adrien CÉSARD</a> on <a href="https://unsplash.com/s/photos/bridge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  