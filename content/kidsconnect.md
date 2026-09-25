KidsConnect is a mobile chore management app for parents, teachers, and caregivers. The core challenge: most existing apps tie rewards to money, which teaches kids to expect payment for basic responsibilities. We went the other direction.

![Home, Rewards, and Members screens from the final hi-fi prototype](/images/kidsconnect/hero.webp)

## Empathize

We surveyed 16 parents, teachers, and caregivers, then ran 6 semi-structured interviews (30 to 45 min each, via Zoom) to understand how families actually manage chores today, before assuming what they needed.

**How families currently manage chores:**
- 56.3% rely on verbal agreements alone, no written or digital system
- 31.3% don't assign specific chores at all
- Only 12.5% use a written list or digital tool

**What they wanted in an app:**
- 81.3% wanted a customizable, non-monetary reward system
- 68.8% wanted automated chore assignments based on a child's age
- 43.8% wanted calendar/reminder integration and gamified elements (badges, points)
- 31.3% wanted progress tracking and reports

Two personas grounded the rest of the project: **Emily**, a working parent of two (ages 6 and 10) who resorts to sticky notes because shared calendars felt too manual to maintain, and **James**, a 4th-grade teacher tracking chores for 20+ students on a paper checklist, open to an app only if it stayed simple enough to use across different classroom setups. Cost came up unprompted in interviews, more than once, as a reason people would abandon an app before trying it.

![Affinity diagram grouping research insights across task management, communication, technology preferences, and motivation strategies](/images/kidsconnect/affinity-diagram.webp)

## Define

Existing apps like BusyKid and Greenlight tie rewards to money, pairing chores with financial education. That solves the wrong problem: kids only do chores when someone pays them, and neither app makes the process itself engaging. Our research confirmed it from the family side too. Parents weren't missing a tracking tool, they were missing a way to build responsibility that didn't quietly teach the opposite lesson.

That gave us a clear problem to design around: **parents need a way to make chores feel worth doing, without turning them into paid labor.** Whatever we built had to stay low-effort to set up and low-friction to keep using, since neither persona had patience for a complicated system.

## Ideate

We weighed a few directions: a points-for-cash system like the competition, a hybrid model, and a fully gamified, non-monetary system. We committed to the third.

![Early ideation: sketching out the core flows before committing to a direction](/images/kidsconnect/brainstorm.webp)

If you pay a kid to take out the trash, they'll only do it when they're getting paid. The research backed this (81% of parents wanted exactly this), but it also matched the literature: mastery-based rewards build responsibility in a way financial ones don't (Madjar et al., 2016). That gave us a design philosophy, not just a feature list. It shaped the points and badges system, how rewards were framed in the UI, and how much control parents had over customization.

## Prototype

I designed the lo-fi prototype in Figma, covering the core flows: assigning tasks, creating rewards, managing children's profiles, and sending reminders.

![Lo-fi wireframes used in Round 1 usability testing: Calendar, Home, Assign Tasks, Kids Hub, and Rewards screens](/images/kidsconnect/lofi.webp)

Two rounds of usability testing (below) pushed this into the hi-fi version shown at the top of this page. The biggest structural change was separating Kids Profile from the general Profile section after Round 1 exposed how badly they were being confused for each other.

## Test

I owned the research from start to finish. I designed the testing protocol, recruited participants, ran both rounds, and analyzed the results in Maze, including success rate, drop-off, misclick rate, and heatmap/path analysis. ASQ (After Scenario Questionnaire) scores tracked perceived usability per task on a 1 to 7 scale. I also helped shape the design decisions that came out of each round.

**Round 1: Lo-fi prototype** (n=8, peer review). Users confused Kids Profile with the general Profile section, and the heatmap showed why: clicks concentrated on the wrong nav icon entirely. The delete flow failed for the same underlying reason, since people expected a trash icon, not an edit-then-delete path. Assigning a task scored well on paper (90.9% success), but a 39.8% misclick rate said the flow was more effortful than it should be. Based on these findings, I proposed the navigation restructure and the direct-delete interaction that carried into Round 2.

**Round 2: Hi-fi prototype via Maze** (n=4, target users). The navigation fix worked. The heatmaps below tell the story on their own: Round 1's clicks land on the wrong icon in the tab bar, and Round 2's land squarely on Kids Hub.

<div class="image-pair">

![Round 1 heatmap: clicks concentrated on the wrong tab-bar icon, not Kids Hub](/images/kidsconnect/heatmap-round1.webp)

![Round 2 heatmap: clicks now land correctly on Kids Hub after the navigation fix](/images/kidsconnect/heatmap-round2.webp)

</div>

ASQ scores jumped across the board:

| Task | Round 1 | Round 2 |
|---|---|---|
| Add Child Profile | 4.10 | 5.76 |
| Delete Child Profile | 4.10 | 6.30 |
| Create Custom Reward | 5.90 | 6.83 |
| Send Reminder | 5.76 | 6.70 |

One regression: **Task Assignment dropped to 3.70.** Maze's path data showed users scanning the assign-task screen but never landing on the "+" button to start. It wasn't a comprehension problem, it was a discoverability one. The interaction worked fine once found. I flagged it as the top priority fix and recommended surfacing it through onboarding rather than restructuring the screen, since everything else on it tested well.

![Maze test results: Assign a Task flow with path analysis and navigation overview](/images/kidsconnect/maze-report.webp)

![Participant response log from Maze usability testing, Round 2](/images/kidsconnect/maze-report2.webp)

## Reflect

**What I'd do differently:** We designed the entire app around parents, but the kid is the one who engages with the gamification day to day, and we never tested with a single child. That's the biggest gap in this project. I'd build a parallel kid-facing view and test it directly across a few age ranges, since the way a 6-year-old reads a badge is nothing like how a parent assumes they will. I'd also fix the discoverability gap on task assignment before anything else, since it's the one flow that regressed in Round 2.

**Where I'd take it next:** Parents raised cost as a real adoption barrier, which points toward a freemium model: core features free, customization paid. And several interviewees wanted the system to get smarter on its own; age-based task recommendations would remove a setup step rather than add one, which fits the "low-effort" bar this whole project was built around.

**What I learned:** When research and intuition point in the same direction, commit. The non-financial reward system was both what parents said they wanted and the design philosophy I believed in, and that alignment gave the whole project a clear spine. I also learned that usability fixes rarely close the book: solving the profile-navigation confusion in Round 2 didn't just improve those scores, it uncovered the task-assignment problem that had been sitting underneath it the whole time, undetected in Round 1 because everyone was busy getting lost somewhere else.
