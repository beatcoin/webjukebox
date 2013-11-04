define([
	'backbone',
	'hbs!tmpl/item/playingView'
],
function(Backbone, PlayingViewTmpl){
    'use strict';

	return Backbone.Marionette.ItemView.extend({
		initialize: function() {
			console.log("initialize a Playingview View");
		},
		template: PlayingViewTmpl
	});
});
