```js
// Version ne respectant par les règles de nommage
class article { // 1: PascaCase attendu
  constructor(opts = { nom: 'non défini' }) {
    this.nom = opts.nom; // 2: underscore attendu
  }
  get_Nom() { // 3: camelCase attendu
    return this.nom;
  }
}
```
```js
// Version corrigée
class Article { // 1
  constructor(opts = { nom: 'non défini' }) {
    this._nom = opts.nom; // 2
  }
  getNom() { // 3
    return this._nom;
  }
}
```
