export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Helps multi-line bodies and BREAKING CHANGE: footers parse correctly
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "header-max-length": [2, "always", 100],
    // Editors/tools may append footers (e.g. Co-authored-by); avoid blocking valid BREAKING CHANGE text
    "footer-max-line-length": [0],
    // Bullet lists in bodies often exceed 100 chars; keep subject/header strict instead
    "body-max-line-length": [0],
  },
};
