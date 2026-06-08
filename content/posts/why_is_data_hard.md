+++
title = "Why is data hard?"
description = "An accountant asked me why data is so hard. It made me think about the root causes of everything that can go wrong in delivering even the most basic analytics."
date = 2026-06-07
[taxonomies]
tags = ["measuring impact"]
[extra]
image = "/images/maravatio_creek.jpeg"
+++

After a long day of company planning, in a bar in San Francisco, a colleague asked me "there's something I've always wanted to ask. Why is data hard?"

I immediately knew what she meant. My team were in the midst of a data stack overhaul, moving massive troves of data to a modern data warehouse, and replacing 1000-line labyrinthine queries with modular, maintainable SQL code. With the data systems we inherited, we had been struggling to report even basic information: how many customers were active last month, how many of those converted, how many churned. Not a business meeting went by without someone asking, "but are these numbers right?"

So her question was a good one. This colleague lead the accounting department, where, for all the apparent similarities to the data work, uncertainty did not haunt the data. Transactional systems were designed to create a ledger, and the ledger represented reality. Any adjustments she needed to make were reconciled and set immutably into the record as she closed the books each month. And the definitions of metrics - revenue, profit, loss - those had GAAP definitions, widely accepted and known. Discrepancies were errors to be corrected or explained, not ambiguity to be managed. 

In analytics, though, most of our data is a byproduct of something else. Systems designed to do something for the user *also* log that activity in a dataset -- or at least they are supposed to. An app button's primary purpose is to serve a user something when clicked, the event it logs is a secondary function. Knowing something as simple as who clicked what when depends on complex logic for identifying users consistently, caching and sending large volumes of events, and managing schema evolutions over time. That behavioral data joins data from third-party tools, APIs, and replicas of backend databases. In analytics, the system of record is not a ledger, it's dozens of data collectors bolted on to systems designed to do something else, connected to a data warehouse by dozens of leaky pipes. 

And time is treacherous for analytics. Data can arrive late.  Did that conversion happen today, or did the event just arrive today? And what time zone are we talking about, really, when we say today? If we're measuring conversion, how long should we give users to convert before we count them in our metric, and how far in the past should we look for actions that might have influenced conversion? 

Before we can answer most business questions, we have to define our metrics and get consensus across the company on what those metrics mean.  Common terms like "churn" and "active user" often obscure the fact that finance, product, and marketing teams might be talking about completely different things (or worse, slightly different things) when they report those metrics. Often our consulting work starts with identifying the key metrics to measure a business by, and rallying consensus around a single definition for each. 

Unclear metric definitions, uncertainty in data collection, and time all conspire to make data hard. Take for example the common and deceptively simple question "did users who used our latest feature convert at a higher rate?" Before we can begin to answer it, we need to define what "using" a feature means -- is it enough to load the page? Or does a user need to reach some milestone indicating that they've got some value from the feature? Then we have to deal with time: after using the feature, how long do we give them to convert in this analysis?  And while it's relatively simple to identify the group of users who did use the feature, it's harder to identify the comparable group who did not -- we need to exclude inactive users, for example, and exclude users who have tried the feature but have not yet had a comparable amount of time to convert. It gets complicated fast. 

Back in the bar with the accountant, though, I didn't know what to say.  My team was working hard to clean up and automate the data pipelines, migrating to a modern cloud data warehouse, work with stakeholders to reach consensus on the definitions of each key metric, setting those definitions down as version controlled SQL code in dbt. All that made data a lot easier. Trust in data grew, and meetings stopped short-circuiting on data quality issues. But it didn't eliminate the complexity inherent in analytics. 

What strikes me about the accountant's question is that most of the changes we made to make data more reliable mirrored the best practices of accounting. We agreed on consistent metric definitions and stuck to them, kind of like accountants adhere to standards like GAAP. We created data contracts, got buy-in for them from engineering teams, and enforced them, making data creation a little less of an afterthought. We standardized time windows, time zones, and reporting timeframes. It didn't eliminate uncertainty, and even with our upgrades, data remains hard.  But the hard parts got more interesting.  My team could focus more on the hard questions like what causes conversion, and what we might to to increase conversion, not just how many people converted and at what rate. 

The best I could do in the bar that night was sip whisky and pretend to take it as a philosophical question, answering something like "well the transactional data is easy, it's the mountains of behavioral data, images and unstructured text that is hard." That's not untrue, but it's not the whole story. 

I've thought about her question a lot, and about all the companies I've helped out of data quagmires and untrustworthy data systems. Honestly, it's a pretty simple playbook. Define the metrics, and drive consensus on those definitions across the entire company. Set them down in well documented, version controlled code. Create data contracts with the engineering teams who build the systems that generate data, and enforce them. Automate the pipelines to efficiently get all the data in to one place. Now, I think of it as building data systems an accountant would raise a glass to. 




---- scratchpad ---- 
The truth was, we inherited a deeply difunctional data system, ten years of layered complexity running on inadequate, outdated technology.  Nightly builds broke regularly, but without as much as notifying the people who relied on the data being out of date. No one wanted to touch the queries because they "worked", as in no one complained about the numbers, and the people who had written them had moved on.

The magic here is not in building a great analytics pipeline, or even in getting those metric definitions just right. It's in everything you can do when you're not struggling to report basic metrics. One of my favorite parts of fixing data systems is that i've seen this happen many times. Trust grows. Meetings stay focused on operations and strategy. Data teams dig into the *why* and the *what if*, not just the what happened. 