(function ($) {

    var Song = Backbone.Model.extend({
        
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