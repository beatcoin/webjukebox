define([
	'backbone',
	'views/item/songView',
	'hbs!tmpl/composite/queueView_tmpl'
],
function( Backbone, Songview, QueueviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log('initialize a Queueview CompositeView');
		},
		
		itemView: Songview,
		
		template: QueueviewTmpl,
		

		/* ui selector cache */
		ui: {},

		/* where are we appending the items views */
		itemViewContainer: 'div.panel',

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
