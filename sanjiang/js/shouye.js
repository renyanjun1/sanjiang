$(function(){
	$.ajax({
		type:"get",
		url:"rx.json",
		success:function(json){
			var str="";
			for(var i=0;i<json.length;i++){
				str+=`
				<li>
					<h1><a href="#" target="_blank">${json[i].name}</a></h1>
					<div class="tip">${json[i].tips}</div>
					<b>${json[i].pirce}</b>
					<a href="#" target="_blank">点击购买></a>
					<a href="#" target="_blank">
						<img src="img/${json[i].src}" title="雪花醇麦拉罐啤酒10度500ml*4"/>
					</a>
				</li>
				`
			}
		$("#rx").html(str);
		}
	});
	
	
})


/*蔬菜水果的选项卡*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#sc").html(str1);
			/*水果*/
			var str2="";
			for(var i=6;i<=9;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#sg").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#hx").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#dn").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#lw").html(str5);
		}
	});
})
$("#vfx>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".sc").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#vfx>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".sc").eq($(this).index()).css("display","none");*/
})

/*热门选项卡2*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#rm2").html(str1);
			/*水果*/
			var str2="";
			for(var i=5;i<=8;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#dami").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#jy").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#syy").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#fbm").html(str5);
		}
	});
})
$("#louce2>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".lc2").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#louce2>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".lc2").eq($(this).index()).css("display","none");*/
})
/*热门选项卡3*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#rm3").html(str1);
			/*水果*/
			var str2="";
			for(var i=6;i<=9;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#bg1").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#xx").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#jj").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#tq").html(str5);
		}
	});
})
$("#louce3>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".lc3").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#louce3>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".lc3").eq($(this).index()).css("display","none");*/
})
/*选项卡楼层4*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#rm4").html(str1);
			/*水果*/
			var str2="";
			for(var i=6;i<=9;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#gd").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#ph").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#jg").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#tg").html(str5);
		}
	});
})
$("#louce4>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".lc4").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#louce4>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".lc4").eq($(this).index()).css("display","none");*/
})
/*选项卡楼层5*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#rm5").html(str1);
			/*水果*/
			var str2="";
			for(var i=6;i<=9;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#nr").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#jl").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#bj").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#cl").html(str5);
		}
	});
})
$("#louce5>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".lc5").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#louce5>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".lc5").eq($(this).index()).css("display","none");*/
})
/*选项卡楼层6*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#rm6").html(str1);
			/*水果*/
			var str2="";
			for(var i=6;i<=9;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#nf").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#sj").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#yf").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#yp").html(str5);
		}
	});
})
$("#louce6>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".lc6").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#louce6>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".lc6").eq($(this).index()).css("display","none");*/
})
/*选项卡楼层7*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#rm7").html(str1);
			/*水果*/
			var str2="";
			for(var i=6;i<=9;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#cz").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#cw").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#jz").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#sp").html(str5);
		}
	});
})
$("#louce7>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".lc7").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#louce7>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".lc7").eq($(this).index()).css("display","none");*/
})
/*选项卡楼层8*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#rm8").html(str1);
			/*水果*/
			var str2="";
			for(var i=6;i<=9;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#xh").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#xy").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#wj").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#hf").html(str5);
		}
	});
})
$("#louce8>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".lc8").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#louce8>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".lc8").eq($(this).index()).css("display","none");*/
})
/*选项卡楼层8*/
$(function(){
	$.ajax({
		type:"get",
		url:"datasc.json",
		success:function(res){
			/*console.log(res);*/
			/*蔬菜*/
			var str1="";
			for(var i=0;i<=5;i++){
				str1+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#cp").html(str1);
			/*水果*/
			var str2="";
			for(var i=6;i<=9;i++){
				str2+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#cj").html(str2);
			/*海鲜*/
			var str3="";
			for(var i=10;i<=15;i++){
				str3+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#jf").html(str3);
			/*奶蛋*/
			var str4="";
			for(var i=11;i<=17;i++){
				str4+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#jr").html(str4);
			/*肉*/
			var str5="";
			for(var i=18;i<=25;i++){
				str5+=`
					<li>
						<a href="#">
							<img src="img/${res[i].src}" />
						</a>
						<p>${res[i].name}</p>
						<div>
							<b>${res[i].pirce}</b>
							<a href="#"></a>
						</div>
					</li>
				`
			}
			$("#jc").html(str5);
		}
	});
})
$("#louce9>li").mouseenter(function(){
	$(this).css("border-bottom","2px solid #EA1414");
	$(".lc9").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$("#louce9>li").mouseleave(function(){
	$(this).css("border-bottom","");
	/*$(".lc9").eq($(this).index()).css("display","none");*/
})

