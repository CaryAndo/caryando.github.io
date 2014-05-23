---
layout: post
title: "Facebook Hackathon"
date: 2014-05-22 22:00:00
categories: Hackathon
---

So as usual, life is pretty crazy. It's taken me a really long time to get around to writing about my Facebook Hackathon experience. In between that event and now so many things have happened that I couldn't possibly find time to write about them all. 

A quick summary of the Socal Facebook regional Hackathon:

So it started really well, I had planned to hack with a friend that I met at a hackathon and hang out with another. We brainstormed for quite a while, throwing around ideas involving things ranging from image processing to mobile apps. Around midnight my partner's laptop died a horrible death and he needed to drive all the way home to repair it. This left me by myself with no ideas and just under twelve hours to make something presentable. I remembered a conversation I had had with a friend a few weeks prior when we were talking about how so many people keep terribly messy filesystems, and I propounded the idea that it was a result of people not sorting their '~/Downloads/' folder. This led me to create (Cleaning Lady)[https://github.com/CaryAndo/CleaningLady]. Cleaning Lady is a little Python script that runs in the background of your desktop and moves files to pre-defined locations based on file extension. With the help of wxWidgets, I also created a simple little GUI tool to allow setting up new routes for files. The script uses a little wrapper for the Mac OSX Notification Center called Pync to display a small notification every time a downloaded file was moved. Eventually in the later hours of the last day, my friend returned and he helped my unzip and rezip the Pync wrapper to hack the icon and make OSX display our app's icon insteall of the default.

All in all I was pretty proud of my little creation given the time period and the fact that I was mostly by myself for the duration. We definitely didn't win any prizes, but I had a really fun time and left feeling accomplished. 
