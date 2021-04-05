---
title: "EVMs should be avoided for Indian elections - Why?"
date: 2019-04-26 19:47:17 +0530
categories:
   - Opinion
tags:
   - Indian Election
   - Tech vs Old school
draft: false
---

As a country, 1990's are changing times for India. The nation saw some of the interesting transformations, which would be an unimaginable tale even a decade earlier for Geo-political experts. The changes ranges from Economic stance of the country to opening up to private cable channels to introduction of Internet to the masses (the snail-paced dial-ups).

The election commission too hopped into the transformation train. From the conventional paper based ballot, the Electronic Voting Machines were introduced. As like any other new stuff, this was unwelcomed by many, especially every losing party started blaming on the foul play surrounding the EVM. To mitigate the foul play, as a 2nd level defense, the EC introduced [VVPAT system](https://economictimes.indiatimes.com/news/elections/lok-sabha/india/what-is-vvpat/articleshow/68667136.cms). Here, a paper trail is maintained alongside the digital recording of voting.

The conventional method is to record the individual votes in a ballot box. Till the vote counts the boxes were in protection by security personnel. On the result day, the box are collected in and counted manually to declare the result. On the other hand, with the EVMs being slim and made of hardened materials, the safe guarding and counting are much easier compared to the old-day's wooden ballot boxes.

The political parties & security experts do raise several questions to EC, who is the sole keeper of the EVMs. As the response, EC keeps uttering the EVMs are not prone to hacking or any malpractice. The EC goes as far as filing law suits on [questions on EVM](https://www.thehindu.com/news/national/election-commission-mulls-legal-action-on-anti-evm-campaign/article26052331.ece).

As the EVMs venture into cyber space, we shouldn't ignore some of the laws of pertaining to Information security.

1. The system is as safe with the weakest link, [we people are the weakest link](https://www.csoonline.com/article/3095486/cybersecurity-is-only-as-strong-as-your-weakest-linkyour-employees.html).
2. [Open systems are more secure](https://www.reddit.com/r/linux/comments/3lxd0t/open_source_software_is_more_secure/cva33y9) than proprietary

The Information Security awareness depends on the education imparted to the people, its a known fact that [cyber awareness is poor in the country](https://www.thehindubusinessline.com/info-tech/india-lagging-in-cyber-security-awareness/article9046626.ece).

The point of failure for the EVMs are quite a handful,

1. Setting up of EVMs in the voting booth before the commencement of election.
2. Man in the middle attack while connecting individual EVMs to server to consolidate the vote counts.
3. Some coding error while writing the embedded system of the backend, which might have escaped the testing.
4. [Infiltrating into the chip during its fabrication](https://www.bloomberg.com/news/features/2018-10-04/the-big-hack-how-china-used-a-tiny-chip-to-infiltrate-america-s-top-companies), may sound far fetched, but its already a reality.
5. A power surge could fry the hardware, we don't know whether the device is properly protected as the design is not open sourced.
   So, if some intrusion takes place are we well equipped to handle them?

We have [Meity](https://meity.gov.in/) and [Cert-in](https://www.cert-in.org.in/) to deal with Information Security. Of which, Cert is for the handling the cyber emergencies. This may be rhetoric but, the experts in cyber defense may not stay with government bodies, dealing with the prevailing red tapes.

The [intrusion scare do exist with the paper ballots as well](https://en.wikipedia.org/wiki/Booth_capturing). However, you need to [physically reach out to the poling booth to tamper with the voting](https://web.archive.org/web/20161019082306/http://www.news18.com/news/politics/the-myth-of-historys-first-booth-capturing-taking-place-in-begusarais-rachiyahi-1150034.html), which our security forces are capable of handling it. However, the cyber attack could originate from any corner of Earth. A beat cop positioned to secure the EVMs will not be able to defend against the cyber attack.

Even though I couldn't get the exact numbers, this election could easily be the costliest democratic festival ever. Can we risk this with the EVM system, is what we our question should be.

<!---
Referencss

1. VVPAT systemVVPAT system - https://economictimes.indiatimes.com/news/elections/lok-sabha/india/what-is-vvpat/articleshow/68667136.cms
2. Questions on EVM - https://www.thehindu.com/news/national/election-commission-mulls-legal-action-on-anti-evm-campaign/article26052331.ece
3. We people are the weakest link - https://www.csoonline.com/article/3095486/cybersecurity-is-only-as-strong-as-your-weakest-linkyour-employees.html
4. Open systems are more secure - https://www.reddit.com/r/linux/comments/3lxd0t/open_source_software_is_more_secure/cva33y9
5. Cyber awareness is poor in the country - https://www.thehindubusinessline.com/info-tech/india-lagging-in-cyber-security-awareness/article9046626.ece
6. Infiltrating into the chip during its fabrication - https://www.bloomberg.com/news/features/2018-10-04/the-big-hack-how-china-used-a-tiny-chip-to-infiltrate-america-s-top-companies
7. Meity - https://meity.gov.in/
8. Cert-in - https://www.cert-in.org.in/
9. Intrusion scare do exist with the paper ballots - https://en.wikipedia.org/wiki/Booth_capturing
10. Physically reach out to the poling booth to tamper with the voting - https://web.archive.org/web/20161019082306/http://www.news18.com/news/politics/the-myth-of-historys-first-booth-capturing-taking-place-in-begusarais-rachiyahi-1150034.html
-->
