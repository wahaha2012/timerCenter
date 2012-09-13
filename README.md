timerCenter
===========

one page one timer


----------
###Quick Start

> var timer=new TimerCenter();<br />
> timer.addListener('group-test', function(){<br />
>	alert('timer');<br />
>});<br />

> timer.start();

> document.onclick=function(){
>	timer.stop();
>}

---------

###Constructor
TimerCenter([interval], [autoStart]);
> 
> interval {Integer}[optional] must more than 10(ms)
> 
> autoStart {Boolean}[optional] whether auto start TimerCenter instance

---------
###Methods

- start()
- stop()
- resume()
- addListener(group, function);
- updateListener(group, function);
- removeListener(group);
- stopListener(group);
- resumeListener(group);