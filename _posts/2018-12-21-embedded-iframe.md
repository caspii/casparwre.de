---
layout: post
title: How to embed a scoreboard from Keepthescore.co
---

This is a post demonstrating how to embed a scoreboard or leaderboard<a> using an iframe from the webapp I made. What's quite nice is that it will update automatically without the page reloading.

First of all you need to go over to <a href="https://keepthescore.co/">keepthescore.co</a> and create your scoreboard. Then grab the URL using the "Publish" button and add `?minimal=True` to the end of it.

Now add the following (example) code to your page:

```html
<iframe height="420px" width="100%"
 scrolling="no"
 src="https://keepthescore.co/game/3SdSIAy3s_s1r?minimal=True"
 style="border:none;">
</iframe>
```


Here's what an embedded scoreboard looks like:

<iframe height="400px" width="100%"
 scrolling="no"
src="https://keepthescore.co/game/3SdSIAy3s_s1r?minimal=True"
style="border:none;">
</iframe>

And here's an embedded leaderboard:

<iframe height="300px" width="100%"
 scrolling="no"
src="https://keepthescore.co/view/3SdSIAy3s_s1r?minimal=True"
style="border:none;">
</iframe>

If you have feedback then <a href="mailto:caspar.wrede@gmail.com">write me a mail</a>.
