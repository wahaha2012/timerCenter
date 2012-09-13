;(function(global){
	var util={
		notify:function(listeners){
			// console.log('notifyed.......');
			for(var key in listeners){
				if(listeners[key].disabled){
					continue;
				}
				
				for(var i=0,L=listeners[key]['func'].length;i<L;i++){
					listeners[key]['func'][i]();
				}
			}
		},
		type:function(target, type) {
			var clas = Object.prototype.toString.call(target).slice(8, -1);
			clas = clas.toLowerCase();
			return !type?clas:target !== undefined && target !== null && clas === type;
		}
	};
	
	var timerCenter=function(interval,runAlways){
		var _timer,
			//default time interval is 1000ms
			_interval=interval||1000,
			
			_listeners={};
			
		if(typeof interval!=='undefined'&&!util.type(interval,'number')&&!util.type(interval,'string')){
			runAlways=interval;
		}
		
		//resume
		this.resume=this.start=function(){
			_timer=setInterval(function(){util.notify(_listeners)}, _interval);
			
			return this;
		};
		
		//stop
		this.stop=function(){
			clearInterval(_timer);
			
			return this;
		};
		
		//add listeners
		this.addListener=function(key,value){
			if(typeof key==='undefined'){return this;}
			
			if(util.type(key)==='object'){
				for(var k in key){
					if(typeof _listeners[k]==='undefined'){
						_listeners[k]={'func':[key[k]]};
					}else{
						_listeners[k].func.push(key[k]);
					}
				}
			}else if(typeof value!=='undefined'){
				if(typeof _listeners[key]==='undefined'){
					_listeners[key]={'func':[value]};
				}else{
					_listeners[key].func.push(value);
				}
			}
			
			return this;
		};
			
		//update listeners
		this.updateListener=function(key,value){
			if(typeof key==='undefined'){return this;}
			
			if(util.type(key)==='object'){
				for(var k in key){
					if(typeof _listeners[k]!=='undefined'){
						_listeners[k].func=[key[k]];
					}
				}
			}else if(typeof value!=='undefined'){
				if(typeof _listeners[key]!=='undefined'){
					_listeners[key].func=[value];
				}
			}
			
			return this;
		};
	
		//remove listeners
		this.removeListener=function(key){
			if(typeof key==='undefined'){return this;}
			
			if(util.type(key)==='object'){
				for(var k in key){
					if(typeof _listeners[k]!=='undefined'){
						delete _listeners[k];
					}
				}
			}else{
				if(typeof _listeners[key]!=='undefined'){
					delete _listeners[key];
				}
			}
			
			return this;
		};
		
		
		//stop some listeners
		this.stopListeners=function(key){
			if(typeof key==='undefined'){return this;}
			
			if(util.type(key)==='object'){
				for(var k in key){
					if(typeof _listeners[k]!=='undefined'){
						_listeners[k].disabled=true;
					}
				}
			}else{
				if(typeof _listeners[key]!=='undefined'){
					_listeners[key].disabled=true;
				}
			}
			
			return this;
		};
		
		//resume some listeners
		this.resumeListeners=function(key){
			if(typeof key==='undefined'){return this;}
			
			if(util.type(key)==='object'){
				for(var k in key){
					if(typeof _listeners[k]!=='undefined'){
						delete _listeners[k].disabled;
					}
				}
			}else{
				if(typeof _listeners[key]!=='undefined'){
					delete _listeners[key].disabled;
				}
			}
			
			return this;
		};
		
		runAlways&&this.resume();
	};
	
	//constructor
	timerCenter.prototype.constructor=timerCenter;
	
	// if(!global.TimerCenter||!util.type(global.TimerCenter,'function')){
	if(global.TimerCenter!==timerCenter){
		global.TimerCenter=timerCenter;
	}
})(this);