var div1 = document.getElementById("xlb");
var ul1 = document.getElementsByClassName("ul1")[0];	
var ol1 = document.getElementsByClassName("ol1")[0];
var olli = Array.from(ol1.children);

olli.forEach(function(li, index){
	li.onclick = function(){
		now = index;	// 记录应该显示的图片的下标
		tab();	// 执行切换效果
	}
});

var now = 0;	// 记录下标
olli[now].className = "selected";	// 初始化按钮样式

function tab(){	
	if( now==6 ){ // 进入到最后一张补充的图片（实际上是第一张图片）
		startMove(ul1, {"left":-252*now}, function(){
			ul1.style.left = "0px";	// 当最后一张补充的图片的运动效果走完之后，瞬间定位到第一张图片
		});
		now = 0;
	}else{
		startMove(ul1, {"left":-252*now});
	}
	// 清除所有按钮的样式
	olli.forEach(function(li){
		li.className = "";
	});
	// 设置当前按钮的样式
	olli[now].className = "selected";
}

function next(){
	now++;
	tab();
}

var timer = setInterval(next, 3000);

div1.onmouseover = function(){
	clearInterval(timer);
}

div1.onmouseout = function(){
	timer = setInterval(next, 3000);
}