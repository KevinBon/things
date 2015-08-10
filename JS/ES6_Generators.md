Useless

```js
const fizzBuzz = (function(iterators = 100) {
  // Because
  function* retour(value) {
    if (value % 15 === 0) {
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
