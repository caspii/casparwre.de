---
layout: post
title: Coding with AI finally works
description: The age of sail is behind us, the age of steam is coming
image: /images/vibe_coding.jpg
---

![Vibe coding](/images/vibe_coding.jpg)

Looking back, we will forget how totally overhyped AI coding was before it got useful. If you been following social media around this topic in 2023, you would
have assumed that the current AI tools were already 95% of the way there towards making production-ready code.

That was completely wrong back then and is still mostly wrong in 2025. However, the utility and acceleration is real.


## How it started

It started with pasting blocks of code into ChatGPT and, later, CLaude.ai. Then came the interminable lists of plugins that
my IDE tried to hook me up with. I found all of them lacking.

## How it's going

Then I started using [Claude-Code](https://docs.anthropic.com/en/docs/claude-code/overview), a true _agentic_ coding tool. 
Agentic means that the AI is able to form a high-level plan and then work through it step by step. It goes beyond the "action and response" 
behavior of earlier AI tools. What does that mean? Think of a Google search: you type in a search term and hit enter. That's the action. Then you get the 
search results. That's the response. You are done. It's very fast.


Agentic coding is much slower. You can see the AI working through the problem, seeing it think. (As an aside, we say 
that AI is a "black box", which is true on one level. But on another level you can actually see it working in plain english.)

I have already used AI extensively on my main project, [Keepthescore.com](https://keepthescore.com/). 
And I am a beginning to experiment with writing projects from scratch using AI.

## Some principals I use when using AI

* If it's a big task, ask the AI to make a plan first, then implement in steps. Even better, get the AI to write it down and use the plan as a working document.
* Get the AI to write tests for every feature before it makes the actual feature. Writing tests used to be essential and painful. Now writing tests is essential and easy. 
* Ensure you have good documentation. If using Claude Code begin with `/init`
* Work in branches, commit frequently (using the AI) and don't be afraid to roll back
* You will end up in "doom loops" some of the time: the AI took a wrong turn and fixing it is getting more and more painful. Throw everything away and then start again.



## Some projects I am working on right now

Here is a list of things I am working on right now as side-projects, all of them making heavy use of AI coding:

* [Costcam.app](https://costcam.app/): Instant price estimates from photos
* [Zip1.io](https://zip1.io/): a URL shortener for developers
* [Scorejudge.com](https://scorejudge.com): A tool to make competition judging easy.
* [Scorejudge.com](https://scorejudge.com): A tool to make competition judging easy.
* [QRPage.co](QRPage.co): A mini-site builder with integrated QR code.




