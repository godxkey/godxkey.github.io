/* *
 *     左侧导航栏  对应链接添加 类名
 * */

var  navBtn = $("#slideBar .navBtn ");
var linkUrl = null ;
navBtn.each(function(){
    linkUrl = $(this).prop("href");
    if ( window.location.href.indexOf(linkUrl) != -1){
        $(this).addClass("navBtnOn");
    }
});

/*
 *   锚点跳转滑动效果
 * */
$('a[href*=#],area[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 400);
            return false;
        }
    }
});

/**
 *      小于1000px  切换
 **/
var menuBtn = $(".menuBtn");
var slideBar = $("#slideBar");
var main = $(".main");
var homeCaseDiv = $("#homeCaseDiv");
menuBtn.click(function(){
    var slideBarLeft = parseInt(slideBar.css("left"));
    if ( slideBarLeft < 0){
        slideOpen();
    }else{
        slideClose();
    }
});


$(window).resize(function(){
    var winWidth = $(window).width() ;
    if( winWidth > 990 ){
        slideOpen();
    }else{
        slideClose();
    }
});

//   判断浏览器版本
var browserVersion = parseInt($.browser.version);
function slideOpen(){
    menuBtn.css({"margin-left": 148 });
    if ( browserVersion < 9 ){
        menuBtn.css({"margin-left": 0 });
    }
    main.css({"margin-left": 148});
    slideBar.css({"left": 0});
    if ( !homeCaseDiv ){
        return false
    }else{
        homeCaseDiv.css({"left": 148 })
    }
}
function slideClose(){
    menuBtn.css({"margin-left": 0 , "filter" : "alpha( opacoty : 100 )"});
    main.css({"margin-left": 0});
    slideBar.css({"left": -148});
    if ( !homeCaseDiv ){
        return false
    }else{
        homeCaseDiv.css({"left": 0 })
    }
}

/**
 *      返回顶部 top
 * */
var topBtn = $(".topBtn");
$(window).scroll(function(){
   if ( $(window).scrollTop() > 100){
       topBtn.show();
   }else{
       topBtn.hide();
   }
});