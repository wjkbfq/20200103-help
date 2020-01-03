$(function () {

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
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 200);
        }
        event.stopPropagation();
    });
    //产品功能 end

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
            
            if (scrollTop >= 351) {
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

});