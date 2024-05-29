module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "refactor", "test", "build", "docs", "chore", "project"],
    ],
    "subject-max-length": [1, "always", 150],
  },
};
