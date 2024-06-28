// eslint.config.js
// v12.1.2
import linted from "linted";

export default [
  ...new linted(
    {
      js: [
        // "svelte.config.js",
        "eslint.config.js",
      ],
      ts: [
        // "vite.config.ts",
        "src/**/*.ts",
      ],
      svelte: ["src/**/*.svelte"],
      html: ["src/**/*.html"],
      jest: ["src/**/*.spec.ts"],
      jsonc: ["tsconfig.json"],
      json: ["package.json"],
      yml: [".github/workflows/*.yml"],
    },
  )
    .configs,
];
