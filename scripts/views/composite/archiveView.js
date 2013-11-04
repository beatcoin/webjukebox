define([
	'backbone',
	'views/item/songview',
	'hbs!tmpl/composite/archiveView'
],
function( Backbone, Songview, ArchiveviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log('initialize a Archiveview CompositeView');
		},
		
		itemView: Songview,
		
		template: ArchiveviewTmpl,
		

		/* ui selector cache */
		ui: {},

		/* where are we appending the items views */
		itemViewContainer: '',

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
