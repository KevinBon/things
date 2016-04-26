 // Active/Disable the responsiveHelper
bootstrapHelper: function(show) {
  window.localStorage.setItem('bootstrapHelper', show);
  this.responsiveHelper();
  return this;
},
// Show a tooltip to show the current bootstrap class viewport enable
responsiveHelper: function() {
  if (window.localStorage.getItem('bootstrapHelper') === 'false') { return this; }
  
  $(document.body).append('<div class="text-center" style="z-index: 9999; position: fixed; top: 0px; left: 50px; width: 50px; height: 50px; font-size: 2em;">' +
    '<div class="visible-xs-block bg-red">' +
        'XS' +
    '</div>' +
    '<div class="visible-sm-block bg-yellow">' +
        'SM' +
    '</div>' +
    '<div class="visible-md-block bg-aqua">' +
        'MD' +
    '</div>' +
    '<div class="visible-lg-block bg-blue">' +
        'LG' +
    '</div>' +
  '</div>');
  return this;
},
// ...
