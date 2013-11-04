(function() {
	'use strict';

	var root = this;

	root.define([
		'views/playingView'
		],
		function( Playingview ) {

			describe('Playingview View', function () {

				it('should be an instance of Playingview View', function () {
					var playingView = new Playingview();
					expect( playingView ).to.be.an.instanceof( Playingview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );