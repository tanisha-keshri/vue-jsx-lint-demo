module.exports = {
    extends: [
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
      "plugin:vue/essential",
      "plugin:prettier/recommended",
    ],overrides: [
      {
        files: ['*.js', '*.jsx'],
        parserOptions: {
          ecmaFeatures: {
            "jsx": true
        },
          parser: require.resolve('babel-eslint'), 
        },
      },
    ],
    parserOptions: {
      extraFileExtensions: ['.vue'],
      parser: require.resolve('@typescript-eslint/parser'),
    },
    rules: {
      "@typescript-eslint/no-var-requires": ["off"],
      'vue/component-name-in-template-casing': 'error',
    }
};
