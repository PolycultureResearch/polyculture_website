+++
title = "Home"

# -------------------------------------------------------------------
# Homepage content is data-driven below + prose in the body.
# Edit any text here in plain TOML / markdown; Zola rebuilds the page.
# -------------------------------------------------------------------

[extra]
# Lead statement shown directly under the hero.
# <em>...</em> renders in the fuchsia accent color.
intro = "Polyculture Research is a full-stack data science studio for mission-driven companies."
# intro_lead = "Polyculture Research is a full-stack data science studio for mission-driven companies."

# Services section header
services_eyebrow = "What we do"
services_heading = "We build trustworthy data systems."
services_intro = "From critical metrics to advanced statistics and machine learning — we meet you where your stack is."

# Service cards. icon = infrastructure | analytics | predictive | sustainability
[[extra.services]]
icon = "infrastructure"
title = "Data Infrastructure"
body = "Modern, cost-effective, portable data stacks — warehouses, dbt transformation pipelines, agentic analytics, and dashboards you can actually trust."

[[extra.services]]
icon = "analytics"
title = "Core Analytics"
body = "Define the business and product metrics that drive decisions. Set them down in version-controlled code. Inform critical decisions with solid evidence."

[[extra.services]]
icon = "predictive"
title = "Predictive Analytics"
body = "See the future with churn prediction, customer segmentation, lifetime value, demand forecasting, and trustworthy experimentation."

[[extra.services]]
icon = "sustainability"
title = "Sustainability Metrics"
body = "Carbon accounting, supply-chain transparency, B Corp and custom environmental KPIs — right alongside your business data."

# Stats strip. Add/remove freely; values alternate fuchsia / blue.
# [[extra.stats]]
# value = "12+"
# label = "Organizations' data systems built"

# [[extra.stats]]
# value = "2015"
# label = "Measuring what matters since"

# [[extra.stats]]
# value = "100%"
# label = "Your data, your warehouse — no lock-in"

# [[extra.stats]]
# value = "2"
# label = "Bottom lines we track: business + planet"

# Closing call-to-action band
[extra.cta]
title = "Ready to measure what matters?"
text = "Let's talk about your data challenges."
button_label = "Get in touch"
button_url = "mailto:devon@polycultureresearch.com"
+++

{% band(bg="cream", image="/images/guatemala_onion_growers.jpeg", image_alt="Onion growers in Guatemala", image_side="right") %}
## Data science for growth and impact

Yes, we can help you measure growth and understand what drives customer acquisition, we can build you a customer profile and a retention model, we can even predict your customers' future lifetime value. We're fluent in business metrics and the data systems that implement them. That stuff is important. But what if you have more than growth to measure?

If to you running a successful business means growing _and_ protecting our environment, understanding your customers _and_ understanding your social impact, we'd like to hear from you. We calculate sustainability indicators [right alongside traditional business metrics](@/posts/measure-what-really-matters.md). We use reliable, modern analytics and data science tools to gather all your source data, including those social and environmental impact indicators, and turn them into insights.
{% end %}

{% band(bg="white", image="/images/seedlings_in_newspaper.jpeg", image_alt="Seedlings started in newspaper pots", image_side="left") %}
## Build trust in data

Many companies find themselves in the position where they have a lot of data, but not much actionable insight into their business, because there's always the lingering doubt that the metrics are right. Business meetings get sidetracked by "is the data right?" conversations. We've helped many companies out of that situation.

Data can be complicated, but the playbook for building trustworthy analytics is straightforward. Define the metrics to measure the business, and reach consensus on those definitions across the company. Set those definitions down in code so they can be used over and over again -- treat them as a product. Use software engineering best practices like version control, automated testing, and documentation to make reliable data pipelines and transformations. Set up notifications when something goes wrong. Communicate metrics with robust indications of certainty. We've seen this straightforward plan transform data teams, and transform business meetings, at more than a dozen companies.
{% end %}

{% band(bg="cream", image="/images/ucsc_field_overlooking_monterrey_bay.jpeg", image_alt="Field overlooking Monterey Bay", image_side="right") %}
## Many sources of data, one source of truth

You have many sources of data: your marketing tools, web analytics, transaction data, carbon accounting. Some of the highest-value analytical questions require data from multiple sources. Which marketing platforms are helping us acquire customers with the highest lifetime value? What sustainability initiatives have the highest return on investment in terms of carbon footprint? These require analytics across data silos.

At Polyculture Research, we don't sell specialized solutions for understanding each kind of data in isolation. We don't even sell a mega platform that promises to handle all your data within its proprietary black box. We take a different approach. We help you set up the data stack that delivers for your company, and the data model that creates insights from raw data. You own your data, keep it in your data warehouse, and model it with proven, transparent, cost-efficient tools.

We can work with just about any data tool you have (we're experts in Snowflake, Databricks, BigQuery and more), and can work with your existing stack. We specialize in open-source and open-standards data technologies like dbt, Iceberg, and PyMC. Those tools tend to be the most secure, offer the most transparency and portability of your data, and deliver tremendous value.
{% end %}
