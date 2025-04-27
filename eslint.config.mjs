import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import testingLibrary from 'eslint-plugin-testing-library';

const ERROR = 2;
const WARN = 1;
const OFF = 0;

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'packages/**/node_modules/**', 'dist/**', 'build/**'],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  perfectionist.configs['recommended-alphabetical'],
  importPlugin.flatConfigs.react,
  importPlugin.flatConfigs['react-native'],
  importPlugin.flatConfigs.typescript,
  react.configs.flat.all,
  react.configs.flat['jsx-runtime'],
  reactRefresh.configs.recommended,
  testingLibrary.configs['flat/react'],
  eslintConfigPrettier, // last
  {
    languageOptions: {
      globals: {
        __DEV__: 'readonly', // Définit __DEV__ comme une variable globale en lecture seule
        __dirname: 'readonly', // Définit __dirname comme une variable globale en lecture seule
        module: "readonly",
        process: "readonly",
        require: "readonly"
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
      perfectionist: {
        partitionByComment: true,
        type: 'alphabetical',
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    ...reactHooks.configs.recommended,
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
      '@typescript-eslint/dot-notation': [ERROR, { allowKeywords: true }],
      '@typescript-eslint/no-empty-function': OFF,
      '@typescript-eslint/restrict-template-expressions': OFF,
      'import/no-unresolved': OFF, // handled by TypeScript
      'no-console': [WARN, { allow: ['warn'] }],
      'no-magic-numbers': [
        ERROR,
        { ignore: [-1, 0, 1, 2, 3, 4, 5, 6], ignoreArrayIndexes: true },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            value: {
              components: '@/components(/.+)?',
              hooks: '@/hooks(/.+)?',
              navigation: '@/navigation(/.+)?',
              screens: '@/screens(/.+)?',
              theme: '@/theme(/.+)?',
              translations: '@/translations(/.+)?',
            },
          },
          groups: [
            'side-effect',
            ['type', 'internal-type'],
            ['builtin', 'external'],
            ['theme', 'hooks', 'navigation', 'translations'],
            ['components', 'screens'],
            'internal',
            'unknown',
          ],
          newlinesBetween: 'always',
          type: 'alphabetical',
        },
      ],

      'react-refresh/only-export-components': OFF,
      'react/forbid-component-props': OFF,
      'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', '.jsx'] }],
      'react/jsx-max-depth': [ERROR, { max: 10 }],
      'react/jsx-no-bind': OFF,
      'react/jsx-no-literals': OFF,
      'react/jsx-props-no-spreading': OFF,
      'react/jsx-sort-props': OFF, // Handled by perfectionist
      'react/no-multi-comp': OFF,
      'react/no-unescaped-entities': OFF,
      'react/require-default-props': [
        ERROR,
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],
    },
  },
  {
    files: ["**/*.js", "**/*.mjs", "*.js", "*.mjs"], // 只针对 JS 文件
    ...eslint.configs.recommended,
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/no-require-imports': OFF,
      'import/default': OFF,
      'import/export': OFF,
      'import/extensions': OFF,
      'import/first': OFF,
      'import/named': OFF,
      'import/namespace': OFF,
      'import/no-duplicates': OFF,
      'import/no-unresolved': OFF,
    }
  },
  {
    files: ['**/theme/*.ts'],
    rules: {
      'no-magic-numbers': OFF,
    },
  },
  {
    files: ['**/*.spec.{js,ts,jsx,tsx}', '**/*.test.{js,ts,jsx,tsx}'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
    },
  },

);
