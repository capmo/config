# config

Basic, extendable configuration for Product and Engineering team

# Linting and Styling

ESLint

Create a new `.eslintrc.js` file in the root of the project

```
const { esLintrc } = require('@capmo/config');

module.exports = {
 ...esLintrc
// --- Uncomment for projects without React
// "extends": [ "airbnb-typescript/base" ]
// --- Uncomment for projects with React
// "extends": [ "airbnb-typescript" ]
};
```

Prettier

Create a `.prettierrc.js` file in the root of the project with the following code

```
const { prettierrc } = require('@capmo/config/prettier');

module.exports = { ...prettierrc };
```

## Overview

This serves as a basic configuration to standardise all our repositories. The styling makes use of the following technologies

- [Prettier](https://prettier.io/) - For styling the code
- [EditorConfig](https://editorconfig.org/) - To ensure all editors use the same rules
- [ESLint](https://eslint.org/docs/) - For linting our code to avoid using bad practices and is based on the [Airbnb](https://github.com/airbnb/javascript) styleguide.

## Setup

To setup the styling copy the files from the provided directory. There are separate configs and installs for project with and without React.

Install the base package:

```javascript
npm install eslint-config-airbnb-typescript --save-dev
```

### With React

```javascript
npm install eslint-plugin-import@^2.22.0 \
            eslint-plugin-jsx-a11y@^6.3.1 \
            eslint-plugin-react@^7.20.3 \
            eslint-plugin-react-hooks@^4.0.8 \
            @typescript-eslint/eslint-plugin@^4.4.1 \
            --save-dev

Add "extends": ["airbnb-typescript"] to your ESLint config file.
```

### Without React

```javascript
npm install eslint-plugin-import@^2.22.0 \
            @typescript-eslint/eslint-plugin@^4.4.1 \
            --save-dev

Add "extends": ["airbnb-typescript/base"] to the ESLint config File
```

# Danger.js

## Setup

1. Install @capmo/config package
2. Create a dangerfile in the root of the repo with the following content:

```
const { dangerJs } = require('@capmo/config/Danger/dangerfile');

dangerJs();
```

The above-mentioned dangerfile is a general one which can be generally used in any regular code repository.

1. Add the following to the circleci config:

```
- run:
  name: Install Danger
  command: |
  npm install danger
- run:
  name: Run Danger
  command: |
  npx danger ci
```
