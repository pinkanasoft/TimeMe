define([],function(){
    var TimerItem = function (){
        var startTime;
        var endTime;
        var target = 0;
        var actualDuration = 0;
        
    };

    TimerItem.prototype.currentState = 'idle';
    
    TimerItem.prototype.setTarget = function(duration){
        this.target = duration;
    }    
    
    TimerItem.prototype.changeState = function(newState){  
        
        var reg = new RegExp(/\d+/);
        if( reg.test(newState) ) {
            console.log('Invalid value for state'); 
            return;
        }        
        console.log('Current state is : ' +this.currentState + ' will be changed to :' + newState);
        switch(this.currentState){
            case 'idle': {
              switch(newState){
                case 'running':{
                    this.currentState = newState;
                    return true;
                } break;
                default :{
                    console.log('Invalid state change. No changes');
                } break;
              }  
            } break;
            case 'running':{
                switch(newState){
                    case 'stoped':{                        
                        this.currentState = newState;
                        return true;
                    } break;
                    default: {
                        console.log('Invalid state change. No changes');
                    } break;
                }  
            } break;
            case 'stoped':{
                switch(newState){
                    case 'idle':{
                        this.currentState = newState;
                        return true;
                    } break;
                    default: {
                        console.log('Invalid state change. No changes');
                    } break;
                }                  
            } break;
        }
        return false;
    };
    
    return TimerItem;
});