requirejs.config({
	paths:{
		"jquery":"jquery-1.11.1.min",
	}
})

requirejs(["jquery"],function($){
	//$("body").css("background","red")
	$("ul>li:has(ol)").mouseenter(function(){
		$(this).children("a").children(".i1").css("background-position","0 -38px");
		$(this).children("ol").stop().slideDown(100);
	}).mouseleave(function(){
		$(this).children("a").children(".i1").css("background-position","0 -23px")
		$(this).children("ol").stop().slideUp(100);
	})
	
})
