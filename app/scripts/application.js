define([
	'backbone',
	'communicator',
	'collections/queue',
	'collections/archive',
	'collections/history',
	'views/headerView',
	'views/composite/queueView',
	'views/composite/archiveView',
	'views/playingView',
	'socketio'
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
		var sub = parts[0];
		var jbMap = {'test':window.opt.defaultAccount,'meinhard':'526c687e1889080387b0911c'};
		var account;
		if(jbMap[sub]){
			account = jbMap[sub];
		}else{
			var query = 'account';
			var regex = new RegExp('[\\?&]' + query + '=([^&#]*)'),
			results = regex.exec(location.search);
		    sub = (results === null) ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
		    if (sub){
				account = jbMap[sub];
		    }else{
				query = 'id';
				regex = new RegExp('[\\?&]' + query + '=([^&#]*)'),
				results = regex.exec(location.search);
			    sub = (results === null) ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
			    if (sub){
					account = sub;
			    }else{
					account = jbMap.test;
				}
		    }
		}
		console.log('account: '+account);
		//initialize views
		var history = new PlayHistory({account:account});
		App.playingRegion.show(new PlayingView({col:history}));
		history.fetch();
		
		var queue = new Queue({account:account});
		App.queueRegion.show(new QueueView({collection:queue}));
		queue.fetch();

		var archive = new Archive({account:account});
		App.archiveRegion.show(new ArchiveView({collection:archive,queue:queue,account:account}));
		archive.fetch();

		var socket = io.connect('http://localhost:8081');
		socket.on('connect', function() {
            var obj = { '@class' : 'org.beatcoin.pojo.Subscribe',
                        'room' : account
                      };
            socket.json.send(obj);
        });
		socket.on('message', function (data) {
		    queue.fetch();
		});

		//start router
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
