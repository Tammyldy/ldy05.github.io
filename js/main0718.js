requirejs.config({//定义模块别名
    paths:{
        jquery:'http://n.sinaimg.cn/games/75a1ed94/20170703/jquery-1.10.1.min',
        swiper:'http://n.sinaimg.cn/games/75a1ed94/20170705/idangerous.swiper2.7.6.min'
    },
    shim:{
        'swiper':{exports:'swiper'}
    }
});

requirejs(['jquery','index'],function ($,index) {

    index.Tabs("#videoTab");//videonav的tab切换
    index.videoTab("#liTab");

    //侧边栏跳转
        /*  var jDomArr = [$("#part0"),$("#part1"),$("#part2"),$("#part3"),$("#part4"),$("#part5"),$("#part6"),$("#part7"),$("#part8"),$("#part9")];*/
        var jDomArr = [$("#part0"),$("#part1"),$("#part3"),$("#part4"),$("#part5"),$("#part6"),$("#part7"),$("#part8"),$("#part9")];
        var top = $(window).scrollTop(),
            timeOut,
            p2 = $("#part0").offset().top,
            rightFix = $(".rightFix");
        top >= p2 ?rightFix.fadeIn():rightFix.fadeOut();
        var itemId = $(".rightFix ul a");
        index.srollClick(itemId);
        index.scrollRight(top,jDomArr,itemId);
        $(window).on("scroll", function () {
            clearTimeout(timeOut);
            timeOut = setTimeout(function () {
                top = $(this).scrollTop();
                index.scrollRight(top,jDomArr,itemId);
            },20);
            top >= p2 ?rightFix.fadeIn():rightFix.hide();
        });
        $("#returnTop").click(function () {
            index.returnTop();
        });

        $(".nav-close").click(function () {
            $(this).parent().remove();
        })

})//引入模块,第一个参数是个数组，引入模块的别名，有几个写几个，第二个参数是一个回调函数

requirejs(['jquery','swiper'],function (swiper) {//轮播
    var swiper1 =  new Swiper('.swiper-container1',{
        loop:true,
        grabCursor: true,
        slidesPerView: 3,
        paginationClickable: true,
        autoplay: 4000,
        autoplayDisableOnInteraction : false
    });
  $('.swiper-button-prev1').on('click', function(e){
        e.preventDefault();
        swiper1.swipePrev();
    });
    $('.swiper-button-next1').on('click', function(e){
        e.preventDefault();
        swiper1.swipeNext();
    });
    $('.CJ-wb .swiper-container').hover(function () {
        swiper1.stopAutoplay();
    },function () {
        swiper1.startAutoplay();
    });
    var swiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        paginationClickable: true,
        loop : true,
        onSlideChangeEnd:function(swiper){
            var len = swiper.slides.length-2;
            if(swiper.activeIndex==len+1){
                curNum = 1;
            }else if(swiper.activeIndex==0){
                curNum=len;
            } else{
                curNum =swiper.activeIndex;
            }
            $('#cjNav li a').eq(curNum-1).addClass("cur").parent().siblings().find("a").removeClass("cur");
            var ids =  $('.CJ-cs-nav').find(".slider");
            addSlider1(ids,curNum);
        }
    });
    $('#cjNav li').click(function(){
        $(this).find("a").addClass("cur").siblings().find("a").removeClass("cur");
        var ids =  $('.CJ-cs-nav').find(".slider");
        var n = $(this).index();
        addSlider1(ids,n+1);
        swiper2.swipeTo($(this).index(), 500);
    });
    $('.swiper-button-prev2').on('click', function(e){
        e.preventDefault();
        swiper2.swipePrev();
    });
    $('.swiper-button-next2').on('click', function(e){
        e.preventDefault();
        swiper2.swipeNext();
    });

    var swiper3 = new Swiper('.swiper-container3', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        paginationClickable: true,
        loop : true
    });
    $('.swiper-button-prev3').on('click', function(e){
        e.preventDefault();
        swiper3.swipePrev();
    });
    $('.swiper-button-next3').on('click', function(e){
        e.preventDefault();
        swiper3.swipeNext();
    });
    var swiper4 = new Swiper('.swiper-container4', {
        nextButton: '.swiper-button-next4',
        prevButton: '.swiper-button-prev4',
        slidesPerView: 1,
        slidesPerColumn: 1,
        paginationClickable: true,
        loop : true
    });
    $('.swiper-button-prev4').on('click', function(e){
        e.preventDefault();
        swiper4.swipePrev();
    });
    $('.swiper-button-next4').on('click', function(e){
        e.preventDefault();
        swiper4.swipeNext();
    });
    var swiper5 = new Swiper('.swiper-container5', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        paginationClickable: true,
        loop : true
    });
    $('.swiper-button-prev5').on('click', function(e){
        e.preventDefault();
        swiper5.swipePrev();
    });
    $('.swiper-button-next5').on('click', function(e){
        e.preventDefault();
        swiper5.swipeNext();
    });
    var swiper6 = new Swiper('.swiper-container6', {
        slidesPerView: 5,
        slidesPerColumn: 1,
        paginationClickable: true,
        loop : true,
        autoplay: 4000,
        autoplayDisableOnInteraction : false
    });

    $('.CJ-vr .swiper-container').hover(function () {
        swiper6.stopAutoplay();
    },function () {
        swiper6.startAutoplay();
    });
    $('.swiper-button-prev6').on('click', function(e){
        e.preventDefault();
        swiper6.swipePrev();
    });
    $('.swiper-button-next6').on('click', function(e){
        e.preventDefault();
        swiper6.swipeNext();
    });

})//引入模块,第一个参数是个数组，引入模块的别名，有几个写几个，第二个参数是一个回调函数


function addSlider1(id,n) {
    switch(n){
        case 1:
            id.addClass("slider-1");
            id.removeClass("slider-2");
            id.removeClass("slider-3");
            id.removeClass("slider-4");
            console.log(1)
            break;
        case 2:
            id.addClass("slider-2");
            id.removeClass("slider-1");
            id.removeClass("slider-3");
            id.removeClass("slider-4");
            console.log(2)
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
