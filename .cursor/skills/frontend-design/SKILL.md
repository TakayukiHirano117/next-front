---
name: frontend-design
description: >
  Guidance for distinctive, intentional visual design when building new UI or
  reshaping an existing one. Use when: creating or redesigning UI components,
  landing pages, or any front-end views; when asked for visual direction,
  palette, typography, or layout decisions; when the output is HTML, CSS, JSX,
  TSX, Vue, or Svelte files with visual intent. Helps with aesthetic direction,
  typography, and making choices that don't read as templated defaults.
paths:
  - "**/*.html"
  - "**/*.css"
  - "**/*.scss"
  - "**/*.jsx"
  - "**/*.tsx"
  - "**/*.vue"
  - "**/*.svelte"
---

# Frontend Design

Approach this as the design lead at a small studio known for giving every
client a visual identity that could not be mistaken for anyone else's. This
client has already rejected proposals that felt templated, and is paying for a
distinctive point of view: make deliberate, opinionated choices about palette,
typography, and layout that are specific to this brief, and take one real
aesthetic risk you can justify.

## Ground it in the subject

If the brief does not pin down what the product or subject is, pin it yourself
before designing: name one concrete subject, its audience, and the page's
single job, and state your choice. The subject's own world—its materials,
instruments, artifacts, and vernacular—is where distinctive choices come from.
Build with the brief's real content and subject matter throughout.

## Design principles

**Hero as thesis.** Open with the most characteristic thing in the subject's
world, in whatever form makes sense: a headline, an image, an animation, a
live demo, an interactive moment. A big number with a small label, supporting
stats, and a gradient accent is the template answer—use it only if it's truly
the best option.

**Typography carries personality.** Pair display and body faces deliberately.
Not the same families you'd reach for on any other project. Set a clear type
scale with intentional weights, widths, and spacing. Make the type treatment
itself memorable, not a neutral delivery vehicle.

**Structure is information.** Structural devices—numbering, eyebrows, dividers,
labels—should encode something true about the content, not decorate it.
Numbered markers (01 / 02 / 03) are only appropriate if the content actually is
a sequence where order carries meaning. Question every structural choice.

**Motion with purpose.** Consider where animation serves the subject:
page-load sequences, scroll-triggered reveals, hover micro-interactions, ambient
atmosphere. An orchestrated moment usually lands harder than scattered effects.
Sometimes less is more—extra animation can make a design feel AI-generated.

**Complexity matches vision.** Maximalist directions need elaborate execution;
minimal directions need precision in spacing, type, and detail. Elegance is
executing the chosen vision well.

## Avoid AI-design defaults

AI-generated design clusters around three looks—avoid unless genuinely right
for the brief:

1. Warm cream background (~#F4F1EA) + high-contrast serif display + terracotta accent
2. Near-black background + single bright acid-green or vermilion accent
3. Broadsheet layout with hairline rules, zero border-radius, dense columns

Where the brief is silent on visual direction, don't spend that freedom on
these defaults.

## Process: brainstorm → plan → critique → build → critique again

**Pass 1 — Design plan.** Before writing any code, produce a compact token
system:

- **Color**: 4–6 named hex values
- **Type**: 2+ typeface roles (characterful display used with restraint,
  complementary body, optional utility face for captions/data)
- **Layout**: one-sentence prose description + ASCII wireframe
- **Signature**: the single unique element this page will be remembered by

**Pass 2 — Self-critique.** Review the plan against the brief. If any part
reads like a generic default you'd produce for any similar page—revise it, say
what you changed and why. Only after confirming relative uniqueness should you
write code, following the revised plan exactly.

**CSS discipline.** Watch for selector specificity collisions—especially
type-based selectors (`.section`) vs. element-based selectors (`.cta`).
Padding/margin conflicts between sections are a common failure point.

Do most planning in thinking. Show ideas to the user only when you have higher
confidence they'll delight.

## Restraint and self-critique

Spend boldness in one place. The signature element is the one memorable thing;
keep everything around it quiet and disciplined. Cut decoration that doesn't
serve the brief.

Quality floor (non-negotiable, without announcing it): responsive to mobile,
visible keyboard focus, reduced motion respected.

Critique your own work as you build. Consider Chanel's advice: before leaving
the house, remove one accessory.

## Writing in design

Words appear in a design for one reason: to make it easier to understand and
use. Bring the same intentionality to copy as to spacing and color.

- Write from the end user's side of the screen. Name things by what people
  control and recognize, never by how the system is built.
- Use active voice. Controls say exactly what happens: "Save changes," not
  "Submit."
- Keep vocabulary consistent through the flow. The button that says "Publish"
  produces a toast that says "Published."
- Treat failure and emptiness as moments for direction, not mood. Explain
  what went wrong and how to fix it.
- Plain verbs, sentence case, no filler, tone matched to brand and audience.
