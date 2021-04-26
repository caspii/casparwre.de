---
layout: post
title: How to embed an online scoreboard using an iframe
canonical_url: 'https://keepthescore.co/blog/posts/embedded-online-scoreboard/'
---

This is a post demonstrating how to embed a scoreboard or leaderboard using an iframe for [Keepthescore.co](https://keepthescore.co). What's quite nice is that it will update automatically without the page reloading.

1. First of all you need to go over to [Keepthescore.co](https://keepthescore.co) and create your scoreboard. You can do this without registering or providing an email address. Pretty cool, no?
2. Click the "Share" button at the top of your scoreboard.
3. Click the copy button next to the embed code.
4. Paste the code into your page (e.g. Wordpress, Wix, Square, etc.)
5. That's it!


Here's what an embedded scoreboard looks like:

<iframe id="iframe-3SdSIAy3s_s1r" src="https://keepthescore.co/embed/3SdSIAy3s_s1r/" style="width:100%;border:none;"></iframe><script>window.onmessage = (e) => {if (e.data.hasOwnProperty("frameHeight")){document.getElementById("iframe-" + e.data.board_token).style.height = `${e.data.frameHeight + 40}px`;}};</script>

Here's what a leaderboard looks like. It also has some custom colours, just because.

<iframe id="iframe-yodpwvaeapr" src="https://keepthescore.co/embed/yodpwvaeapr/" style="width:100%;border:none;"></iframe><script>window.onmessage = (e) => {if (e.data.hasOwnProperty("frameHeight")){document.getElementById("iframe-" + e.data.board_token).style.height = `${e.data.frameHeight + 40}px`;}};</script>
