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

		url: function() {
            return window.opt.basePath + '/archives/2ef06f25-bd22-48e1-a3ea-4719a5554140/songs';
        },

		model: Song
		
	});
});
