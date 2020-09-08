---
layout: page
title: Side-Project
permalink: /categories/Side-Project/
---

{% for post in site.categories.Side-Project %}



  - <span>{{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a>




{% endfor %}
