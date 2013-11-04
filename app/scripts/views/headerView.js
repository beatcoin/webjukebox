define([
	'backbone',
	'hbs!tmpl/item/headerView'
],
function(Backbone, HeaderViewTmpl ){
    'use strict';

	return Backbone.Marionette.ItemView.extend({
		initialize: function() {
			console.log("initialize a Headerview View");
		},
		template: HeaderViewTmpl
	});
});
