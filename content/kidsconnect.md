KidsConnect is a mobile chore management app for parents, teachers, and caregivers. The core challenge: most existing apps tie rewards to money, which teaches kids to expect payment for basic responsibilities. We went the other direction.

## Overview

**Type** · Academic Capstone — HCI 594, DePaul University
**Timeline** · January – March 2025
**Role** · Lead Designer, Researcher
**Team** · 3 members

![Home, Rewards, and Members screens from the final hi-fi prototype](/images/kidsconnect/hero.png)

## The Problem

Parents manage chores through verbal reminders and informal agreements — no consistent system, constant battles with follow-through. Existing apps like BusyKid and Greenlight tie rewards to money. That creates a different problem: kids only do chores when someone pays them. The real issue isn't task management — it's how you build responsibility without undermining it.

## Research

We surveyed 23 parents, teachers, and caregivers, then ran 6 semi-structured interviews. Key findings:

- 81% wanted a customizable, non-monetary reward system
- 68.8% wanted automated chore assignments based on a child's age
- 56.3% currently manage chores through verbal agreements alone

Interviews confirmed a consistent theme: people wanted something simple, shared, and low-friction — not another subscription app.

![Affinity diagram grouping research insights across task management, communication, technology preferences, and motivation strategies](/images/kidsconnect/affinity-diagram.png)

## The Key Decision

We committed fully to a non-financial reward system — screen time, family outings, extra privileges — all customizable by the parent. If you pay a kid to take out the trash, they'll only do it when they're getting paid. The research backed this, but it was also just the right design philosophy. This shaped everything: the points and badges system, how rewards were framed in the UI, how much control parents had.

![Early ideation — sketching out the core flows before committing to a direction](/images/kidsconnect/brainstorm.png)

## Testing

I designed the lo-fi prototype in Figma and ran two rounds of usability testing (n=8 peer review, then n=4 target users via Maze).

**Round 1:** Users confused Kids Profile with the general Profile section. The delete flow also failed — people expected a trash icon, not an Edit-then-delete flow.

**Round 2:** Profile navigation fixed, scores jumped. One regression: task assignment dropped to 3.70 — users couldn't find the "+" button to start. Flagged as a priority fix via onboarding.

![Lo-fi wireframes used in Round 1 usability testing — Calendar, Home, Assign Tasks, Kids Hub, and Rewards screens](/images/kidsconnect/lofi.png)

| Task | Round 1 | Round 2 |
|---|---|---|
| Add Child Profile | 4.10 | 5.76 |
| Delete Child Profile | 4.10 | 6.30 |
| Create Custom Reward | 5.90 | 6.83 |
| Send Reminder | 5.76 | 6.70 |

![Maze test results — Assign a Task flow showing 90.9% success rate and navigation overview](/images/kidsconnect/maze-report.png)

![Participant response log from Maze usability testing — Round 2](/images/kidsconnect/maze-report2.png)

## What I'd Do Differently

We designed the entire app around parents — but the end user engaging with the gamification is the kid, and we never tested with children. I'd build a parallel children's interface and test it directly with kids at different age ranges.

## What I Learned

When research and intuition point in the same direction, commit. Fixing one usability problem often reveals another that was hidden underneath. Iteration is never really done.
