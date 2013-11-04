define([
	'backbone',
	'communicator',
	'collections/queue',
	'collections/archive',
	'collections/history',
	'views/headerView',
	'views/composite/queueView',
	'views/composite/archiveView',
	'views/playingView'
],

function( Backbone, Communicator, Queue, Archive, PlayHistory, HeaderView, QueueView, ArchiveView, PlayingView ) {
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
		var history = new PlayHistory();
		App.playingRegion.show(new PlayingView({collection:history}));
		history.fetch();
		var archive = new Archive();
		App.archiveRegion.show(new ArchiveView({collection:archive}));
		archive.fetch();
		var queue = new Queue();
		App.queueRegion.show(new QueueView({collection:queue}));
		queue.fetch();
		//start router
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
