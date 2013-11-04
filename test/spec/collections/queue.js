(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/queue'
		],
		function( Queue ) {

			describe('Queue Collection', function () {

				it('should be an instance of Queue Collection', function () {
					var queue = new Queue();
					expect( queue ).to.be.an.instanceof( Queue );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );