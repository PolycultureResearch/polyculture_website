+++
title = "A theory of the business"
description = "We run analysis after analysis to inform specific decisions, and then we throw them away. I think we could be building a theory of what moves the business."
date = 2026-08-18
[taxonomies]
tags = ["metric trees"]
[extra]
image = "/images/seedlings_in_newspaper.jpeg"
+++

One thing I love about being a data scientist is being part of strategic decisions. I'm rarely the one making the decision, but I'm informing the decision with evidence. I like learning how people make decisions, and translating their questions into methods and analysis that really speak to the decision they are making.

But it's always frustrated me that, for all the analysis and experiments we conduct to inform specific decisions, we rarely gather all those little analyses together into a broader theory of what moves the business. We're great at informing decisions like "should we release our new onboarding flow?" or "what marketing messaging attracts users with the highest lifetime value?" or "should we have different prices in different countries?" Those analyses are valuable for the specific decision they are designed for, and then they are discarded. I think we could do better. I think that as we conduct each analysis we could build a theory of what works and doesn't work, what our users really want and are willing to pay for, and what makes them churn or stick around. Polyculture Research is structured around helping companies build that kind of theory.

It's not that *no one* synthesizes all of our analysis. That work is most often left to product managers and executive teams. They're very good at it, drawing on their experience within and beyond the company to build a theory of what really matters to accomplish the company's goals. They hash it out in business meetings. They do that synthesis work in a less formal, more intuitive way than we would as scientists.

That difference opens a communication gap between the data scientists and the executive team. I've seen this rift grow at several companies: executives see the data scientists as myopic, too deep in the weeds of a particular analysis to have much to say about the business as a whole. Data scientists see the executives as unrigorous, unable to distinguish between evidence and their own biases. In that situation, data teams start to feel sidelined from the important decisions and executive teams question the value of their investment in data science. 

I think that building a theory of the business could help. Most data scientists started out as scientists of some other kind, and as scientists, we have extensive training in theory building. It would be absurd in the context of basic research to publish the results of a study without connecting it to broader theory about why things happen. I think we need to use some of those science tools to build theory in collaboration with executive teams. 

## A conceptual map

One way to build a theory of a business is to map out the relationships between metrics: what affects what and when. We data scientists are generally really good at tracking each metric — revenue, churn, even complicated ones like activation and lifetime value. It's less common to track the relationships between those metrics. At VSCO, I learned the value of mapping out a conceptual model of the business with executives, on a whiteboard or Miro or similar. Just boxes for metrics — things we can know and measure — and arrows for causal relationships. 

Some of those causal relationships are simple, deterministic relationships, like `new memberships` × `average selling price` = `new revenue`. Those get solid arrows. Others are influence relationships, where the effect is probabilistic, like increases in `web visits` tending to cause increases in `signups`. Those get dotted line arrows.

A conceptual map like that (and the process of drawing it out with stakeholders) holds a lot of value all by itself. The time invested pays off in alignment and understanding of the business context needed for good data science. I do it with almost all my clients now.

But it took me a while to realize that what we were creating could be used for even more than that. I read about metric trees, where you populate that kind of diagram with live metrics from a data warehouse, creating something akin to a metrics dashboard, but with causal relationships drawn explicitly. They invite users to think about how the metrics they can move ladder up to the outcome metrics that matter most to the business. I started thinking that these diagrams are essentially a DAG, a directed acyclic graph, mapping causality in very much the same way that a statistician would begin the formal process of designing a causal inference analysis. If we define the relationships formally, we can compute over them, and do all sorts of cool things to build a theory of the business.

That last part is what I've been working on. I built an open source package called [Breakdown](/posts/introducing-breakdown/) for defining a metric tree formally, populating it from the data warehouse, and doing analysis on it. Right now it allows you to: 
- Visualize the metric tree
- Conduct a statistically rigorous automated root cause analysis when a metric you care about changes
- Simulate what would happen if you could change one or more metrics, and how that affects key metrics downstream

I think all of these can help build a theory of the business and align on that theory across teams. But I also can't help but think about other ways we could use metric trees to build theory over time. We could keep track of all our controlled experiments, our A/B tests, and the way they affected not just the target outcome of that experiment, but the whole business. With a massive collection of user-level results like that, we could treat experiment assignments as instrumental variables and do all kinds of causal analysis of what really moves our business. Or, we could replace funnel visualizations with something much more rigorous and probabilistic by following users from one state to the next (e.g., signup → trial → payment → retention) and over time creating an understanding of what moves users from one to the next.

I'm excited about metric trees because I think that thinking about metrics relationally opens possibilities for building and testing theory. Reach out if you want to talk metric trees.
