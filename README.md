# babelts · ![NPM](https://img.shields.io/npm/l/babelts) ![npm](https://img.shields.io/npm/v/babelts)

Use this to run TypeScript code using Babel.
This uses [`hard-rejection`](https://github.com/sindresorhus/hard-rejection) so that unhandled async errors cause the program to exit.

**Install:**

```sh
yarn add --dev babelts
```

**Use:**

```sh
node --require babelts myFile.ts
```
