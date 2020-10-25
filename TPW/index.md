---
layout: page
title: The Past Week
---


<!-- {% for tpw_post in site.TPW reversed%}


- <span>{{ tpw_post.date | date_to_string }}</span> <a href="{{ site.baseurl }}{{ tpw_post.url }}">    {{ tpw_post.title | markdownify }}  </a>





{% endfor %} -->



{% for tpw_post in site.TPW reversed%}


<div class="post">
  <h1 class="post-title">{{ tpw_post.title | markdownify }}</h1>
  {% if tpw_post.subtitle %}
    <h3 class="post-subtitle">{{ tpw_post.subtitle | markdownify }}</h3>
  {% endif %}
  <span class="post-date">{{ tpw_post.date | date_to_string }}</span>
  {{ tpw_post.content }}
</div>


{% endfor %}


<!--
<div class="posts">
  {% for post in site.TPW reversed %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title | markdownify }}
      </a>
    </h1>
    {% if post.subtitle %}
      <h3 class="post-subtitle">{{ post.subtitle | markdownify  }}</h3>
    {% endif %}
    <span class="post-date">{{ post.date | date_to_string }}</span>

    {{ post.excerpt | markdownify }}
  </div>
  {% endfor %}
</div>



<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ site.baseurl }}/page{{paginator.next_page}}">
         <i class="fa fa-arrow-left">  </i>  Older
    </a>
  {% endif %}

  {% if paginator.previous_page %}
    <a class="pagination-item newer"
       href="{{ site.baseurl }}/{% if paginator.page > 2 %}page{{paginator.previous_page}}{% endif %}">
       Newer <i class="fa fa-arrow-right"></i>
   </a>
  {% endif %}

</div> -->
