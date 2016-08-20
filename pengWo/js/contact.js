
 //* Created by Administrator on 2016/6/12.

//window.onload = function(){
//
//    var topBtn = document.getElementById('topBtn');
//
//    window.onscroll = function(){
//        if($(document).scrollTop()>122){
//            topBtn.style.display ='block';
//        }
//        else{
//            topBtn.style.display ='none';
//        }
//        leader = $(document).scrollTop();
//    }
//
//    var timer = null, target = 0, leader = 0;
//
//    topBtn.onclick =function(){
//        clearInterval(timer);
//        timer =setInterval(function(){
//            var step = (target - leader)/10;
//            step = step>0?Math.ceil(step):Math.floor(step);
//            leader = leader+step;
//            window.scrollTo(0,leader);
//            if(target == leader){
//                clearInterval(timer);
//            }
//        },30);
//    }
//}
$(function(){
    $(window).scroll(function(){
        var $scrollTop = $(window).scrollTop();
        if($scrollTop>100){
            $(".topBtn").css({"display":"block"});
        }else{
            $(".topBtn").css({"display":"none"});
        }
    })
    $(".topBtn").click(function(){
        $("html,body").animate({
            scrollTop:0
        },400);
    })

})

window.onload = function(){

    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){
        map = new BMap.Map("map");
        map.centerAndZoom(new BMap.Point(113.920158,22.580071),18);

    }
    function setMapEvent(){
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
        target.addEventListener("click",function(){
            target.openInfoWindow(window);
        });
    }
    function addMapOverlay() {
        //var markers = [
        //    {content:"我的备注",title:"",imageOffset: {width:-46,height:-21},position:{lat:22.579696,lng:113.918739}},
        //];
        //for(var index = 0; index < markers.length; index++ ){
        //    var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        //    var marker = new BMap.Marker(point,{icon:new BMap.Icon( "http://api.map.baidu.com/lbsapi/createmap/images/icon.png"
        //    ,new BMap.Size(80,105),{
        //        imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        //        //"http://api.map.baidu.com/lbsapi/createmap/images/icon.png"
        //    })});
        //var pt = new BMap.Point(113.920158, 22.580071);
        //var myIcon = new BMap.Icon("palwoLogo.png", new BMap.Size(80,105));
        //var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        //map.addOverlay(marker2);
        //marker2.setAnimation(BMAP_ANIMATION_BOUNCE);


        var pt = new BMap.Point(113.918694, 22.5799900);
        var myIcon = new BMap.Icon("images/palwoLogo.png", new BMap.Size(80,105));
        var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        map.addOverlay(marker2);
//    http://developer.baidu.com/map/jsdemo/img/fox.gif
        // 将标注添加到地图中
        marker2.setAnimation(BMAP_ANIMATION_BOUNCE);
    }

    //向地图添加控件
    function addMapControl(){
        var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
        map.addControl(scaleControl);
        var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(navControl);
        var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
        map.addControl(overviewControl);
    }
    var map;
    initMap();


}

