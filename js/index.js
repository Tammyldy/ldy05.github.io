define(["jquery"],function ($) {
    function addSlider(id,n) {
        switch(n){
            case 1:
                id.addClass("slider-1");
                id.removeClass("slider-2");
                id.removeClass("slider-3");
                id.removeClass("slider-4");
                break;
            case 2:
                id.addClass("slider-2");
                id.removeClass("slider-1");
                id.removeClass("slider-3");
                id.removeClass("slider-4");
                break;
            case 3:
                id.addClass("slider-3");
                id.removeClass("slider-1");
                id.removeClass("slider-2");
                id.removeClass("slider-4");
                break;
            case 4:
                id.addClass("slider-4");
                id.removeClass("slider-1");
                id.removeClass("slider-2");
                id.removeClass("slider-3");
                break;
            default:
        }
    }
    return{//因为是密闭的空间，无法互相访问，所以要用return返回
        sliderMove:function (id) {//tab滑块滑动
            $(id+" li a").hover(function () {
                var n = $(this).parent().index();
                $(this).parent().parent().siblings(".slider").addClass("slider-"+(n+1));
            },function () {
                var n = $(this).parent().index();
                $(this).parent().parent().siblings(".slider").removeClass("slider-"+(n+1));
            })
        },
       Tabs:function (id) {//切换
           $(id+" li a").click(function () {
               var n = $(this).parent().index();
               var leng = $(id).find("li").length;
               console.log(leng);
               if(n<leng-1){
                   $(this).addClass("tab-selected").parent().siblings('li').find("a").removeClass('tab-selected');
                   $(this).closest("div.tabs").siblings('div.tab-con').removeClass('tab-con-selected').eq(n).addClass('tab-con-selected');
                   var sid = $(this).parent().parent().siblings(".slider");
                   addSlider(sid,n+1);
               }
           })
       },
        videoTab:function (id) {
            $(id+" .li").click(function () {
                var n = $(this).index();
                $(this).addClass("li-selected").siblings('.li').removeClass('li-selected');
                var idnum = $(this).attr("data-vid");
                myvideo('myflashBox',idnum);
                var num = (n)*108;
                $(this).siblings(".slider").css("top",num);
            })
        },
        scrollRight:function(top,jDomArr,id){//侧边栏滚动
            var winHeight = window.innerHeight ? window.innerHeight : (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.offsetHeight;
            for(var i = 0; i < jDomArr.length; i++){
                var item = jDomArr[i];
                if(item.offset().top < (top + winHeight / 2)-300){
                    id.eq(i).addClass("active").parent().siblings().find("a").removeClass("active");
                }
            }
        },
        srollClick:function (id) {//侧边栏点击
            id.on("click", function (e) {
                e.preventDefault();
                window.location.hash = "";
                $(this).addClass("active").parent().siblings().find("a").removeClass("active");
                var target = $(this).attr("href");
                if(target.indexOf("#") > -1){
                    target = target.slice(1);
                }
                $("html,body").stop().animate({scrollTop : $("#" + target).offset().top},300);
            });
          },
        returnTop:function () {//返回头部
            $("html,body").stop().animate({scrollTop: 0}, 300);
        }
       
    }
})//将功能定义成模块，参数和requirejs一样
