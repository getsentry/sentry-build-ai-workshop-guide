import jsxA11y from 'eslint-plugin-jsx-a11y';
import astro from 'eslint-plugin-astro';
import mdx from 'eslint-plugin-mdx';

export default [
  // Astro files
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astro.parsers['astro'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { astro: astro },
    rules: astro.configs.recommended.rules,
  },
  // MDX files
  {
    files: ['**/*.mdx'],
    languageOptions: {
      parser: mdx.parsers['mdx'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { mdx: mdx },
    rules: mdx.configs.recommended.rules,
  },
  // JS/TS files
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // ESLint recommended rules
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      curly: 'error',
      semi: ['error', 'always'],
      // jsx-a11y recommended rules
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    },
  },
];
