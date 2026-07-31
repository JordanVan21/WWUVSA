# Plan: Navbar "Join Us" Dropdown

## Goal
Convert the sticky navbar's "Join Us" button into a click-to-open dropdown that surfaces three paths instead of redirecting straight to Contact.

## Changes

### 1. Header dropdown (src/components/Header.tsx)
- Replace the static "Join Us" `<Link>` with a button that toggles a small dropdown menu.
- Dropdown items:
  - **WWU WIN** — placeholder link (href="#" or a configurable placeholder URL the user can swap later).
  - **WWU Instagram** — external link to the WWU VSA Instagram profile.
  - **Calendar** — internal `<Link to="/calendar">`.
- Interaction:
  - Open/close on click of the "Join Us" button.
  - Close when clicking outside the dropdown.
  - Close on `Escape` key.
  - Keep the existing visual style (rounded-full, Vietnamese-red background, white text, shadow).
- Accessibility:
  - `aria-expanded`, `aria-haspopup="menu"`, `aria-controls` on the trigger.
  - Dropdown menu uses `role="menu"` and items use `role="menuitem"`.
  - Focus trap / sensible focus management inside the dropdown.
  - Visible focus states matching the site design.

### 2. Mobile menu consistency
- Ensure the mobile hamburger menu still exposes the same three options if the dropdown is not practical at small widths, or keep the desktop dropdown and the existing mobile "Join Us" link. Decision: mirror the three links inside the mobile sheet for parity.

### 3. Verify
- Run `npm run build` (or `bun run build`) and confirm no errors.
- Open the preview, click "Join Us", and confirm all three links render and navigate correctly.
- Test closing via outside click and Escape.
- Check no console errors on desktop and mobile viewports.

## Out of scope
- No changes to other pages, routing, or the Contact page.
- The WWU WIN placeholder URL will remain a placeholder; user will swap it later.
