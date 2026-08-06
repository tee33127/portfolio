A usability study examining where Amazon's shopping experience breaks down for blind users who rely on screen readers.

![A usability session in progress: a participant navigating Amazon with a task scenario on screen](/images/amazon-accessibility/session-record.webp)

## The Problem

E-commerce has made shopping more convenient than ever, unless you're blind. Screen readers navigate page content line by line, reading everything aloud: ads, banners, pop-ups, dynamic updates. What feels like a rich shopping experience for sighted users becomes a wall of noise for someone using assistive technology. During our study, participants ran into barriers with interactive controls, dynamic content, and page structure. These are the kind of issues covered by established accessibility guidelines.

## Research

We recruited three blind women, ages 53–76, who used JAWS daily.

I helped design the three task scenarios: search and filter a product, add to cart, and check out. They reflected realistic shopping flows a blind user would actually attempt. Each session ran 45–60 minutes. I facilitated one of the three sessions: guiding the participant through the tasks, managing the recording, and taking notes in real time. We administered ASQ scoring after each task and followed up with semi-structured interviews. I ran the ASQ analysis and built the affinity diagram to synthesize findings across all three sessions. I also presented the final research report to our faculty advisor.

## What We Found

Five consistent barriers across all participants:

**Information overload**: Screen readers read everything. P3 described the constant pop-ups as making it hard to stay focused on the task at hand.

**Broken filtering**: The price range slider wasn't compatible with some navigation methods. P2 couldn't filter by price at all.

**Cart confusion**: P1 and P2 had to recheck their cart at checkout because pop-ups had interrupted the add-to-cart flow.

**Unequal skill gap**: One participant couldn't navigate past the filters. Another, using keyboard shortcuts, moved through the site at a pace that looked completely normal. The website was identical. The difference was proficiency with the tool.

**Inconsistent support**: Two participants regularly called Amazon's accessibility support line. The experience was unreliable. One noted that Amazon Access, a dedicated accessibility feature, had been removed.

![Affinity diagram synthesizing session findings across navigation, search, cart, checkout, and accessibility support themes](/images/amazon-accessibility/affinity-diagram.webp)

## The Moment That Made It Real

The most striking thing I observed wasn't a failure. It was the contrast between two participants navigating the exact same site. One was stuck at filters. The other flew through checkout. The gap between a user who has mastered screen reader shortcuts and one who hasn't is enormous, and it's largely invisible to designers. We design for "blind users" as if they're a single group. They're not.

![Comparative ASQ scores across all three participants: P1 (3.80), P2 (4.33), P3 (2.00)](/images/amazon-accessibility/asq-score-edit.webp)

## Design Implications

1. Clear heading structures and skip links to reduce cognitive load
2. User controls to pause or disable pop-ups and live updates
3. Fully keyboard-navigable filters with real-time selection feedback
4. Reliable, trained accessibility support, not variable call-center experiences
5. In-app screen reader onboarding so proficiency isn't a barrier to access

## What I Learned

Accessibility isn't binary. A site can technically meet WCAG and still be genuinely unusable for a large portion of its users. The gap between compliance and usability is where real people get left behind.
