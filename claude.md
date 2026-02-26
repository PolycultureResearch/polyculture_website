# Polyculture Research Website - Zola + Vonge

## Project Overview

Build a professional consulting website for Polyculture Research using the Zola static site generator and the Vonge theme. The site will be deployed to GitHub Pages.

**Company:** Polyculture Research  
**Tagline:** "Measure what matters"  
**Owner:** Devon (PhD Environmental Studies, 10+ years startup data science experience)  
**Location:** Petaluma, California

## Target Audience

Small companies ($5-30M annual revenue) that are:
- Big/complex enough to need custom data science and analytics
- Too small to have an in-house data team
- Committed sustainability or environmental conservation
- Often B Corps or environmentally-focused businesses

## Core Services

1. **Data Infrastructure** - Data warehouse setup (Snowflake, BigQuery, Redshift), dbt transformation pipelines, BI dashboards (Tableau, Looker, Mode, Count.co)
2. **Core Analytics** - Business analytics (ARR, MRR, Churn, Retention, etc), product analytics (Monthly Active Users, cohort analysis, feature adoption, funnels and user journies)
3. **Predictive Analytics** - Churn prediction, customer segmentation, lifetime value modeling, demand forecasting, experimentation frameworks
4. **Sustainability Metrics** - Carbon accounting, supply chain transparency, B Corp metrics, custom environmental KPIs

## Key Messaging

- **"Measure what matters"** - Double meaning: measure business KPIs that drive decisions AND measure environmental metrics (clean air, water, livable planet)
- **Right-sized solutions** - Not over-engineering, not shortcuts
- **Startup velocity + academic rigor** - PhD researcher with experience in fast-moving startups
- **Business partner, not report factory** - Translating stakeholder questions into actionable metrics
- **Enable, don't gatekeep** - Documentation, training, no vendor lock-in
- **Automate the boring data work** - Get your people back to doing what they do best

## Professional Background (Devon)

**Current:**
- Founder, Polyculture Research (2024-present)
- Advising MagicMenu (pre-seed healthcare AI startup)

**Experience:**
- Data Science Manager at VSCO (2020-2024) - Led team of 5
- 7th employee at FastAF (2017-2020) - Scaled from 0 to $20M+ revenue
- Data Scientist at MileIQ (2015-2017)
- PhD Environmental Studies (2010-2015) - Research in Mexico on sustainable food systems

**Technical Skills:**
- Infrastructure: Snowflake, BigQuery, Redshift, dbt, Databricks
- BI Tools: Tableau, Looker, Mode, Count.co, SQL
- Modeling: Python, R, scikit-learn, pandas, statsmodels

## Site Structure

### Required Pages

1. **Homepage** (`/`)
   - Hero section with tagline
   - Problem/solution overview (you're growing fast, your data shouldn't slow you down)
   - Three service pillars with icons/cards
   - "Why different" section highlighting Devon's unique background
   - CTA to contact

2. **Services** (`/services/`)
   - Detailed breakdown of each service category
   - For each service: what it includes, typical engagement length, example outcomes
   - "How we work together" section (Discovery → Build → Enable)
   - CTA

3. **Case Studies** (`/case-studies/`)
   - Index page with 4 case study cards
   - Individual case studies (details anonymized):
     - "Building Analytics from Zero to Series A" (Data Infrastructure, B2C SaaS)
     - "Reducing Churn Through Early Intervention" (Predictive Analytics, B2B SaaS)
     - "Supply Chain Carbon Accounting" (Sustainability, Manufacturing)
     - "Personalization Through Behavioral Segmentation" (Predictive Analytics, E-commerce)
   - Each includes: challenge, approach, key metrics/outcomes

4. **About** (`/about/`)
   - Personal introduction
   - Professional timeline/experience
   - Approach and values
   - Technical toolkit
   - CTA

5. **Contact** (`/contact/`)
   - Contact form (can be simple for now)
   - Email address: contact@polycultureresearch.com (placeholder)
   - Location: Petaluma, California
   - Note about working with clients across the US

## Design Requirements

### Visual Style

**Using Vonge theme as base, customize:**
- Clean, contemporary, professional aesthetic
- Thoughtful use of white space
- Data-forward design sensibility
- Environmental without being "granola" - sophisticated sustainability focus

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Slate | #3D4F5F | Headers, nav, primary text emphasis, footer background |
| Accent 1 | Fuchsia | #FF2E7E | Primary CTAs, key highlights, hover states |
| Accent 2 | Electric Blue | #2D9CDB | Secondary accents, links, data viz, charts |
| Background | Warm Cream | #FAF7F2 | Page background |
| Text | Near Black | #1E1E1E | Body text |
| Light Slate | Light Gray | #E8EAED | Secondary UI elements, cards, borders, dividers |

**Design rationale:**
- Slate grounds the design with sophistication and trust
- Fuchsia is bold and unexpected—use sparingly for maximum impact (CTAs, hover states)
- Electric Blue represents the data/analytics side—use for links, charts, technical elements
- Warm cream background adds softness and approachability
- The fuchsia + blue combination represents human insight + analytical precision

### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | Fraunces | 700-800 | H1-H6, hero titles, section titles, logo |
| Body | Source Serif 4 | 400-600 | Body text, paragraphs, navigation, buttons |

**Design rationale:**
- **Fraunces** is a soft, "wonky" old-style serif with optical sizing. It has warmth and personality without being stuffy—says "I have a PhD but I don't take myself too seriously." The slight quirkiness pairs well with the bold fuchsia.
- **Source Serif 4** is highly readable and warm, with excellent optical sizing for body text. Creates a cohesive serif pairing while maintaining clear hierarchy.
- Both fonts are variable fonts with optical sizing, meaning they automatically adjust their design for different sizes.
- The serif pairing signals depth and credibility (academic side) while remaining warm and approachable.

### Key Design Elements
- Service cards/sections with icons
- Professional case study cards
- Timeline/experience visualization on About page
- Subtle animations/transitions (use theme defaults)
- Mobile-responsive (Vonge handles this)

## Content Guidelines

### Tone
- Professional but approachable
- Confident without being arrogant
- Direct and concise
- Technical when appropriate, but accessible to non-technical founders
- Emphasize practical outcomes over theoretical capabilities

### Writing Style
- Active voice
- Short paragraphs
- Bullet points for lists of capabilities
- Specific examples and metrics where possible
- Avoid buzzwords and jargon

## Technical Implementation

### Zola Setup
```bash
# Install Zola (if not already installed)
# macOS: brew install zola

# Create new site
zola init polyculture

# Add Vonge theme
cd polyculture
git init
git submodule add https://codeberg.org/daudix/duckquill.git themes/duckquill
```

### Configuration (`config.toml`)

```toml
base_url = "https://[USERNAME].github.io/polyculture-research"
title = "Polyculture Research"
description = "Data science and analytics consulting for sustainability-focused companies"
theme = "duckquill"
compile_sass = true
build_search_index = false
generate_feed = true

[markdown]
highlight_code = true
highlight_theme = "css"

[extra]
# Vonge theme configuration
tagline = "Measure what matters"
# Add other Vonge theme variables as needed
# Consult Vonge documentation for available options
```

### Content Organization

```
content/
├── _index.md           # Homepage
├── services/
│   └── _index.md       # Services page
├── case-studies/
│   ├── _index.md       # Case studies index
│   ├── zero-to-series-a.md
│   ├── churn-prediction.md
│   ├── carbon-accounting.md
│   └── customer-segmentation.md
├── about/
│   └── _index.md       # About page
└── contact/
    └── _index.md       # Contact page
```

### Frontmatter Structure

**Page template:**
```yaml
+++
title = "Page Title"
description = "SEO description"
date = 2024-02-07
template = "page.html"  # or theme template
+++
```

**Case study template:**
```yaml
+++
title = "Case Study Title"
description = "Brief description"
date = 2024-02-07
template = "page.html"

[extra]
client = "Anonymous"
industry = "B2C SaaS"
tags = ["Data Infrastructure", "Analytics"]
+++
```

## GitHub Pages Deployment

### Repository Setup
```bash
# Create GitHub repository: polyculture-research (or appropriate name)
# Initialize with README

# In project directory:
git remote add origin git@github.com:[USERNAME]/polyculture-research.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      
      - name: Install Zola
        uses: taiki-e/install-action@v2
        with:
          tool: zola@0.18.0
      
      - name: Build
        run: zola build
      
      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          cname: # Add custom domain if you have one
```

### Enable GitHub Pages
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

## Implementation Strategy

### Phase 1: Setup (30 minutes)
- [ ] Install Zola
- [ ] Create new Zola site
- [ ] Add Vonge theme as submodule
- [ ] Configure `config.toml`
- [ ] Initialize git repository
- [ ] Test local build (`zola serve`)

### Phase 2: Homepage (1 hour)
- [ ] Create homepage content in `content/_index.md`
- [ ] Hero section with tagline
- [ ] Service overview cards
- [ ] "Why different" section
- [ ] CTA sections

### Phase 3: Core Pages (2-3 hours)
- [ ] Services page with detailed offerings
- [ ] About page with timeline and background
- [ ] Contact page with form
- [ ] Navigation menu updates

### Phase 4: Case Studies (1-2 hours)
- [ ] Case studies index page
- [ ] Create 4 case study pages with content
- [ ] Style case study cards/layouts

### Phase 5: Polish (1 hour)
- [ ] Customize Vonge theme colors (forest green)
- [ ] Adjust typography if needed
- [ ] Add any custom CSS in theme override
- [ ] Test responsive design
- [ ] Optimize images

### Phase 6: Deploy (30 minutes)
- [ ] Create GitHub repository
- [ ] Set up GitHub Actions workflow
- [ ] Push to GitHub
- [ ] Enable GitHub Pages
- [ ] Test deployed site
- [ ] Configure custom domain (if available)

## Success Criteria

### Must Have
- [x] All 5 pages functional and complete
- [x] Mobile responsive
- [x] Clear navigation
- [x] Professional design consistent with brand
- [x] Working contact form (even if static)
- [x] Deployed to GitHub Pages
- [x] Fast loading (<2 seconds)

### Nice to Have
- [ ] Custom domain configured
- [ ] Contact form integrated with service (Formspree, etc.)
- [ ] Analytics tracking
- [ ] RSS feed for case studies
- [ ] Social media meta tags
- [ ] Custom favicon

## Content to Write

### Homepage Copy

**Hero:**
"Measure what matters"
"Data science and analytics consulting for sustainability-focused companies."
"Track the KPIs that drive business decisions and the metrics that matter for our planet—clean air, clean water, and a livable future."

**Problem:**
"You're growing fast. Your data shouldn't slow you down."
"Companies between $5M-$30M in revenue face a challenge: you need sophisticated analytics, but you're not ready for a full data team."

**Why Different:**
"Built for startup velocity, grounded in academic rigor"
"I'm not a typical consultant. With a PhD in Environmental Studies and over 10 years building data science functions at fast-moving startups, I bridge two worlds that rarely meet."

### Key Stats to Include
- Scaled data teams from zero to $20M+ revenue at FastAF
- Led 5-person data science team at VSCO
- PhD research in sustainable food systems
- 10+ years in startup data science
- 25+ technical tools expertise

## Theme Customization Notes

### Vonge Theme
- Clean, minimal design - good fit for professional consulting
- Blog-focused but adaptable for static pages
- Good typography and readability
- Check theme documentation for customization options
- May need custom templates for case studies grid view

### Custom CSS Location
- Add custom styles in `sass/custom.scss` (or theme override location)
- Override theme variables for color customization
- Keep customizations minimal to maintain theme updates

## Contact Form Options

Since this is static site:
1. **Formspree** (easiest) - Add action URL to form
2. **Netlify Forms** - If deploying to Netlify instead
3. **Google Forms** - Embed or link
4. **Email link** - Mailto as fallback
5. **Static placeholder** - For initial launch, can upgrade later

## SEO Considerations

- Use descriptive page titles
- Write compelling meta descriptions
- Use proper heading hierarchy (h1, h2, h3)
- Add alt text to images
- Include location information (Petaluma, CA)
- Target keywords: "data science consulting", "sustainability analytics", "startup analytics", "environmental metrics"

## Maintenance Plan

- Update case studies as new projects complete
- Add blog posts if desired (Zola/Vonge support this well)
- Keep Vonge theme updated
- Refresh technical toolkit as tools evolve
- Update experience timeline

## References

- Zola documentation: https://www.getzola.org/documentation/
- Vonge theme: https://duckquill.daudix.one/
- GitHub Pages docs: https://docs.github.com/en/pages
- Markdown guide: https://www.markdownguide.org/

## Notes for Claude Code

When implementing this:
1. Start with Zola installation and theme setup
2. Focus on content first, styling second
3. Use Vonge's built-in components where possible
4. Test locally frequently with `zola serve`
5. Commit changes incrementally
6. Keep customizations documented in comments
7. If Vonge doesn't support case studies grid, create custom template
8. Prioritize clean, maintainable code over complex features

## Final Checklist Before Launch

- [ ] All content proofread for typos
- [ ] All links working (internal and external)
- [ ] Contact information correct
- [ ] Responsive on mobile, tablet, desktop
- [ ] Images optimized for web
- [ ] Forms functional or appropriately handled
- [ ] 404 page configured
- [ ] Sitemap generated
- [ ] Meta tags complete
- [ ] Social sharing works properly
- [ ] Load time under 2 seconds
- [ ] Accessibility basics (contrast, alt text, heading hierarchy)
- [ ] GitHub Actions workflow tested
- [ ] Site works on gh-pages URL
- [ ] README.md written for repository

---

**Project Goal:** Create a professional, clean website that positions Polyculture Research as the go-to analytics consultant for sustainability-focused growing companies. The site should convey expertise without arrogance, technical capability without jargon, and environmental commitment without being preachy.

**Brand Essence:** Sophisticated data science meets genuine environmental impact. Startup velocity meets academic rigor. Business metrics meet planetary health. Measure what matters—both for the bottom line and for the future.
