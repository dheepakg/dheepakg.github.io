---
title: "A backend dev's journey into JS world - Part I"
subtitle: "Why JS? And, what's the plan? "
date: 2021-08-20 13:26:00 +0530
categories:
  - Programming
tags:
  - Python
  - Javascript
  - Learning
  - D3JS
  - DataViz
draft: false
---

I use SQL and Python to earn my bread. Being an ETL developer turned Data Engineer, my work is to fetch data from different sources, cleaning it, and making it consumption ready before storing it in some storage space - database, S3 et al.

It's amusing to know that someone will be consuming this data and pull insights from it like a magician pulling a rabbit off his hat. The reporting tools were the go-to place to churn these processed data. The decision-makers use the reports generated by these tools. The reports are mostly limited to tables, bar, line, or pie charts.

The last time I was using a reporting tool was in 2015. It was [SAP BODS](https://www.sap.com/india/products/edge-medium-bi.html). The enterprise tool, as usual, has its limitations, the enterprise architecture. For example, it needed an older version of Java to be present in the machine to view, create or modify them. The older version of the software is generally not so friendly with the other software. Like in my case, the reports can be accessed only in IE8 (yep, the internet explorer).

Then a new tool hit the market - Tableau, a data visualization tool. But how is data visualization (_dataviz_, from now on) is different from reporting?

> If reporting is relaying information, visualizing creates meaning from it. Think of a report as a hulking block of marble; visualization is a polished statue. - Nightingale, [medium post](https://medium.com/nightingale/this-week-on-nightingale-whats-the-difference-between-a-report-and-a-visualization-d49f42a162f3)

Compared with conventional reporting tools, DataViz is usually polished, peppy, and more suited web-friendly.

---

---

In the meantime, my co-worker akka was being requested to make some code changes. The work she is expected to do is not the actual assignment she was assigned to. This is her added work, due to her interest. Got to know she was making changes to some JS file involving _D3JS_. The people asking her help were big shots, like the boss's boss. So, she gets to venture across buildings while we are struggling to fix a failing SQL query. For anyone, it is nice to hear you're in demand. I was looking up at her.

The tool [D3JS](https://d3js.org/) was based on JS, and it was enough to turn away, at the time. The reason being that I don't know JS and I don't want to spend time with some front-end language, after all, I'm _backend_ developer.

---

---
<figure>

<img align="right" width="200" height="300" src="https://upload.wikimedia.org/wikipedia/en/1/15/Logo_D3.svg" alt="D3 logo">

</figure>


Few years back, I happened to fly abroad for an assignment, to the land opportunities - the USA. The news sites there were much better and visually pleasing than the ones I'm used to, back in India. The graphical projections were one of the difference makers. Those were not some diagrams but interactive graphical charts. Then came to know those were the one among many of DataViz charts. The NYT charts stood one step above. And, came to know _D3JS_ was used to create them, by _Mike Bostock_, the developer of the D3JS framework. My favourite one is an article on [rent vs buy](https://www.nytimes.com/interactive/2014/upshot/buy-rent-calculator.html).

I tried to learn the framework. As like many novice developer, I tried Copy - Paste code from [bl.ocks.org](https://bl.ocks.org/), Stackoverflow, but it didn't get the traction. And so, the motivation to learn D3, slowly, fizzled out.

---

---

<iframe align="right" type="text/html" width="200" height="300" frameborder="0" allowfullscreen style="max-width:100%" src="https://read.amazon.in/kp/card?asin=B07RKFJYF9&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_020HDWFCPXWQQ26NFP9N" ></iframe>

For some reason, the wish to learn Dataviz rekindled tried Tableau, Google charts and ended up reaching [observablehq](https://observablehq.com/), a platform to build D3 apps on the notebook, similar to Jupyter notebook. The reentry of D3 and it's visual prowess nudged me to give another try. Trying to learn D3, I have bought this book - D3 for impatient. This book is a good starting point for the framework.

However, D3 being a JS framework, its necessary to understand JS basics before learning the framework. And, that's the reason to learn the Javascript language.

Currently, I'm collating the topics to understand the fundamentals of JS. The topics and resource I'm planning to utilize will be updated soon.