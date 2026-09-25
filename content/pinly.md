Pinly is a mobile app for the moment after you save a place and before you actually go. A spot you bookmarked from TikTok or Instagram needs to turn into a real decision at some point, and that's the gap Pinly is built around. Before I sketched a single screen, I spent the research phase trying to disprove my own assumptions about why saved places don't get used.

![Splash, home, and place-detail screens from the final hi-fi prototype](/images/pinly/hero-mockup.webp)

## Empathize

I started outside the app entirely, with a desk research pass across Reddit, Pantip, and Thai creator content on Lemon8, plus a look at how 8 existing apps (Google Maps, Mapstr, Plotline, Apple Maps, and others) handle saving today. I wanted real behavior patterns before writing a single survey question, and I kept that secondary evidence clearly separate from anything I hadn't verified myself. That pass pointed to three retrieval styles people actually use. Known-item ("I know the name, just find it"), associative ("the ramen place that creator posted"), and contextual ("something I saved nearby"). I turned this into a Proto-Empathy Map, and I labeled it "proto" on purpose. It's synthesis of other people's behavior, not primary research, and I didn't want it mistaken for user fact.

A few of the actual threads that shaped this, one in English and one in Thai:

<div class="image-pair">

![Reddit r/Instagram thread: "Saved posts on Instagram are great, until you actually try to find an old one," describing thousands of saved posts with no way to sort or filter them back into view](/images/pinly/desk-research-reddit-ig-saves.webp)

![Pantip thread asking whether Google Maps reviews actually affect the decision to visit a place](/images/pinly/desk-research-pantip-reviews.webp)

</div>

And one full thread, question and replies, that got at the "if I really wanted to go, I'd remember it" tension I kept running into:

<div class="image-pair">

![Reddit r/travel thread: "How do you keep track of places you want to visit," with 32 comments](/images/pinly/desk-research-reddit-travel-tracking.webp)

![Replies to that thread: some people pin everything in Google Maps and get lost in their own pins, others rely on memory alone](/images/pinly/desk-research-reddit-travel-replies.webp)

</div>

To test what the desk research suggested, I ran a survey of 25 responses (Aug 18 to 24, 2026) on how people discover, save, and revisit places. A few findings held up:

- 19 of 25 had failed to relocate a saved place at least once in the past 6 months
- 18 of 25 recalled a place by category, creator, photo, or neighborhood first. Only 5 of 25 started from the place's actual name
- 21 of 25 save across 2 or more platforms, but that split roughly in half: 12 found it manageable, 9 ran into real friction
- Only 10 of 25 started a decision from their saved places at all. The rest searched fresh or asked whoever they were going with
- 16 of 25 estimated they actually visit 0 to 10% of what they save

<div class="image-pair">

![Survey Q2 results: 60% of the 25 respondents said their most recent save was a bookmark inside a social app like Instagram, TikTok, or Facebook](/images/pinly/survey-save-method.webp)

![Survey Q7 results: only 20% found their last saved place quickly, while 60% had to search a while or dig through multiple spots before finding it](/images/pinly/survey-retrieval-outcome.webp)

</div>

I also tried hard not to overclaim from this data. The survey doesn't support "fragmentation causes decision paralysis" or "saving more places creates choice overload." Both were live hypotheses going in, and neither held up, so I dropped them instead of forcing a narrative.

## Define

The problem statement that came out of this: *"Save ไว้ง่าย แต่พอจะใช้จริง ยังต้องหาให้เจอ และเช็กว่าเหมาะกับตอนนี้หรือเปล่า"*, or in English, saving is easy, but using what you saved still means finding it again and checking whether it still fits right now. How might we help someone recover a place from whatever they still remember, and see quickly whether it's still a good fit for the moment they're actually in?

That gave me a working persona, the Saved-Engaged Decider: someone who saves places from social platforms with real intent to return to them, but whose main goal (picking something they already liked that still fits today) keeps getting blocked by two things. What they remember is rarely the place's name, and a saved place doesn't automatically mean it's still relevant.

I benchmarked Pinly against 8 direct and indirect competitors (Plotline, Mapstr, Google Maps Saved, Rhyme, Ready to Echo, Corner, Wanderlog, Beli, Apple Maps), and the gap became obvious. Every one of them treats the map as the product: save, pin, browse. None of them own the moment between "I saved this" and "can I go now?" That became the positioning. Not another place to save things, but a personal place-decision assistant built on top of saves you've already made elsewhere.

![Competitive comparison across four questions users actually ask, benchmarked against saved/bookmark tools and map apps](/images/pinly/competitive-diff.webp)

## Ideate

The core design principle, stated early and kept on the wall for the rest of the project: capture is the enabler, decision is the value. Every screen had to earn its place against that.

That led to a specific pipeline for how a saved post becomes something trustworthy enough to act on: source, then reference, then association, then place. A shared TikTok or Instagram post comes in as an unverified reference, gets resolved against candidate places, and only becomes a Confirmed Place once it's been reviewed, either by the system at high confidence or explicitly by the user. Unconfirmed places don't show up in "Good right now" or anywhere else in the decision flow. I built that boundary directly from what the survey showed: a save doesn't imply visit intent, and treating every save as equally decision-ready would just move the friction somewhere else.

"Good right now" is the feature everything else builds toward. Instead of a static archive, the home screen surfaces saved places that actually work given the moment: open now, close enough, priced right, fitting whoever you're with. It's a direct answer to the 16 of 25 people who save far more than they ever visit.

![Survey Q11 results: the top reasons people cut a saved place from consideration were distance or parking (56%), a companion vetoing it (44%), and finding somewhere better (36%), which is exactly the mix "Good right now" checks for](/images/pinly/survey-exclusion-factors.webp)

From there, the path to screens went through a full information architecture (19 screens, 37 states plus one modifier), a low-fi pass to lock the flows before visual design, and a component library (22 families, 63 variants) to keep the hi-fi screens consistent.

![Low-fi wireframes: home, filtered results, place detail, and the review/confirm flow](/images/pinly/lofi-wireframe.webp)

## Prototype

The hi-fi prototype landed at 32 frames and 98 working links in Figma. A few flows carry most of the product's logic.

Home surfaces "Good right now" as the primary action, backed by Recently Saved and Recent References. The latter links straight back to the original TikTok or Instagram post a place came from, since the survey showed source context matters almost as much as the place itself.

Place detail answers "can I go now?" directly: hours, distance, price band, right next to "why you saved it," which shows the original post and caption instead of making you reconstruct your own reasoning.

Review is the confirm step for batch imports, like a "5 ramen shops around Ekkamai" post. Each candidate can be confirmed one at a time or all at once, with a way to flag a wrong match before it ever reaches Confirmed Places.

![Hi-fi screens: home, filtered results with "why it fits," place detail, and saved places search](/images/pinly/hifi-wireframe.webp)

## Next Steps

I haven't run usability testing yet, and that's where the project honestly stands. The prototype is built on solid desk research and survey evidence, but neither one substitutes for watching someone actually use it, and I don't want to claim validation I don't have.

The next step is testing with 5 to 8 people who genuinely save places they mean to revisit, and I want to aim it at the parts of the design I'm least sure about:

- Whether "Good right now" resurfacing feels useful, or starts to feel like notification spam once it's a daily habit instead of a demo
- Whether "Confirm all" on a batch import gets used the way I intended, or just gets rubber-stamped without anyone actually checking the matches. I flagged this risk against myself while designing it, not something I'm assuming is fine
- Why people default to a fresh search over their own saved places even when a relevant one exists. The survey couldn't tell me if that's habit, distrust, or something the design hasn't earned yet
