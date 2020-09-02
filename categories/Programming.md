---
layout: page
title: Programming
permalink: /categories/Programming/
---

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}

    {% for post in site.categories[category_name] %}

        {% if post.categories contains "Programming" %}

          <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>

          <div class="post-meta">

          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
            <div class="post-date">{{ post.date | date: date_format }}</div>
          </div>



          {%- if site.show_excerpts -%}
            {{ post.excerpt }}
          {%- endif -%}
          <p style="color:#828282">{{ post.description }}</p>


        {% endif %}

    {% endfor %}
  </div>
{% endfor %}
</div>
