# @madecki/ui - AI Context

This file provides context for AI assistants building apps with the @madecki/ui component library.

## Setup (Required — do this before any UI work)

### globals.css

```css
@import "tailwindcss";
@config "@madecki/ui/tailwind-preset";
@source "./node_modules/@madecki/ui/dist/**/*.{js,cjs}";
```

The `@config` directive is mandatory — it activates `darkMode: "class"` and all design tokens. Without it, dark mode and custom colors won't work in Tailwind v4 regardless of other configuration.

### Root layout

```tsx
<html className="dark">  {/* library is dark-mode first */}
```

The library is designed dark-mode first. Always add `class="dark"` to the `<html>` element.

## IMPORTANT: Always use @madecki/ui components

When building UI, ALWAYS check if @madecki/ui has a component before creating custom ones.

## Available Components

### Layout
- `Container` - Page wrapper. Props: `size?: "sm"|"md"|"lg"|"xl"|"full"`, `centered?: boolean`
- `Stack` - Flex layout. Props: `direction?: "vertical"|"horizontal"`, `gap?: "1"-"10"`, `align?: "start"|"center"|"end"|"stretch"`, `justify?: "start"|"center"|"end"|"between"|"around"`, `wrap?: boolean`
- `Grid` - Grid layout. Props: `cols?: 1|2|3|4|5|6|12`, `gap?: "1"-"10"`
- `GridItem` - Grid child. Props: `colSpan?: 1|2|3|4|5|6|12|"full"`

### Typography
- `Heading` - Headings h1-h6. Props: `level?: 1-6`, `size?: "xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"|"4xl"`, `weight?: "normal"|"medium"|"semibold"|"bold"`, `color?: "default"|"muted"|"primary"|"success"|"warning"|"danger"`
- `Text` - Body text. Props: `as?: "p"|"span"|"div"|"label"`, `size?: "xs"|"sm"|"md"|"lg"`, `weight?: "normal"|"medium"|"semibold"|"bold"`, `color?: "default"|"muted"|"primary"|"success"|"warning"|"danger"`

### Buttons & tags
- `Button` - Primary button. Shares visual styling with `Tag`. Interactive: `cursor-pointer` when enabled, hover affordances in dark mode, `cursor-not-allowed` when `disabled`. Props: `variant: "primary"|"success"|"warning"|"danger"|"info"|"blue"`, `size?: "xs"|"sm"|"md"|"lg"`, `isActive?: boolean` (requires `id` prop; shows × icon; when active, `onClick` is called with no argument — use this to detect deselect), `label?: string`, `id?: string`, `disabled?: boolean`, `type?: "button"|"submit"|"reset"`
  - **Note:** `variant` values `"white"`, `"gray"`, `"lightGray"`, `"darkGray"`, and `"neutral"` exist in the type but render with no background or border color. Do not use them on `Button`. Use only the six variants listed above.
- `Tag` - Non-interactive label/chip: same `variant` / `size` / look as `Button`, rendered as `<span>`. No `:hover` styles; default cursor (or `cursor-default` when `muted`). Props: `variant`, `size?`, `label?` / `children`, `className?`, `filled?` (filled background like an active button, without the × icon), `muted?` (reduced emphasis, same opacity treatment as a disabled button). Use `Button` when the control must be clickable.
- `ButtonTransparent` - Outlined button. Same props as Button.
- `GradientButton` - Gradient border button. Props: `size?: "sm"|"md"|"lg"`
- `RadioButtons` - Radio group. Props: `name: string`, `options: {label, value}[]`, `onChange: (value) => void`

### Forms
- `Input` - Text input. Props: `name`, `label`, `onChange?: (value: string) => void`, optional **`value`** (controlled) or **`defaultValue`** (uncontrolled initial only), `placeholder?`, **`type?`** (any standard HTML input type from React’s `HTMLInputTypeAttribute`, including `date`, `time`, `datetime-local`, etc.), **`maxLength?`**, `variant?`, `required?`, `pattern?`, `title?`, `ariaLabel?`, `spellCheck?`, `disabled?`, `className?`, `icon?`, **`testId?`** (`data-testid` on the native `<input>` for Playwright). See below for controlled vs uncontrolled and testing.
- `Select` - Combobox styled like `Input`, with trailing chevron. Props: `name`, `label`, `options: { value, label }[]`, `placeholder?`, `variant?` (same as Input), `disabled?`, `className?`, `testId?`. Typing filters the list. **Single (default):** `value?`, `defaultValue?`, `onChange?: (value: string) => void`. **Multi:** `multi={true}`, `value?`, `defaultValue?`, `onChange?: (value: string[]) => void`. The dropdown is absolutely positioned under the field so it does not shift surrounding layout. See below for controlled vs uncontrolled and testing.

### Navigation
- `Tabs` - Tab navigation. Props: `tabs: {label, value}[]`, `onTabClick: (value) => void`

### Feedback
- `Spinner` - Loading spinner. Props: `size?: "sm"|"md"|"lg"`
- `SpinnerOverlay` - Full-screen loader. Props: `isVisible: boolean`
- `ContentBox` - Info/warning boxes. Props: `variant?: "info"|"warning"|"success"|"danger"`, `icon?: ReactNode`

### Content
- `BlockQuote` - Styled quote. Props: `children: ReactNode`
- `Hr` - Horizontal rule. Props: `className?: string`

### Icons
- `Heart` - Props: `variant?: "outline"|"filled"|"gradient"`
- `Share` - Props: `variant?: "default"|"gradient"`
- `Search`, `Info`, `Warning` - Utility icons
- `TwitterIcon`, `LinkedInIcon`, `InstagramIcon` - Social icons. Props: `withWrapper?: boolean`

## Design Tokens (Use these, not arbitrary values)

### Colors
`primary` (#1E1E1E), `darkgray` (#272727), `gray` (#3A3A3A), `lightgray` (#6D6D6D), `icongray` (#BFBFBF), `white` (#FCFAF7), `success` (#87BB54), `danger` (#CB5065), `warning` (#EDA867), `info` (#714E8E), `blue` (#2084E1), `neutral` (#E1E1E1)

### Spacing
`1`=4px, `2`=8px, `3`=12px, `4`=14px, `5`=16px, `6`=20px, `7`=24px, `8`=28px, `9`=32px, `10`=40px

### Typography
`xs`=12px, `sm`=14px, `md`=16px, `lg`=18px, `xl`=20px, `2xl`=24px, `3xl`=29px, `4xl`=34px

### Border Radius
`sm`=10px, `md`=20px, `circle`=50%

## Usage Patterns

```tsx
// Page layout
import { Container, Stack, Heading, Text, Button } from "@madecki/ui";

function Page() {
  return (
    <Container size="lg">
      <Stack gap="6">
        <Heading level={1}>Title</Heading>
        <Text color="muted">Description</Text>
        <Button variant="primary">Action</Button>
      </Stack>
    </Container>
  );
}

// Grid layout
import { Grid, GridItem } from "@madecki/ui";

<Grid cols={3} gap="5">
  <GridItem>Item 1</GridItem>
  <GridItem colSpan={2}>Wide item</GridItem>
</Grid>

// Form
import { Input, Select, Button, Stack } from "@madecki/ui";

<Stack gap="4">
  <Input name="email" label="Email" type="email" onChange={setEmail} />
  <Select
    name="role"
    label="Role"
    testId="signup-role"
    options={[
      { value: "user", label: "User" },
      { value: "admin", label: "Admin" },
    ]}
    onChange={setRole}
  />
  <Button variant="primary">Submit</Button>
</Stack>
```

### Input — controlled vs uncontrolled

| Mode | What you pass | Who owns the text |
|------|----------------|-------------------|
| **Controlled** | `value` (+ `onChange`) | The parent. The field always shows `value`. Update parent state in `onChange` (including for Playwright `fill`) or the UI will not match. |
| **Uncontrolled** | No `value`; optionally `defaultValue` | The `Input` component. `defaultValue` applies on first mount only; it does not resync if the prop changes later (remount with a `key` if you need that). |

If **`value !== undefined`**, the input is controlled (including **`value=""`**).

### Input — testing

- Prefer **`testId`** so Playwright can target `getByTestId("…")` on the real `<input>` without a generic `locator("input")`.
- With **controlled** `value` + `onChange`, `fill()` / typing stay in sync as long as the parent updates state from `onChange` (no `onInputCapture` workaround needed).

### Select — controlled vs uncontrolled

| Mode | What you pass | Who stores the selection |
|------|----------------|---------------------------|
| **Controlled** | `value` (+ `onChange`) | The parent. The UI always reflects `value`. If the parent does not update state in `onChange`, the selection will not stick (or will reset on the next render). |
| **Uncontrolled** | No `value`; optionally `defaultValue` | The `Select` component. Use `onChange` only to observe or sync elsewhere. |

- **Single:** controlled = `value="banana"` and `onChange={(v) => setRole(v)}`. Uncontrolled = omit `value`, optionally `defaultValue="banana"`.
- **Multi:** controlled = `value={["a","b"]}` and `onChange={(v) => setTags(v)}`. Uncontrolled = omit `value`, optionally `defaultValue={["a"]}`.

`defaultValue` is only for the initial render when uncontrolled; once you pass `value`, the component is controlled and `defaultValue` is not used. In this library, **if `value !== undefined` the Select is controlled** (including `value={[]}` for multi).

### Select — testing

**Stable hooks:** Set `testId` for predictable selectors (default is `select-{name}`).

- Combobox input: `data-testid={testId}` (also `role="combobox"`, `aria-label` = `label`).
- Open list: `data-testid="{testId}-listbox"` (`role="listbox"`). Open the field first (click or focus) so the list is in the DOM.
- Each option: `data-testid="{testId}-option-{slug}"` and `data-option-value` with the real value. Slug = option `value` with non-alphanumeric characters replaced by `_`.

**Playwright examples:**

```ts
const base = "signup-role";
await page.getByTestId(base).click();
await expect(page.getByTestId(`${base}-listbox`)).toBeVisible();
await page.getByTestId(`${base}-option-admin`).click();
// Or by accessible name (option text is the label):
await page.getByRole("option", { name: "Admin" }).click();
```

**Unit / component tests (e.g. Vitest + Testing Library):** Render with a fixed `testId`, `userEvent.click` the combobox, assert the listbox and options with `getByTestId`, or use `getByRole("combobox")` / `getByRole("listbox")` / `getByRole("option", { name: "…" })`.

## Rules

1. ALWAYS import from "@madecki/ui" not create custom components
2. ALWAYS use design tokens (e.g., `bg-primary`, `p-5`, `text-lg`) not arbitrary values
3. ALWAYS use `Container` for page-level wrappers
4. ALWAYS use `Stack` or `Grid` for layouts
5. ALWAYS use `Heading` and `Text` for typography
6. Support dark mode with `dark:` prefix when adding custom styles
