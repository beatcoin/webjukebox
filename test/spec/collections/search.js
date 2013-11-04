(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/search'
		],
		function( Search ) {

			describe('Search Collection', function () {

				it('should be an instance of Search Collection', function () {
					var search = new Search();
					expect( search ).to.be.an.instanceof( Search );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );