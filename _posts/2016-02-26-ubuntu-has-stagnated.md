---
layout: post
title: Ubuntu development has stagnated
custom_js:
  - Chart.min.js
---

Last year [I ranted](http://blog.kittysplit.com/goodbye-ubuntu/) about the state of Ubuntu and claimed that it had a general smell of decay and abandonment. This time I decided to try and find some concrete evidence to back up my claim and wondered whether mailing list activity would be a good proxy for measuring the health of the project.

So I wrote a [small script](https://github.com/caspii/analyse-mailing-list) that analyses some [Ubuntu mailing lists](https://lists.ubuntu.com/) (each one can be downloaded as an archive file). The script simply counts the mails sent to each list in a 6 month period.

Here's what I found.

## Ubuntu devel mailing list

This is the main mailing list for Ubuntu developers and as such you'd hope it's a lively place for discourse. The large dropoff at the beginning of 2007 is due to the establishment of a new mailing list for users that were [creating too much noise](https://lists.ubuntu.com/archives/ubuntu-devel/2006-December/023022.html) in the development channel. Even so, the downward trend in the last few years is very clear, with only 30% of the activity last year compared to 2009.

<canvas id="ubuntuDevel" width="600" height="300"></canvas>

## Ubuntu server

The mailing list for server developers saw an even more drastic decline, with current participation not even 10% of what it was 6 years ago.

<canvas id="ubuntuServer" width="600" height="300"></canvas>

## Ubuntu Desktop

Unfortunately, the picture is also bleak for the desktop mailing list. A spike can be seen around the time that Unity was released but since then participation has plummeted. 2015 saw the least number of mails ever written to this mailing list.

<canvas id="ubuntuDesktop" width="600" height="300"></canvas>

## In summary

Of course, there may be other reasons for the decline in mailing list activity. For instance, developers may be using new channels these days.

However, one realistic conclusion in the face of this evidence is that Ubuntu project is in serious trouble. I won't hypothesize in any detail about the causes, bar saying that the push for mobile convergence is a high stakes bet that is most certainly drawing a lot of resources.

We can only hope that the bet hasn't already been lost.

(By the way, if you'd like me to analyse other mailing lists, let me know)

<script>
//-----------------
//--Ubuntu Devel
//-----------------
var ctx = $("#ubuntuDevel").get(0).getContext("2d");
var data = {
    labels: ["2004-H2", "2005-H1", "2005-H2", "2006-H1", "2006-H2", "2007-H1", "2007-H2", "2008-H1", "2008-H2", "2009-H1", "2009-H2", "2010-H1", "2010-H2", "2011-H1", "2011-H2", "2012-H1", "2012-H2", "2013-H1", "2013-H2", "2014-H1", "2014-H2", "2015-H1", "2015-H2"],
    datasets: [
        {
            label: "Number of mails",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "#dd4814",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [2852, 5662,5513,5016,4098,758,1028,788,1412,1361,1460,1081,1324,1317,994,859,815,1147,509,443,207,210,255]
        }
    ]
};
var myLineChart = new Chart(ctx).Bar(data, {
    scaleShowLabels: true,
    barValueSpacing : 2,
    responsive: true
});

//-----------------
//--Ubuntu Server
//-----------------
var ctx = $("#ubuntuServer").get(0).getContext("2d");
var data = {
    labels: ["2005-H2", "2006-H1", "2006-H2", "2007-H1", "2007-H2", "2008-H1", "2008-H2", "2009-H1", "2009-H2", "2010-H1", "2010-H2", "2011-H1", "2011-H2", "2012-H1", "2012-H2", "2013-H1", "2013-H2", "2014-H1", "2014-H2", "2015-H1", "2015-H2"],
    datasets: [
        {
            label: "Number of mails",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "#dd4814",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [18,188,131,166,577,786,649,533,553,804,545,808,282,305,117,204,125,121,106,66,62]
        }
    ]
};
var myLineChart = new Chart(ctx).Bar(data, {
    scaleShowLabels: true,
    barValueSpacing : 2,
    responsive: true
});

//-----------------
//--Ubuntu Desktop
//-----------------
var ctx = $("#ubuntuDesktop").get(0).getContext("2d");
var data = {
    labels: ["2005-H1", "2005-H2", "2006-H1", "2006-H2", "2007-H1", "2007-H2", "2008-H1", "2008-H2", "2009-H1", "2009-H2", "2010-H1", "2010-H2", "2011-H1", "2011-H2", "2012-H1", "2012-H2", "2013-H1", "2013-H2", "2014-H1", "2014-H2", "2015-H1", "2015-H2"],
    datasets: [
        {
            label: "Number of mails",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "#dd4814",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [4, 143,591,229,145,209,267,297,243,245,217,132,412,439,304,255,132,132,125,88,59,96
],        }
    ]
};
var myLineChart = new Chart(ctx).Bar(data, {
    scaleShowLabels: true,
    barValueSpacing : 6,
    responsive: true
});

</script>
