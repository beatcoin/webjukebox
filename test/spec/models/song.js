(function() {
	'use strict';

	var root = this;

	root.define([
		'models/song'
		],
		function( Song ) {

			describe('Song Model', function () {

				it('should be an instance of Song Model', function () {
					var song = new Song();
					expect( song ).to.be.an.instanceof( Song );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );