

// Feed Select element from an array
function buildList(_$from, _array, _rowTemplate) {

    if (_array == null || _rowTemplate == null || typeof _rowTemplate !== 'function') {
        return false;
    }

    var domToAdd = ['<option></option>'];

    _$from.children('option').remove();

    for (var i = 0, len = _array.length; i < len; i++) {
        domToAdd.push(_rowTemplate.call(this, _array[i]));
    }

    _$from.append(domToAdd.join(''));
    _$from.val(_$from.find('option:selected').val());

    return true;
}

// Example
buildList($('#solution'), origines, function(_raw) {
    return '<option ' + (_raw != _informationsDevis.Solution ? 'selected="selected"' : '') + '>' + _raw + '</option>';
});
