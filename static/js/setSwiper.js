var MEDIA_LG_WIDTH = 1200; // 以 1200 为界限
var MEDIA_MOBILE_WIDTH = 768;
var IS_MOBILE = window.screen.width <= 768; // 移动设备
var IS_SM = window.screen.width > 768 && window.screen.width <= 992;

var SWIPER_PROPERTY_MOBILE = {
    slidesPerView: 1, // 每行
    slidesPerColumn: 9, // 每列
    slidesPerColumnFill: 'row',
    spaceBetween: 17,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
};

var SWIPER_PROPERTY_LG = {
  slidesPerView: 3,
  slidesPerColumn: 3,
  slidesPerColumnFill: 'row',
  spaceBetween: 60,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

var SWIPER_PROPERTY_SM = {
    slidesPerView: 2,
    slidesPerColumn: 3,
    slidesPerColumnFill: 'row',
    spaceBetween: 80,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
};



var SWIPER_PROPERTY = SWIPER_PROPERTY_LG;
var mySwiper;

function initSwiperSliderPerViewByBodyWidth(bodyWidth) {
    if (bodyWidth < MEDIA_MOBILE_WIDTH || IS_MOBILE) {
        SWIPER_PROPERTY = SWIPER_PROPERTY_MOBILE;
    } else if( bodyWidth >768 && bodyWidth <=992 ){
      SWIPER_PROPERTY = SWIPER_PROPERTY_SM;
    }
    mySwiper = new Swiper('.swiper-container', SWIPER_PROPERTY);
}

function setSwiperSidePerViewByBodyWidth(bodyWidth) {

    if (bodyWidth < MEDIA_MOBILE_WIDTH) {
        SWIPER_PROPERTY = SWIPER_PROPERTY_MOBILE

    }else if( bodyWidth >768 && bodyWidth <=992 ){
      SWIPER_PROPERTY = SWIPER_PROPERTY_SM
    }
    else if ( bodyWidth >992  ) {
        SWIPER_PROPERTY = SWIPER_PROPERTY_LG
    }

    mySwiper.destroy(true, true);
    mySwiper = new Swiper('.swiper-container', SWIPER_PROPERTY);

}

var bodyWidth = parseInt($('body').css('width'), 10);
initSwiperSliderPerViewByBodyWidth(bodyWidth);

$(window).resize(function () {
    var bodyWidth = parseInt($('body').css('width'), 10);
    setSwiperSidePerViewByBodyWidth(bodyWidth);
});

