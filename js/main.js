(function ($) {

    var Song = Backbone.Model.extend({
        
    });


    var Queue = Backbone.Collection.extend({
        model:Song,
        url:'http://engine.beatcoin.org/jukebox/526c1ed6eb63e7ebe22dabe6/queue',

        parse:function(response){
            return response.items;
       }
    });

    var Jukebox = Backbone.Collection.extend({
       model:Song,
       url:'http://engine.beatcoin.org/jukebox/526c1ed6eb63e7ebe22dabe6/songs',

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
        el:$("#songs"),

        initialize:function(){
            this.collection.on("change reset add remove", this.renderSong, this);
        },


        renderQueueSong:function(item){
            var songView = new QueueSongView({
                model: item
            });
            this.$el.append(queueSongView.render().el);
        }
    });

    var queue = new Queue();

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

    var jukebox = new Jukebox();

    var jukeboxView = new JukeboxView({collection:jukebox});
        jukebox.fetch();



})(jQuery);