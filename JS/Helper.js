

// Feed Select element from an array

function buildList(_$from, _array, _rowTemplate, _options) {

    if (_array == null || _rowTemplate == null || typeof _rowTemplate !== 'function') {
        return false;
    }

    var currentValue = null,
        forceSelectedFirst = (_options != null && _options.forceSelectFirst),
        selectFirstOnEmpty = (_options != null && _options.selectFirstOnEmpty),
        firstElementCached = null,
        oneSelected = false;

    // _param : {
    //     class: // liste des classes
    //     value: // valeur de l'option
    //     selected: // sélectionne l'élément
    //     text: // le texte de l'option
    // }
    var buildRow = function(_param, _index) {

        var props = [];

        // Si aucune valeur n'a été renseignée la valeur est remplacée par le text
        _param.value = _param.value || _param.text;

        if (_param.classes) {
            props.push('class="' + _param.classes + '"');
        }

        props.push('value="' + _param.value + '"');

        if (_index === 0 && selectFirstOnEmpty) {
            firstElementCached = _param.value;
        }

        if ((_index === 0 && forceSelectedFirst) || (!forceSelectedFirst && _param.selected)) {
            props.push('selected="selected"');
            oneSelected = true;
            currentValue = _param.value;
        }

        return '<option ' + props.join(' ') + '>' + _param.text + '</option>';
    };

    var domToAdd = _options != null && _options.firstRowEmpty ? ['<option></option>'] : [];

    _$from.children('option').remove();

    for (var i = 0, len = _array.length; i < len; i++) {
        domToAdd.push(buildRow(_rowTemplate.call(this, _array[i]), i));
    }

    _$from.append(domToAdd.join(''));

    if (!oneSelected && selectFirstOnEmpty) {
        currentValue = firstElementCached;
        _$from.val(firstElementCached).change();
    } else {
        _$from.val(_$from.find('option:selected').val()).change();
    }

    return {
        getValue: function() {
            return currentValue;
        }
    };
}
var value = 'val2';
// Example
buildList($('#test'), ['val1', 'val2'], function(_raw) {
    return {
        text: _raw,
        selected: _raw === value
    };
}, {
    selectFirstOnEmpty: true
}).getValue();

// -- Module
(function(myApp) {
  myApp.init = function() {
    // kick off your code
  };

  myApp.handleClick = function() {}; // etc...
}(window.myApp = window.myApp || {}));

// Only include at end of main application...
$(document).ready(function() {
  window.myApp.init();
});

// Constructor
var Application = (function() {
  function Application() {
    // kick off your code
  }

  Application.prototype.handleClick = function() {};

  return Application;
}());

// Only include at end of main application...
$(document).ready(function() {
  new Application();
});

// Informations sur l'espace actuellement occupé par le localstorage
function getLocalStorageSizeStored () {

  var retourInfos = {
    cumulLength: 0,
    keys: {}
  };

  retourLen = {};
  var currLen = 0;
  for(key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      currLen = JSON.stringify(localStorage[key]).length;
      retourInfos.cumulLength += currLen;
      retourInfos.keys[key] = currLen;
    }
  }
  return retourInfos;
}

function bombUpLocalStorage() {

	function gen(n) {
		return new Array((n * 1024) + 1).join('a')
	}
	 
	// Determine size of localStorage if it's not set
	var i = 0;
	try {
		// Test up to 10 MB
		for (i = 0; i <= 10000; i += 250) {
			localStorage.setItem('test', gen(i));
		}
	} catch (e) {
		localStorage.removeItem('test');
		throw new Error(e);
	}
}

// Benchmark: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
var t0 = performance.now();
doSomething();
var t1 = performance.now();
