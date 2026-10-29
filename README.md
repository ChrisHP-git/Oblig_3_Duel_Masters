# Duel Masters Draft Room

A standalone browser prototype for drafting DM-01 against seven bots.

## Task

This is a task were we had to vibe coded an application. 
For this task I made a Duel Masters draft application where you draft agianst bots.
The Ai used to vibe code the application was Copilot.

## Run

Open `index.html` in a browser. No install or server is required.

## Draft flow

- Draft five 10-card packs, one pick at a time, for 50 total picks.
- Seven bots pick from their packs; packs alternate passing direction each round.
- The draft uses the 120 card images in `DM-01/` and prevents duplicates inside a pack.
- Packs follow the standard 30-pack collation: 18 common runs, 8 very-rare runs, and 4 super-rare runs. Puzzle inserts are replaced by commons to keep all 10 slots draftable. Common runs contain one rare, three uncommons, and six commons; VR/SR runs contain one rare, one hit, three uncommons, and five commons.
- After drafting, build a 40-card deck from your pool. Repeated copies are stacked with counts; add or remove one copy at a time, and complete the deck only at exactly 40.
- Start a practice duel with your deck against a bot's drafted deck. Matches include mana, creature combat, shields, Blockers, Double Breaker, and common DM-01 spell effects. Some unique card abilities are not simulated yet.
- Track your picks by civilization and restart for another draft.

Bot picks use a lightweight civilization preference heuristic rather than a competitive draft model. Card images come from the local `DM-01/` folder.

## Missing Features
- Shield break triggers
- Requierd actions (e.g. have to attack)
