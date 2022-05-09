---
title: "Cross compatibility is key"
subtitle: "Understanding the nuances that differs across the environments is underrated"
date: 2022-05-09 8:50:00 +0530
categories:
  - experience
tags:
  - macos
  - github
  - case-sesitivity
draft: false
---


When my kid was on a mattress, she was hesitant to move around. Later on, with the comfort of the soft surface, she was rolling around without caring about her head getting hurt or gravity.

Everything got changed when we let her crawl on the hard surface in the living room. She was getting hurt quite frequently - sometimes stepping on a toy, or hard landing on her head while rolling on the floor, or simply butting on something at her head level. Slowly, she got learned to avoid those hurting her. These days she evaluates the surfaces before taking another step.

Isn't it how we should learn to navigate across different environments? But I didn't.

Last evening, I was restructuring my blog to accommodate a page. The site is built on Hugo and tested in MacOS. I ran into a strange issue (FWIW, issues are weirdly strange). The dev run in local is showing expected behavior. However, committing to Github and building the Hugo site in it throws an HTTP 404 - page not found.

The page in GitHib's build was pointing to `<site>/Notes/books/`, which results in a 404 error.
However, the same link is redirected to a slightly different local build - `<site>/notes/books/`.

A very simple issue, right? It should be fixed as soon as we make the path consistent across the builds. But no. Here is where I ran into a wall. Changing the folder from `Notes` to `notes` is not moving into the stage layer of GitHub. I tried changing the files present under the folder, but still no progress. The case changes to the folder were not moving into the stage layer.

This issue was not entirely new, someone has faced it already. There is a GitHub issue for the same - [still in open state](https://github.com/isaacs/github/issues/1520).

From the thread,


>In filesystems in Unix-like systems, filenames are usually case-sensitive (there can be separate readme.txt and Readme.txt files in the same directory). MacOS is somewhat unusual in that, by default, it uses HFS+ in a case-insensitive (so that there cannot be a readme.txt and a Readme.txt in the same directory) but case-preserving mode (so that a file created as readme.txt is shown as readme.txt and a file created as Readme.txt is shown as Readme.txt) by default. This causes some issues for developers and power users, because most other environments are case-sensitive, but many Mac Installers fail on case-sensitive file systems.   -  [case sensitivity in macOS](https://en.wikipedia.org/wiki/Case_sensitivity#In_filesystems)


What is happening here is the Git takes into account of the OS's configuration. Therefore, the case changes in the folder doesn't get identified as a change by git. And so, it's not moving into Stage area of GitHub.

I knew the macOS file system is by default case insensitive and  Linux/Unix environments are case-sensitive. But I never knew the case sensitivity of Git is decided by the underlying OS. It's a TIL moment.

In the issue discussion there is a (counter argument)[https://github.com/isaacs/github/issues/1520#issuecomment-473610523] to current behavior of Git. According to them, the Git should be case-sensitive irrespective of the underlying OS.

Whether the Git will be modified or should we be accepting the issue are questions which doesn't have clear answer. But we should write code with the case sensitivity into consideration.

I spent roughly 2 hours in fixing the brken links. Even though I was unaware of Git's behavior I should have used the lower cases instead of camel case in the folder names. And, at the end of the frustration 2 hours I learnt basics matters.
