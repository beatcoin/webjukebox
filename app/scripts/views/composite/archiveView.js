define([
	'backbone',
	'views/item/songView',
	'hbs!tmpl/composite/archiveView'
],
function( Backbone, Songview, ArchiveviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function(opt) {
			this.queue = opt.queue;
			this.account = opt.account;
		},
		
		itemView: Songview,
		
		template: ArchiveviewTmpl,

		itemViewOptions : function () {
			return { queue: this.queue, account: this.account };
		},
		

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
