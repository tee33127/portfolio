KidsConnect is a mobile chore management app for parents, teachers, and caregivers. The core challenge: most existing apps tie rewards to money, which teaches kids to expect payment for basic responsibilities. We went the other direction.

![Home, Rewards, and Members screens from the final hi-fi prototype](/images/kidsconnect/hero.webp)

## The Problem

Parents manage chores through verbal reminders and informal agreements. There's no consistent system, so follow-through turns into a constant battle. Existing apps like BusyKid and Greenlight tie rewards to money. That creates a different problem: kids only do chores when someone pays them. The real issue isn't task management. It's how you build responsibility without undermining it.

## Research

We surveyed 16 parents, teachers, and caregivers, then ran 6 semi-structured interviews. Key findings:

- 81% wanted a customizable, non-monetary reward system
- 68.8% wanted automated chore assignments based on a child's age
- 56.3% currently manage chores through verbal agreements alone

Interviews confirmed a consistent theme: people wanted something simple, shared, and low-friction, not another subscription app.

![Affinity diagram grouping research insights across task management, communication, technology preferences, and motivation strategies](/images/kidsconnect/affinity-diagram.webp)

## The Key Decision

We committed fully to a non-financial reward system: screen time, family outings, extra privileges, all customizable by the parent. If you pay a kid to take out the trash, they'll only do it when they're getting paid. The research backed this, but it was also just the right design philosophy. This shaped everything: the points and badges system, how rewards were framed in the UI, how much control parents had.

![Early ideation: sketching out the core flows before committing to a direction](/images/kidsconnect/brainstorm.webp)

## Testing

I owned the research from start to finish. I designed the testing protocol, recruited participants, ran both rounds, and analyzed the results in Maze, including heatmap and path analysis. ASQ (After Scenario Questionnaire) scores tracked perceived usability per task on a 1–7 scale. I also helped shape the design decisions that came out of each round.

**Round 1: Lo-fi prototype** (n=8, peer review): Users confused Kids Profile with the general Profile section. The delete flow failed: people expected a trash icon, not an edit-then-delete path. Based on these findings, I proposed the navigation restructure and the direct-delete interaction that carried into Round 2.

**Round 2: Hi-fi prototype via Maze** (n=4, target users): The navigation fix worked, and ASQ scores jumped across the board. Maze heatmap data showed users scanning the assign-task screen but not landing on the "+" button to start. ASQ dropped to 3.70 on that task. I flagged it as a priority fix and recommended surfacing the action through onboarding.

![Lo-fi wireframes used in Round 1 usability testing: Calendar, Home, Assign Tasks, Kids Hub, and Rewards screens](/images/kidsconnect/lofi.webp)

| Task | Round 1 | Round 2 |
|---|---|---|
| Add Child Profile | 4.10 | 5.76 |
| Delete Child Profile | 4.10 | 6.30 |
| Create Custom Reward | 5.90 | 6.83 |
| Send Reminder | 5.76 | 6.70 |

![Maze test results: Assign a Task flow with path analysis and navigation overview](/images/kidsconnect/maze-report.webp)

![Participant response log from Maze usability testing, Round 2](/images/kidsconnect/maze-report2.webp)

## What I'd Do Differently

We designed the entire app around parents, but the kid is the one who actually engages with the gamification, and we never tested with children. I'd build a parallel children's interface and test it directly with kids at different age ranges.

## What I Learned

When research and intuition point in the same direction, commit. Fixing one usability problem often reveals another that was hidden underneath. Iteration is never really done.
