/**
 * Created by 永远的女神 on 2016-06-12.
 */
$(function () {
    var listData = [
        {
            year:2016,
            events:[
                {
                    month:"04",
                    day:"23",
                    title:"朋沃小船，在巽寮湾升华！",
                    summary:"朋沃公司年度扩展活动",
                    detail:"又到了朋沃年度集体活动啦！",
                    imgsrc:"images/20160423[1].jpg"
                }
            ]
        },
        {
            year:2015,
            events:[
                {
                    month:"02",
                    day:"04",
                    title:"朋沃2014年 年会回顾",
                    summary:"朋沃2014年 年会",
                    detail:"阴如梭，一年的工作转瞬又将成为历史...",
                    imgsrc:"images/20151110[1].jpg"
                },
                {
                    month:"05",
                    day:"20",
                    title:"小伙伴们在大鹏撒欢！！！",
                    summary:"朋沃公司年度活动",
                    detail:"伴随着老板一路的微信红包，Palwo小伙伴们来海边撒欢啦！",
                    imgsrc:"images/20151103[1].jpg"
                },
                {
                    month:"11",
                    day:"03",
                    title:"奔跑吧沃草小鲜肉团",
                    summary:"朋沃公司年度扩展活动",
                    detail:"11月深圳掀起了全民健身浪潮。",
                    imgsrc:"images/20150520[1].jpg"
                },
                {
                    month:"11",
                    day:"10",
                    title:"朋沃五周年，一个大写的“帅”",
                    summary:"朋沃公司周年庆",
                    detail:"喜大奔普！11月7号终于迎来了朋沃五周年庆典。",
                    imgsrc:"images/20150204[1].jpg"
                }
            ]
        },
        {
            year:2014,
            events:[
                {
                    month:"01",
                    day:"26",
                    title:"朋沃2013年会精彩瞬间",
                    summary:"用设计描绘精彩",
                    detail:"在春节前夕，朋沃大家庭组织了... ",
                    imgsrc:"images/20141227[1].jpg"
                },
                {
                    month:"03",
                    day:"15",
                    title:"东部华侨城精彩瞬间",
                    summary:"朋沃公司扩展活动",
                    detail:"三月里，空气逐渐湿润了，花儿开始绽开迷人的笑容...",
                    imgsrc:"images/20140829[1].jpg"
                },
                {
                    month:"08",
                    day:"29",
                    title:"爬楼梯比赛",
                    summary:"朋沃公司扩展活动",
                    detail:"在阳光明媚的8月里公司为丰富小伙伴的业余生活，构建特色公司文化...",
                    imgsrc:"images/20140315[1].jpg"
                },
                {
                    month:"12",
                    day:"27",
                    title:"2014年度扩展活动",
                    summary:"朋沃公司年度扩展活动",
                    detail:"2014年12月27日，在初冬朦胧雨意之日...",
                    imgsrc:"images/20140126[1].jpg"
                }
            ]
        }
    ]

    //tab栏切换
    var lis = $("#teamUl").children();
    console.log(lis);
    lis.eq(0).children().addClass("active");
    var Divs = $(".team_con").children("div");
    Divs.eq(0).show();
    lis.click(function () {
        $(this).children().addClass("active").parent().siblings().children().removeClass("active");
        Divs.eq($(this).index()).show().siblings("div").hide();
    })

    //li滑动效果


    //动态添加数据
    function getDate(listData){
        for(var i=0;i<Divs.length;i++){
            var htmli = template("teamDate"+i+"",{listData:listData});
            console.log(htmli);
            Divs.eq(i).html(htmli);
        }
    }
    getDate(listData);

})