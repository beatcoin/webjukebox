define([
	'backbone',
	'hbs!tmpl/item/songView_tmpl'
],
function( Backbone, SongviewTmpl , lightbox ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function(opt) {
			this.queue = opt.queue;
			this.account = opt.account;
		},
		
		template: SongviewTmpl,
        

		/* ui selector cache */
		ui: {},

		/* Ui events hash */
		events: {
            'click #queueBtn':'handleQueue'
        },

        handleQueue: function(e){
			e.preventDefault();
			var self = this;
			$.ajax({
			    type: 'PUT',
			    url: window.opt.basePath + '/queues/'+this.account+'/songs',
			    contentType: 'application/json',
			    data: '{"id": "'+this.model.get('id')+'"}',
			    success: function(result) {
	                console.log(result.address);
	                //$(this.el).lightbox();
	                self.queue.fetch();
	            }
			});
        },

		/* on render callback */
		onRender: function() {}
	});

});
