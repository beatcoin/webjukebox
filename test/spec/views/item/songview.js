(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/songView'
		],
		function( Songview ) {

			describe('Songview Itemview', function () {

				it('should be an instance of Songview Itemview', function () {
					var songView = new Songview();
					expect( songView ).to.be.an.instanceof( Songview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );