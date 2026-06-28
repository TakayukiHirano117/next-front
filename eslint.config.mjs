import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "**/_containers/*/presentational",
                "**/_containers/*/presentational.*",
                "**/_containers/*/container",
                "**/_containers/*/container.*",
                "**/_containers/*/actions",
                "**/_containers/*/actions.*",
                "**/_containers/*/form",
                "**/_containers/*/form.*",
                "**/_containers/*/*",
              ],
              message: "Import containers via _containers/<name> (index.tsx) only.",
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
