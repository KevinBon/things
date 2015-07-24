```js
// Sans contexte
$('#btnAdd').class('frozen');
// Avec contexte - Sans mise en cache du contexte
$('#container #btnAdd').class('frozen');
// Avec contexte - Avec mise en cache du contexte
$conainer.find('#btnAdd').class('frozen');
```
