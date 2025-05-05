module.exports = {
  extends: ["expo", "prettier"],
  ignorePatterns: ["/dist/*", "/node_modules/*", './expo-env.d.ts'],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/exhaustive-deps": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "pathGroups": [
          {
            "pattern": "components",
            "group": "internal"
          },
          {
            "pattern": "common",
            "group": "internal"
          },
          {
            "pattern": "routes/ **",
            "group": "internal"
          },
          {
            "pattern": "assets/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes":
          ["internal"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      },
    ],
  },
}
