```js
// Sans Cascading - Sans mise en cache
$('#target').addClass('newClass');
$('#target').attr('cust-id', 1);
$('#target').show();
// Cascading - Sans mise en cache
$('#target').addClass('newClass')
  .attr('cust-id', 1)
  .show();
```
