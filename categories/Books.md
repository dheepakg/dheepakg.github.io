---
layout: page
title: Books
permalink: /categories/Book/
---

{% for post in site.categories.Book %}



  - <span>{{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a>




{% endfor %}
