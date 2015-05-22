> Tmp

```js
var format = {
  escapeHTML:(_templateData, ..._vars) => {
      console.log(_templateData, _vars);
      var indexTpl = 0,
          retour = _templateData[indexTpl];

      for (var row of vars) {
        let str = String(row);

        // Escape special characters in the substitution.
        retour += str.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        retour += _templateData[++indexTpl];
      }
      return retour;
    },
  
  dummyFormat: _date => {
    if (Object.prototype.toString.call(_date) !== '[object Date]') {
      throw new Error('Nop, we need a date');
    }
    
    var forceDateFormat2Digit = _int => {
     return _int < 10 ? '0' + _int : _int;
    };
    
    return forceDateFormat2Digit(_date.getHours()) + ':' + forceDateFormat2Digit(_date.getMinutes());
  }
};

var objComment = new function() {

  var model = new function () {

    var data = {
      comments: []
    };

    var checkComment = _comment => {
        return _comment.content !== '';
    };

    return {
      add: _comment => {
          return new Promise((_resolve, _reject) => {
            console.log(arguments);
            if (checkComment(_comment)) {
                data.comments.push(_comment);
                _resolve('model', 'ajout du commentaire dans le model', _comment);
                // return true;
            }
            _reject(Error('Structure du commentaire invalide'));
          });
      },
      getAll: () => {
        return data.comments;
      }
    };
  };

  var view = new function () {
        
    var tpl = format.escapeHTML`<span>${msg.author} (${format.dummyFormat(msg.date)}):</span><p>${msg.content}</p>`;
    
    var elems = {
      $container: null
    };
    
    return {
      add: (_comment) => {
          return new Promise((_resolve, _reject) => {
              console.log(this);
              console.log('view', tpl.call(_comment));
              // elems.$container.append(escapeHTML
              console.log('view', 'ajout du commentaire dans la vue');
              _resolve('ajout du commentaire dans la vue');
          });
      }
    };
  };

  var add = _comment => {
    model.add(_comment)
        .then(view.add, err => {
            console.log('model', err);
        })
        .then(() => {
           console.log('Fini');
           return this;   
        })
        .catch(err => {
            console.log('view', err);
        });
      console.log('objComment', 'sortie de add');
  };

  return {
    add: _comment => {
      return add(_comment);
    },
    getAll: () => {
      return model.getAll();
    }
  };
};

var lala = {
  author: 'Dummy',
  date: new Date(),
  content: '<a onmouseenter="alert(\'XSS\');">Lorem ipsum...</a>'
};

objComment.add(lala);
```
