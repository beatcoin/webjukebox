(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/queueview'
		],
		function( Queueview ) {

			describe('Queueview Collectionview', function () {

				it('should be an instance of Queueview Collectionview', function () {
					var queueview = new Queueview();
					expect( queueview ).to.be.an.instanceof( Queueview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );