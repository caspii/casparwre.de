---
layout: post
title: How to embed an online scoreboard using an iframe
canonical_url: 'https://keepthescore.co/blog/posts/embedded-online-scoreboard/'
---

This is a post demonstrating how to embed a scoreboard or leaderboard using an iframe for [Keepthescore.co](https://keepthescore.co). What's quite nice is that it will update automatically without the page reloading.

First of all you need to go over to [Keepthescore.co](https://keepthescore.co) and create your scoreboard. You can do this without registering or providing an email address. Pretty cool, no?. Then grab the URL using the "Publish" button.

Now add the following (example) code to your page:

```html
<iframe height="420px" width="100%"
 scrolling="no"
 src="https://keepthescore.co/board/3SdSIAy3s_s1r/"
 style="border:none;">
</iframe>
```


Here's what an embedded scoreboard looks like:

<iframe height="420px" width="100%"
 scrolling="no"
src="https://keepthescore.co/board/3SdSIAy3s_s1r/"
style="border:none;">
</iframe>

And here's an embedded leaderboard:

<iframe height="300px" width="100%"
 scrolling="no"
src="https://keepthescore.co/view/3SdSIAy3s_s1r/"
style="border:none;">
</iframe>

If you have feedback then <a href="mailto:caspar.wrede@gmail.com">write me a mail</a>.
