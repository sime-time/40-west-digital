# Design System Strategy: 40 West Digital

## 1. Overview & Creative North Star: "The Cinematic Editorial"
This design system is built to mirror the high-end production values of 40 West Digital. We are moving away from the "SaaS template" aesthetic toward a **Cinematic Editorial** experience. The goal is to make every digital touchpoint feel like a frame from a film or a spread in a premium fashion monograph.

**The Creative North Star:** We prioritize "The Grand Frame." This means using expansive white space, intentional asymmetry, and a high-contrast typographic scale to create a sense of prestige. We reject the rigid, boxed-in layouts of standard web design in favor of layered surfaces and fluid, cinematic transitions.

---

## 2. Colors & Surface Architecture
The palette is rooted in a deep, authoritative "Film Red" (#9B1111) set against a sophisticated neutral foundation.

### Color Tokens
- **Primary:** `#740005` (Deepest Red for high-importance actions)
- **Primary Container:** `#9B1111` (Brand Red for hero elements and signature accents)
- **Surface:** `#FCF9F8` (Warm-tinged off-white background)
- **Surface Container Low:** `#F6F3F2` (For subtle sectioning)
- **Surface Container Highest:** `#E5E2E1` (For nested interactive elements)
- **On-Surface:** `#1C1B1B` (Rich black for maximum legibility)

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections or containers. 
Structure must be achieved through **Background Color Shifts**. For example, a `surface-container-low` section should sit against a `surface` background to define its boundary. This creates a softer, more premium "magazine" feel rather than a technical "app" feel.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of paper and glass.
- **Level 1 (Base):** `surface`
- **Level 2 (In-set Sections):** `surface-container-low`
- **Level 3 (Floating Cards/Elements):** `surface-container-lowest` (#FFFFFF)
This nesting strategy ensures depth is felt through tonal shifts rather than artificial outlines.

### The "Glass & Gradient" Rule
To inject "soul" into the digital interface, use subtle linear gradients on primary CTAs—transitioning from `primary` to `primary-container`. For floating navigation or overlays, utilize **Glassmorphism**: apply a semi-transparent `surface` color with a `20px` backdrop-blur to allow cinematic imagery to bleed through the UI.

---

## 3. Typography: Authority & Elegance
Our typography relies on the tension between the modern, technical precision of **Plus Jakarta Sans** and the romantic, editorial flair of **Playfair Display**.

### The Hierarchy
- **Display (Large/Medium/Small):** Plus Jakarta Sans. Bold weight. Set with a tight letter-spacing (-0.04em). These are your "billboard" moments.
- **Headline & Title:** Plus Jakarta Sans. Medium to Bold. Used for structural hierarchy.
- **Accent Phrases:** Playfair Display. *Italic*. Use these sparingly for "Director's Notes," pull-quotes, or sub-headings to introduce a human, artistic touch.
- **Body:** Plus Jakarta Sans. Regular. Tracking should be slightly opened (+0.01em) for long-form readability.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are often too "heavy" for a cinematic brand. We use **Tonal Layering** to achieve a sense of lift.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The slight shift in lightness provides all the "lift" required.
- **Ambient Shadows:** Where a floating effect is vital (e.g., a modal or a primary video player), use a "Shadow-Glow."
  - **Blur:** 40px - 60px.
  - **Opacity:** 4% - 6%.
  - **Color:** Use a tinted version of `on-surface` rather than pure grey to keep the light feeling natural.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components & Primitives

### Buttons
- **Primary:** `primary-container` background, `on-primary` text. Radius: `0.5rem` (8px). 
- **Tertiary (Editorial):** No background. Bold Plus Jakarta Sans, `primary-container` text color, with a 2px underline that appears on hover.
- **States:** On hover, use a subtle scale-up (1.02x) rather than a drastic color change to mimic a cinematic zoom.

### Cards & Lists
- **The Divider Rule:** Strictly forbid the use of horizontal divider lines. 
- **Spacing:** Separate list items or card content using the Spacing Scale (specifically `8` (2.75rem) or `10` (3.5rem) blocks). 
- **Radius:** All cards must use the `xl` (1.5rem) or `DEFAULT` (0.5rem) radius to maintain the professional, editorial feel.

### Inputs & Fields
- **Style:** Underline-only or subtle `surface-container-high` backgrounds. 
- **Focus State:** Transition the underline color to `primary`. Avoid heavy focus rings.

### Signature Component: The "Film Strip" Carousel
A horizontal scroll component where images bleed off the edge of the screen, using `surface-container-lowest` as a backing for captions. This breaks the grid and emphasizes the "cinematic" nature of the brand.

---

## 6. Do's and Don'ts

### Do
- **Do** use intentional asymmetry. Align text to the left while placing images offset to the right.
- **Do** use large amounts of `6` (2rem) and `10` (3.5rem) spacing to let the content breathe.
- **Do** use Playfair Display *Italics* to highlight key brand verbs (e.g., "We *create* motion").

### Don't
- **Don't** use 1px solid black borders. It breaks the editorial immersion.
- **Don't** use standard "drop shadows" with high opacity. They look "cheap" and "web-like."
- **Don't** crowd the interface. If a screen feels busy, increase the spacing tokens until it feels like a gallery wall.
- **Don't** use pure `#000000` for text; always use the `on-surface` (`#1C1B1B`) token to maintain a softer, cinematic black.