//设置首页视频背景铺满浏览器窗口
$(document).ready(function() {
	// 当浏览器载入时改变元素高度
	var llqheight = $(window).height() - 80;
	$('#bg-video-box').css('height', llqheight);
});

// 当浏览器窗口改变大小时改变元素高度
$(window).resize(function() {
	var llqheight = $(window).height() - 80;
	$('#bg-video-box').css('height', llqheight);
});

//内页banner箭头缓动锚链接
$(function() {
	$(".ny-banner-mlj").click(function() {
		var hr = $(this).attr("data-href");
		var anh = $(hr).offset().top;
		$("html,body").stop().animate({
			scrollTop: anh
		}, {
			easing: 'easeInOutQuart',
			duration: 1500
		});
	});
});

//侧边栏锚链接
$(function() {
	$(".cbmaolink a").click(function() {
		var hr = $(this).attr("data-href");
		var anh = $(hr).offset().top;
		$("html,body").stop().animate({
			scrollTop: anh
		}, {
			easing: 'easeInOutQuart',
			duration: 1500
		});
	});
});

//pc端主导航展开按钮和列表效果
$("#navlist-btn").click(function() {
	$(this).toggleClass('active');
	$('.burger_menu').toggleClass('active');
	setTimeout(function() {
		$('.header').removeClass('over');
	}, 10);
	if($('.burger_menu').hasClass('active')) {
		$('.blackLevel').fadeIn("200");
		$('body').css({
			"overflow-x": "hidden",
			"overflow-y": "hidden"
		});
	} else {
		setTimeout(function() {
			$('.blackLevel').fadeOut("200");
			$('body').css({
				"overflow-x": "auto",
				"overflow-y": "auto"
			});
		}, 1200);
	}
});

//wap端主导航展开按钮和列表效果
$("#wap-navlist-btn").click(function() {
	$(this).toggleClass('active');

	$('.wap-burger_menu').toggleClass('active');
	setTimeout(function() {
		$('.header').removeClass('over');
	}, 10);

	if($('.wap-burger_menu').hasClass('active')) {

		$('body').css({
			"height": "100%",
			"overflow": "hidden"
		});

		$('.wap-nav .search-box').stop().fadeOut(800);
	} else {

		$('body').css({
			"height": "auto",
			"overflow": "auto"
		});

		$('.wap-nav .search-box').stop().fadeIn(800);

	}
});

//点击黑色层关闭列表展开
$(".blackLevel").click(function() {
	$('#navlist-btn').removeClass('active');
	$('.burger_menu').removeClass('active');

	setTimeout(function() {
		$('.blackLevel').fadeOut("200");
		$('body').css({
			"overflow-x": "auto",
			"overflow-y": "auto"
		});
	}, 1200);

});

//主导航在页面上下滑动时的收展效果
$(document).ready(function() {
	var p = 0;
	t = 0;
	$(window).scroll(function(e) {
		if($(window).scrollTop() >= 200) {
			p = $(this).scrollTop();

			if(t <= p) {
				//下滚
				$('.header').addClass('over');
			} else {
				//上滚
				$('.header').removeClass('over');
			}
			t = p;
			setTimeout(function() {
				t = p;
			}, 0);

		} else {
			$('.header').removeClass('over');
		}
	});
});

//pc端头部搜索展开效果
$('#search-btn').click(function() {
	if($('.search-input').hasClass('active')) {
		if($('.search-input input[type="search"]').val() == "") {
			$('.search-input').removeClass('active');
		}
	} else {
		$('.search-input').addClass('active');
	}
});

//鼠标的移出搜索box时收起  
$(".search-box").mouseleave(function() {
	$('.search-input').removeClass('active');
});

//wap端主导航伸缩
$('.wap-burger_menu .level1>li>a').click(function() {
	$(this).parent().siblings().removeClass('active').children('ul').slideUp("500");
	$(this).parent().toggleClass('active');
	$(this).next().stop().slideToggle("500");
});

//wap搜索层效果
$('#wap-search-btn').click(function() {
	$('.search-fixed').fadeIn(400);
});
$('.search-fixed .bgcolor').click(function() {
	$('.search-fixed').fadeOut(400);
});

//首页新闻模块
//上轮播
var mySwiper1 = new Swiper('.swiper-container1', {
	loop: true,
	autoplay: 5000,
	autoplayDisableOnInteraction: false,
	speed: 600,
	paginationClickable: true,
	nextButton: '#swiper-container1-btn',
	effect: 'fade',
	grabCursor: true,
	autoHeight: true, //高度随内容变化
	//	窗口大小改变重置Swiper
	observer: true,
	observeParents: true,
});
//下轮播
var mySwiper2 = new Swiper('.swiper-container2', {
	loop: true,
	speed: 600,
	paginationClickable: true,
	grabCursor: false,
	autoHeight: true, //高度随内容变化
	effect: 'fade',
	//	窗口大小改变重置Swiper
	observer: true,
	observeParents: true,
});
//左右轮播关联
mySwiper1.params.control = mySwiper2; //需要在Swiper2初始化后，Swiper1控制Swiper2
mySwiper2.params.control = mySwiper1; //需要在Swiper1初始化后，Swiper2控制Swiper1

$('#btn1').click(function() {
	mySwiper1.swipeNext();
	mySwiper2.swipeNext();
});

//点击视频播放视频或暂停视频播放
if(document.getElementById("videoPlay1")) {
	var video1 = document.getElementById("videoPlay1");
	video1.onclick = function() {
		if(video1.paused) {
			video1.play();
		} else {
			video1.pause();
		}
	}
};

//内页轮播模块
var nySwiper1 = new Swiper('.ny-swiper-container1', {
	effect: 'coverflow',
	loop: true,
	autoplay: 6000,
	autoplayDisableOnInteraction: false,
	speed: 1000,
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	grabCursor: true,
	//	窗口大小改变重置Swiper
	observer: true,
	observeParents: true,
	//自定义当前页数与总页数
	pagination: '.swiper-pagination',
	paginationType: 'custom',
	paginationCustomRender: function(swiper, current, total) {

		var a = current;
		if(current < 10) {
			a = '0' + current;
		} else {
			a = current;
		};

		var b = total;
		if(total < 10) {
			b = '0' + total;
		} else {
			b = total;
		};

		return '<div class="lbt-ys">' +
			'<p class="p1">' + a + '<span>/</span>' + b + '</p>' +
			'</div>'
	}
});

var nySwiper2 = new Swiper('.ny-swiper-container2', {
	loop: true,
	speed: 600,
	paginationClickable: true,
	grabCursor: false,
	autoHeight: true, //高度随内容变化
	//	effect : 'fade',
	//	窗口大小改变重置Swiper
	observer: true,
	observeParents: true,
});

//左右轮播关联
nySwiper1.params.control = nySwiper2; //需要在Swiper2初始化后，Swiper1控制Swiper2
nySwiper2.params.control = nySwiper1; //需要在Swiper1初始化后，Swiper2控制Swiper1

//产品列表侧边栏伸缩效果
$(".screening-content .product-class1-title").click(function() {
	$(this).toggleClass('active');
	$(this).next().stop().slideToggle("500");
});

//产品列表侧边栏单选效果
$(".screening-content .level2>li").click(function() {
	$(this).addClass('active');
	$(this).siblings().removeClass('active');

	$(this).children('input').attr('checked', true);
	$(this).siblings('li').children('input').attr('checked', false);
});

//wap端点击关闭按钮关闭侧边栏
$(".screening-box-wap-down-btn").click(function() {
	$('.screening-box').removeClass('active');
	$('.screening-box-wap-spread-btn').addClass('active');

	$('body').css({
		"overflow-x": "auto",
		"overflow-y": "auto"
	});
});

//wap端点击打开按钮打开侧边栏
$(".screening-box-wap-spread-btn").click(function() {
	$('.screening-box').addClass('active');
	$(this).removeClass('active');

	$('body').css({
		"overflow-x": "hidden",
		"overflow-y": "hidden"
	});
});

//wap端侧栏按钮滑到底部时隐藏以免挡住页面底部信息
$(window).scroll(function() {
	if($('body').find('*').hasClass('product-list-bgcolor')) {
		var aa = $(window).height() + $(window).scrollTop();
		var bb = $(".product-list-bgcolor").offset().top + $(".product-list-bgcolor").height();

		if(aa > bb) {
			$(".screening-box-wap-spread-btn").css('display', 'none');
		} else {
			$(".screening-box-wap-spread-btn").css('display', 'block');
		}
	}
});

//微信二维码弹窗
$(".wechat-box").hover(function() {
	$(this).addClass('active');
}, function() {
	$(this).removeClass('active');
});

$(".wechat-box").click(function() {
	$(this).toggleClass('active');
})

//底部二维码弹窗
$(function() {
	//	打开二维码窗口
	$(".ewm").click(function() {
		var thisewm = $(this).attr('data-ewm');
		$('#' + thisewm).css('display', 'block');

		$("#ewmbox").css('display', 'block');
		$("#ewmbox").stop().animate({
			left: "0",
		}, {
			easing: 'easeInOutQuart',
			duration: 1000,
			queue: false,
		});
	});
	//	关闭二维码窗口
	$("#closeewm").click(function() {
		$("#ewmbox").stop().animate({
			left: "100%",
		}, {
			easing: 'easeInOutQuart',
			duration: 1000,
			queue: false,
			complete: function() {
				$(this).find('.ewm-box').css('display', 'none');
				$(this).css('display', 'none');
			}
		});
	});
});

var nySwiper3 = new Swiper('.ny-swiper-container3', {
	loop: true,
	speed: 600,
	paginationClickable: true,
	grabCursor: false,
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	autoHeight: true, //高度随内容变化
	//	effect : 'fade',
	//	窗口大小改变重置Swiper
	observer: true,
	observeParents: true,
});

//产品详情锚链接
$(function() {
	$(".ny-model11 a").click(function() {
		var hr = $(this).attr("data-href");
		var anh = ($(hr).offset().top) - 100;
		$("html,body").stop().animate({
			scrollTop: anh
		}, {
			easing: 'easeInOutQuart',
			duration: 1500
		});
	});
});

//产品列表保证侧导航与底部不重合
$(document).ready(function() {
	var box = $('.screening-box').height() + 100;
	$('.product-list').css('min-height', box);
});
$(window).resize(function() {
	var box = $('.screening-box').height() + 100;
	$('.product-list').css('min-height', box);
});

//返回顶部
$(".to_top").click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, {
		easing: 'easeInOutQuart',
		duration: 900
	});
	return false;
});

//图集效果
$(document).ready(function() {
	$('.lightgallery').lightGallery({
		download: false,
	});
});

//首页声明
$('.shengming-box .close-btn').click(function(){
	$('.shengming-box').css('display','none');
})

$('.shengming-box .img-box img').click(function(){
	$('.shengming-fd').css('display','block');
})

$('.shengming-fd').click(function(){
	$('.shengming-fd').css('display','none');
})