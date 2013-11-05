define([
	'backbone',
	'views/item/payView',
	'hbs!tmpl/composite/queueView_tmpl'
],
function( Backbone, PayView, QueueviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			var collection = this.collection;
			window.setInterval(function(){
				collection.fetch();
			}, 2000);
		},
		
		itemView: PayView,
		
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
