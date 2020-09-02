---
layout: page
title: Weekly Update
permalink: /Weekly-Updates/
---

{% for post in site.categories.Weekly-Update %}

 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
