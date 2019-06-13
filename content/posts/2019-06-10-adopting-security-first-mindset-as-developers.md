---
template: post
title: Adopting security-first mindset as developers
slug: adopting-security-first-mindset-as-developers
draft: true
date: 2019-06-10T10:10:31.431Z
description: >-
  Cybersecutiry is becoming so important today that we should stop considering
  security as an after-thought or leaving security to specific security team. I
  believe all software developers should embrace a security-first mindset in all
  their development activities.
category: Software Engineering
tags:
  - Software Engineering
---
Dear friend,

Imagine everybody in your city waking up to a notification saying you have been targeted by a nuclear bomb, you should evacuate as soon as possible. Imagine the chaos that will ensue while everybody is trying to escape… And one day later, after flying your entire family to another city, you are told it was just a hoax by some dude still living in his parents basement? You wouldn't be happy, would you?

Well, these are things that can happen when a software system is not secured enough. Someone can misuse it in the worst possible way and cause harm or even death to others.

Hacking has always been an issue since computer systems came into existence. But today, we are in the golden age of sophisticated hacking. Hacking is not only done by some dudes in their parents basement anymore. We now have countries setting up an army of hackers to attack other nations. My friend, we are in the age of cyber warfare. \
And to make matters worse, with the advances in the field of internet of things, everything in our lives is connected. The potential surface of attack and damages have grown exponentially. Now people can kill you by hacking into your car or cardiac implants. People are being [spied on online](https://www.insecam.org/en/bycountry/CA/) because their camera is connected to the internet, and they don't even know it.

As you can see, developing a system without security in mind should not be acceptable today. It exposes people to real dangers. Yes there is a job to do in making people aware of the risk they incur by not securing their products before using it but I do believe that the biggest chunk of responsibilities lie in the hands of those making the products.

It is the responsibility of those making software to make sure what they are building is safe for end users. If you talk about an agile setting, it starts with the project owner or program manager. You don't have to wait for the client to tell you they need security. I will be even harsher, you don't need a client approval to implement security features for end users. When thinking about a feature, a product owner should always include some conditions of success related to security and privacy.

For instance, in our connected cameras case above, the software operating those cameras should have come with a unique password by default to allow accessing the cameras through the internet. I bet most of the users are not even aware that their videos can be viewed online by anyone with an internet connexion.

After the product owner, it should be the developer's responsibility to assure that the feature he is developing is safe for end users. Developers will be the ones ultimately building the software so it is important for them to have a security-first mindset in order to cover as much ground as possible on security. I will go as far as suggesting that this should be part of our deontology as software developers. 

To adopt a security mindset, I would suggest the following:

1. Learn as much as you can about security and privacy. At least you should know the basics about possible attacks on the kind of software you are building.
2. Whenever you are about to build a new feature, think about how the feature could be abused and used against your potential users.
3. Try to use open source software or packages only from trusted sources or at least popular libraries. Though the latter does not guarantee security, at least you have the benefits of having many eyes watching the project if it gets compromised one day.
4. If you need to use software from an untrusted source, then do some due diligence before and if you are using a dependency system, you should lock the dependency to the version you did due diligence on and update manually when you need to.
5. Be ass about security. Do not compromise on end users security. If the client insist on ditching the security features (usually because of budget constraints), make him understand the consequences and sign a liability waiver 😀… You are a professional after all.

Of course, we are probably going to miss things and have some holes in our system that we did not think about. But it is always better to reduce the risk as much as possible. By adopting a security-first mindset, you are setting yourself up for success. 

At the end of the day, going forward we will have no other choice than to build software security-centric software. The Apple, Google and Facebook of this world have understood it (At least I hope so). Security issues are becoming more and more important with the rise of connected objects that they cannot be ignored as in the past. So it's up to you as a developer to start learning about security and adopt a security-first mindset when building software.

Until next time, peace ✌🏾
