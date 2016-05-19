'use strict';

var ellipsize = require('ellipsize');

exports.install = function (Vue, opts) {

  var filter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return ellipsize(content, length, { ellipse: clamp });
  };

  Vue.filter('truncate', filter);

};
