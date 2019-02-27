---
template: post
title: Using git bisect to quickly find the commit that introduced a bug
slug: using-git-bisect-to-find-bad-commit
draft: true
date: 2019-02-21T12:00:33.353Z
description: >-
  If you use git and you found yourself in a situation where you needed to find
  a commit that introduced a bug in your code, then git bisect is your friend.
category: Software Engineering
tags:
  - software
  - coding
  - debugging
  - binary search
  - ''
---
_Dear friend,_

Last week at \[work](https://life.mirego.com/en), I gave a presentation on Using binary search as a debug algorithm. Today I want to share the same thing with you, specially on how to use binary search to find a commit that introduced a bug in your code.

If you are a developer like I am, you have probably found yourself in a situation where a feature that was working as intended has suddenly become bugged. If you use a revision control system, you may have needed to find the commit that first had introduced the bug in order to fix it.

You can start by the latest commit with the bug and go back until you find a working commit. If the bug has been introduced several commits before, this can be tedious and take a lot of time. In fact, the complexity of this task is linear and depends on the number potential bad commits.

The best way to search a bad commit is the binary search algorithm because it is much faster than the linear search way. To do it you need to first identify two commits, one good commit and one bad commit. And then check the middle commit to check if it's a good or bad one. If it's good commit, then all commit before it are good and you need to check the remaining commits after it. If it's a bad commit then the remaining commits after it are bad and you need to check the remaining commits before it. Repeat this process until you find the first bad commit.

Of course doing this manually is still tedious. You need to count commits in order to find which is the middle. Luckily enough if you use git, then there is a built-in command named bisect which performs this binary search for you.

Suppose you had code that displayed a Obama icon like this. 16 commits after the icon, you realized the code was not displaying the good icon anymore, instead something like this was displayed. So your manager has asked you to fix the problem. Of course you can just replace the icon by the good icon. But as a good developer, you feel like maybe there is a reason why this was changed in the first place. How do you find out what that reason is? You can go back to the commit that changed the icon in the first place and find out what the intent was. How do you find that commit then?
