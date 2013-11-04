define([
	'backbone',
	'hbs!tmpl/item/playingView'
],
function(Backbone, PlayingViewTmpl){
    'use strict';

	return Backbone.Marionette.ItemView.extend({
		initialize: function(opt) {
			this.col = opt.col;
			this.col.on('change reset add remove', this.onData, this);
			console.log('initialize a Playingview View');
		},
		onData: function(data){
			this.model = data;
			this.render();
		},
		template: PlayingViewTmpl
	});
});
