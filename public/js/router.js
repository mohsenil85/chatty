define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require('backbone'),

  var MainRouter = Backbone.Router.extend({
    routes: {
      '' : 'home'
    },
   initialize : function(){


    var router = new MainRouter();
    router.on('route:home', function(){
      console.log('lol');
    })


    Backbone.history.start();
  };
  return {
    initialize: initialize

  };
});
