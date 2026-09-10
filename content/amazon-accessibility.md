A usability study examining where Amazon's shopping experience breaks down for blind users who rely on screen readers.

![A usability session in progress: a participant navigating Amazon with a task scenario on screen](/images/amazon-accessibility/session-record.webp)

## Empathize

We recruited three blind women, ages 53–76, through our faculty advisor, Professor Oliver Alonzo. All three rely on JAWS daily — two on desktop, one on laptop — but their proficiency with it varied widely, which turned out to matter more than anything else in this study.

I helped design the three task scenarios: search and filter a product, add it to cart, and check out — realistic shopping flows a blind user would actually attempt, not artificial lab tasks. Before each task we asked participants to rate how difficult they expected it to be; after each one, they completed an ASQ (After-Scenario Questionnaire) and walked through a semi-structured interview. Each session ran 45–60 minutes, with the consent form read aloud at the start so participants could confirm understanding before we began.

I facilitated one of the three sessions myself — guiding the participant through tasks, managing the recording, and taking notes in real time — and observed a second to catch what the facilitator might miss.

## Define

E-commerce has made shopping more convenient than ever, unless you're blind. Screen readers narrate page content line by line: ads, banners, pop-ups, dynamic updates, all of it. What reads as a rich shopping experience to sighted users becomes a wall of noise for someone using assistive technology. Amazon, the largest e-commerce platform in the US, still doesn't meet WCAG guidelines around exactly the content that makes an experience feel "modern" — dropdown menus, carousels, pop-ups, real-time updates.

![Dynamic content competes for attention throughout the shopping journey.](/images/amazon-accessibility/define-shopping-and-distractions.webp)

We framed the study around three questions: What specific barriers do blind and low-vision users hit with this kind of dynamic content? How do those barriers actually affect navigation and task completion, not just in theory? And what design changes would close the gap? Prior research (Lazar et al., 2007) had already catalogued what frustrates screen reader users on the web in general — we wanted to see exactly how those frustrations played out on one specific, high-stakes platform.

## Test

I ran the ASQ analysis and built the affinity diagram to synthesize findings across all three sessions, then presented the final research report to our faculty advisor. Five consistent barriers emerged:

**Information overload** — Every participant found the volume of "filler" content exhausting to sit through. P3 put it plainly: *"The constant pop-ups make it hard for me to stay focused on what I am doing."*

**Broken filtering** — The price range slider wasn't compatible with some navigation methods. P2 couldn't filter by price at all and defaulted to manually scanning search results instead — which frequently returned irrelevant products anyway.

**Cart confusion** — P1 and P2 had to recheck their cart at checkout because pop-ups had interrupted the add-to-cart flow, leaving them unsure what they'd actually added.

**Inconsistent support** — Two participants regularly called Amazon's accessibility line, with unreliable results. One noted that Amazon Access, a dedicated accessibility feature, had been removed entirely: *"There used to be Amazon Access, and it was great, but now it's gone."*

**An unequal skill gap** — this was the finding that reframed the whole project for me. One participant couldn't get past the filter step. In a different session, another navigated the entire site — listings, filters, checkout — using only keyboard shortcuts, at a pace that looked completely ordinary. The website was identical both times. The only variable was proficiency with the tool. That gap is enormous, and it's almost entirely invisible to designers, because most accessibility testing doesn't account for it. We design for "blind users" as a single group. They're not one.

![Participants experienced different levels of independence on the same website.](/images/amazon-accessibility/test-shortcut-experience.webp)

![Affinity diagram synthesizing session findings across navigation, search, cart, checkout, and accessibility support themes](/images/amazon-accessibility/affinity-diagram.webp)

![Recorded ASQ scores alongside observations from three usability sessions. Even the advanced shortcut user encountered barriers.](/images/amazon-accessibility/test-scores-and-observations.webp)

Our recommendations followed directly from what we saw, not from a generic accessibility checklist:

1. Clear heading structures and skip links to cut down on cognitive load from filler content
2. User controls to pause or disable pop-ups and live updates, with ARIA live regions used only where they genuinely add value
3. Fully keyboard-navigable filters with real-time feedback on selections
4. Reliable, trained accessibility support instead of variable call-center experiences
5. In-app screen reader onboarding, so proficiency with the tool isn't a prerequisite for using the site at all

## Reflect

Three participants is a small sample, and all three were totally blind — we didn't reach low-vision users, who face a different set of challenges, and our age range (all 50+) likely skewed findings toward users less familiar with newer assistive tech.

What stayed with me most, though, wasn't a limitation — it was the realization that accessibility isn't binary. A site can technically meet WCAG and still be genuinely unusable for a large share of its users, because compliance measures the interface, not the person using it. The skill a user brings to their assistive technology shapes their experience as much as the design does. That's not an excuse for bad design — if anything it raises the bar: accessible design has to work for the novice and the expert, not just reward whoever has put in the most practice.

