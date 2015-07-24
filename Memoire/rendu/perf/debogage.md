```js
var elems = (function() {
  var tmp = [];
  for (var i = 0; i < 5000; i++) {
      tmp.push({
         id: i,
         name: 'Ligne ' + i
      });
  }
  return tmp;
})();

function clearElems() {
  $('#list').children().remove();
}

function nonOptimisee(elems) {
  console.profile('nonOptimisee');
  for(var i= 0; i < elems.length; i++) {
    $('#list').append('<li data-id="' + elems[i].id + '">' + elems[i].name + '</li>');
  }
  console.profileEnd('nonOptimisee');
}

function optimisee(elems) {
  console.profile('optimisee');
  var domToAdd = [];
  for(var i= 0, len = elems.length; i < len; i++) {
    domToAdd.push('<li data-id="' + elems[i].id +'">' + elems[i].name + '</li>');
  }
  $('#list').append(domToAdd.join(''));
  console.profileEnd('optimisee');
}

$('#nonOptimisee').on('click', function() {
   clearElems();
   nonOptimisee(elems);
});

$('#optimisee').on('click', function() {
   clearElems();
   optimisee(elems);
});
```
