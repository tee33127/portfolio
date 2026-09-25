A navigation redesign for Etsy's mobile website. It makes the site usable for first-time visitors, not just people who already know how to use Etsy.

![Etsy sitemap: final information architecture](/images/etsy/site-map.webp)

## The Problem

Etsy's mobile site is built for people who already know how to use Etsy. For a first-time visitor, the structure is overwhelming: dozens of categories, deep subcategories, and navigation that assumes you already know where things live. The goal was to redesign the information architecture to make the site navigable for new users.

## Process

**Content inventory**: We cataloged every existing category and subcategory. Mapping it out made the problem immediately visible: the structure was deep, specific, and built for browsing, not finding.

**Card sort setup & Round 1 (n=20)**: I designed the card sort. I pulled the card set from the content inventory, configured the study, and recruited participants. Results were messy: groupings overlapped wildly, and niche terms like "fiber arts" and "sculpting" confused anyone who wasn't already an Etsy user.

**Card simplification & Round 2 (n=12)**: I made a deliberate call to consolidate the cards into broader, more natural category names before running Round 2. The groupings came out significantly cleaner and gave me a clear foundation for the sitemap. (See Key Decision below.)

**Treejack Round 1 (n=13)**: 67% success rate, 65% directness. Four participants abandoned. Task scores: 4 to 6 out of 10.

**Treejack Round 2 (n=8)**: After refining the structure, we saw a 94% success rate and 78% directness. Task scores: 7 to 10 out of 10.

**First-click testing (n=20)**: I designed two task scenarios and ran first-click testing to validate the final navigation before moving to visual design. Both tasks had a 90% success rate, with average completion under 12 seconds.

**Sitemap**: With the validated structure confirmed, I created the final sitemap, a flatter, cleaner hierarchy built around how users actually grouped and navigated the content.

**Wireframes & hi-fi**: I produced all screens in Figma from lo-fi through hi-fi: homepage browse view, category pages, and product listing page. The hi-fi work translated the IA decisions directly into visual, testable screens.

| Method | Round 1 | Round 2 |
|---|---|---|
| Treejack Success | 67% | 94% |
| Treejack Directness | 65% | 78% |
| Task Scores | 4 to 6 / 10 | 7 to 10 / 10 |

![Card sort Round 2: category groupings after restructuring](/images/etsy/card-sort-round-2.webp)

## The Key Decision

Round 1 failed because the cards were too granular. Users couldn't build a mental model of the site from niche terms they'd never encountered. The insight: navigation needs to match how people think *before* they know what they're looking for, not after. A first-time user doesn't think "I want fiber arts." They think "I want something handmade." I restructured the categories around those broader mental models, and Round 2 confirmed it worked.

![Lo-fi to hi-fi: homepage browse view](/images/etsy/lofi-hifi-wireframe.webp)

![Lo-fi to hi-fi: product listing page](/images/etsy/lofi-hifi-wireframe2.webp)

## What I Learned

Information architecture is invisible when it works. A 27-point jump in success rate isn't about visual design or copy. It's purely whether the structure matches how people think. Testing with too much specificity early produces bad data. Simplify first, then add complexity only where the data shows people can handle it.
