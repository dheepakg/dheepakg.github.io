---
layout: post
title:  "Comparison of various HDFS file formats"
date:   2020-02-23 13:47:17 +0530
categories: HDFS File system
Tags: avro, parquet, csv, json
comments: true
---

I've been working with Big data since 2017. As I'm from data warehousing background, it was easier for me to understand what's what, and build an analogy between DWH & big data frameworks. However, the various file formats used in HDFS always caught me off guard.

In DWH, I never considered how the files are stored in DB, it's managed by the database, maybe DBA might know how its done at the backend, as a DB developer it never bothered me. However, in HDFS we have several types of formats to choose from - _Avro, ORC & Parquet._


To see the performance of the file formats, I decided to load the same data in different formats. Identifying the dataset to work with took lots of time. While looking for the data came across a wonderful article to discover free dataset for data science related purpose in [Dataquest's blog](https://www.dataquest.io/blog/free-datasets-for-projects/). I was looking for a csv file with approximately 1 GB of size. I couldn't finalize on the dataset and then my friend suggested [movie lens data](http://files.grouplens.org/datasets/movielens/). Size wise its not close to my requirement, but 500+ MB is good enough.

We got the data, next ingredient to the dish would be HDFS cluster - AWS EMR. The biggest fear in choosing AWS paid service is the [fear of overwhelming billing](https://dev.to/juanmanuelramallo/i-was-billed-for-14k-usd-on-amazon-web-services-17fn) by the book seller.  Hiding the fear, took a smallest possible EMR cluster, with single master & core node, I did went ahead with the operation.




<a name="myfootnote1">


 Bla bla <sup id="a1">[1](#f1)</sup>





jhgvcxvbjkljhgfhjk


<b id="f1">1</b> Footnote content here. [↩](#a1)
