define([
	'backbone',
	'models/song'
],
function( Backbone, Song ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Search collection");
		},

		model: Song
		
	});
});
