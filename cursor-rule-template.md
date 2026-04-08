# Cursor Rule Template for MFE Apps

Copy the content below to `.cursor/rules/madecki-ui.mdc` in your MFE project:

---

```markdown
---
description: Use @madecki/ui component library for all UI development
alwaysApply: true
---

# @madecki/ui Component Library

This project uses @madecki/ui for UI components. This rule applies to ALL frontend development tasks.

## IMPORTANT: Read Library Documentation First

Before creating ANY UI component or writing frontend code, read the library's context file:

**Read this file:** `node_modules/@madecki/ui/llm-context.md`

This file contains:
- All available components and their props
- Design tokens (colors, spacing, typography)
- Usage patterns and examples
- Rules for consistent usage

## When This Applies

- Creating new pages or components
- Building forms, layouts, or navigation
- Adding buttons, inputs, or any interactive elements
- Styling with Tailwind CSS
- Setting up a new frontend project

## Quick Rules

1. ALWAYS read `node_modules/@madecki/ui/llm-context.md` before creating UI
2. ALWAYS import from "@madecki/ui", never create custom versions of library components
3. ALWAYS use design tokens from the library (e.g., `bg-primary`, `p-5`, `text-lg`)
4. NEVER use arbitrary Tailwind values like `bg-[#123456]` or `p-[17px]`

## Import Pattern

\`\`\`tsx
import { Container, Stack, Heading, Text, Button, DetailsPanel, Toast } from "@madecki/ui";
import { Heart, Info } from "@madecki/ui";
\`\`\`

## Setup (Required)

When setting up or onboarding a new project, ensure these are in place before any UI work:

**globals.css (or app.css)**

```css
@import "tailwindcss";
@config "@madecki/ui/tailwind-preset";
@source "./node_modules/@madecki/ui/dist/**/*.{js,cjs}";
```

The `@config` directive is mandatory — it activates `darkMode: "class"` and all design tokens. Without it, dark mode and custom colors won't work regardless of other Tailwind configuration.

**Root layout**

```tsx
<html className="dark">  {/* library is dark-mode first */}
```

## When Starting a New Project

1. Install the library: `npm install @madecki/ui`
2. Add the `globals.css` setup above
3. Add `className="dark"` to the root `<html>` element
4. Read `node_modules/@madecki/ui/llm-context.md` for available components
5. Use library components for all UI elements

## When Unsure

If you're not sure what components are available or how to use them:

1. Read `node_modules/@madecki/ui/llm-context.md` for quick reference
2. Read `node_modules/@madecki/ui/README.md` for full documentation
3. Check TypeScript types for prop definitions
```
