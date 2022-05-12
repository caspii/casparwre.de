---
layout: post
title: 12 Months into building my online business
description: Why I want to start a small online business
image: /images/nebelmeer.jpg
custom_js:
  - node_modules/chart.js/dist/Chart.js
---

!['Nebelmeer'](/images/nebelmeer.jpg){:class="img-responsive"}

I quit my job last year to build and market my own online product. You can read the blog post I wrote about getting started
here.

Now it's time for a retrospective, to reveal some numbers, go through some highlights and lowlights, and peer into the future. 
I'll try and do this every 12 months, for as long as I can.

## Going solo: the good bits

First off, what does it feel like to go it alone? Am I lonely? Missing the office? Missing colleagues? Afraid?

The answer is: it feels flipping awesome. I already feel that I have been lost to the world of employment forever. I mean, just 
imagine: 
* I have not attended a single meeting for over a year
* I get to choose who my customers are (more on that later)
* I get to work in an office that is beautiful and over which I have 100% sovereignty.
* I am constantly investing in a better future for myself (and by extension for my family).

Do I miss human contact during the day? Well, I can meet up with friends for lunch. And I do, 
usually once a week. The other thing is: I'm currently sharing my house with 8 other people. What's even more unusual is
that I am the only male and everyone else is female. But let's not get into that. Ask me when you meet me. It has something
to do with Ukrainian refugees. The point is: loneliness is not a problem.

## Going solo: the bad bits













## Developing my own product: the first 6 months

 
* Why am I doing this? 
   * For myself to get some perspective on ground I've covered.

* Read
   * Kalzameus. What sections does he have?



# Content

Wins
- SEO Scam
- Email asking to sell for 10k
- Metallica
- Good process
- KPI growth


Fails
- Upgrading Postgres
- New score formats took 2 weeks too long

Whats next?
Introduce three new projects


Numbers
B2B Scoreboards





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
