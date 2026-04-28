---
layout: post
title: "My first programmatic SEO play: auto-updating rankings on Leaderboarded"
description: I just launched five auto-updating Top X ranking pages on Leaderboarded.com. They pull data from the GitHub API every Monday, show week-over-week movement, and are written to be backlink magnets. Here's exactly how the system works and what I learned building it.
image: /images/programmatic-seo-rankings.png
---

![A pencil sketch of a horizontal bar chart with five ranked entries, with up and down arrows next to each.](/images/programmatic-seo-rankings.png)

I just shipped my first programmatic SEO play on [Leaderboarded.com](https://leaderboarded.com). Five auto-updating "Top X" ranking pages, pulling fresh data from the GitHub API every Monday, with a "Move" column showing how each entry rose or fell since last week.

## What I built

Five pages, all live under [leaderboarded.com/rankings/github/](https://leaderboarded.com/rankings/github/):

1. [Top Rust Crates](https://leaderboarded.com/rankings/github/top-rust-crates/)
2. [Top Go Libraries](https://leaderboarded.com/rankings/github/top-go-libraries/)
3. [Top Python ML Libraries](https://leaderboarded.com/rankings/github/top-python-ml-libraries/) — Hugging Face transformers, PyTorch, scikit-learn and the rest of the ML ecosystem
4. [Top React UI Libraries](https://leaderboarded.com/rankings/github/top-react-ui-libraries/)
5. [Top TypeScript Dev Tools](https://leaderboarded.com/rankings/github/top-typescript-dev-tools/)

Each page has 50 entries, a freshness date, and a "Move" column that fills in from week 2 onward.

## Why programmatic SEO

There are tens of thousands of "top X" search queries with real volume but no good consolidated answer. Each individual query has a small audience, but in aggregate they are huge. If I can produce hundreds of these pages that are *actually useful and accurate*, I get a long-tail traffic stream that compounds.

It's a particularly good fit for [Leaderboarded](https://leaderboarded.com) because the data already exists in structured form (GitHub stars, podcast charts, sports tour rankings — all public, all quantitative) and because the product is literally a leaderboard maker. Visitors arrive looking for "top React libraries", see a polished ranking with a Move column, and the natural next thought is "wait, I could make one of these for my own thing."

## How the system works

Every Monday at 04:00 UTC a Linux cron runs a Flask command that calls the GitHub Search API for each ranking's query, computes ranks with competition tie-breaking, and compares against the previous snapshot. If the `(rank, entry_key, score)` set is identical, no new snapshot is written — the refresh is idempotent. Otherwise it writes a new snapshot with `prev_rank` denormalised so the Move column renders without joins at request time.

Five hours later, a second cron emails me a markdown digest: which pages refreshed, what failed, the biggest climbers and fallers. Errors flow into Sentry tagged `component:seo_rankings`.

The editorial intro on each page is generated once at ranking creation by Claude Sonnet, grounded in the actual top-10 data so it can name specific entries. Roughly $0.02 per intro. After that it's frozen — I don't auto-regenerate weekly because Google has gotten very aggressive about programmatically-spinning content.

The schema is three Postgres tables (`seo_ranking`, `seo_ranking_snapshot`, `seo_ranking_entry`) designed to port directly to an in-product "Move" column feature later. The pilot is the public prototype.

## What's next

This is a 90-day pilot with a 30-day checkpoint. If at day 30 fewer than four of the five pages are indexed, that's a kill signal. If they're indexing cleanly, Phase 2 ships five podcast-chart rankings from the public iTunes RSS feed, and Phase 3 is niche pro-sport rankings (pickleball, cornhole, disc golf, padel, kiteboarding) — the strongest brand fit with [KeepTheScore.com](https://keepthescore.com), my parent product.

The aim — and the reason I'm writing this post — is **backlinks**. If you write about Rust, ML, React, Go, or TypeScript and any of the five rankings above is useful to you, please consider linking to it. It tells Google these pages are worth surfacing for the next person searching for "top X" in your niche.

Reports back at day 30 and day 90.
