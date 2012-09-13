var dd=document.getElementsByTagName('dd');

/* for(var i=0,L=dd.length;i<L;i++){
	(function(c){
		var t=1,
			timer=new TimerCenter(c*1000).start(),
			s=false;
		
		timer.addListener('dd',function(){
			t+=c;
			dd[c-1].innerHTML=t;
		});
		
		dd[c-1].onclick=function(){
			s?timer.resumeListeners('dd'):timer.stopListeners('dd');
			s=!s;
		}
	})(i+1);
} */

var timer=new TimerCenter().start();
for(var i=0,L=dd.length;i<L;i++){
	(function(c){
		var t=1,
			s=false;
		
		//add timer listeners
		timer.addListener('dd',function(){
			t+=c;
			dd[c-1].innerHTML=t;
		});
		
		//click event stop or resume
		dd[c-1].onclick=function(){
			// s?timer.resumeListeners('dd'):timer.stopListeners('dd');
			s?timer.resume():timer.stop();
			s=!s;
		}
	})(i+1);
}