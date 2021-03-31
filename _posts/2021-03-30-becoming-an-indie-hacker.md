---
layout: post
title: Why I'm quitting my job to build an online business
description: Why I want to start a small online business
image: /images/nebelmeer.jpg
custom_js:
  - node_modules/chart.js/dist/Chart.js
---

!['Nebelmeer'](/images/nebelmeer.jpg){:class="img-responsive"}

I’m quitting a [good job](/blog/holacracy-europace-berlin/) to go it alone: I want to build an online product that can generate revenue. Hopefully it will become a sustainable business.

## Why am I doing this?

I am doing this because I want to have freedom. Creative freedom, financial freedom and the ability to work on my own schedule. 

Naval Ravikant, an indian-american investor and modern-day internet sage says the following:

> You’re not going to get rich renting out your time. You must own equity - a piece of a business - to gain your financial freedom ([source](https://twitter.com/naval/status/1002103360646823936?s=20))

So that’s what I’m going to try and do: build my own business. I’m also going to do it alone, I’m going to be “a company of one”. I’m not interested in building a huge company, or taking on investment, or being massively successful. For a start, I don’t think I have the skills nor the discipline to build a hugely successful business. More importantly, there are costs to being successful. Running a large and successful company means being in a high pressure and high profile environment. Constantly. I don’t want that for my life.

There’s a good book about this topic: _Company of One: Why Staying Small is the Next Big Thing_ by Paul Jarvis. He says: "You're not a machine, so why would you run your business like one?" 

The success of my business will not be measured by its profit margin, the number of employees, the size of the series A investment round or the market share. It’s going to be measured by how much freedom it gives me.

## What type of business will I build?

I am going to build a small software business because it’s probably the thing I can do best right now. In the past few years there has been a growing trend of solo developers building products and businesses by themselves. Sometimes they are called ["indie hackers"](https://www.indiehackers.com/). I am joining their ranks.

I am convinced that more and more of these indie companies are going to be created in the near future. There are good reasons for this, the main one being: it has become easier and easier to build and run online products.

Some examples of this are: 

 * a decade ago, you would have required a whole team working many weeks to enable payment via credit card for an online business. These days it can be done in a couple of days using [Stripe](https://stripe.com/).
 * In the "olden days" of the internet, you needed to buy a server to send emails. You  needed to hire someone to run that server, to update its software, setup a spam filter, ensure the hard-disk didn't fill up and do a bunch of more stuff. Today you pay a company like [Sendgrid](https://sendgrid.com/) to do it all for you.
 * A more general example of this is the rise of "the cloud". Before the cloud, every online business was in the business of running and maintaining servers. If the business was expecting a large influx of users, it would have to plan ahead and buy new servers. It would have to install software on those servers, provide them with power and hook them up to the network. All of that work was done by expensive humans. These days, servers are virtual and are run in gigantic data centers. Creating a new server can be done with a click. The work is done by robots.

Today, it is possible for one person to build an online business at scale, serving hundreds of millions of customers. A few years ago that would have been impossible.

This trend will only accelerate. I would speculate that every large software business that is over 20 years old is at risk that it will be replaced by a smaller and cheaper competitor. This is a race to the bottom, meaning that many of these companies will eventually be replaced by a team of one person!

But back to me and my business. I want to build a software that runs on a central server and that people can rent for a fee. The term for this is "software as a service" or SaaS for short. I find it very attractive because it means that I don’t need to do anything other than keeping the machine running, once it is built. I don’t need to pack my product into a box and ship it via mail, I don’t need to generate creative output (like videos or articles) to keep making money. I don’t have to rent out my time. I just have to make the machine in the first place.

## So what is the product?

For the next 12 months I’m going to concentrate on an online scoreboard called [keepthescore.co](https://keepthescore.co/). I originally built it 4 years ago as a toy project and have been improving it ever since. Up to now it was a hobby project that I tended like others may tend a garden. There's a great blog post [exploring this metaphor](https://herman.bearblog.dev/my-product-is-my-garden/).

My ~~garden~~ product has slowly been accumulating users ever since I put it online. Here is a graph of the scoreboards created per month since I put the product online.

<canvas id="scoreboards" width="300" height="200"></canvas>
<br>

In 2020 I took two months off work and [added some basic monetization](https://keepthescore.co/blog/posts/monetizing-keepthescore/). I regarded it as an experiment which turned out be successful: my hobby was suddenly making 500 USD per month.  This was the point where I thought it would be a good bet to invest more time into it. The fact that the product is (still) pretty rudimentary yet users are prepared to pay is an indication that the mythical product-market fit is close.

I find it extremely exciting to be building something and to have real users at the same time. It means I can directly talk to my customers and sometimes even integrate their feedback on the same day. It means that there is a very tight feedback loop which I find highly motivating. It is something that I have missed when working in larger teams or bigger companies: sometimes the feedback loop takes months or even years.

In my old job I was a product owner. But in my new job I’ll have a multitude of roles which I'm very excited about:
 * Frontend and backend Developer (coding)
 * Product manager (deciding what gets coded)
 * UX / UI designer (deciding how it works and looks)
 * SEO person (ensuring search engines can find it)
 * Customer support person (helping users with their questions)
 * DevOps dude (where will the code live and run)
 * Marketer and advocate for the product (writing copy, blog articles etc.)

Will keepthescore.co be my only product? I’m not sure yet. I will prototype and validate some other ideas in the next 12 months, so that I don’t have all my eggs in one basket. But more on that another time.

## Why now?
One of my many favorite quotes goes like this:

> “We have two lives, and the second begins when we realize we only have one” – Confucius.

My second life began on March 16th, 2020 when my mother unexpectedly died. My father had died of cancer three years earlier. It caused me to radically reassess what I cared about and what I didn’t care about. I realised that I spent a lot of time on things I didn’t really care about.  

I decided to spend time more wisely. I decided to not put off big things for later … because later I could be dead. I decided to spend more time with my family and kids. Because my kids are young and I am the sun in their solar system and this time will be gone soon and it is never coming back. 

Anyway, I inherited enough money to fund myself for these 12 months without worrying about paying the bills. I’m investing this money in my bet, in my product, in myself. I think my mother would have approved.

That’s all for now. Follow me [on Twitter](https://twitter.com/wrede) to keep updated.



<script>
//-----------------
//-- Graph data
//-----------------
var ctx = document.getElementById('scoreboards').getContext('2d');
var data = {
    labels: ["2016-09", "2016-10", "2016-11", "2016-12", "2017-01", "2017-02", "2017-03", "2017-04", "2017-05", "2017-06", "2017-07", "2017-08", "2017-09", "2017-10", "2017-11", "2017-12", "2018-01", "2018-02", "2018-03", "2018-04", "2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11", "2018-12", "2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08", "2019-09", "2019-10", "2019-11", "2019-12", "2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03"],
    datasets: [
        {
            label: "Scoreboards created per month",
            backgroundColor: '#dd4814',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: [34, 129, 72, 798, 1543, 1959, 3469, 3317, 3775, 4135, 4199, 4027, 4363, 5534, 6525, 7702, 7104, 7017, 7568, 6623, 6873, 6705, 6585, 6158, 6299, 7986, 9671, 11364, 10796, 8893, 8952, 7280, 7295, 6236, 6437, 6134, 6500, 8005, 8718, 9789, 8939, 8050, 11633, 19168, 18780, 12998, 11681, 12164, 13964, 21519, 20104, 22756, 21074, 22183, 21812]
        }
    ]
};
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    scaleShowLabels: true,
    barValueSpacing : 2,
    responsive: true
});
</script>
