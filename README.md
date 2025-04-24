# eslint-plugin-require-prevent-default

[ESLint](https://eslint.org/) plugin to require [preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) calls in `onClick` handlers. Essentially, this makes the handler not _also_ go to whatever placeholder url you've added in for your SPA app.

There's probably other handlers or situations this should handle but doesn't, so please file issues :).
