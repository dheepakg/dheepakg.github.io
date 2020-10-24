---
layout: page
title: Blog
permalink: /blog.html
---


<div class="home">



  {%- if site.posts.size > 0 -%}
    <ul class="post-list">
      {%- for post in site.posts -%}
      <li>

        <h3>



          <a class="post-link" href="{{ post.url | relative_url }}">

            {{ post.title | escape }}
          </a>

          <div class="post-meta">
            <ul class="post-categories">
              {%- for tag in post.categories -%}
              <li>{{ tag }}</li>
              {%- endfor -%}
            </ul>


          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
            <div class="post-date">{{ post.date | date: date_format }}</div>
          </div>



        </h3>
        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>


  {%- endif -%}

</div>
