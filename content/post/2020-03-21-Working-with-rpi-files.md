---
title: "Working with Raspberry Pi files"
date: 2020-04-04 12:40:27 +0530
categories:
    - Hands-On
tags:
    - Raspberry Pi,
    - Files,
    - reference
draft: false
---

Some reference on how to connect to a Raspberry Pi running in the same LAN network.

I've been using Raspberry Pi running in home, for last 10 months. Until a month ago, the sole purpose of the RPi is to [filter off the ads](https://dheepakg.github.io/diy/2019/06/17/no-more-ad-breaks.html) using Pi-hole<sup id="a1">[1](#f1)</sup>, then a speed test module was scheduled to run on it. By the setup, the speedtest-cli runs every 10 mins and fetches internet into csv file. the plan is to arrive to some meaningful conclusion of the data.

The good thing about Pi-hole is its maintenance is literally *zero*, no need for us to interfere in its operation, barring occasional update. And, with the need of updates, I google the commands to connect to Rpi. Every. Single. Time.

With practice, the commands gets typed, thanks to muscle memory. However, to get it practiced I gotta use the commands quite often. Googling the commands is an obstacle and discourages me to use CLI to enter into Rpi. Noting down the commands is quite useful for reference, and why not make it decentralised by adding to GitHub. Going a step ahead, lets add to blog. If it works out well, more references can be added to the blog for my reference sake.

**To identify the IP address of Raspberry Pi**

The first one will spit out the IP Address, while the *ping* gives IP address and the time taken to reach the IP<sup id="a2">[2](#f2)</sup>.

```bash
hostname -I
```
or
```bash
ping raspberrypi.local
```


**To enter into Rpi from another machine on same network**

Use ```ssh``` protocol to copy files to and from Rpi<sup id="a3">[3](#f3)</sup>.
```bash
ssh pi@hostname_of_rpi_from_above_step
```
Default credentials for Raspberry Pi (with Raspbian OS)
Username: pi; Password: raspberry

 **Copying files from Rpi**
Use ```scp``` protocol to copy files to and from Rpi<sup id="a4">[4](#f4)</sup>.

Copying file from Rpi
```bash
scp pi@hostname_of_rpi_from_above_step:pathin_rpi/filename.ext destination_filename.ext
```

Copying file from Rpi
```bash
scp filename.ext pi@1hostname_of_rpi_from_above_step:path_in_rpi/
```
**References**
<b id="f1">1.</b> Pi-hole [https://pi-hole.net/](https://pi-hole.net/)    [↩](#a1)

<b id="f2">2.</b>  Official Raspberry Pi [docs](https://www.raspberrypi.org/documentation/remote-access/ip-address.md) [↩](#a2)

<b id="f3">3.</b> Official Raspberry Pi [docs on ssh connections](https://www.raspberrypi.org/documentation/remote-access/ssh/README.md)  [↩](#a3)

<b id="f4">4.</b> Official Raspberry Pi [docs on scp connections](https://www.raspberrypi.org/documentation/remote-access/ssh/scp.md)  [↩](#a3)
