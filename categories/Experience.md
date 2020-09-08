---
layout: page
title: Experience
permalink: /categories/Experience/
---

{% for post in site.categories.Experience %}



  - <span>{{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a>




{% endfor %}
