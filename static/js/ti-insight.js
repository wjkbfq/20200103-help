$(".c-tab-simple").on("click", function (e) {
  var tabIndex = $(this).index();
  $(this).parent().find('li').removeClass('actived');
  $(this).addClass('actived');
  //内容区
  $(this).parent().siblings('.c-tab-panel').removeAttr('style');
  $(this).parent().siblings('.c-tab-panel').find('.c-tab-m-tit').removeClass('actived');
  $(this).parent().siblings('.c-tab-panel').eq(tabIndex).show();
  $(this).parent().siblings('.c-tab-panel').eq(tabIndex).find('.c-tab-m-tit').addClass('actived');
  e.stopPropagation();

  initCard();
});


// 移动响应式
$(".c-tab-m-tit").click(function () {
  var isClose = false;
  if ($(this).hasClass("actived")) {
    isClose = true;
  }
  $(this).parent().parent().children('.c-tab-panel').each(function () {
    $(this).children('.c-tab-m-tit').removeClass("actived");
    $(this).children('.c-tab-panel-mod').removeAttr('style');
  })

  if (!isClose) {
    $(this).addClass("actived");
    $(this).siblings('.c-tab-panel-mod').show();
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 200);
  }
  event.stopPropagation();
});

// 卡片自适应高度
function initCard() {
  $('.ti-insight-tab-block:visible').find('.J-cardWrapper').each(function () {
    const $cardWrapper = $(this);
    console.log($cardWrapper)
    let highestIndex = $cardWrapper.data('highestIndex');

    // 以最高的块做为基准，初次访问没有基准块，找描述字数最多的块，
    if (typeof highestIndex == 'undefined') {
      const wordCount = $.map($cardWrapper.find('.J-cardItem'), el => {
        return $(el).find('.c-media-info').text().replace(/[^\u0000-\u00FF]/gmi, "**").length; // 中文算两个
      });
      const maxCount = Math.max.apply(null, wordCount)

      highestIndex = wordCount.findIndex(count => count === maxCount);
      $cardWrapper.data('highestIndex', highestIndex);
    }


    const height = $cardWrapper.find('.J-cardItem .c-media-horiz').eq(highestIndex).outerHeight();
    console.log(height)

    $cardWrapper.find('.J-cardItem').eq(highestIndex).siblings().find('.c-media-horiz').css('height', height);
  });
};
initCard();