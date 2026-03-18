# Polyculture Research Website

Website for Polyculture Research — data science and analytics consulting for sustainability-focused companies.

**Live site:** https://polycultureresearch.github.io/polyculture-research

## Tech Stack

- **[Zola](https://www.getzola.org/)** — Fast static site generator written in Rust
- **[Vonge](https://github.com/jroimartin/vonge)** — Clean, minimal Zola theme
- **GitHub Pages** — Hosting via GitHub Actions

## Prerequisites

Install Zola:

```bash
# macOS
brew install zola

# Other platforms: https://www.getzola.org/documentation/getting-started/installation/
```

## Local Development

```bash
# Start dev server with live reload
zola serve

# Build for production
zola build
```

The dev server runs at `http://127.0.0.1:1111` by default.

## Project Structure

```
├── content/
│   ├── _index.md          # Homepage (configured via content_blocks)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── posts/             # Blog posts
│   ├── projects/          # Project case studies
│   └── services/          # Services page
├── sass/
│   └── css/
│       ├── global.scss    # Main stylesheet (imports theme + overrides)
│       └── _custom.scss   # Custom component styles
├── static/
│   └── images/            # Static images
├── templates/
│   └── components/
│       └── hero.html      # Custom full-bleed hero (overrides theme)
├── themes/
│   └── vonge/             # Vonge theme (git submodule)
└── config.toml            # Site configuration
```

## Configuration

Site settings are in `config.toml`:

- **Navigation** — Header and footer menus
- **Content blocks** — Homepage sections (hero, projects, content blocks)
- **Theme settings** — Colors, typography (via sass overrides)

## Deployment

The site deploys automatically to GitHub Pages when pushing to `main` via GitHub Actions.

Manual build:

```bash
zola build
# Output is in ./public/
```

## Customization

### Colors & Typography

Edit `sass/css/global.scss`:

- `$primary-color` — Fuchsia (#FF2E7E) for CTAs
- `$secondary-color` — Electric Blue (#2D9CDB) for links
- `$slate` — Slate (#3D4F5F) for headings
- `$background-color` — Warm Cream (#FAF7F2)

Fonts: Fraunces (headings), Source Serif 4 (body)

### Adding Content

**New blog post:**
```bash
# Create content/posts/my-post.md
+++
title = "Post Title"
description = "Brief description"
date = 2024-03-01
[taxonomies]
tags = ["tag1", "tag2"]
[extra]
image = "/images/featured.jpg"
+++

Post content here...
```

**New project:**
```bash
# Create content/projects/project-name.md
+++
title = "Project Title"
description = "Brief description"
date = 2024-03-01
[extra]
image = "/images/project.jpg"
+++

Project details...
```
