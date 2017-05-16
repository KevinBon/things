// ==UserScript==
// @name         Responsive helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var getViewPort = function() {
		return {
			width:  Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
			height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
		};
	};
    
    var updateView = function() {
        var result = getViewPort();
        $('#debugResponsiveWidth').html(result.width);
        $('#debugResponsiveHeight').html(result.height);
    };
    
    $(document.body).append('<div class="text-center" style="z-index: 9999; position: fixed; top: 0px;left: 50px;background-color: #444; color: wheat; font-weight: 100; box-shadow: 0px 2px 4px rgba(0,0,0,0.15);">' +
'  <div style="display: inline-block; width: 50px;">' +
'    <div class="visible-xs-block bg-red"  style="padding: 1px 8px 1px 8px;">XS</div>' +
'    <div class="visible-sm-block bg-yellow" style="padding: 1px 8px 1px 8px;">SM</div>' +
'    <div class="visible-md-block bg-aqua" style="padding: 1px 8px 1px 8px;">MD</div>' +
'    <div class="visible-lg-block bg-blue" style="padding: 1px 8px 1px 8px;">LG</div>' +
'  </div>' +
'  <div style="display: inline-block; padding: 1px 5px;" title="Width" id="debugResponsiveWidth">0</div>' +
'  <div style="display: inline-block;">x</div>' +
'  <div style="display: inline-block; padding: 1px 5px;" title="Height" id="debugResponsiveHeight">0</div>' +
'</div>');
    
    $(window).resize(function() {
        updateView();
    });
    updateView();
})();
