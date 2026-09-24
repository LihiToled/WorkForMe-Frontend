import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import onlyError from 'eslint-plugin-only-error'
import constCase from 'eslint-plugin-const-case'
import perfectionist from 'eslint-plugin-perfectionist'
import editorconfig from 'eslint-plugin-editorconfig'
import switchCase from 'eslint-plugin-switch-case'
import padding from 'eslint-plugin-padding'
import paths from 'eslint-plugin-paths'
import gitbutlerNoRelativeImports from '@gitbutler/eslint-plugin-no-relative-imports'
import arrayFunc from 'eslint-plugin-array-func'
import writeGoodComments from 'eslint-plugin-write-good-comments'
import exceptionHandling from 'eslint-plugin-exception-handling'
import math from 'eslint-plugin-math'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'only-error': onlyError,
      'const-case': constCase,
      perfectionist,
      editorconfig,
      'switch-case': switchCase,
      padding,
      paths,
      '@gitbutler/no-relative-imports': gitbutlerNoRelativeImports,
      'array-func': arrayFunc,
      'write-good-comments': writeGoodComments,
      'exception-handling': exceptionHandling,
      math,
    },
    rules: {
      'const-case/uppercase': 'error',
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-objects': 'error',
      'perfectionist/sort-jsx-props': 'error',
      'write-good-comments/write-good-comments': 'error',
      'array-func/from-map': 'error',
      'array-func/no-unnecessary-this-arg': 'error',
      'editorconfig/editorconfig': 'error',
      'switch-case/newline-between-switch-case': 'error',
      '@gitbutler/no-relative-imports/no-relative-imports': 'error',
      'exception-handling/no-unhandled': 'error',
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  eslintPluginPrettierRecommended,
])