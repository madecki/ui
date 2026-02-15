# @madecki/ui

A collection of reusable React UI components built with TypeScript and Tailwind CSS. Framework-agnostic (works with Next.js, Vite, Create React App, etc.).

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

## Setup

### 1. Configure Tailwind CSS

**Option A: Using CSS `@config` directive (recommended)**

Reference the preset in your main CSS file:

```css
@import "tailwindcss";
@config "@madecki/ui/tailwind-preset";
@source "./node_modules/@madecki/ui/dist/**/*.{js,cjs}";
```

**Option B: Using JavaScript config**

If you prefer a `tailwind.config.js` file:

```js
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

### 2. Import Components

```tsx
import { Button, Input, Tabs, Spinner } from "@madecki/ui";
import { Heart, Share, TwitterIcon } from "@madecki/ui";
```

## Components

### Buttons

- **Button** - Primary button with multiple color variants and sizes
- **ButtonTransparent** - Transparent/outlined button variant
- **GradientButton** - Button with gradient border effect
- **RadioButtons** - Radio button group component

```tsx
<Button variant="primary" size="md" onClick={() => {}}>
  Click me
</Button>

<ButtonTransparent variant="success">
  Transparent Button
</ButtonTransparent>

<GradientButton size="lg">
  Gradient Button
</GradientButton>
```

### Input

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

### Tabs

```tsx
<Tabs
  tabs={[
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
    { label: "Tab 3", value: "tab3" },
  ]}
  onTabClick={(value) => console.log("Selected:", value)}
/>
```

### Spinner

```tsx
<Spinner size="md" />
<SpinnerOverlay isVisible={isLoading} />
```

### BlockQuote

```tsx
<BlockQuote>
  "This is a quote with a nice styling."
</BlockQuote>
```

### ContentBox

```tsx
import { ContentBox, Info, Warning } from "@madecki/ui";

<ContentBox variant="info" icon={<Info />}>
  This is an info box.
</ContentBox>

<ContentBox variant="warning" icon={<Warning />}>
  This is a warning box.
</ContentBox>
```

### Hr (Horizontal Rule)

```tsx
<Hr className="my-8" />
```

## Icons

### Heart

```tsx
<Heart variant="outline" /> // outline style
<Heart variant="filled" />  // filled style
<Heart variant="gradient" /> // gradient style
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

// Without wrapper
<TwitterIcon withWrapper={false} />
```

## Theming

The package comes with a custom color palette:

| Color     | Value     |
|-----------|-----------|
| primary   | #1E1E1E   |
| darkgray  | #272727   |
| lightgray | #6D6D6D   |
| gray      | #3A3A3A   |
| white     | #FCFAF7   |
| success   | #87BB54   |
| danger    | #CB5065   |
| info      | #714E8E   |
| blue      | #2084E1   |
| warning   | #EDA867   |
| neutral   | #E1E1E1   |

All components support dark mode via the `dark:` Tailwind prefix.

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

## Releasing

Releases are fully automated using [semantic-release](https://semantic-release.gitbook.io/). When commits are pushed to `main`, the CI automatically:

1. Analyzes commit messages to determine the version bump
2. Updates `package.json` and `CHANGELOG.md`
3. Creates a Git tag and GitHub Release
4. Publishes to NPM with provenance

### Commit Message Format

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Your commit messages determine the version bump:

| Commit Type | Example | Version Bump |
|-------------|---------|--------------|
| `fix:` | `fix: resolve input focus issue` | Patch (1.0.0 → 1.0.1) |
| `feat:` | `feat: add new Checkbox component` | Minor (1.0.0 → 1.1.0) |
| `feat!:` or `BREAKING CHANGE:` | `feat!: require Tailwind v4` | Major (1.0.0 → 2.0.0) |
| `docs:`, `chore:`, `style:`, `refactor:`, `test:` | `docs: update README` | No release |

### Examples

```bash
# Bug fix → patch release
git commit -m "fix: button not responding to click events"

# New feature → minor release
git commit -m "feat: add Toast notification component"

# Breaking change → major release
git commit -m "feat!: drop support for React 17

BREAKING CHANGE: React 18+ is now required"
```

## License

MIT
