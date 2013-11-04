(function() {
	'use strict';

	var root = this;

	root.define([
		'views/headerView'
		],
		function( Headerview ) {

			describe('Headerview View', function () {

				it('should be an instance of Headerview View', function () {
					var headerView = new Headerview();
					expect( headerView ).to.be.an.instanceof( Headerview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );