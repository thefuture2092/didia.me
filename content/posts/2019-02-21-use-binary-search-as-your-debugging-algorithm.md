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

A couple of months ago, I gave a presentation at \[work](https://life.mirego.com/en) about using binary search as a debugging algorithm. Today I want to share the same thing with you, specially on how to use binary search to find a commit that introduced a bug in your code.

If you are a developer like I am, you have probably found yourself in a situation where a feature that was working as intended has suddenly become broken. If you use a revision control system, you may have needed to find the commit that first had introduced the bug in order to fix it quickly.

One way to do it is to start by the latest commit with the bug and walk backwards until you find a working commit. If the bug has been introduced several commits before, this can be tedious and can take a lot of time. In fact, the complexity of this task is linear and depends on the number of potential bad commits.

> Because your commits are sorted, you can use binary search to find a buggy commit way faster than the linear approach ⚡️

Another way is to use a binary search algorithm to find the buggy commit. I think this is the best way because it is much faster than the linear one. To do it you need to first identify two commits, one good commit and one bad commit. And then check the commit in the middle to check if it's a good or bad one. If it's good commit, then all commits before it are good and you need to check only the remaining commits after it. If it's a bad commit then the remaining commits after it are also bad and you need to check only commits before it. And by doing that you have eliminated half of your initial commits that you don't need to check. Pretty cool right 😎? Repeat this process until you find the first bad commit.

> Revision control system like git or mercurial have built-in commands to help you find a buggy commit without doing it manually yourself. 💚

Now I know what you are thinking: doing this manually is still tedious. And you are absolutely right. Going over your commits to find which one is the middle, then checking it out to see if the error is still there and so on and so on; it is indeed tedious. Luckily enough if you use `git` or mercurial (`hg`), then there is a built-in command named [`git bisect`](https://git-scm.com/docs/git-bisect) or [`hg bisect`](https://www.mercurial-scm.org/repo/hg/help/bisect) that performs this binary search for you.

## This is how to use them

From here on I will be using `git` but the `bisect` command works pretty much the same way in both `git` and `mercurial`. 

Suppose you had code that displayed a Obama icon like this. 16 commits after the icon, you realized the code was not displaying the good icon anymore, instead something like this was displayed. So your manager has asked you to fix the problem. Of course you can just replace the icon by the good icon. But as a good developer, you feel like maybe there is a reason why this was changed in the first place. How do you find out what that reason is? You can go back to the commit that changed the icon in the first place and find out what the intent was. How do you find that commit then?
