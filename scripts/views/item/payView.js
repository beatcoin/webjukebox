define([
	'backbone',
	'hbs!tmpl/item/payView'
],
function( Backbone, PayViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			//
		},
		
		template: PayViewTmpl,
        

		/* ui selector cache */
		ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
