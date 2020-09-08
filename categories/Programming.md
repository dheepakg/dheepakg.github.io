---
layout: page
title: Programming
permalink: /categories/Programming/
---

{% for post in site.categories.Programming %}



  - <span>{{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a>




{% endfor %}
