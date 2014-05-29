define(function(require){

    "use strict";

    var $             = require('jquery'),
    _                 = require('underscore'),
    Backbone          = require('backbone'),
    homePage          = require('/views/homePageView')

    var MainRouter = Backbone.Router.extend({
        routes: {
            '' : 'home'
        }
    });
    var initialize = function(){


        var router = new MainRouter();
        var homePageView = new HomePageView(); 
        router.on('route:home', function(){
            console.log('lol');
        });


        Backbone.history.start();
    }
    return {
        initialize: initialize

    };
});
