---
layout: default
title: Recommendations
permalink: /recos/books.html
---


### Books - Recommendations

This page contains notes and summary from the list of books that I read in the recent past. This is definitely not a book review.

<br>

<!-- |# |Book Name| Author  |
|---|---|---|{% for post in site.posts reversed %}{% if post.tags[0] == 'books' %}
| 1 | <a href="{{ site.baseurl }} {{ post.url }} ">   {{ post.title  }} </a> | {{ post.author }} |

{% endif %}

  {% endfor %} -->



  |# |Book Name| Author  |  Pages |
  |---|---|---|---| {% for post in site.posts reversed %}  {% if post.tags[1] == 'books' %}
  | {% increment my_counter %} | <a href="{{ site.baseurl }} {{ post.url }} ">   {{ post.title  }} </a> | {{ post.author }} | {{ post.pages }} |{% endif %}     {% endfor %}
