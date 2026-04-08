## [2.0.0](https://github.com/madecki/ui/compare/v1.5.0...v2.0.0) (2026-04-08)

### ⚠ BREAKING CHANGES

* RadioButtons requires `label`. Group uses radiogroup; options use radio + aria-checked.

Made-with: Cursor

### Features

* add visible form labels, Textarea, and automated changelog ([f00476c](https://github.com/madecki/ui/commit/f00476ca7c548f0e7c1397c22e426449bed2d3f1))

### Bug Fixes

* unblock release checks for Textarea story and workflows ([6aed8a7](https://github.com/madecki/ui/commit/6aed8a77fbb46ae9734024e0195cf323176abd31))

# Changelog

All release notes in this file are **generated automatically** by [semantic-release](https://semantic-release.gitbook.io/) when a version is published to npm. They are built **only** from [Conventional Commits](https://www.conventionalcommits.org/) on **`main`** (see **Releasing** in the repository README).

**Reading this file:** The **latest** published release is always the **topmost** `## [x.y.z]` section. It should match `"version"` in `package.json` inside the package you installed.

**Contributing:** Do not hand-edit versioned sections. Describe user-visible work in commits: use **`feat`**, **`fix`**, or **`perf`** so they appear in the notes. For **breaking** API or behavior changes, use a **`!`** after the type (e.g. **`feat!:`**) and/or a **`BREAKING CHANGE:`** paragraph in the commit **body**. [commitlint](https://commitlint.js.org/) validates messages on **`git commit`** (Husky) and on **every push to `main`** (CI).
