module.exports = {
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base'
  ],
  overrides: [
    {
      files: [
        'test/**/*_spec.js'
      ],
      plugins: [
        'no-only-tests',
        'mocha'
      ],
      env: {
        node: true,
        mocha: true,
        es6: true
      },
      rules: {
        'no-only-tests/no-only-tests': 2
      }
    }
  ],
  rules: {
    'jsdoc/no-undefined-types': 0,
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '(^\\s*it\\(\\\'.+\\\',$)|(^const\\s\\w+\\s=\\srequire\\()'
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1
      }
    ],
    camelcase: 0,
    'array-bracket-newline': [
      'error',
      'consistent'
    ],
    'array-element-newline': [
      'error',
      'consistent'
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true
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
    ]
  }
};