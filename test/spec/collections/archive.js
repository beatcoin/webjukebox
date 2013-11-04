(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/archive'
		],
		function( Archive ) {

			describe('Archive Collection', function () {

				it('should be an instance of Archive Collection', function () {
					var archive = new Archive();
					expect( archive ).to.be.an.instanceof( Archive );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );