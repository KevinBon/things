```js
// Déclaration du tableau
var tableau = ['val1', 'val2'];
// Itération des éléments présents dans le tableau
tableau.forEach(function (element) {
  console.log(element);
});
```
> IE 8 ( Sans polyfill )
```js
// Erreur générée
Erreur: "Cet objet ne gère pas cette propriété ou cette méthode."
```

> IE 8 ( Avec polyfill ) , Firefox , Chrome
```js
// Comportement attendu
val1
val2
```
