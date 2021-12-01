---
layout: post
title: Why you should launch your product without a login
description: No login -- an awesome product-development hack
image: /images/balloons.jpg

---

!['Balloons'](/images/balloons.jpg){:class="img-responsive"}

I've launched 2 successful web products (and several unsuccessful ones) that did not have a login. The product that 
I'm currently working on ([Keepthescore.co](https://keepthescore.co)) has over 50k pageviews per day, monthly revenue of 2000 USD and has been online 
for 4 years -- and I've only just added a user login.

So what are the advantages of launching without a login? 



## Summary

By deferring implementation of a user-login you are:
 
* Speeding up development and reducing code complexity
* Reducing friction for your users during onboarding
* Reducing the attack area (no email or password storage)
* Potentially adding SEO benefits

Let's dig into these reasons.

## No login => simpler code => quicker launch
When I learned to code, it was whilst building the frontend for [Kittysplit.com](https://kittysplit.com/) as a side-project. A few years later, 
I was still very much a beginner when I began work on [Keepthescore.co](https://keepthescore.co). Again, it was a side-project. I am convinced that if either of those products had
required a login I would never have built them. (Keepthescore has since [become my full-time job](/blog/becoming-an-indie-hacker/)).

Adding a login means you need to know about sessions, password hashing and other stuff which is very 
intimidating to a noob.  It is likely to tip her into the "hmmm, this seems more trouble than it's worth" camp.

So how does a product without a login even work? In the case of Keepthescore.co, when you create a new scoreboard you are 
given a unique and secret link. You can access and edit your board with the link. 

To make things easier, the unique link
is stored in the browser cookies and then shown locally, so that you can find your scoreboard later. It's not a perfect solution (I often get support mails
asking me to retrieve "lost" scoreboards) but it is **good enough**.

When you launch something completely new, remember that you're trying to learn something. In the lingo of [The Lean Startup](https://theleanstartup.com), you are validating your value hypothesis:

> The _value hypothesis_ tests whether a product or service really delivers value to customers once they start using it.

In my experience, your initial customers don't care about a login. Sure, it's more work for them in some situations, but if they are really bothered by it you will find out. Usually they're not, so you can spend your precious resources building more important stuff.

## No login => less friction during onboarding 

Reducing friction during onboarding is a little like compound interest. It will only make a small difference initially 
but over time it can turn your product into an unstoppable juggernaut. If you have competitors that require a signup to see their product, whereas your product 
can be used without, that ~~could~~ absolutely will help you win in the long term.

The [Indie Hackers Growth Bites](https://www.indiehackers.com/growth-bites) newsletter puts it like this:

> By allowing people to use your product before signing up, you can reduce friction substantially and make it easier for them to experience the product's value. And the more time they spend, the more invested they'll be in the product. This is particularly true when they're building something (e.g. graphics, landing pages, etc.), thanks to the [IKEA effect](https://en.wikipedia.org/wiki/IKEA_effect). And all of this can result in higher conversions.

Since publishing this post, someone pointed out that Paul Graham, veteran investor and founder of Y-Combinator, recently tweeted about this topic too:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Underappreciated competitive advantage: letting people do x without creating an account.</p>&mdash; Paul Graham (@paulg) <a href="https://twitter.com/paulg/status/1261976515408990208?ref_src=twsrc%5Etfw">May 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

For Keepthescore.co it takes a new user literally less than 10 seconds to get from the landing page to being inside the product. I am absolutely convinced that this has contributed to the success of the product.

Also, by following this principle you will be getting onto the extremely trendy "product-led-growth" bandwagon.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Product-led growth.<br><br>It’s just a fucking free trial. Calm it down.</p>&mdash; Ranee Soundara (@naynerz) <a href="https://twitter.com/naynerz/status/1442619002744934402?ref_src=twsrc%5Etfw">September 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Not storing emails and passwords makes security easier

Evil-doers are much less likely to break into your house if there is nothing of value inside. The same is true of your product. It means that maybe you can get away with not storing any personally identifiable information **at all** which will make GDPR/privacy advocates frothy with excitement. 

It is also a strong signal about your product: you can make a sincere claim to being privacy-first and that you will respect the user's data (because you don't have any!)


## Potential SEO benefits

If you design your product to work without a login, you are also (in theory) making it very easily accessible to the Googlebot. The Googlebot is the web crawler software used by Google, which collects documents from the web to build a searchable index for the Search engine. This can potentially be a double-edged sword, with the Googlebot getting at thinks that it shouldn't know about. Yup, that's happened to me.

Another, bigger, benefit is that your users will probably share content much more readily if it is easy to access. To use another home-grown example: a major driver of organic growth for Keepthescore has been people posting their scoreboards to Facebook, Twitter and their blogs. This is a very strong signal for Google and others that your webpage has high relevance.

In summary, not having a login will make your product SEO-friendly "out of the box".


Anyway, that’s all for now 👋. Follow me [on Twitter](https://twitter.com/wrede) to see my progress.

---

See how this post is performing on [Fathom Analytics](https://app.usefathom.com/share/folzoonq/casparwre.de) (affiliate link). 

Photo by <a href="https://unsplash.com/@sadswim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ian dooley</a> on <a href="https://unsplash.com/s/photos/launch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  