---
layout: page
title: The Past Week
permalink: TPW.html
---

{% for post in site.categories.Weekly-Update %}



<h2> <a href="{{ post.url }}">{{ post.title }}</a></h2>

{{ post.excerpt | markdownify }}



{% endfor %}
