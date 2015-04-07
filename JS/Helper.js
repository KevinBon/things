

// Feed Select element from an array
function buildList(_$from, _array, _rowTemplate) {

    if (_array == null || _rowTemplate == null || typeof _rowTemplate !== 'function') {
        return false;
    }

    // _param : {
    //     class: // liste des classes
    //     value: // valeur de l'option
    //     selected: // sélectionne l'élément
    //     text: // le texte de l'option
    // }
    var buildRow = function(_param) {

        var props = [];

        if (_param.class) {
            props.push('class="' + _param.class + '"');
        }

        if (_param.value) {
            props.push('value="' + _param.value + '"');
        }

        if (_param.selected) {
            props.push('selected="selected"');
        }

        return '<option ' + props.join(' ') + '>' + _param.text + '</option>';
    };

    var domToAdd = ['<option></option>'];

    _$from.children('option').remove();

    for (var i = 0, len = _array.length; i < len; i++) {
        domToAdd.push(buildRow(_rowTemplate.call(this, _array[i])));
    }

    _$from.append(domToAdd.join(''));
    _$from.val(_$from.find('option:selected').val());

    return true;
}

// Example
buildList($('#solution'), origines, function(_raw) {
    return {
        text: _raw.text,
        selected: dummy = _raw.on
    };
});
