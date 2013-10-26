(function ($) {

    var songs = [{artist:"Artist A", title:"Song A", album:"Album A", length:"123"},
        {artist:"Artist B", title:"Song B", album:"Album B", length:"132"},
        {artist:"Artist C", title:"Song C", album:"Album C", length:"321"},
        {artist:"Artist D", title:"Song D", album:"Album D", length:"213"},
       ];


    var Song = Backbone.Model.extend({
        defaults:{
            artist:"Artist A",
            title:"Title A",
            album:"Album A",
            length:"1"      
        }
    });

    var uuid = 'beatcoin';// change with subdomain.
    var Jukebox = Backbone.Collection.extend({
       model:Song,
       url:'http://engine.beatcoin.org/jukebox/526c1ed6eb63e7ebe22dabe6/songs'
      // url:'beatcoin/jukebox/' + uuid + '/queue' // change this when it is all go
    });

    var SongView = Backbone.View.extend({
        tagName:"div",
        className:"songContainer",
        template:$("#songTemplate").html(),

        render:function () {
            var tmpl = _.template(this.template); 

            this.$el.html(tmpl(this.model.toJSON())); 
            return this;
        }
    });

    var JukeboxView = Backbone.View.extend({
        el:$("#songs"),

        initialize:function(){Jukebox
            this.collection = new Jukebox(songs);
            this.collection.fetch();
            this.render();
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

    var jukeboxView = new JukeboxView();


})(jQuery);