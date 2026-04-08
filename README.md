# @madecki/ui

A collection of reusable React UI components built with TypeScript and Tailwind CSS. Designed to ensure visual and functional consistency across Micro Frontend (MFE) applications.

## Why This Library?

When building multiple MFE applications, maintaining consistency is challenging:

- **Visual consistency** - Same colors, spacing, typography, and component styling
- **Code consistency** - Same component APIs, patterns, and behaviors
- **Developer experience** - Familiar components reduce onboarding time

This library solves these problems by providing:

1. **Pre-built components** with consistent styling and APIs
2. **Tailwind preset** that exports the complete design system
3. **Layout primitives** for consistent page structures
4. **Typography components** for unified text styling

## Installation

```bash
npm install @madecki/ui
# or
yarn add @madecki/ui
# or
pnpm add @madecki/ui
```

## Requirements

- React 18+
- Tailwind CSS 4+

---

## MFE Consistency Guide

### 1. Tailwind Configuration (Required)

All MFE apps **must** use the shared Tailwind preset to ensure identical design tokens.

**Option A: Using CSS `@config` directive (recommended for Tailwind v4)**

```css
/* app.css or globals.css */
@import "tailwindcss";
@config "@madecki/ui/tailwind-preset";
@source "./node_modules/@madecki/ui/dist/**/*.{js,cjs}";
```

**Option B: Using JavaScript config**

```js
// tailwind.config.js
import { madeckiPreset } from "@madecki/ui/tailwind-preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [madeckiPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@madecki/ui/dist/**/*.{js,cjs}",
  ],
};
```

### 2. Use Library Components (Required)

Import and use components from the library instead of creating custom ones:

```tsx
import {
  Button,
  Input,
  Heading,
  Text,
  Container,
  Stack,
  Grid,
} from "@madecki/ui";
```

### 3. Consistent Layout Structure

Use the layout components to create consistent page structures:

```tsx
import { Container, Stack, Heading, Text } from "@madecki/ui";

function Page() {
  return (
    <Container size="lg">
      <Stack gap="6">
        <Heading level={1}>Page Title</Heading>
        <Text>Page content goes here.</Text>
      </Stack>
    </Container>
  );
}
```

### 4. Dark Mode Support

All components support dark mode via the `dark` class. Implement consistent dark mode across apps:

```tsx
// Add 'dark' class to html or body element
document.documentElement.classList.add("dark");
```

### 5. Custom Styling Guidelines

When you need custom styles, **always use the design tokens**:

```tsx
// ✅ DO: Use design tokens
<div className="bg-primary text-white p-5 rounded-md">

// ❌ DON'T: Use arbitrary values
<div className="bg-[#1E1E1E] text-[#FCFAF7] p-[16px] rounded-[20px]">
```

### 6. AI/LLM Integration

When using AI assistants (Cursor, Copilot, Claude, etc.) to build MFE apps, configure them to use this library correctly.

#### Option A: Cursor Rules (Recommended for Cursor)

Copy the rule template to your MFE project:

```bash
# Create the rules directory
mkdir -p .cursor/rules

# Copy the template
cp node_modules/@madecki/ui/cursor-rule-template.md .cursor/rules/madecki-ui.mdc
```

**Why this works:** The rule tells the AI to read `node_modules/@madecki/ui/llm-context.md` at runtime. This means:
- The rule file is static and rarely changes
- The actual component docs are read from whatever version is installed
- Updating `@madecki/ui` automatically updates what the AI sees

#### Option B: Point AI to Documentation

When starting a conversation with an AI assistant, reference the context file:

```
Read node_modules/@madecki/ui/llm-context.md and use @madecki/ui components for all UI.
```

Or in Cursor, use `@madecki-ui` to reference the file directly.

#### Option C: Project-Level Context

Create a `CLAUDE.md` or `AGENTS.md` file in your project root:

```markdown
# AI Instructions

This project uses @madecki/ui for all UI components.

Before creating any UI component, check node_modules/@madecki/ui/llm-context.md
for available components and design tokens.

Rules:
- Always import from "@madecki/ui"
- Never create custom Button, Input, Heading, or Text components
- Always use design tokens, never arbitrary Tailwind values
```

#### What Gets Exported

| File | Purpose | Path |
|------|---------|------|
| `llm-context.md` | Condensed component reference for AI | `node_modules/@madecki/ui/llm-context.md` |
| `cursor-rule-template.md` | Ready-to-use Cursor rule | `node_modules/@madecki/ui/cursor-rule-template.md` |
| `README.md` | Full documentation | `node_modules/@madecki/ui/README.md` |
| TypeScript types | Prop autocompletion | Automatic via IDE |

---

## Design System

### Color Palette

| Token      | Value     | Usage                           |
|------------|-----------|--------------------------------|
| `primary`  | #1E1E1E   | Main background, dark surfaces |
| `darkgray` | #272727   | Secondary backgrounds          |
| `gray`     | #3A3A3A   | Borders, subtle backgrounds    |
| `lightgray`| #6D6D6D   | Muted text, secondary text     |
| `icongray` | #BFBFBF   | Icons, disabled states         |
| `white`    | #FCFAF7   | Primary text, light surfaces   |
| `success`  | #87BB54   | Success states, confirmations  |
| `danger`   | #CB5065   | Errors, destructive actions    |
| `warning`  | #EDA867   | Warnings, cautions             |
| `info`     | #714E8E   | Informational elements         |
| `blue`     | #2084E1   | Links, interactive elements    |
| `neutral`  | #E1E1E1   | Neutral backgrounds, borders   |

### Spacing Scale

| Token | Value | Usage                    |
|-------|-------|--------------------------|
| `1`   | 4px   | Tight spacing            |
| `2`   | 8px   | Compact spacing          |
| `3`   | 12px  | Small spacing            |
| `4`   | 14px  | Default tight padding    |
| `5`   | 16px  | Default spacing          |
| `6`   | 20px  | Medium spacing           |
| `7`   | 24px  | Component padding        |
| `8`   | 28px  | Section spacing          |
| `9`   | 32px  | Large spacing            |
| `10`  | 40px  | Extra large spacing      |

### Typography Scale

| Token  | Size  | Usage                    |
|--------|-------|--------------------------|
| `xs`   | 12px  | Captions, labels         |
| `sm`   | 14px  | Small text, metadata     |
| `md`   | 16px  | Body text (default)      |
| `lg`   | 18px  | Large body, emphasis     |
| `xl`   | 20px  | Small headings           |
| `2xl`  | 24px  | Section headings         |
| `3xl`  | 29px  | Page headings            |
| `4xl`  | 34px  | Hero headings            |

### Border Radius

| Token    | Value | Usage                    |
|----------|-------|--------------------------|
| `sm`     | 10px  | Small components         |
| `md`     | 20px  | Cards, containers        |
| `circle` | 50%   | Circular elements        |

---

## Components

### Layout Components

#### Container

Centers content with consistent max-widths and padding.

```tsx
<Container size="lg" centered>
  {/* Content */}
</Container>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"lg"` | Max-width |
| `centered` | `boolean` | `true` | Center horizontally |

#### Stack

Vertical or horizontal flex layout with consistent gaps.

```tsx
<Stack direction="vertical" gap="5" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `"vertical" \| "horizontal"` | `"vertical"` | Stack direction |
| `gap` | `"1"` - `"10"` | `"4"` | Gap between items |
| `align` | `"start" \| "center" \| "end" \| "stretch"` | `"stretch"` | Alignment |
| `justify` | `"start" \| "center" \| "end" \| "between" \| "around"` | `"start"` | Justification |
| `wrap` | `boolean` | `false` | Allow wrapping |

#### Grid

CSS grid layout with consistent column configurations.

```tsx
<Grid cols={3} gap="5">
  <GridItem>Item 1</GridItem>
  <GridItem colSpan={2}>Wide Item</GridItem>
</Grid>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 12` | `3` | Number of columns |
| `gap` | `"1"` - `"10"` | `"5"` | Gap between items |

### Typography Components

#### Heading

Semantic headings with consistent styling.

```tsx
<Heading level={1} color="default">Page Title</Heading>
<Heading level={2} size="xl" weight="semibold">Section</Heading>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | HTML heading level |
| `size` | `"xs"` - `"4xl"` | Auto by level | Font size |
| `weight` | `"normal" \| "medium" \| "semibold" \| "bold"` | `"bold"` | Font weight |
| `color` | `"default" \| "muted" \| "primary" \| "success" \| "warning" \| "danger"` | `"default"` | Text color |

#### Text

Body text with consistent styling.

```tsx
<Text size="md" color="muted">Secondary information</Text>
<Text as="span" weight="semibold">Inline emphasis</Text>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"p" \| "span" \| "div" \| "label"` | `"p"` | HTML element |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | Font size |
| `weight` | `"normal" \| "medium" \| "semibold" \| "bold"` | `"normal"` | Font weight |
| `color` | `"default" \| "muted" \| "primary" \| "success" \| "warning" \| "danger"` | `"default"` | Text color |

### Interactive Components

#### Button

Primary button with multiple color variants and sizes.

```tsx
<Button variant="primary" size="md" onClick={() => {}}>
  Click me
</Button>
```

#### ButtonTransparent

Transparent/outlined button variant.

```tsx
<ButtonTransparent variant="success">
  Transparent Button
</ButtonTransparent>
```

#### GradientButton

Button with gradient border effect.

```tsx
<GradientButton size="lg">
  Gradient Button
</GradientButton>
```

#### RadioButtons

Radio button group component.

```tsx
<RadioButtons
  name="option"
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ]}
  onChange={(value) => console.log(value)}
/>
```

### Form Components

#### Input

Text input with variants and icon support.

```tsx
<Input
  name="email"
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  variant="primary"
  onChange={(value) => console.log(value)}
/>
```

### Navigation

#### Tabs

Tab navigation component.

```tsx
<Tabs
  tabs={[
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
  ]}
  onTabClick={(value) => console.log("Selected:", value)}
/>
```

### Feedback Components

#### Spinner

Loading spinner with size variants.

```tsx
<Spinner size="md" />
```

#### SpinnerOverlay

Full-screen loading overlay.

```tsx
<SpinnerOverlay isVisible={isLoading} />
```

### Content Components

#### BlockQuote

Styled blockquote for quotations.

```tsx
<BlockQuote>
  "This is a quote with nice styling."
</BlockQuote>
```

#### ContentBox

Info/warning/success/danger boxes with icon support.

```tsx
import { ContentBox, Info, Warning } from "@madecki/ui";

<ContentBox variant="info" icon={<Info />}>
  This is an info box.
</ContentBox>

<ContentBox variant="warning" icon={<Warning />}>
  This is a warning box.
</ContentBox>
```

#### Hr

Styled horizontal rule.

```tsx
<Hr className="my-8" />
```

---

## Icons

### Heart

```tsx
<Heart variant="outline" />
<Heart variant="filled" />
<Heart variant="gradient" />
```

### Share

```tsx
<Share variant="default" />
<Share variant="gradient" />
```

### Utility Icons

```tsx
<Search size={24} />
<Info />
<Warning />
```

### Social Icons

```tsx
<TwitterIcon />
<LinkedInIcon />
<InstagramIcon />

{/* Without wrapper */}
<TwitterIcon withWrapper={false} />
```

---

## MFE Integration Checklist

Use this checklist when integrating the library into a new MFE app:

- [ ] Install `@madecki/ui` package
- [ ] Configure Tailwind to use `madeckiPreset`
- [ ] Add `@source` directive to scan library components
- [ ] Replace custom buttons with `Button`, `ButtonTransparent`, or `GradientButton`
- [ ] Replace custom inputs with `Input`
- [ ] Use `Container` for page-level layouts
- [ ] Use `Stack` and `Grid` for component layouts
- [ ] Use `Heading` and `Text` for all typography
- [ ] Implement dark mode with `dark` class toggle
- [ ] Verify all custom styles use design tokens (no arbitrary values)

---

## Extending the Library

### Adding Custom Components

When you need components not in the library, follow these guidelines:

1. **Use design tokens** - Only use colors, spacing, and typography from the preset
2. **Follow naming conventions** - Match existing component API patterns
3. **Support dark mode** - Include `dark:` variants
4. **Consider contributing** - If widely useful, submit a PR to add it to the library

### When NOT to Use Library Components

- **One-off specialized UI** - Unique to a single app/feature
- **Third-party integrations** - Complex widgets with their own styling
- **Performance-critical** - When you need maximum optimization

---

## Development

```bash
# Install dependencies
npm install

# Start Storybook for component development
npm run storybook

# Build the package
npm run build

# Run type checking
npm run typecheck
```

### Adding or Modifying Components

When you add, remove, or change component APIs, update these files:

1. **Component files** - `src/components/*/`
2. **Exports** - `src/components/index.ts` and `src/index.ts`
3. **LLM context** - `llm-context.md` (component list and props)
4. **Cursor template** - `cursor-rule-template.md` (quick reference)
5. **README** - This file (full documentation)

The `.cursor/rules/` directory contains Cursor rules for developing this library. These rules remind AI assistants to keep documentation in sync when components change.

### File Structure

```
src/components/ComponentName/
├── ComponentName.tsx    # Component implementation
└── index.ts            # Re-exports
```

## Releasing

Releases are fully automated using [semantic-release](https://semantic-release.gitbook.io/). When commits are pushed to `main`, the **Release** workflow runs `typecheck`, `lint`, `build`, and **`npm test`**, then **`npx semantic-release`**, which in order:

1. Analyzes **conventional** commit messages since the last release to pick the **semver** bump
2. Generates release notes **only** from those commits
3. **Prepends** a new `## [version]` section to **`CHANGELOG.md`** and sets **`package.json`** `"version"`
4. Publishes to npm (the `prepublishOnly` script builds again)
5. Pushes the version commit, creates a Git tag, and opens a **GitHub Release**

There is **no** separate manual changelog step: if it is not described in a merged commit on `main`, it will not appear in **`CHANGELOG.md`**.

### Commit Message Format

This project uses [Conventional Commits](https://www.conventionalcommits.org/) enforced by [commitlint](https://commitlint.js.org/):

- **Locally:** Husky runs **`commitlint`** on the **`commit-msg`** hook, so **`git commit` fails** if the message does not follow the rules (bypass only with **`git commit --no-verify`**).
- **Locally:** Husky runs **`npm run precheck`** on **`pre-push`** (typecheck, lint, build, tests, Storybook build — same as CI/Release). Bypass with **`git push --no-verify`** if you must.
- **On `main`:** CI runs commitlint on **every push** for the commits in that push, so bad messages are caught even if someone skipped the hook.

**Format:** `type(scope?): description`

| Type | Description | Release / changelog |
|------|-------------|---------------------|
| `feat` | New feature | Minor; appears under **Features** |
| `fix` | Bug fix | Patch; appears under **Bug Fixes** |
| `perf` | Performance improvement | Patch; appears under **Performance Improvements** |
| `docs` | Documentation only | None (not in changelog by default) |
| `style` | Code style (formatting) | None |
| `refactor` | Code change (no fix/feat) | None |
| `test` | Adding/updating tests | None |
| `chore` | Maintenance tasks | None |

**Breaking changes** (major bump): use **`feat!:`** / **`fix!:`** and/or a **`BREAKING CHANGE:`** paragraph in the commit **body** (after a blank line). Example body:

```text
feat!: require label on RadioButtons

BREAKING CHANGE: RadioButtons now requires a `label` prop.
```

### Examples

```bash
# Bug fix → patch release (1.0.0 → 1.0.1)
git commit -m "fix: resolve button click handler"

# New feature → minor release (1.0.0 → 1.1.0)
git commit -m "feat: add Toast notification component"

# Breaking change → major release (1.0.0 → 2.0.0)
git commit -m "feat!: drop support for React 17"
```

## License

MIT
