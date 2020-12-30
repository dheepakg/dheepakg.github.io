---
layout: default
title: Recommendations
permalink: /recos/podcasts.html

---


### Podcasts - Recommendations

This page contains podcasts, and my favourite episode of the podcasts. Also, the reason why you should listen to them.

<br>




  |# |Podcast Name| Podcaster | Subject |Runtime | Frequency |
  |---|---|---|---|---|---| {% for post in site.posts reversed %}  {% if post.tags[1] == 'podcast' %}
  | {% increment my_counter %} | <a href="{{ site.baseurl }} {{ post.url }} ">   {{ post.title  }} </a> | {{ post.podcaster }} | {{post.subject }} | {{ post.runtime }} |{{ post.frequency }}|{% endif %}     {% endfor %}
