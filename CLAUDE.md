# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal website and blog for Caspar von Wrede (casparwre.de), hosted on GitHub Pages. The site showcases projects, blog posts about software development and bootstrapping, and various interactive pages.

## Development Commands

### Setup
1. Install Jekyll dependencies: `gem install github-pages jekyll jekyll-seo-tag webrick`
2. Install Node.js dependencies: `yarn install`

### Development
- **Start local server**: `jekyll serve`
- **Build site**: `jekyll build` (outputs to `_site/` directory)
- **Update Jekyll**: `gem update jekyll`

### Image Processing
- **Resize images**: `sips -Z 1024 image.jpg` (macOS command, keeps aspect ratio)

## Architecture

### Jekyll Structure
- **`_posts/`**: Blog posts in Markdown format (YYYY-MM-DD-title.md)
- **`_layouts/`**: Page templates (default.html, page.html, post.html)
- **`_includes/`**: Reusable components (analytics.html, disqus.html, footer.html)
- **`_drafts/`**: Unpublished blog posts
- **`_site/`**: Generated static site (do not edit directly)

### Frontend Assets
- **Bootstrap 4 + Bootswatch**: UI framework (via node_modules)
- **Chart.js**: Data visualization on homepage
- **Typed.js**: Typing animation effects
- **Font Awesome 4**: Icon library
- **Tocbot**: Table of contents generation for blog posts

### Special Pages
- `/blog/`: Blog listing with pagination
- `/unix101/`: Unix tutorial series
- `/passwords/`: Client-side password generator
- `/python-berlin/`: Python Berlin community page
- `/android-wallpapers/`: Wallpaper showcase

### Deployment
- Hosted on GitHub Pages (`gh-pages` branch)
- Custom domain configured via CNAME file
- SSL provided by GitHub Pages

## Key Configuration

- **`_config.yml`**: Jekyll site configuration
  - Permalink structure: `/blog/:title/`
  - Plugins: jekyll-seo-tag
  - Includes node_modules directory for asset access

- **`package.json`**: Frontend dependencies only (no build scripts)

## Notes

- No test suite exists for this project
- Jekyll processes Markdown files with YAML front matter
- The site uses Liquid templating for dynamic content
- Images should be optimized before adding to keep the repository size manageable