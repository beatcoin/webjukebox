define([
	'backbone',
	'models/song'
],
function( Backbone, Song ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function(opt) {
			this.account = opt.account;
		},

		url: function() {
            return window.opt.basePath + '/archives/'+this.account;
        },

		model: Song
		
	});
});
