# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal website and blog for Caspar von Wrede (casparwre.de), hosted on GitHub Pages. The site showcases projects, blog posts about software development and bootstrapping, and various interactive pages.

## Development Commands

### Setup
1. Install Ruby 3.3.x via `chruby` + `ruby-install` (the repo's `.ruby-version` pins `ruby-3.3.10`).
2. Install gems: `bundle install`

### Development
- **Start local server**: `bundle exec jekyll serve`
- **Build site**: `bundle exec jekyll build` (outputs to `_site/`)
- **Update gems**: `bundle update`

### Image Processing
- **Resize images**: `sips -Z 1024 image.jpg` (macOS, keeps aspect ratio)

## Architecture

### Jekyll Structure
- **`_posts/`**: Blog posts in Markdown format (YYYY-MM-DD-title.md)
- **`_layouts/`**: Page templates (default.html, page.html, post.html)
- **`_includes/`**: Reusable components (analytics.html, footer.html, comments.html — `comments.html` loads Hyvor Talk)
- **`_drafts/`**: Unpublished blog posts
- **`_site/`**: Generated static site (do not edit directly)

### Frontend Assets
All third-party assets are loaded from CDNs — there is no Node/Yarn build step.
- **Bootstrap 5**: UI framework (CSS + JS bundle from jsDelivr)
- **Bootstrap Icons**: Icon library (replaces Font Awesome and bootstrap-social)
- **Chart.js**: Data visualization (used in some posts via `custom_js` front-matter)
- **Typed.js**: Typing animation on the homepage
- **Tocbot**: Table of contents on selected long-form posts

Per-page scripts can be loaded by listing them under `custom_js:` in a page's front matter; `_layouts/default.html` injects them into `<head>`.

### Special Pages
- `/blog/`: Blog listing
- `/projects/`: Project list

### Deployment
- Hosted on GitHub Pages (`gh-pages` branch)
- Custom domain configured via CNAME file
- SSL provided by GitHub Pages

## Key Configuration

- **`_config.yml`**: Jekyll site configuration
  - Permalink structure: `/blog/:title/`
  - Plugins: jekyll-seo-tag

- **`Gemfile`**: Ruby gems — `github-pages`, `webrick`, `faraday-retry`

## Notes

- No test suite exists for this project
- Jekyll processes Markdown files with YAML front matter
- The site uses Liquid templating for dynamic content
- Images should be optimized before adding to keep the repository size manageable
