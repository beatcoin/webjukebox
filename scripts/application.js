define([
	'backbone',
	'communicator',
	'collections/queue',
	'collections/archive',
	'views/headerView',
	'views/composite/queueview',
	'views/composite/archiveView'
],

function( Backbone, Communicator, Queue, Archive, HeaderView, QueueView, ArchiveView ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		headerRegion: '#header',
		playingRegion: '#playing',
		queueRegion: '#queue',
		searchRegion: '#search',
		archiveRegion: '#archive'
	});

	/* Add initializers here */
	App.addInitializer( function () {
		App.headerRegion.show(new HeaderView());
		//read account
		var full = window.location.host;
		var parts = full.split('.');
		var account = parts[0];
		//initialize views
		var archive = new Archive();
		App.archiveRegion.show(new ArchiveView({collection:archive}));
		archive.fetch();
		var queue = new Queue([{id:'1',title:'hello'},{id:'2',title:'bla'}]);
		App.queueRegion.show(new QueueView({collection:queue}));
		//start router
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
