require.config({
    paths:{
        "jquery":"vendor/jquery/dist/jquery",
        "underscore":"vendor/underscore-amd/underscore",
        "backbone":"vendor/backbone-amd/backbone",
        "timer": "engine/timer-item"
    }
});


require(['views/app'],function(AppView){
   new AppView; 
});