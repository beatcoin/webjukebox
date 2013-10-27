(function ($) {

    var Song = Backbone.Model.extend({});


    var Queue = Backbone.Collection.extend({
        model:Song,
        initialize: function(atts,opt){
	    this.jbId = opt.jbId;
        },
        url: function() {
            return 'http://engine.beatcoin.org/jukebox/'+this.jbId+'/queue';
        },

        parse:function(response){
            return response.items;
       }
    });

    var Jukebox = Backbone.Collection.extend({
       model:Song,
       initialize: function(atts,opt){
	    this.jbId = opt.jbId;
       },
        url: function() {
            return 'http://engine.beatcoin.org/jukebox/'+this.jbId+'/songs';
        },

       parse:function(response){
            return response.items;
       }

    });


    var SongView = Backbone.View.extend({
        tagName:"div",
        className:"songContainer",

        render:function () {
            var tmpl = _.template($("#songTemplate").html());
            this.$el.html(tmpl(this.model.toJSON())); 
            return this;
        }

    });

    var QueueSongView = Backbone.View.extend({
        tagName:"div",
        className:"queueSongContainer",

        render:function () {
            var tmpl = _.template($("#queueSongTemplate").html()); 
            this.$el.html(tmpl(this.model.toJSON())); 
            return this;
        }

    });

    var QueueView = Backbone.View.extend({
        el:$("#queue"),

        initialize:function(){
            this.collection.on("change reset add remove", this.renderQueueSong, this);
        },

        renderQueueSong:function(item){
            var queueSongView = new QueueSongView({
                model: item
            });
            this.$el.append(queueSongView.render().el);
        }
    });

    var jbMap = {'disrupt':'526c1ed6eb63e7ebe22dabe6','meinhard':'526c687e1889080387b0911c'};
    var full = window.location.host;
    var parts = full.split('.');
    var sub = parts[0];
    var jbId = (jbMap[sub])?jbMap[sub]:jbMap.disrupt;
    $('a.navbar-brand').append('<h2> '+sub+'</h2>');
    console.dir($('a.navbar-brand').children(':nth-child(2)').text());

    var queue = new Queue([],{jbId: jbId});

    var queueView = new QueueView({collection:queue});
        queue.fetch();


    var JukeboxView = Backbone.View.extend({
        el:$("#songs"),

        initialize:function(){
            this.collection.on("change reset add remove", this.renderSong, this);
        },

        render: function(){
            var that = this;
           
            _.each(this.collection.models, function(item){
                
                that.renderSong(item);
            }, this);
        },

        renderSong:function(item){
            var songView = new SongView({
                model: item
            });
            this.$el.append(songView.render().el);
        }
    });


    var jukebox = new Jukebox([],{jbId: jbId});

    var jukeboxView = new JukeboxView({collection:jukebox});
        jukebox.fetch();



})(jQuery);