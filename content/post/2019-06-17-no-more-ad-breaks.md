---
title:  "No more Ad breaks - thanks Pi-hole"
date:   2019-06-17 20:12:27 +0530
categories:
    - Side-Project
tags:
    - Raspberry Pi
    - Ads
draft: false
---

While browsing through Raspberry Pi's sub in Reddit, I came across [Pi-hole](https://pi-hole.net/).

Pi-hole is an interesting project, claims to be black hole of Ads. I guess the *pi* in the name refers to [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi). As my Pi3 was lying in the corner unused, I went for the Pi-hole installation. Before continuing further on the experience, we need to discuss why the ads are bothering?


#### What's wrong with ads?

I agree the ads are the revenue source of websites. They are good as long as they don't obstruct the usage, but do they? If not, we wouldn't have went for browser level Ad blockers in first place. Having an Ad blocker in browser works good. But, this may impact performance of the browser. There are [news that claims](https://www.wired.com/story/google-chrome-ad-blockers-extensions-api/) Google may break the working of Ad blockers in Chrome. The situation of smartphones are mush worse. Especially, in Android. There are no regulation, even in the popular apps, the Ads are placed in every available real estate. The expectation is to hijack your attention when you accidentally touch these spaces. There are apps which can protect you from ads, you've to sideload them, but sideloading an app is not a safe option.

With the interruption of our experience, it becomes acceptable to avoid all the ads, despite the fact that filtering would affect genuine sites' ad revenue. [The revenue system based on ads is not sustainable](https://medium.com/newco/the-curse-of-ad-revenue-723b0478d0e4). We see customers jump onto alternatives as soon as it's available, prime example is Netflix - binge watch episodes, no ad breaks. With due course the so-called genuine sites will adopt to better agile revenue system.

#### The setup
Pi-hole can be installed in most of the Linux based OS or docker. I tried on Raspbian OS, the installation was seamless. Once it's installed, you can either use the DHCP server that comes with the software and enable network wide ad blocking or configure the IP address in the individual devices. The whole process from installation to configuration took 45 minutes, it's that simple to setup.

>Fun Fact: The developers maintains Star Trek theme all through the project. Components are named as FTLDNS - Faster Than Light DNS, tricorder for loading logs and much more. You can see many other Star Trek reference while installation.

The filtering works based on the blacklist that we add to the application. There are huge list of blacklists, thanks to open source methodology. Read in some post that with certain lists, even Youtube ads can be avoided, yet to try it.
While setup, by default, there is a malware list that gets added. Resulting in filtering *evil sites* from the network, an added advantage.


#### The Dashboard

Pi-hole gives us a dashboard with eye-pleasing graphs. Few things that the dashboard shown after the pi-hole running for 36 hours are,
* Totally 114K domains are blacklisted
* Out of total 11,600 queries, 55% are ads and were blocked
* Most of requests are from my mobile and obviously most of ads were sent to my mobile, which got blocked
* Despite its not used, Chromecast keeps accessing the web

#### Should you use it?
On using it over few days, I observe the below changes.

For instance, the news sites used to be a mess with so many ads distracting the attention. Now, the pi-hole just shows me a blank box.

With the heavy banners, the sites takes forever to load, with pi-hole the load time has reduced a lot.


Yes, you should give a try.
