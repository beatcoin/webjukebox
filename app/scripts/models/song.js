define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Song model");
			this.set('divId',this.guid());
		},

		defaults: {},


		s4: function() {
		  return Math.floor((1 + Math.random()) * 0x10000)
		             .toString(16)
		             .substring(1);
		},

		guid: function() {
		  return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
		         this.s4() + '-' + this.s4() + this.s4() + this.s4();
		}

    });
});
