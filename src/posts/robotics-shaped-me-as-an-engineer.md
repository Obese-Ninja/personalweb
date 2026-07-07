---
title: The robot taught me: what hardware does to a software engineer
date: 2026-07-08
description: Before I secured networks I was soldering them. A look back at the robotics years — and why the hardware–software seam is where engineers are actually made.
tags: robotics, hardware, engineering, arduino, personal
---

<figure>
  <img src="/robotics/hero.jpg" alt="A hand holding a compact robot: an Arduino Mega, two motor-driver boards, a rainbow ribbon cable and a voltage display reading 5.0, all crammed together." />
  <figcaption>One robot, in one hand. An Arduino Mega, two motor drivers, a step-down reading a steady 5.0&nbsp;V, and more wire than sense. This is what an engineering education actually looks like up close.</figcaption>
</figure>

People know me now as a cybersecurity engineer — endpoints, networks, hybrid Active Directory. But years before I was defending systems, I was building them from a pile of Arduino boards, jumper wire and hot glue. Robotics was my first real engineering, and I'm convinced it's the thing that quietly shaped how I think about *everything* I've built since.

Here's the argument I want to make: **you don't fully become an engineer until you've had to make hardware and software agree with each other.** Software alone is forgiving. It compiles, it runs, you get a stack trace when it doesn't. Hardware doesn't care about your intentions. A robot is where the two collide — and that collision is where the real lessons live.

## Where it started

It started at Central College, Kuliyapitiya, with a line-following robot and far too much confidence. In September 2017, our school team won the **Gold Award in the school category at SLIIT RoboFest 2017** — the country's biggest student robotics competition, 500+ school students and 300 university students that year. The local paper even ran the result.

<figure>
  <img src="/robotics/newspaper-award.jpg" alt="Newspaper photo of a student robotics team receiving a large 'School Category Gold Award' cheque on stage, captioned 'Gold Winner of the school category was Kuliyapitiya Central College'." />
  <figcaption>The Sunday Times, September 2017 — "Gold Winner of the school category was Kuliyapitiya Central College." That's us, holding a cheque and trying not to grin too hard.</figcaption>
</figure>

That win wasn't the end of it. Over the next couple of years the robots got meaner and the competitions got bigger:

- **SLIIT RoboFest 2017** — 1st place (Gold, school category)
- **Digital Dreams Robotics Competition**, University of Kelaniya, 2017 — 1st place
- **IESL Robo Games 2018** — 1st runners-up
- **ZEUS Robot Battles** 2017 — 1st runners-up
- **Tholangamuwa Robot Battles** — 1st runners-up

<figure class="clipping">
  <img src="/robotics/newspaper.jpg" alt="Full newspaper column from the Sunday Times Education Times headlined 'SLIIT's ROBOFEST 2017 fosters Innovation through Robotics Exploration', with a photo of robots on the arena and two award photos below." />
  <figcaption>The full clipping. RoboFest ran categories in embedded systems, control systems and robotics — a first taste of the disciplines I'd spend the next decade in.</figcaption>
</figure>

Trophies are a nice way to keep score, but they're not the point. The point is what a robot *does to you* while you build it.

## What hardware teaches software

Write a program to move a servo 90 degrees and it moves 90 degrees — in the simulator. On the bench it overshoots, because the motor has inertia the code never modelled. Read a distance sensor in a tidy loop and it returns clean numbers — until the robot's own motors inject electrical noise into the same power rail and your "10 cm" reads as "10 cm, 40 cm, 3 cm, 10 cm." Nothing in the software changed. The *world* changed, and the software was wrong about it.

<div class="fig-grid two">
  <img src="/robotics/build.jpg" alt="Two hand-built robots side by side on a workbench, each a dense stack of Arduino boards, motor drivers and coloured wiring over small wheels." />
  <img src="/robotics/arena.jpg" alt="A long line-up of competition robots on a white arena under pink stage lighting, branded ROBOFEST 2017." />
</div>

That is the entire lesson, and you can't get it from a screen. Hardware forces a kind of humility that makes you a better software engineer:

- **Your abstractions leak, and you learn where.** A voltage sags under load; a sensor lies; a loop that's "fast enough" isn't when a wheel is about to hit a wall. You start writing code that expects the world to misbehave.
- **You debug across a boundary.** When the robot won't turn, the bug could be in your PID constants, a cold solder joint, a brown-out, or a motor driver you fried an hour ago. You learn to *localise* a fault across two very different domains instead of assuming it's "the code."
- **Latency and timing become physical.** Milliseconds stop being abstract when they're the difference between stopping on the line and driving off the table.

Every one of those instincts came straight back when I moved into security. An endpoint agent that behaves in the lab and fails in production, a network that drops packets under load, a system that's "secure" until the real world applies pressure to it — same shape of problem. Robotics just taught it to me in a form I could hold in my hand.

## The part nobody photographs

The competitions have bright lights. The building doesn't. It's a tiled floor, a hand-taped track, a warm can of cola, and a team that has been debugging the same turn for three hours at midnight.

<div class="fig-grid two">
  <img src="/robotics/teamwork.jpg" alt="Four young men sitting on a tiled floor at night around a laptop and a small robot, a taped line-following track spread out in front of them." />
  <img src="/robotics/track.jpg" alt="A hand-built black-and-white line-following track taped across a floor, with tools, wires and a stand fan in the background." />
</div>

We taped that track ourselves out of black and white paper because we couldn't afford a printed one. We tuned the robot against it until it stopped cutting corners. That's where I learned the last thing robotics teaches, which has nothing to do with electronics: **engineering is a team sport with a deadline, and the work is mostly the unglamorous middle.** The trophy photo is thirty seconds. The floor is three weeks.

## Why every engineer should build a robot

If you only ever write software, build a robot anyway. Give the code a body and watch what happens to your assumptions. You'll come out treating your abstractions with suspicion, debugging across boundaries instead of within them, and respecting the gap between "it works" and "it works in the real world."

I don't build robots for competitions any more. But every time I reason about how an attack crosses from cloud to on-premises, or why a control that passes every test still fails under a real adversary, I'm using something a line-following robot taught a teenager on a taped-up floor in Kuliyapitiya. The hardware is long gone. The way of thinking never left.

---

*Photos are my own, from 2017–2019. Clipping: The Sunday Times, Education Times, 17 September 2017.*
