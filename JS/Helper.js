

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

// Benchmark: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
var t0 = performance.now();
doSomething();
var t1 = performance.now();
