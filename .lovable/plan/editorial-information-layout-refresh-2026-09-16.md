# Editorial Information Layout Refresh

## Goal
Reduce repeated white informational cards across the WWU VSA website while preserving its content, identity, approved media experiences, and functional cards.

## What will change
- Introduce a small shared set of card-free patterns: editorial feature columns, numbered process highlights, divided fact lists, icon-text rows, and restrained information panels.
- Rework **A Community Built for You** into numbered editorial columns on desktop, a comfortable two-column tablet layout, and stacked icon-text rows with horizontal separators on mobile.
- Rework About page mission values into open editorial highlights and Community Roots into logo-led organization profiles separated by rules rather than floating boxes.
- Rework event detail **What to Expect** sections into compact icon-led editorial rows and event facts into a divided details panel.
- Rework program **How It Works** into a numbered sequence and **Who It Is For** into an open definition list.
- Rework the Contact information sidebar into divided icon-text content while keeping the approved form and map presentation intact.

## What will stay unchanged
- Merchandise grid and every product card.
- Board carousel and board member cards.
- Event overview/related-event cards because they are navigable objects.
- Gallery filters, media tiles, lightbox, video players, and event hero media.
- Existing written content, page hierarchy, brand colors, typography, spacing rhythm, and motion character.

## Technical details
- Build reusable presentation components around existing data rather than duplicating page-specific markup.
- Use semantic brand tokens, thin responsive dividers, accessible decorative icons, and reduced-motion-safe entrances.
- At desktop widths, related concepts use horizontal space and vertical rules. Tablet uses two columns where readable. Mobile stacks content with horizontal separators and no oversized boxes.
- Verify all affected routes at desktop, laptop, tablet portrait/landscape, mobile portrait/landscape, including overflow, console errors, TypeScript checks, lint, and the production build.