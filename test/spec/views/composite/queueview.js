(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/queueView'
		],
		function( Queueview ) {

			describe('Queueview Compositeview', function () {

				it('should be an instance of Queueview Compositeview', function () {
					var queueView = new Queueview();
					expect( queueView ).to.be.an.instanceof( Queueview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );