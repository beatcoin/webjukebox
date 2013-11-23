define([
	'backbone',
	'hbs!tmpl/item/songView_tmpl',
	'lightbox'
],
function( Backbone, SongviewTmpl , Lightbox ) {
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
			    url: window.opt.basePath + '/queues/'+this.account,
			    contentType: 'application/json',
			    data: '{"id": "'+this.model.get('id')+'"}',
			    success: function(result) {
	                console.log(result.address);
	                self.$('div.panel-body').append($('<p><img id="'+result.address+'" width="150px;" src="https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=bitcoin:'+result.address+'&chld=H|0" /></p>')).lightbox({
						fitToScreen: true,
                        jsonData: new Array(
                                {url: 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=bitcoin:'+result.address+'&chld=H|0', title: self.model.get('title') }
                        ),
	                });
	                $('#'+result.address).click();
			self.queue.fetch({
						success: function(){
							$('#lightbox').children(":first").append( '<a href="bitcoin:'+result.address+'">bitcoin:'+result.address+'</a>');
							console.dir($('#lightbox').children(":first"));
						}
			});
	            }
			});
        },

		/* on render callback */
		onRender: function() {}
	});

});
