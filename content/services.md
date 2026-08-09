+++
title = "Services"
description = "We help sustainability-focused companies build the data foundation to make better decisions — for the business and for the planet."
template = "services.html"

[extra.cta]
title = "Not sure where to start?"
text = "Most engagements begin with a conversation about where data is slowing you down. Let's talk."
button_label = "Get in touch"
button_url = "mailto:hello@polycultureresearch.com"
+++

{% band(bg="cream", image="/images/ucsc_field_overlooking_monterrey_bay.jpeg", image_alt="Field overlooking Monterey Bay", image_side="right") %}
<span class="eyebrow">Measure what matters</span>

## Establish a Ground Truth

All companies have data. Most have metrics they measure the business by. But fewer have consistent, rigorous definitions of their metrics.  It may seem simple to define and track metrics like "active users" or "customers" or "revenue", but all too often, teams disagree on the definition or implementation of those metrics, and you might end up with conflicting numbers in your internal meetings, your board deck, and your sustainability report. If meetings ever derail on questions like "but is this data right?", you might need to step back and establish a ground truth for your metrics. 

It's a common situation, and fortunately, there's an established method to getting reliable and consistent metrics. We've done it for many companies. We work with you to define the metrics that drive decisions — and build them into your data systems so they're reliable, reusable, and trusted. This goes beyond dashboards. We build **data models** to transform raw data into usable signals using software engineering best practices, so that they are maintainable, explainable, tested, and ready for collaboration. We also build **semantic models**: a single source of truth for how your business defines its own success, captured in version-controlled code.

For sustainability-focused companies, this is especially powerful. Business KPIs and environmental indicators belong in the same system — revenue alongside carbon intensity, customer retention alongside supply-chain transparency. Tracking both together lets you see the whole picture, not just the part that's easy to count.

**What this looks like in practice:**

- Core business metric definitions — revenue, churn, retention, engagement — agreed on and written down
- Sustainability KPIs — carbon accounting, B Corp indicators, custom environmental metrics — built right alongside them
- A semantic data layer that makes metrics consistent across every tool your team uses
- Dashboards that surface the numbers people actually trust and act on
{% end %}

{% band(bg="white", image="/images/forest_hike.jpeg", image_alt="Hiking through a forest", image_side="left") %}
<span class="eyebrow">Know what's actually driving results</span>

## Understand What Moves Your Business

You made a change. Revenue went up. You launched a sustainability initiative. Engagement improved. But did the change *cause* the improvement — or would it have happened anyway?

Most business decisions are made on correlation, not causation. That usually works, until it doesn't — until you invest heavily in something that wasn't doing what you thought, or you give up on something that was working for reasons you didn't isolate.

We bring rigorous statistical methods to the question of *what's actually driving your outcomes*. When you can run experiments, we help you design them well and read the results honestly, including the parts that are inconclusive. When experiments aren't possible — market shifts, policy changes, historical data — we use causal inference methods to get as close to a real answer as the data allows.

This matters especially in sustainability work, where the pressure to show impact is high and the temptation to overstate it is real. We help you know.

**What this looks like in practice:**

- A/B test and experiment design — sample sizes, randomization, guardrail metrics
- Lift measurement for campaigns, product changes, and sustainability initiatives
- Causal analysis of historical data — difference-in-differences, synthetic controls, regression discontinuity
- Honest, clear reporting on what you know, what you don't, and how confident you should be
{% end %}

{% band(bg="mist", image="/images/alamany_farm.jpeg", image_alt="Alemany Farm", image_side="right") %}
<span class="eyebrow">Build trust in your data</span>

## Build Trust in Data by Building Trustworthy Data Products

When was the last time a meeting got derailed by "wait, is that number right?" That's the real cost of untrustworthy data — not the wrong answer itself, but the hours spent debugging, the decisions delayed, the team that quietly stops looking at the dashboards.

We've helped more than a dozen organizations get out of that situation, using the same approach every time: **software engineering best practices, applied to data**. Tests that catch broken pipelines before anyone sees a wrong number. Version control for your data models, so you know what changed and when. Modular, documented code that your team can understand, maintain, and hand off.

This foundation is also what makes AI applications trustworthy. Everyone is exploring how to use AI to make their business smarter. But AI is only as reliable as the data it runs on. We help you build the infrastructure that makes AI a genuine asset — not something you have to constantly second-guess.

**What this looks like in practice:**

- Automated data quality tests and pipeline monitoring
- Version-controlled, documented data transformations (dbt, Spark, Python)
- Data contracts and schema validation between teams and tools
- Alerts before bad data reaches your dashboards or your models
- AI-ready data infrastructure and context layers for LLM applications
- Documentation and training so your team owns it going forward
{% end %}

{% band(bg="white", image="/images/maravatio_creek.jpeg", image_alt="Creek in Maravatio", image_side="left") %}
<span class="eyebrow">Get ahead of what's coming</span>

## Predict Before You React

The most valuable insight arrives before a problem becomes a problem. Before a customer churns, not after. Before demand spikes, not while you're scrambling to respond. Before a supply-chain issue surfaces in your carbon report, not when it's already in the news.

Predictive modeling is about shifting from reactive to anticipatory. We build models that learn from your historical data to forecast what's likely to happen next — and we build them to be explainable, honest about uncertainty, and practical to actually use. No black-box systems. No promises we can't back up. Just a clearer view of what's coming, so you can make better decisions now.

This is as applicable to sustainability as to business. Predicting which suppliers are likely to fall short of environmental targets, or which product lines are driving the most scope 3 emissions, gives you time to intervene rather than just report.

**What this looks like in practice:**

- Customer churn prediction and early-warning systems
- Customer lifetime value estimation and segmentation
- Demand and inventory forecasting
- Behavioral cohort analysis and feature adoption modeling
- Environmental risk scoring and impact forecasting
- Experimentation frameworks for testing interventions before you scale them
{% end %}
