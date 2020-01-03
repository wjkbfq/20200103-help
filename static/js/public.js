$(function () {
    // 应用场景 start
    var _thisScenesPCList = $(".function-wrap .tabs>li");
    var _thisScenesRightList = $(".function-item");

    _thisScenesPCList.click(function (event) {
        var scenesPCListIndex = $(this).index();
        $(this).siblings('li').removeClass("actived");
        $(this).addClass("actived");

        _thisScenesRightList.removeClass("actived");
        _thisScenesRightList.eq(scenesPCListIndex).addClass("actived");

        event.stopPropagation();
    });

    $(".function-item .item-m-title").click(function (event) {
        var isClose = false;
        if ($(this).hasClass("actived")) {
            isClose = true;
        } else {
            $(".function-item .item-container").removeAttr("style");
            $(".function-item .item-m-title").removeClass("actived");

            $(this).addClass("actived");
            $(this).siblings(".item-container").show();
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 200);
        }
        event.stopPropagation();
    });
    // 应用场景 end

    //产品功能 start
    var productTabItem = $(".scenario-mod .c-tab-simple");
    productTabItem.click(function (event){
        $(this).siblings('.c-tab-simple').removeClass("actived");
        $(this).addClass("actived");

        $(".scenario-mod .c-tab-panel").hide();
        $(".scenario-mod .c-tab-panel").eq( $(this).index() ).show();
        event.stopPropagation();
    });

    $(".scenario-mod .c-tab-m-tit").click(function (event) {
        var isClose = false;
        if ($(this).hasClass("actived")) {
            isClose = true;
        } else {
            $(".scenario-mod .c-tab-panel-mod").removeAttr("style");
            $(".scenario-mod .c-tab-m-tit").removeClass("actived");

            $(this).addClass("actived");
            $(this).siblings(".c-tab-panel-mod").show();
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 200);
        }
        event.stopPropagation();
    });
    //产品功能 end

    //底部链接列表
    $(".c-menu-heading").click(function (event) {
        var isClose = false;
        if ($(this).parent().hasClass("actived")) {
            isClose = true;
        }

        $(this).parent().parent().children('.c-menu-links').each(function () {
            $(this).removeClass("actived");
        })

        if (!isClose) {
            $(this).parent().addClass("actived");
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 200);
        }
        event.stopPropagation();
    });

    // 侧边栏滚动条
    $(window).on("resize", function (event) {
        $(".floatbar").removeClass("floatbar-stickt");
        if (window.innerWidth < 1250) {
            return;
        }

        var _thisFloatbarOffsetTop = $(".floatbar");

        $(window).scroll(function (event) {
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            
            if (scrollTop >= 400) {
                _thisFloatbarOffsetTop.addClass("floatbar-stickty");
            } else {
                _thisFloatbarOffsetTop.removeClass("floatbar-stickty");
            }

            for(var i = 1; i < 8; i ++){
                if (($("#mod" + i).offset().top - 54) <= scrollTop ){
                    $(".floatbar-list-item").removeClass("floatbar-list-item-actived");
                    $("#floatbar" + i).addClass("floatbar-list-item-actived");
                }
            }

            // 判断是否到达底部
            if (scrollTop + windowHeight >= (scrollHeight - 20) ) {
                $(".floatbar-list-item").removeClass("floatbar-list-item-actived");
                $(".floatbar-list-item:last").addClass("floatbar-list-item-actived")
            }
        
            event.stopPropagation();
        });

    }).resize();

    $(".floatbar-list-item").click(function (event) {
        $(this).siblings().removeClass("floatbar-list-item-actived");
        $(this).addClass("floatbar-list-item-actived");
        event.stopPropagation();
    });

    $(window).on("resize", function () {
        $(".J-cardItem").css('height', 'auto');
        if (window.innerWidth < 600) {
            return;
        }
        $(".J-cardWrapper").each(function (i, obj) {
            var maxHeight = 0;
            $(this).find(".J-cardItem").each(function (i, subObj) {
                maxHeight = Math.max($(subObj).height(), maxHeight);
            })
            $(this).find(".J-cardItem").each(function (i, subObj) {
                $(subObj).height(maxHeight)
            })
        })
    }).resize();

    //--创建页面监听，等待微信端页面加载完毕 触发音频播放
    document.addEventListener('DOMContentLoaded', function () {
        function audioAutoPlay() {
            $(".about-video video")[0].play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                $(".about-video video")[0].play();
            }, false);
        }
        audioAutoPlay();
    });
    //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
    document.addEventListener('touchstart', function () {
        function audioAutoPlay() {
            $(".about-video video")[0].play();
        }
        audioAutoPlay();
    });
});