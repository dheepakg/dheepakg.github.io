---
title: "First serious project that has some rational application"
date: 2019-05-29 23:15:00 +0530
categories:
    - Side-Project
tags:
    - Programming
draft: false
---


I'm working in a corporate firm which employs 100K+ employees. As do with any organization of such a magnitude, there are certain rules & policies which cannot be breached. In most of the occasions, the policies really help us navigate without much of the issue. Yet, there are situations which impedes our progress.

The impedement I felt was merging PDF files. What's there to worry about, you may wonder. In our org, we have some version of Adobe Reader to view PDFs. Eventhough I'm not a big fan of Adobe, there are no alternatives in [my workplace](https://alternativeto.net/software/adobe-reader/) that I know of, at least. The version of Reader I'm allowed to use doesn't allow me to Merge PDFs. Ironically, it's necessary to merge the files while submitting the PDFs for various official purpose.

To merge the PDFs we use quite a few ways thats not straight forward. Like uploading to [pdfmerge.com](https://www.pdfmerge.com/) or making use of coworker's computer with better privilege. However, there are downside to these methods. With online merging option, there is no clue what is happening to the files. While using my coworker's computer may sound better. But what if someday I want to merge hypersensitive files of mine? Being the case that most of the time the files that are being merged holds sensitive information. Both the options could cause potential harm.


>_When life gives you lemons, make lemonade._

As a user of Python for quite a while, everyone from [Dan Bader](https://dbader.org/about/) to [Michael Kennedy](https://training.talkpython.fm/home/about) asks us to figure out some day-to-day problem and come up with a solution, to learn the language. So, on one messed up day I started with this project, [a side project](https://simpleprogrammer.com/side-projects/). I was to build simple utility to merge 2 or more pdf files. Nothing more. Nothing less. [No bells and whistles](https://hackaday.com/2018/09/10/doing-one-thing-well-the-unix-philosophy/)

The plan is simple, read pdf files and merge them together. Merging is the core operation and it hardly made me to sweat. The wrapper GUI built using tkinter has shown me how tough to crack this nut. First of all, I'm not a UI guy, more of a _select * from_ guy. In the 8 long year in IT, I work with SQL almost all the time. Last 3 years its been Python complementing the SQL usage. Compared to SQLs, building UI was a pain in the butt.

Anyhow, the project is completed. Well, [almost completed](https://github.com/dheepakg/PDF-Files-Merger/blob/master/Todo.md). Still, the todo list is long and unfinished. A small light weight utility with ~~basic~~ only functionality - to merge PDF is [released](https://github.com/dheepakg/PDF-Files-Merger#downloads).
