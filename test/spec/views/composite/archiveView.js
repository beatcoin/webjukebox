(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/archiveView'
		],
		function( Archiveview ) {

			describe('Archiveview Compositeview', function () {

				it('should be an instance of Archiveview Compositeview', function () {
					var archiveView = new Archiveview();
					expect( archiveView ).to.be.an.instanceof( Archiveview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );