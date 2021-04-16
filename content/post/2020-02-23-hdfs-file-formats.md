---
title:  "Comparison of various HDFS file formats"
date:   2020-02-23 13:47:17 +0530
categories:
    - Hands-On
tags:
    - avro
    - parquet
    - csv
    - json
draft: false
---

I've been working with Big data since 2017. As I'm from data warehousing background, it was easier for me to understand what's what, and build an analogy between DWH & big data frameworks. However, the various file formats used in HDFS always caught me off guard.

In DWH, I never considered how the files are stored in DB, it's managed by the database, maybe DBA might know how its done at the backend, as a DB developer it never bothered me. However, in HDFS we have several types of formats to choose from - _Avro, ORC & Parquet._ The best way to understand something is to spend time with it. So, decided to see how the different files behave for same data.


To see the performance of the file formats, I decided to load the same data in different formats. Identifying the dataset to work with took lots of time. While looking for the data came across a wonderful article to discover free dataset for data science related purpose in [Dataquest's blog](https://www.dataquest.io/blog/free-datasets-for-projects/). I was looking for a csv file with approximately 1 GB of size. I couldn't finalize on the dataset and then my friend suggested [movie lens data](http://files.grouplens.org/datasets/movielens/). Size wise its not close to my requirement, but 500+ MB is good enough.

We got the data, next ingredient to the dish would be HDFS cluster - AWS EMR. The biggest fear in choosing AWS paid service is the [fear of overwhelming billing](https://dev.to/juanmanuelramallo/i-was-billed-for-14k-usd-on-amazon-web-services-17fn) by the book seller.  Hiding the fear, took a smallest possible EMR cluster<sup id="a1">[1](#f1)</sup>. With all the queries<sup id="a2">[2](#f2)</sup> made ready before spinning up the cluster, I did went ahead with the operation.


All things set, after bootstrapping, the EMR is ready to be connected. And then, *connection time out error* embraced me while SSHing from EC2. After resolving the issue<sup id="a3">[3](#f3)</sup>, the entire usage of EMR went for 28 mins.

**Observations**


|File Type| File Size (in MB) | Time taken to build table (in secs) | Time taken to calculate count() (in secs)|Time taken to SELECT sample records<sup id="a4">[4](#f4)</sup> (in secs)|
|:---------|------:|-------:|-------:|------:|
| CSV      | 508.7 | 20.271 | 17.061 | 0.085 |
| Avro     | 489.8 | 54.642 | 25.356 | 0.257 |
| ORC      | 129.6 | 109.97 | 4.286  | 0.075 |
| Parquet  | 307.7 | 58.873 | 17.709 | 0.091 |

<br>
 *Note:* The entire metrics are obtained while executing queries on Hive with tez engine.
<br>
<br>
<br>

**Footnotes**
<b id="f1">1.</b> 1 node of Master & Core is selected with _Spot_ instead of _On Demand_ instance. Below are the cluster details.    [↩](#a1)

| Master   | Core      | Spot Pricing |
| -------- |:---------:| ------------:|
| m5.xlarge| m5.xlarge | $0.064 per Hr|


<b id="f2">2.</b> Queries are available for reference in [Git repo](https://github.com/dheepakg/file-formats/tree/master/DDLs) -     [↩](#a2)

<b id="f3">3.</b> In the security group of EMR, inbound SSH connections were blocked. On allowing SSH, the connection is established.    [↩](#a3)

<b id="f4">4.</b> Sample data for SELECT is limited to 11 records.    [↩](#a4)
