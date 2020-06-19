//滚动监听插件
var timer = null;//函数节流
$(window).scroll(function(e) {
	if(timer){
		clearTimeout(timer);
	}
	timer = setTimeout(function(){
		
		//浮动随着可视窗口出现和隐藏
		//	$(".roll").each(function() {
		//		var e = $(this);
		//
		//		var cth = $(window).scrollTop();
		//		//console.log('可视窗口顶部距离页面顶部的高度'+cth);
		//
		//		var cbh = $(window).height() + $(window).scrollTop();
		//		//console.log('可视窗口底部距离页面顶部的高度'+cbh);
		//
		//		var domth = e.offset().top;
		//		//console.log('元素顶部距离页面顶部的位置' + domth);
		//
		//		var dombh = e.offset().top + e.height();
		//		//console.log('元素底部距离页面顶部的位置' + dombh);
		//
		//		if(cbh > domth && dombh > cth) {
		//			e.addClass('roll-active');
		//		} else {
		//			e.removeClass('roll-active');
		//		}
		//
		//	});
		
		
		//浮动随着可视窗口出现后不再次隐藏
		$(".roll").each(function() {
			var e = $(this);
			if(!e.hasClass('roll-active')){
				var cth = $(window).scrollTop();
				//console.log('可视窗口顶部距离页面顶部的高度'+cth);
		
				var cbh = $(window).height() + $(window).scrollTop();
				//console.log('可视窗口底部距离页面顶部的高度'+cbh);
		
				var domth = e.offset().top;
				//console.log('元素顶部距离页面顶部的位置' + domth);
		
				var dombh = e.offset().top + e.height();
				//console.log('元素底部距离页面顶部的位置' + dombh);
		
				if(cbh > domth && dombh > cth) {
					e.addClass('roll-active');
				}
			}
		});
		
	},18)
	
});

//页面刷新初始化
$(document).ready(function(){
	$(".roll").each(function() {
		var e = $(this);
		if(!e.hasClass('roll-active')){
			var cth = $(window).scrollTop();
			//console.log('可视窗口顶部距离页面顶部的高度'+cth);
	
			var cbh = $(window).height() + $(window).scrollTop();
			//console.log('可视窗口底部距离页面顶部的高度'+cbh);
	
			var domth = e.offset().top;
			//console.log('元素顶部距离页面顶部的位置' + domth);
	
			var dombh = e.offset().top + e.height();
			//console.log('元素底部距离页面顶部的位置' + dombh);
	
			if(cbh > domth && dombh > cth) {
				e.addClass('roll-active');
			}
		}
	});
});
