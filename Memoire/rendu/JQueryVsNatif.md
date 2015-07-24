> HTML
```html
<div>
  <p id="foo"> <!-- Paragraphe -->
    <span></span>
  </p>
</div>
```
> JavaScript
```js
// Stockage du paragraphe #foo dans une variable (contexte)
const foo = document.getElementById('foo');
// Le selecteur JQuery retourne 0
const jqueryLgth = $(foo).find('div span').length;
// Le selecteur Natif retourne 1 (Incorrect)
const nativeLgt = foo.querySelectorAll('div span').length;
```
