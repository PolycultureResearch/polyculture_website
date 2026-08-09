+++
title = "A theory of the business"
description = "We run analysis after analysis to inform specific decisions, and then we throw them away. I think we could be building something cumulative instead."
date = 2026-08-08
draft = true
[taxonomies]
tags = ["metric trees"]
[extra]
image = "/images/seedlings_in_newspaper.jpeg"
+++

One thing I love about being a data scientist is being part of strategic decisions. I'm rarely the one making the decision, but I'm informing the decision with evidence. I like learning how people make decisions, and translating their questions into methods and analysis that really speak to the decision they are making. It's a thrill.

But it's always frustrated me that, for all the analysis and experiments we conduct to inform specific decisions, we rarely gather all those little analyses together into a broader theory of what moves the business. We're great at informing decisions like "should we release our new onboarding flow?" or "what marketing messaging attracts users with the highest lifetime value?" or "should we have different prices in different countries?" Those analyses are valuable for the specific decision they are designed for, and then they are discarded. I think we could do better. I think that as we conduct each analysis we could build a theory of what works and doesn't work, what our users really want and are willing to pay for, and what makes them churn. Polyculture Research is structured around helping companies do that.

It's not that no one synthesizes all of our analysis. That's most often left to product managers and executive teams. They're very good at it, drawing on their experience within and beyond the company to build a theory of what really matters to accomplish the company's goals, hashing it out in business meetings. They just do that data synthesis in a less formal, more intuitive way than we would as scientists.

That informal version does a lot of work, and I don't want to be dismissive of it — it is often right, and it is always faster. But it has some predictable weak spots, and they're the ones our training is meant to address. An intuitive theory lives in people's heads, so it isn't written down anywhere, can't be checked against the record, and walks out the door when someone leaves. It gets updated by whatever moved most recently and most memorably. And it has no way to express how sure anyone is about any of it. The parts of the theory that everyone would bet the quarter on and the parts that are really just one person's hunch from a previous job sound exactly the same in a meeting.

## A conceptual map

One way to build a theory of a business is to map out the relationships between metrics: what affects what and when. We data scientists are generally really good at tracking each metric — revenue, churn, even complicated ones like activation and lifetime value. It's less common to track the relationships between those metrics. At VSCO, I learned the value of mapping out a conceptual model of the business with executives, on a whiteboard or Miro or similar. Just boxes for metrics — things we can know and measure — and arrows for causal relationships. Some of those causal relationships are simple, deterministic relationships, like `new memberships` × `average selling price` = `new revenue`. Those get solid arrows. Others are influence relationships, where the effect is probabilistic, like increases in `web visits` tending to cause increases in `signups`. Those get dotted line arrows.

A conceptual map like that (and the process of drawing it out with stakeholders) holds a lot of value all by itself. The time invested pays off in alignment and understanding of the business context needed for good data science. I do it with almost all my clients.

But it took me a while to realize that what we were creating could be used for even more than that. I read about metric trees, where you populate that kind of diagram with live metrics from a data warehouse, creating something akin to a metrics dashboard, but with causal relationships drawn explicitly, inviting users to think about how the metrics they can move ladder up to the outcome metrics that matter most to the business. I started thinking that these diagrams are essentially a DAG, a directed acyclic graph, mapping causality in very much the same way that a statistician would begin the formal process of designing a causal inference analysis. If we define the relationships formally, we can compute over them, and do all sorts of cool things to build a theory of the business.

That last part is what I've been working on. I built an open source package called Breakdown for defining a metric tree formally, populating it from the data warehouse, and computing over it — including a rigorous, automated root cause analysis when something moves. I've written about that [here](/posts/introducing-breakdown/).
