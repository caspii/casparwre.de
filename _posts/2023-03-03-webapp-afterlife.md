---
layout: post
title: If I died tomorrow, how long would my webapp keep running?
description: How long could my app continue to function completely on its own?
image: /images/lonely-robot.jpg
---

![A lonely robot](/images/lonely-robot.jpg)

I am the sole developer of a webapp that has around 5,000 USD monthly revenue.

Yesterday I was thinking about what would happen to it if I died suddenly. I really should have some kind of succession plan. 
But instead of diving into that, I began to wonder how long the app would keep running for if it was left completely to 
itself, with no further human support.

What makes this question interesting is that, in theory, my app runs as a completely self-sufficient system: 

1. The app makes monthly revenue which automatically gets deposited into a bank account.
2. The app is hosted on a cloud provider (DigitalOcean) and the monthly bill is automatically paid from that bank account. 
3. The same is true for the domain name registrar.
4. A bunch of other stuff is also paid for automatically, but none of that is critical to the app remaining online. This includes monitoring and logging tools, analytics, the mail provider and so on.

The app will remain up indefinitely as long as 

- The database, the domain and the cloud service continue to function.
- the monthly revenue is greater than the monthly costs.

In practice of course, it will go offline eventually. What are the scenarios that could cause this?

## "Acts of God" or infrastructure failure
This would be things that are outside the scope of the app. The less spectacular the failure, the more likely it is to happen.

Spectacular failures include: a meteor striking the infrastructure, a nuclear war, a solar flare, a super-volcano eruption, a zombie apocalypse, ~~a global pandemic~~, or a global economic collapse. All of these are unlikely to happen.

Less spectacular would be the cloud provider going bankrupt, or the domain name registrar going out of business. More probable but still unlikely.

Most likely in this department would be the cloud provider having an outage or the database getting stuck after an automatic update.

## App-level technical failure
This would be a failure of the app itself due to a bug or lack of maintenance. I would not make the claim that my app is bug-free, but I am pretty confident that it's free of bugs that could cause it to go offline. 

The app runs on a virtual Linux server, and these can famously run for years without any kind of human intervention. 

The likeliest scenario in this department would be the database or the harddisk simply filling up. This would cause the app to go offline, but it would take a long time. Probably years.

## Product failure

The app could stop generating enough revenue to cover the monthly costs. With no further development, this would eventually happen but it would take a long time. I think one of the other scenarios would strike first.

## Security breach or malicious attack
The app (or the server it's running on) could be breached by an attacker. Actually, this would probably not cause the app to go offline, because it is not in the attacker's interest. The attacker would probably use the app to send spam, or to mine cryptocurrency, or to host malware, whilst ensuring that it remains online.

More dangerous would be an external attack such as a denial of service attack. This involves flooding the app with traffic until it buckles and fails. I'm not quite sure whether the app could recover by itself after the attack was over. It depends.

## Payment failure
Obviously the bank account and the attached credit card is a single and critical point of failure. As soon as it stops working, the app's days are numbered. I would estimate that the cloud provider and the domain name registrar would stop providing services within three months of not being paid.

This is actually the most likely scenario. Eventually the bank would get wind of the fact that I am no longer around and would freeze the account.

## Conclusion

Overall, I think the app would continue to function for at least six months. If the bank account remains active I could imagine it continuing to run for 1-2 years and with a bit of luck, maybe even 5 years. The thing is, one way or another, I will never find out!

Do you have a succession plan for your webapp?