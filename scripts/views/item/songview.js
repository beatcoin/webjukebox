define([
	'backbone',
	'hbs!tmpl/item/songView_tmpl'
],
function( Backbone, SongviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Songview ItemView");
		},
		
    	template: SongviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
