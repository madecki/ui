import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
    },
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom", "tailwindcss"],
    treeshake: true,
    minify: false,
    banner: {
      js: '"use client";',
    },
  },
  {
    entry: {
      "tailwind-preset": "src/tailwind-preset.ts",
    },
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: false,
    external: ["tailwindcss"],
    treeshake: true,
    minify: false,
  },
]);
