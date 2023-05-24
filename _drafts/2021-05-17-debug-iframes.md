---
layout: post
title: TEST FOR EMBEDDED IFRAME
canonical_url: 'https://keepthescore.com/blog/posts/embedded-online-scoreboard/'
---

This is a draft article which should not be publised. It's only good for testing iframe embeds locally.

To see this article run `jekyll serve --drafts`

<iframe id="iframe-kuuoxfbybqr" src="http://localhost:5000/embed/kuuoxfbybqr/" style="width:100%;border:none;"></iframe><script>window.onmessage = (e) => {if (e.data.hasOwnProperty("frameHeight")){document.getElementById("iframe-" + e.data.board_token).style.height = `${e.data.frameHeight + 40}px`;}};</script>

That's all, bye!