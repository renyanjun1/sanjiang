var divlb=document.getElementById("divlb");
	var ullb=document.getElementById("ullb");
	var ullbli=Array.from(ullb.children);
	var ollb=document.getElementById("ollb");
	var ollbli=Array.from(ollb.children);
	
	ollbli.forEach(function(li,index){
		li.onclick=function(){
			now=index;
			tad();
		}
	})
	
	var now=0;
	 ollbli[now].className="selected";
	tad();
	function tad(){
		ollbli.forEach(function(li,index){
			li.className ="";
			startMove(ullbli[index],{"opacity":0},function(){
				ullbli[index].style.display="none";
			});
		});
		 //getComputedStyle(ollbli[now],null)["background-color"];
		 ollbli[now].className="selected"; 
		ullbli[now].style.display="block";
		startMove(ullbli[now],{"opacity":100})
	}
	function next(){
		now++;
		if(now>3){now=0}
		tad();
	}
	var timer=setInterval(next,1000);
	divlb.onmouseover=function(){
		clearInterval(timer);
	}
	divlb.onmouseout=function(){
		timer=setInterval(next,1000);
	}