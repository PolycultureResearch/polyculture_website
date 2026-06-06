# Homepage redesign — notes & handoff

Aesthetic redesign of the homepage, built to stay fully editable in plain markdown/TOML so Zola keeps doing the building. Nothing here requires a special export to continue in Claude Code or locally — it's all in the repo.

## Preview it

```bash
zola serve
# open http://127.0.0.1:1111
```

Watch the terminal for any Tera/template errors (I couldn't run `zola` in my environment, so this is the first real build of these changes). If something errors, it'll almost certainly be in `themes/polyculture/templates/index.html` or `content/_index.md`.

## What changed

| File | Change |
|------|--------|
| `content/_index.md` | Homepage is now data-driven. Frontmatter `[extra]` holds the intro line, service cards, stats, and CTA. The three narrative sections are wrapped in `{% band() %}` shortcodes (alternating backgrounds + a photo each). |
| `themes/polyculture/templates/index.html` | Renders hero + scroll cue, intro band, service-card grid, the prose bands, stats strip, and a slate CTA band — all from the frontmatter above. |
| `themes/polyculture/templates/shortcodes/band.html` | New. Full-width section band with optional side image. Keeps prose in markdown. |
| `themes/polyculture/templates/shortcodes/figure.html` | New. Captioned image for use anywhere in body markdown. |
| `themes/polyculture/sass/css/main.scss` | Appended styles: bands, service cards, stats, intro, CTA, eyebrow labels, figures, scroll cue. Uses the existing color vars; fuchsia + electric blue now actually appear. |
| `CLAUDE.md` | Typography spec updated: headings are now **Figtree** (was Fraunces), per your call. Body stays Source Serif 4. |
| `content/services.md`, `content/about.md` | Contact email aligned to `devon@`. |

## How to edit each piece (all plain text, Zola rebuilds)

**Hero** — `config.toml` → `[extra.hero]` (title, image, image_alt). You can also add `subtitle = "..."` there if you want a line under the big title.

**Intro line, service cards, stats, CTA** — `content/_index.md` frontmatter:
- `intro` / `intro_lead` — the statement under the hero. `<em>...</em>` shows in fuchsia.
- `[[extra.services]]` — one block per card. `icon` = `infrastructure` | `analytics` | `predictive` | `sustainability`.
- `[[extra.stats]]` — one block per stat; values alternate fuchsia/blue automatically.
- `[extra.cta]` — closing band text + button.

**Narrative prose + photos** — `content/_index.md` body. Each section is:
```
{% band(bg="cream", image="/images/your_photo.jpeg", image_alt="...", image_side="right") %}
## Heading
Markdown prose...
{% end %}
```
- `bg` = `cream` | `white` | `mist`
- `image_side` = `left` | `right`
- Drop `image=` / `image_alt=` entirely for a text-only centered band.

**Photos** — I used placeholders from `static/images/` so the build doesn't 404. Swap the `image=` paths for whatever you prefer. Current placeholders:
- Section 1 → `guatemala_onion_growers.jpeg`
- Section 2 → `seedlings_in_newspaper.jpeg`
- Section 3 → `ucsc_field_overlooking_monterrey_bay.jpeg`

To add a captioned photo elsewhere (e.g. About page):
```
{{ figure(src="/images/devon_in_corn.jpeg", alt="...", caption="...") }}
```

## Still open / your call

- **Email inconsistency:** `contact.md` still uses `hello@polycultureresearch.com`; everything else (and the schema.org block in `base.html`) uses `devon@`. Pick one canonical address and I'll align all of them.
- **Hero title brackets:** "Measure what [really] matters" renders the square brackets literally. Intentional (code-diff vibe)? If not, we can style `really` in fuchsia instead.
- **Roll the same system to Services & About:** the `band` / `figure` shortcodes and card/stat styles are reusable. Services especially is still "coming soon" — good candidate for the card treatment next.

## If you continue in Claude Code

No migration needed — just open the repo. These notes + `CLAUDE.md` are the full context. The only thing I couldn't do here that Claude Code can is run `zola serve` / `zola build` to verify the render.
