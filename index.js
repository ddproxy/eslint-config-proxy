module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended'
  ],
  overrides: [
    {
      env: {
        es6: true,
        mocha: true,
        node: true
      },
      files: [
        'test/**/*_spec.js'
      ],
      plugins: [
        'mocha',
        'no-only-tests'
      ],
      rules: {
        'no-only-tests/no-only-tests': 2
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 10,
    sourceType: 'module'
  },
  rules: {
    'array-bracket-newline': [
      'error',
      'consistent'
    ],
    'array-element-newline': [
      'error',
      'consistent'
    ],
    camelcase: 0,
    'comma-dangle': [
      'error',
      'never'
    ],
    'jsdoc/no-undefined-types': 0,
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-confusing-arrow': 0,
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
          'trace'
        ]
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'no-plusplus': 0,
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true
      }
    ]
  }
};