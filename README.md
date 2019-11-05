# babelts · ![NPM](https://img.shields.io/npm/l/babelts) ![npm](https://img.shields.io/npm/v/babelts) ![Tests](https://github.com/dylanvann/babelts/workflows/Test/badge.svg?branch=master)

Use this to run TypeScript code using Babel.

This uses [`hard-rejection`](https://github.com/sindresorhus/hard-rejection) so that unhandled async errors cause the program to exit.

You may wish to use this if:

-   You want to write some scripts in TypeScript but not have a build step to compile them.
-   You use Babel to compile instead of TypeScript in other parts of your codebase.
-   You want to be able to run code without waiting for it to type check (which is how `ts-node` works).

**Install:**

```sh
yarn add --dev babelts
```

**Use:**

```sh
node --require babelts myFile.ts
```
