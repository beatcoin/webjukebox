define([
	'backbone',
	'hbs!tmpl/item/headerView'
],
function(Backbone, HeaderViewTmpl ){
    'use strict';

	return Backbone.Marionette.ItemView.extend({
		initialize: function(opt) {
			console.log("initialize a Headerview View");
			this.model = new Backbone.Model({resPath:window.opt.resPath});
		},
		template: HeaderViewTmpl
	});
});
