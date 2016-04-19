$(window).ready(function($) {
		var detect=1;/*设置全局变量detect，用于监控，当点击导航条时，滚动条监控不可用*/
			h=0;/*用于获取浏览器显示屏幕高度，以改变每个div的高度实现高度自适应*/
/*测出屏幕高度*/
	$(function(){
		h=$(window).height();
		$('.header-content').css("height",h+"px");
		$('.aboutMe').css("min-height",h+"px");
		$('.skill').css("min-height",h+"px");
		$('.contact').css("min-height",h+"px");
})
/*点击导航栏，顶部导航状态改变*/
		$('.nav').find('li').click(function(){
		$('.nav').find('li').removeClass('active');
		$(this).addClass('active');
	});
/*点击导航条，平滑滚动到所处位置*/
	$('.nav-header').click(function() {
		detect=0;/*设置为0，阻止滚动条监控*/
		$('html,body').animate({scrollTop: 0}, 600);
    		setTimeout(function () {
        	detect=1;
    }, 600);/*延迟600秒当点击滚动完再促发滚动条监控*/
	});
	$('.nav-aboutMe').click(function() {
		detect=0;
		$('html,body').animate({scrollTop: h}, 600);
		setTimeout(function () {
        	detect=1;
    }, 600);
	});
	$('.nav-skill').click(function() {
		detect=0;
		$('html,body').animate({scrollTop: 2*h}, 600);
		setTimeout(function () {
        	detect=1;
    }, 600);
	});
	$('.nav-experience').click(function() {
		detect=0;
		$('html,body').animate({scrollTop: 3*h}, 600);
		setTimeout(function () {
        	detect=1;
    }, 600);
	});
	$('.nav-contact').click(function() {
		detect=0;
		$('html,body').animate({scrollTop: 2650}, 600);
		setTimeout(function () {
        	detect=1;
    }, 600);
	});
/*滚动条监控，当滚动条发生变化时，导航条状态改变*/	
		$(window).scroll(function() { 
		var top=$('body').scrollTop();
		if(detect){
		if(top<=500){
			$('.nav').find('li').removeClass('active');
			$('.nav > li:eq(0)').addClass('active');
		}else if(top>=500&top<1100){
			$('.nav').find('li').removeClass('active');
			$('.nav > li:eq(1)').addClass('active');
		}
		else if(top>=1100&top<1700){
			$('.nav').find('li').removeClass('active');
			$('.nav > li:eq(2)').addClass('active');
		}
		else if(top>=1700&top<2300){
			$('.nav').find('li').removeClass('active');
			$('.nav > li:eq(3)').addClass('active');
		}else{
			$('.nav').find('li').removeClass('active');
			$('.nav > li:eq(4)').addClass('active');
		}
		}
	});
	
/*顶部导航状态设置结束*/

	
/*饼状进度条设置开始*/
	$('#circle1').circleProgress({
        value: 0.80,
        size: 200,
        thickness:20,
  		fill:{
  			color:"#FF33CC"
  		}

    }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').text(parseInt(100*stepValue.toFixed(2).substr(1))+'%')
});
   	$('#circle2').circleProgress({
        value: 0.90,
        size: 200,
        thickness:20,
        fill: {
            color:"#FF33CC"
        }
    }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').text(parseInt(100*stepValue.toFixed(2).substr(1))+'%')});
    	
    	$('#circle3').circleProgress({
        value: 0.90,
        size: 200,
        thickness:20,
        fill: {
            color:"#FF33CC"
        }
    }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').text(parseInt(100*stepValue.toFixed(2).substr(1))+'%')});

    	$('#circle4').circleProgress({
        value: 0.70,
        size: 200,
        thickness:20,
        fill: {
            color:"#FF33CC"
        }
    }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').text(parseInt(100*stepValue.toFixed(2).substr(1))+'%')});

    	$('#circle5').circleProgress({
        value: 0.70,
        size: 200,
        thickness:20,
        fill: {
            color:"#FF33CC"
        }
    }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').text(parseInt(100*stepValue.toFixed(2).substr(1))+'%')});

    	$('#circle6').circleProgress({
        value: 0.40	,
        size: 200,
        thickness:20,
        fill: {
            color:"#FF33CC"
        }
    }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').text(parseInt(100*stepValue.toFixed(2).substr(1))+'%')});
/*饼状进度条设置结束*/

});
