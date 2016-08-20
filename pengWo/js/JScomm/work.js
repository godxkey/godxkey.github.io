/**
 *  腾讯  弹窗
 **/
function TGDialogS(e){
    need("biz.dialog-min",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            opacity:70      //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    });
}
function closeDialog(){
    need("biz.dialog-min",function(Dialog){
        Dialog.hide();
    });
}

$(function(){
    /**
     *    案例切换
     * */
    var caseBtn = $("#tabBtnDiv .caseBtn");
    var caseDiv =$("#tabConDiv .caseDiv");
    var dataIndex = "" ;
    var currentIndex = "gameCase" ;
    var taNun = 0;

    //  分页按钮，每次点击切换案例组的时候，去掉hover 或 noPage 状态，还原设计稿
    var leftPageBtn = $("#leftPageBtn");
    var rightPageBtn = $("#rightPageBtn");

    caseBtn.click(function(){
        rightPageBtn.removeClass("noPage");
        var index = caseBtn.index(this) ;
        dataIndex = $(this).attr("data-index") ;     //  导数据需要用

        caseBtn.removeClass("caseBtnOn");
        caseDiv.hide();
        caseBtn.eq(index).addClass("caseBtnOn");
        caseDiv.eq(index).show();
        taNun=index;
        waterFalls(".caseList");

        if(index==5){
            waterFalls(".caseListVideo");
        }

        //   返回当前的自定义属性 ， 对应哪个项目显示 及 加入数据
        var caseBtnOn = $("#tabBtnDiv .caseBtnOn");
        currentIndex = caseBtnOn.attr("data-index") ;
    });

    var diaTopBtn = $(".diaTopBtn");
    var caseDialog = $("#caseDialog");
    $(window).scroll(function(){
        if( caseDialog.is(":visible") ){
            if ( $(window).scrollTop() > 0){
                diaTopBtn.show();
            }else{
                diaTopBtn.hide();
            }
        }
    });

    /**
     *      写入数据    除了H5案例  特殊结构
     * */
    var gameCase = $("#gameCase"),            //  游戏
        commerceCase = $("#commerceCase"),    //  电商
        h5Case = $("#h5Case"),                //  H5
        designCase = $("#designCase"),        //  平面
        brandCase = $("#brandCase"),          //  品牌
		videoCase = $("#videoCase"),          //  视频
        companyCase = $("#companyCase");       //  企业

    var gameSum = 0 ,       //  各组案例初始值 传参
        commerceSum = 0 ,
        h5Sum = 0 ,
        designSum = 0 ,
        brandSum = 0 ,
        videoSum = 0 ,
        companySum = 0 ,
        afterSum = 0 ;    //    用于当数组不够10长度的时候

    /**
     *      数据导入
     * */
    gameSum = loadCase( casePcArr , gameCase , gameSum );
    commerceSum = loadCase( caseCommerceArr , commerceCase, commerceSum );
    h5Sum = loadH5Case( caseH5Arr , h5Case , h5Sum );
    designSum = loadCase( caseDesignCaseArr , designCase , designSum );
    brandSum = loadCase( caseBrandCaseArr , brandCase , brandSum );
	videoSum = loadCaseVideo( caseVideoCaseArr , videoCase , videoSum );
    companySum = loadCase( caseCompanyCaseArr , companyCase , companySum );

    function loadCase( caseArr , containerName , currentSum , direction ){

        if( direction == "left" ){
            if( currentSum <= 15 ){
                 return currentSum ;
            }else{
                currentSum -= 30 ;
            }
        }else if( direction == "right" ){
            if ( currentSum >= caseArr.length ){
                return currentSum ;
            }
        }

        if( caseArr.length < 15 ){
            afterSum = caseArr.length ;
        }else{
            afterSum = currentSum + 15 ;
        }

        //  当点击向右箭头时， 因为afterSum 会加10 超过它的数组长度的报错
        if( afterSum > caseArr.length  ){
            afterSum = caseArr.length ;
        }

        containerName.html("");
        var caseHtml = "" ;
        for( var i = currentSum; i <  afterSum ; i++ ){
            caseHtml += "<a class='caseList' href='javascript:;' data-case="+ i +"><img src='" +  caseArr[i].src + "' alt='"+ caseArr[i].title +"'></a>";
        }

        containerName.html(caseHtml);
        return currentSum + 15;

    }


    //视频 start
    function loadCaseVideo( caseArr , containerName , currentSum , direction ){

        if( direction == "left" ){
            if( currentSum <= 15 ){
                return currentSum ;
            }else{
                currentSum -= 30 ;
            }
        }else if( direction == "right" ){
            if ( currentSum >= caseArr.length ){
                return currentSum ;
            }
        }

        if( caseArr.length < 15 ){
            afterSum = caseArr.length ;
        }else{
            afterSum = currentSum + 15 ;
        }

        //  当点击向右箭头时， 因为afterSum 会加10 超过它的数组长度的报错
        if( afterSum > caseArr.length  ){
            afterSum = caseArr.length ;
        }

        containerName.html("");
        var caseHtml = "" ;
        for( var i = currentSum; i <  afterSum ; i++ ){
            caseHtml += "<a class='caseListVideo' href='javascript:;' data-case="+ i +"><img src='" +  caseArr[i].src + "' alt='"+ caseArr[i].title +"'></a>";
        }

        containerName.html(caseHtml);
        return currentSum + 15;
    }
    //视频 end

    var afterSumH5 = 0 ;
    function loadH5Case( caseArr , containerName , currentSum ,direction  ){

        if( direction == "left" ){
            if( currentSum <= 10 ){
                return currentSum ;
            }else{
                currentSum -= 20 ;
            }
        }else if( direction == "right" ){
            if ( currentSum >= caseArr.length ){
                return currentSum ;
            }
        }

        if( caseArr.length <= 10 ){
            afterSumH5 = caseArr.length ;
        }else{
            afterSumH5 = currentSum + 10 ;
        }
        //  当点击向右箭头时， 因为afterSum 会加10 超过它的数组长度的报错
        if( afterSumH5 > caseArr.length  ){
            afterSumH5 = caseArr.length ;
        }
        var caseH5Html = "" ;

        for( var i = currentSum ; i < afterSumH5 ; i++ ){
            caseH5Html += "<div class='caseList h5CaseList clearfix'><div class='h5Phone'><div class='h5Content' data-case="+ i +"><img src='"+ caseArr[i].src +"' alt='"+ caseArr[i].caseDetail +"'/></div></div><div class='h5Code'><p class='caseCode'><img src='"+ caseArr[i].codeSrc +"' alt=''/></p><p class='h5CaseTitle'>"+ caseArr[i].title +"</p><p class='h5CaseDetail'>"+ caseArr[i].caseDetail +"</p></div></div>";
        }
        containerName.html(caseH5Html);

        return currentSum + 10;
    }


    /**
     *      分页切换
     * */
    var hoverSumLeft = 0 ;
    var hoverH5SumLeft = 0 ;
    //    经过时候判断 要不要addClass
    leftPageBtn.hover(function(){
        leftPageHover();
    }, function(){
        leftPageBtn.removeClass("pageBtnHover");
    });

    function leftPageHover(){
        switch (currentIndex){
            case "gameCase" :
                hoverSumLeft = gameSum ;
                break ;
            case "commerceCase" :
                hoverSumLeft = commerceSum ;
                break ;
            case "h5Case" :
                hoverH5SumLeft = h5Sum ;
                if ( hoverH5SumLeft <= 10 ){
                    return ;
                }else{
                    leftPageBtn.addClass("pageBtnHover");
                    return ;
                }
                break ;
            case "designCase" :
                hoverSumLeft = designSum ;
                break ;
            case "brandCase" :
                hoverSumLeft = brandSum ;
                break ;
            case "videoCase" :
                hoverSumLeft = videoSum ;

                break ;
            case "companyCase" :
                hoverSumLeft = companyCase ;
                break ;
        }
        if( hoverSumLeft > 15 ){
            leftPageBtn.addClass("pageBtnHover")
        }
    }

    var hoverSumRight = 0 ;
    var currentSumRight = 0 ;
    var currentH5SumRight = 0 ;
    var right = "right" ;
    var left = "left" ;
    rightPageBtn.hover(function(){
        rightPageHover();
    }, function() {
        rightPageBtn.removeClass("pageBtnHover");
    });
    function rightPageHover(){
        switch (currentIndex){
            case "gameCase" :
                hoverSumRight = casePcArr.length ;
                currentSumRight = gameSum ;
                break ;
            case "commerceCase" :
                hoverSumRight = caseCommerceArr.length ;
                currentSumRight = commerceSum ;
                break ;
            case "h5Case" :
                hoverSumRight = caseH5Arr.length ;
                currentSumRight = h5Sum ;
                break ;
            case "designCase" :
                hoverSumRight = caseDesignCaseArr.length ;
                currentSumRight = designSum ;
                break ;
            case "brandCase" :
                hoverSumRight = caseBrandCaseArr.length ;
                currentSumRight = brandSum ;
                break ;
            case "videoCase" :
                hoverSumRight = caseVideoCaseArr.length ;
                currentSumRight = videoSum ;
                break ;
            case "companyCase" :
                hoverSumRight = caseCompanyCaseArr.length ;
                currentSumRight = companySum ;
                break ;
        }

        if( currentSumRight < hoverSumRight ){
            rightPageBtn.addClass("pageBtnHover");
        }else{
            rightPageBtn.addClass("noPage");
        }
    }

    leftPageBtn.click(function(){
        switch (currentIndex){
            case "gameCase" :
                gameSum = loadCase( casePcArr , gameCase , gameSum , left );
                break ;
            case "commerceCase" :
                commerceSum = loadCase( caseCommerceArr , commerceCase, commerceSum ,left );
                break ;
            case "h5Case" :
                h5Sum = loadH5Case( caseH5Arr , h5Case , h5Sum ,left );
                break ;
            case "designCase" :
                designSum = loadCase( caseDesignCaseArr , designCase , designSum , left );
                break ;
            case "brandCase" :
                brandSum = loadCase( caseBrandCaseArr , brandCase , brandSum , left );
                break ;
            case "videoCase" :
                brandSum = loadCaseVideo( caseVideoCaseArr , videoCase , videoSum , left );
                break ;
            case "companyCase" :
                companySum = loadCase( caseCompanyCaseArr , companyCase , companySum , left );
                break ;
        }
        waterFalls(".caseList");
        if(taNun==5){
            waterFalls(".caseListVideo");
        }
    });

    rightPageBtn.click(function(){
        switch (currentIndex){
            case "gameCase" :
                gameSum = loadCase( casePcArr , gameCase , gameSum , right );
                break ;
            case "commerceCase" :
                commerceSum = loadCase( caseCommerceArr , commerceCase, commerceSum , right);
                break ;
            case "h5Case" :
                h5Sum = loadH5Case( caseH5Arr , h5Case , h5Sum , right);
                break ;
            case "designCase" :
                designSum = loadCase( caseDesignCaseArr , designCase , designSum , right);
                break ;
            case "brandCase" :
                brandSum = loadCase( caseBrandCaseArr , brandCase , brandSum , right);
                break ;
            case "videoCase" :
                brandSum = loadCaseVideo( caseVideoCaseArr , videoCase , videoSum , right);
                break ;
            case "companyCase" :
                companySum = loadCase( caseCompanyCaseArr , companyCase , companySum , right);
                break ;
        }
        waterFalls(".caseList");
        if(taNun==5){
            waterFalls(".caseListVideo");
        }
    });


    /**
     *      点击案例 弹窗
     * */
    var caseList = $("#tabConDiv .caseList");
    var caseContent = $("#caseDialog .caseContent");
    var dialogSrc = "" ;
    var dialogTitle = "" ;
    var dialogHref = "" ;
    var indexCaseIndex = 0 ;
    var arrLength = "" ;
    var h5Content = $("#tabConDiv .h5Content");

    caseList.live("click",function(){

        var indexCase = $(this).attr("data-case");
        caseListFun(indexCase);
    });
    //   H5 案例结构不一样
    h5Content.live("click",function(){
        var indexCase = $(this).attr("data-case");
        caseListFun(indexCase);
    });

    /**
     *      案例弹窗 切换
     **/
    var diaLeftArrow = $(".diaLeftArrow");
    var diaRightArrow = $(".diaRightArrow");
    var workFoot = "" ;
    var overlay = "" ;

    diaLeftArrow.click(function(){
        caseListFun( indexCaseIndex,left );
    });

    diaRightArrow.click(function(){
        caseListFun( indexCaseIndex , right );
    });

    function caseListFun( indexCase , direction ){      //  传参  当前的索引值 ， 按钮切换点击方向
        if ( $(window).scrollTop() > 0 ){
            $(window).scrollTop(0)
        }
        if ( direction == "left" ){
            indexCase = parseFloat(indexCaseIndex) - 1 ;
        }else if (direction == "right"){
            indexCase = parseFloat(indexCaseIndex) + 1 ;
        }

        switch ( currentIndex){             //   取当前数组长度
            case "gameCase" :
                arrLength = casePcArr.length;
                break ;
            case "commerceCase" :
                arrLength = caseCommerceArr.length;
                break ;
            case "h5Case" :
                arrLength = caseH5Arr.length;
                break ;
            case "designCase" :
                arrLength = caseDesignCaseArr.length;
                break ;
            case "brandCase" :
                arrLength = caseBrandCaseArr.length;
                break ;
            case "videoCase" :
                arrLength = caseVideoCaseArr.length;
                break ;
            case "companyCase" :
                arrLength = caseCompanyCaseArr.length;
                break ;
        }

        //  当小于 或 大于它长度的时候 跳出
        if ( indexCaseIndex == 0 && direction == "left"){
            return ;
        }
        if( indexCaseIndex >= ( arrLength - 1 ) && direction == "left" ){       //  左右按钮切换判断
            indexCase = parseFloat(indexCaseIndex) - 1 ;
        }else if( indexCaseIndex >= ( arrLength - 1 ) && direction == "right" ){
            return false;
        }
        if( $(".companyDiaHref")){ dialogHref="" ;$(".companyDiaHref").remove()};
        switch (currentIndex){
            case "gameCase" :
                dialogSrc = casePcArr[indexCase].dialogSrc ;
                dialogTitle = casePcArr[indexCase].title ;
                break ;
            case "commerceCase" :
                dialogSrc = caseCommerceArr[indexCase].dialogSrc  ;
                dialogTitle = caseCommerceArr[indexCase].title ;
                break ;
            case "h5Case" :
                dialogSrc = caseH5Arr[indexCase].dialogSrc  ;
                dialogTitle = caseH5Arr[indexCase].title ;
                break ;
            case "designCase" :
                dialogSrc = caseDesignCaseArr[indexCase].dialogSrc  ;
                dialogTitle = caseDesignCaseArr[indexCase].title ;
                break ;
            case "brandCase" :
                dialogSrc = caseBrandCaseArr[indexCase].dialogSrc  ;
                dialogTitle = caseBrandCaseArr[indexCase].title ;
                break ;
            case "videoCase" :
                dialogSrc = caseVideoCaseArr[indexCase].dialogSrc  ;
                dialogTitle = caseVideoCaseArr[indexCase].title ;
                break ;
            case "companyCase" :
                dialogSrc = caseCompanyCaseArr[indexCase].dialogSrc  ;
                dialogTitle = caseCompanyCaseArr[indexCase].title ;
                dialogHref = caseCompanyCaseArr[indexCase].dataHref ;
                break ;
        }

        if( currentIndex == "h5Case" || currentIndex == "designCase" ){
            workFoot = "workGreyFoot" ;
        }else{
            workFoot = "workWhiteFoot" ;
        }

        caseContent.html("<img class='diaHeightJS' src='"+ dialogSrc +"' alt='"+ dialogTitle +"'/><p class='" + workFoot +"'></p>");

        if(dialogHref!=""){
            var dialogHrefCurr = dialogHref.split("/");
            $("<a class='companyDiaHref' href='"+  dialogHref +"' target='_blank'>" + dialogHrefCurr[2] + "</a>").insertBefore($(".caseDetail"));
        }
        indexCaseIndex = indexCase ;

        TGDialogS("caseDialog");
        setTimeout(function(){
           overlay = $("#_overlay_");
           overlay.css("height",$(".diaHeightJS").height());
        },30);
    }

    /**
     *      流体布局
     * */
    var tabConDiv = $("#tabConDiv");

    function waterFalls(cc){
        //alert(cc)
        var caseDivOn = $("#tabConDiv .caseDiv:visible").find(cc);
        //alert(caseDivOn.length)
        var tabConDivWidth = tabConDiv.width();
        var iOuterWidth =  ( caseDivOn.width() + 15 ) ;   // 每个总宽
        var iOuterHeight =  ( caseDivOn.height() + 15 );   // 每个总高
        var iCells = parseInt( tabConDivWidth / ( iOuterWidth -20 ) );    //    每行可以放下多少个案例
        if( iCells >= 5 ){          // 2560  屏幕 最多5个
            iCells = 5 ;
        }
        var iRow = Math.ceil( 10 / iCells );     //     总共有多少行

        var currentRowIndex = 0 ;     // 当前行的索引
        var currentCellsIndex = 0 ;

        if ( iCells <= 1 ){
            currentRowIndex = -1 ;
        }

        for ( var i = 0 ; i < caseDivOn.length ; i++ ){

            if ( currentCellsIndex < ( iCells -1 ) ){
                if( i > 0 ){
                    currentCellsIndex++ ;
                }
            }else{
                currentCellsIndex = 0;
                currentRowIndex++ ;
            }
            caseDivOn.eq(i).css({
                top  : iOuterHeight *  currentRowIndex ,
                left : iOuterWidth * currentCellsIndex
            });
        }

        //   设置tabConDiv 高度
        tabConDiv.css({
            height : ( iOuterHeight * Math.ceil( caseDivOn.length / iCells ) ) + 150

        });
    }

    if(taNun==5){
        waterFalls(".caseListVideo");
    }
    waterFalls(".caseList");

    /**
     *      配合 流体布局 resize
     * */
    var resizeTime = null ;
    $(window).resize(function(){
        var resizeTime = setTimeout(function(){
            waterFalls(".caseList");
            if(taNun==5){
                waterFalls(".caseListVideo");
            }
        },500);
    });
});




//弹窗
/**
 *      腾讯视频
 * */
function viCon(vid){
var video = new tvp.VideoInfo();
video.setVid(vid);//视频vid
var player = new tvp.Player(800, 500);//视频高宽
player.setCurVideo(video);
player.addParam("autoplay","1");//是否自动播放，1为自动播放，0为不自动播放
player.addParam("wmode","opaque");
player.addParam("pic","http://ossweb-img.qq.com/images/roco/act/a20120925movie/video_pic.jpg");//默认图片地址
player.addParam("flashskin", "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");//是否调用精简皮肤，不使用则删掉此行代码
player.write("videoBox");
}
var caseListVideo = $("#tabConDiv .caseListVideo");
    //caseListVideo[x].index=x;
    caseListVideo.live("click",function(){
        TGDialogS("videoDialog");
        viCon(caseVideoIdArr[$(this).index()]);

    });