module.exports = {
  'import/order': [ 'error', {
    'newlines-between': 'always',
    groups: [
      'builtin', // Built-in imports (come from NodeJS native) go first
      'external', // <- External imports
      'internal', // <- Absolute imports
      [ 'sibling', 'parent', ], // <- Relative imports, the sibling and parent types they can be mingled together
      'index', // <- index imports
      'unknown', // <- unknown
    ],
    pathGroups: [
      { pattern: 'vue**', group: 'external', position: 'before', },
      { pattern: 'pinia', group: 'external', position: 'before', },
      { pattern: 'axios', group: 'external', position: 'before', },
      { pattern: 'http-status-codes', group: 'external', position: 'before', },
      { pattern: 'quasar', group: 'external', position: 'before', },
      { pattern: 'quasar/**', group: 'external', position: 'before', },
      { pattern: 'boot', group: 'external', position: 'before', },
      { pattern: 'types', group: 'external', position: 'before', },
      { pattern: '**/types/**', group: 'external', position: 'before', },
      { pattern: 'routes', group: 'external', position: 'before', },
      { pattern: '**/routes/**', group: 'external', position: 'before', },
      { pattern: 'api', group: 'external', position: 'before', },
      { pattern: '**/services/api/**', group: 'external', position: 'before', },
      { pattern: 'stores', group: 'external', position: 'before', },
      { pattern: '**/stores/**', group: 'external', position: 'before', },
      { pattern: 'utils', group: 'external', position: 'before', },
      { pattern: '**/utils/**', group: 'external', position: 'before', },
      { pattern: 'module', group: 'external', position: 'before', },
      { pattern: '**/components/common/**', group: 'external', position: 'before', },
      { pattern: 'components', group: 'external', position: 'before', },
      { pattern: '**/components/**', group: 'external', position: 'before', },
      { pattern: '^[./]', group: 'internal', position: 'before', },
    ],
    pathGroupsExcludedImportTypes: [ 'vue', ],
    alphabetize: {
      order: 'asc',
      caseInsensitive: true,
    },
    distinctGroup: true,
    warnOnUnassignedImports: true,
  }, ],

  'no-console': [ 'warn', { allow: [ 'warn', 'error', ], }, ],

  curly: 'error',

  'comma-dangle': [ 'error', {
    arrays: 'always',
    objects: 'always',
    imports: 'always',
    exports: 'always',
    functions: 'never',
  }, ],

  'array-bracket-spacing': [ 'error', 'always', ],

  eqeqeq: [ 'error', 'smart', ],

  'prefer-promise-reject-errors': 'off',

  quotes: [
    'error',
    'single',
    { avoidEscape: true, allowTemplateLiterals: false, },
  ],

  // allow debugger during development only
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

  'no-useless-constructor': 'off',

  'no-shadow': 'off',

  'no-var': [ 'error', ],

  'lines-between-class-members': [ 'error', 'always', ],

  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: [ 'return', 'export', 'const', 'let', ],
    },
    { blankLine: 'always', prev: [ 'const', 'let', ], next: '*', },
    {
      blankLine: 'any',
      prev: [ 'const', 'let', ],
      next: [ 'const', 'let', ],
    },
    {
      blankLine: 'always',
      prev: [ 'case', 'default', 'directive', ],
      next: '*',
    },
    { blankLine: 'any', prev: 'directive', next: 'directive', },
  ],

  '@typescript-eslint/comma-dangle': 'off',

  '@typescript-eslint/no-unsafe-call': 'off',

  '@typescript-eslint/no-unsafe-return': 'off',

  '@typescript-eslint/no-unsafe-member-access': 'off',

  '@typescript-eslint/no-unsafe-assignment': 'off',

  '@typescript-eslint/no-shadow': [ 'error', ],

  '@typescript-eslint/no-unused-vars': 'error',

  '@typescript-eslint/restrict-template-expressions': 'off',

  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      allowSingleExtends: true,
    },
  ],

  // to enforce using type for object type definitions, can be type or interface
  '@typescript-eslint/consistent-type-definitions': [ 'error', 'type', ],

  // this rule, if on, would require explicit return type on the `render` function
  '@typescript-eslint/explicit-function-return-type': 'off',

  // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
  '@typescript-eslint/no-var-requires': 'off',

  '@typescript-eslint/prefer-nullish-coalescing': 'off',

  '@typescript-eslint/strict-boolean-expressions': 'off',

  // https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
  'vue/v-on-event-hyphenation': [
    'error',
    'always',
    {
      autofix: true,
    },
  ],

  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'any',
      },
    },
  ],

  'vue/component-name-in-template-casing': [
    'error',
    'PascalCase',
    {
      registeredComponentsOnly: true,
      ignores: [],
    },
  ],
}
