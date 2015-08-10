Useless

```js
var fizzBuzz = (function(iterators = 100) {
  
  function* retour(value) {
    let retour = null;
  
    if (value % 3 === 0 && value % 5 === 0) {
     yield 'FizzBuzz';
    }
    else if (value % 3 === 0) {
     yield 'Fizz';
    }
    else if (value % 5 === 0) {
     yield 'Buzz';
    } else {
     yield value;
    }
  }
  
  return (function* () {
    for(let i = 1; i < iterators + 1; i++) {
      yield* retour(i);
    }
  })();
})(100);

for (let sofunny of fizzBuzz) {
 console.log(sofunny);
}
```
