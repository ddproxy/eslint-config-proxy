# Entercom JavaScript Style Guide

*A biased but reasonable approach to JavaScript*

> **Note**: this configuration extends airbnb configuration which can be installed with `npm i -s eslint-config-airbnb`

Install this configuration to your project

```
npm install --save-dev Entercom/eslint-config-entercom#master
```

Install peer dependencies
```
npm install --save-dev eslint-config-airbnb-base eslint-plugin-import eslint-plugin-mocha eslint-plugin-no-only-tests 
```

Add configuration as an extends

*package.json*
```json
  "eslintConfig": {
    "extends": [
      "entercom"
    ]
  },
```