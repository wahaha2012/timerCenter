var dl=document.getElementsByTagName('dl'),
	dd1=dl[0].getElementsByTagName("dd"),
	dd2=dl[1].getElementsByTagName("dd");

var timer=new TimerCenter(500).start().start().start();
for(var i=0,L=dd1.length;i<L;i++){
	(function(c){
		var t=1,
			s=false;
		
		//add timer listeners
		timer.addListener('dd1',function(){
			// for(var ss=0;ss<10000;ss++){
				t+=c;
				dd1[c-1].innerHTML=t;
			// }
		});
		
		//click event stop or resume
		dd1[c-1].onclick=function(){
			// s?timer.resumeListeners('dd1'):timer.stopListeners('dd1');
			s?timer.resume():timer.stop();
			s=!s;
		}
	})(i+1);
}

/* for(var i=0,L=dd2.length;i<L;i++){
	(function(c){
		var t=1,
			timer=new TimerCenter(c*1000).start(),
			s=false;
		
		timer.addListener('dd2',function(){
			t+=c;
			dd2[c-1].innerHTML=t;
		});
		
		dd2[c-1].onclick=function(){
			s?timer.resumeListeners('dd2'):timer.stopListeners('dd2');
			s=!s;
		}
	})(i+1);
} */