/**
 * Created by li-hg on 2016/6/12.
 */
$(function(){
	
	//返回顶部
    $(window).scroll(function(){
        var $scrollTop = $(window).scrollTop();
        if($scrollTop>100){
            $(".backTop").css({"display":"block"});
        }else{
            $(".backTop").css({"display":"none"});
        }
    });

    $(".backTop").click(function(){
        $("html,body").animate({
            scrollTop:80
        },400);
    });
    
    $('.slideBtn').on('click',function(){
	    $('.slideBar,.main,.slideBtn').toggleClass('on');	
    });

    
    //根据窗口变化进行缩进
    $(window).resize(function(){
    	var currClientWidth = $(window).width();
    	if(currClientWidth<1000){
    		$(".slideBtn").animate({"opacity":1},500,function(){
    			$(".slideBar").addClass("off");
    		});
    	}
    }).trigger('resize'); 
});