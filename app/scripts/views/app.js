define(['backbone','timer'],function(Backbone,TimerItem){
    var timer = new TimerItem();
    console.log(timer);
    var App = Backbone.View.extend({
        el: '#content',
        initialize: function(el){
            console.log("whaooo!!");
            this.render();
            timer.changeState('idle');
        },
        render: function(){
            this.$el.html('<a href="" class="basic-circle level1 idle">Go</a>');
        },
        events: {
            "click .basic-circle.level1": "itemClickedEvent"
        },
        itemClickedEvent: function( event ){            
            event.preventDefault();
            var ele = $(event.currentTarget);
            if(ele.hasClass('idle') && timer.changeState('running')){
                ele.removeClass('idle');
                ele.addClass('running');
            }else if(ele.hasClass('running') && timer.changeState('stoped')){
                ele.removeClass('running');               
                ele.addClass('idle');  
                timer.changeState('idle');
            }
        }
    });
    return App;
});