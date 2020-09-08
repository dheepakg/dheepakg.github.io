---
layout: page
title: Weekly Updates
permalink: /categories/Weekly-Update/
---

{% for post in site.categories.Weekly-Update %}



  - <span>{{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a>




{% endfor %}
