module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  tailwindFunctions: ["cn", "clsx", "twMerge"],
  overrides: [
    {
      files: "*.{ts,tsx}",
      options: {
        parser: "typescript",
      },
    },
  ],
};
