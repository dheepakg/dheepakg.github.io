---
layout: page
title: The Past Week
permalink: /TPW.html
---

My work day starts with a team meeting @ 0830 hrs. First thing I do after the call, _if nothing is on fire_, will be going through my newsletters. I find newsletters as a condensed form of vital news, devoid of tabloid-stuffs, and very picky on the type of content. Also, the newsletters are the window to have a peek outside my bubble.  

I started subscribing to newsletters, on November 2019. Through the newsletters, I got exposed to many formats on how to present the contents to the subscribers. Among them, my favourite was the Broadsheet ([Broadsheet in webarchives](https://web.archive.org/web/20200401233132/https://broadsheet.in/)), the site was closed on March 31<sup>st</sup> 2020 :cry:. Their emails were simple, few notable updates from global stage and from India, viral contents, and [much more](https://github.com/dheepakg/dheepakg.github.io/blob/master/assets/pdfs/broadsheet.pdf).

Apart from newsletters the information flows in from twitter, Reddit and facebook. So, the objective here is to collate interesting finds over the past week, thats the plan at least.

&nbsp;

<hr><hr><hr>

&nbsp;


{% for post in site.categories.Weekly-Update %}



 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>



{% endfor %}
