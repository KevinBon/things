```js
function additionSansModeStrict(a, a, c) {
  return a + a + c;
}
function additionAvecModeStrict(a, a, c) {
  'use strict';
  return a + a + c;
}
additionSansModeStrict(1, 20, 3); // Retourne 43
additionAvecModeStrict(1, 20, 3); // Exception: SyntaxError: duplicate formal argument a
```
