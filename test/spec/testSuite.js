define(function() {
	'use strict';

	/* return an array of specs to be run */
	return {
		specs: ['spec/collections/archive.js',
		'spec/collections/history.js',
		'spec/collections/queue.js',
		'spec/collections/search.js',
		'spec/models/song.js',
		'spec/views/collection/queueview.js',
		'spec/views/composite/archiveView.js',
		'spec/views/composite/queueview.js',
		'spec/views/headerView.js',
		'spec/views/item/songview.js'
		]
	};
});
