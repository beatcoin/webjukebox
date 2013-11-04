define([
	'backbone',
	'hbs!tmpl/item/songView_tmpl'
],
function( Backbone, SongviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function(opt) {
			console.log("initialize a Songview ItemView");
			this.queue = opt.queue;
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
			    type: "PUT",
			    url: window.opt.basePath + '/queues/2ef06f25-bd22-48e1-a3ea-4719a5554140/songs',
			    contentType: "application/json",
			    data: '{"id": "'+this.model.get('id')+'"}',
			    success: function(result) {
	                alert(result.address);
	                self.queue.fetch();
	            }
			});
        },

		/* on render callback */
		onRender: function() {}
	});

});
