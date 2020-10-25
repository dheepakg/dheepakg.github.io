---
layout: page
title: Today I Learnt
---

<div class="projects">
  {% for project in site.TIL %}
  <div class="project post">


    {{ project.content }}


  </div>
  {% endfor %}
</div>
