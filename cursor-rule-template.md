# Cursor Rule Template for MFE Apps

Copy the content below to `.cursor/rules/madecki-ui.mdc` in your MFE project:

---

```markdown
---
description: Rules for using @madecki/ui component library
globs: **/*.{tsx,jsx,ts,js}
---

# @madecki/ui Component Library

This project uses @madecki/ui for UI components. ALWAYS use library components instead of creating custom ones.

## Required: Check Library First

Before creating ANY UI component, check if @madecki/ui has it:

### Layout
- `Container` - Page wrapper with max-width
- `Stack` - Vertical/horizontal flex layout
- `Grid` / `GridItem` - CSS grid layout

### Typography
- `Heading` - h1-h6 with consistent styling
- `Text` - Body text with variants

### Interactive
- `Button`, `ButtonTransparent`, `GradientButton` - Buttons
- `Input` - Form inputs
- `Tabs` - Tab navigation
- `RadioButtons` - Radio groups

### Feedback
- `Spinner`, `SpinnerOverlay` - Loading states
- `ContentBox` - Info/warning/success/danger boxes

### Content
- `BlockQuote`, `Hr` - Content elements

### Icons
- `Heart`, `Share`, `Search`, `Info`, `Warning`
- `TwitterIcon`, `LinkedInIcon`, `InstagramIcon`

## Import Pattern

```tsx
import { Container, Stack, Heading, Text, Button } from "@madecki/ui";
import { Heart, Info } from "@madecki/ui";
```

## Design Tokens

ALWAYS use these Tailwind classes, NEVER arbitrary values:

### Colors
`primary`, `darkgray`, `gray`, `lightgray`, `icongray`, `white`, `success`, `danger`, `warning`, `info`, `blue`, `neutral`

### Spacing (gap, padding, margin)
`1`-`10` (4px to 40px scale)

### Typography
`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`

### Border Radius
`sm` (10px), `md` (20px), `circle` (50%)

## Page Structure Pattern

```tsx
import { Container, Stack, Heading, Text } from "@madecki/ui";

export function Page() {
  return (
    <Container size="lg">
      <Stack gap="6">
        <Heading level={1}>Page Title</Heading>
        <Text color="muted">Page description</Text>
        {/* Content */}
      </Stack>
    </Container>
  );
}
```

## Rules

1. NEVER create custom Button, Input, Heading, or Text components
2. NEVER use arbitrary Tailwind values like `bg-[#123456]` or `p-[17px]`
3. ALWAYS use `Container` for page wrappers
4. ALWAYS use `Stack` or `Grid` for component layouts
5. ALWAYS support dark mode when adding custom styles
```
