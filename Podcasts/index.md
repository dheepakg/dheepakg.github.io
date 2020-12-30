---
layout: default
title: Recommendations
permalink: /recos/podcasts.html

---


### Podcasts - Recommendations

This page contains podcasts, and my favourite episode of the podcasts. Also, the reason why you should listen to them.

<br>




  |# |Podcast Name| Podcaster | Runtime |
  |---|---|---|---| {% for post in site.posts reversed %}  {% if post.tags[1] == 'podcast' %}
  | {% increment my_counter %} | <a href="{{ site.baseurl }} {{ post.url }} ">   {{ post.title  }} </a> | {{ post.author }} | {{ post.runtime }} |{% endif %}     {% endfor %}
