(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/history'
		],
		function( History ) {

			describe('History Collection', function () {

				it('should be an instance of History Collection', function () {
					var history = new History();
					expect( history ).to.be.an.instanceof( History );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );