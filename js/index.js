window.onload=function(){
$(".warpbut li:nth-child(1)").click(function(){
	$(this).css("background","#333");
	$(".warpbut li").not(this).css("background","#999");
	$(".warpimg li").not(".warpimg li:nth-child(1)").css("opacity","0");
	$(".warpimg li:nth-child(1)").css("display","block").css("opacity","1");
});
$(".warpbut li:nth-child(2)").click(function(){
	$(this).css("background","#333");
	$(".warpbut li").not(this).css("background","#999");
	$(".warpimg li").not(".warpimg li:nth-child(2)").css("opacity","0");
	$(".warpimg li:nth-child(2)").css("display","block").css("opacity","1");
});
$(".warpbut li:nth-child(3)").click(function(){
	$(this).css("background","#333");
	$(".warpbut li").not(this).css("background","#999");
	$(".warpimg li").not(".warpimg li:nth-child(3)").css("opacity","0");
	$(".warpimg li:nth-child(3)").css("display","block").css("opacity","1");
});
$(".warpbut li:nth-child(4)").click(function(){
	$(this).css("background","#333");
	$(".warpbut li").not(this).css("background","#999");
	$(".warpimg li").not(".warpimg li:nth-child(4)").css("opacity","0");
	$(".warpimg li:nth-child(4)").css("display","block").css("opacity","1");
});


setInterval(aaa(),5000);
function aaa(){
	setTimeout(function(){$(".topwarp").css("width","100%");},0);
	$(".topwarp").css("width","0%");
	
}


}