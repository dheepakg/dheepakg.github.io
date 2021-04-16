---
title:  "What makes Rust interesting?"
date:   2019-08-25 11:24:27 +0530
categories:
    - Programming
tags:
    - Rust
draft: false
---

[comment]: <> (How you came across Rust? - A briefing)
Podcasts. That's how I got introduced to the Rust language.

In one of the PythonBytes [episode](https://pythonbytes.fm/episodes/show/138/will-pyoxidizer-weld-shut-one-of-python-s-major-gaps) I heard about the PyOxidizer for the first time. Basically, it uses Rust to bundle Python code into an [executable code](https://gregoryszorc.com/blog/2019/06/24/building-standalone-python-applications-with-pyoxidizer/). There is already quite a number of modules to convert code into an executable file. According to Michael Kennedy, the Git repo is so active, that made me to explore what the PyOxidizer is made of. Surprise, Surprise! Its made an amalgamation of Rust and Python, in 80-20 ratio.

[comment]: <> (What is Rust? - Describe the history of the language)

Right then, Rust seems to be something that can fill up the void in Python.

##### What the heck is Rust?

>Rust is a system programming language, focused on safety.

Unlike Python, Rust is system programming language, meaning this can be used for building system software. To facilitate interaction with low-level system APIs, its designed to be faster.

Also, Rust compiler is strict and considered safe to use.

[comment]: <> (Why Rust? - Describe the features of Rust)

##### Why to Rust?
Rust - corrodes iron, doesn't inspire pleasant memory. Even then why to chose Rust?

* Developed by **Mozilla**
Mozilla, the guardians of free web is behind the development of Rust. The Firefox, the flagship product from Mozilla is historically been criticized for its memory leaks. I believe while developing the language, they purposefully made this language safer to avoid any memory leaks.
* Open Source - **free**
Even though it was an internal project of Mozilla, they open sourced the compiler. There is no for-profit corporate tied up with the ownership of language. I'm talking about you .net & Java.
* Strong & Active **community**
In 2018, the core dev team requested for blog posts on Rust. The community chipped in with flood of posts. They finally listed 100 [blog posts during 2018](https://readrust.net/rust-2018/)
* The **popular** language
The version 1.0 of Rust was released on 2015. Since 2016, this is been the [most popular language till 2019](https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-languages). With so many languages lying around, being in the top of list is not simple.

To contribute to a language, you need lots of effort. Spend lots of time in learning & understanding the paradigms, facing road blocks as its a new language. Potentially, there is so many exit-points from the learning process. Yet, the language stood its ground as most popular one since 2016, this itself means something, right?
The developers are embracing the language, there should be some valid reason, no?

[comment]: <> (Rust + Python - why? Explain low level language)

##### Being a Python developer, why should we learn Rust?
Python is a high level, general-purpose language. Obviously, it's slower than the system programing language. Python is good for building things in no time. That's the driving feature that clicked with broad horizon of developers.

Rust is a System programming language. It is built for speed and safety. It will take a long time to develop a software. But, the execution time will be much lower.

Once the Rust code is compiled, it creates an executable file. This executable file can be shared across the platform. The code sharing is the [major draw back of the Python](https://www.youtube.com/watch?v=ftP5BQh1-YM). It becomes inevitable to combine the features of the 2 languages.

Let's oxidize, let's do Rust.

[comment]: <> (Setting up Rust environment - Docs to refer)
