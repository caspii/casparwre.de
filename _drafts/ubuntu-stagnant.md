---
layout: post
title: Ubuntu development has stagnated
custom_js:
  - Chart.min.js
---

Last year I ranted about the state of Ubuntu and claimed that it had a general smell of decay and abandonment. I decided to try and find some concrete evidence to back up my claim and wondered whether mailing list activity would be a good proxy for measuring the health of the project.

I wrote a small script that analyses the various Ubuntu mailing lists (each of the mailing lists can be downloaded as an archive file from this link). The script simply counts the mails sent to each list in the 2 halves of the year.

Here's what I found.

## Ubuntu Devel

This is the main mailing list of Ubuntu Developers. The large dropoff at the beginning of 2007 is due to the establishment of a new mailing list for users that were [creating too much noise](https://lists.ubuntu.com/archives/ubuntu-devel/2006-December/023022.html) in the development channel. Even so, the downward trend in the last few years is very clear.

<canvas id="ubuntuDevel" width="600" height="300"></canvas>

## Ubuntu server

The mailing list for server developers saw an even more drastic decline.

<canvas id="ubuntuServer" width="600" height="300"></canvas>





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
});


</script>
