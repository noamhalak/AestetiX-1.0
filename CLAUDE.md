# Design System Usage Rules

## Core Principle
Always use existing design system components and patterns before creating anything new.

Consistency is more important than creativity.

---

# Component Rules

- Never invent new UI patterns if an existing one already solves the problem
- Reuse existing components whenever possible
- Extend existing variants before creating new components
- Match the visual language of the system at all times
- Every UI element should feel like part of the same product

---

# Before Creating Any New Component

You must:
1. Search the existing design system first
2. Check if a similar component or variant already exists
3. Reuse existing spacing, sizing, radius, shadows, and typography tokens
4. Follow existing interaction patterns
5. Match existing hover, focus, active, disabled, and loading states

If no exact component exists:
- Create a variation of an existing component
- Do not introduce a new visual language
- Keep behavior and styling consistent with the system

---

# Buttons

- Use only existing button variants
- Do not create custom button styles
- Keep button heights, padding, radius, and icon spacing consistent
- Use the same icon sizes and alignment across the system
- Header buttons must follow the same patterns as global actions

---

# Inputs & Forms

- Use existing input components only
- Keep labels, placeholders, validation, and helper text consistent
- Match all focus and error states to the design system
- Do not create custom search bars or filter styles

---

# Tables

- Use existing table layouts and pagination patterns
- Reuse existing filters, sorting, badges, and actions
- Keep row spacing and typography consistent
- Do not invent new table interaction patterns

---

# Navigation

- Sidebar and top navigation must follow existing navigation patterns
- Keep active states, hover states, spacing, and icon alignment consistent
- Do not redesign navigation behavior per page

---

# Cards & Containers

- Use existing card styles
- Keep border radius, shadows, padding, and spacing aligned with tokens
- Statistic cards must follow the same layout structure and hierarchy

---

# Icons

- Use a single icon library consistently
- Keep icon sizes and stroke widths aligned
- Do not mix icon styles

---

# Colors & Tokens

Always use:
- Design tokens
- Semantic colors
- Typography styles
- Spacing tokens
- Radius tokens
- Shadow tokens

Never hardcode styles unless explicitly approved.

---

# Consistency Rules

The system should feel:
- Predictable
- Reusable
- Cohesive
- Scalable

Every page should look like it belongs to the same product and same component library.

---

# AI Implementation Rules

When generating UI:
- Prefer reuse over invention
- Prefer extension over replacement
- Prefer consistency over uniqueness

If uncertain:
- Follow the closest existing pattern
- Do not improvise a new one

After completing the full design system audit and applying all fixes, commit and push all updated changes to Git.
Make sure the final implementation is fully aligned with the design system before pushing.
