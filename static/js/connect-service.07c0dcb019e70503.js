// ------------------处理等高的js-------------------------
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
$(document).ready(function () {
  var connectService = {
    init: function () {
      this.initVariables();
      this.bindEvents();
      this.setWeixinShareInfo();
    },

    initVariables() {
      this.$root = $('#J-mainContent');
      this.$proposeBtn = this.$('.J-btnPropose');
      this.$complainBtn = this.$('.J-btnComplain')
      this.$tryNow = this.$('.J-btnTryNow');
    },

    bindEvents() {
      var self = this;
      var qcFeedback = window.QCFeedback;
      if (qcFeedback && qcFeedback.TYPE && qcFeedback.FROM) {
        qcFeedback.init(this.$proposeBtn, qcFeedback.TYPE.order, qcFeedback.FROM.OTHER);
        qcFeedback.init(this.$complainBtn, qcFeedback.TYPE.complain, qcFeedback.FROM.OTHER);
      }
  
      this.$tryNow.on('click', function () {
        var goLink = self.getScreenMode() === 'wide'
          ? 'https://cloud.tencent.com/act/event/smarty-service?from=connect-offical'
          : 'https://smarty.cloud.tencent.com/wx?from=connect-offical';
  
        location.href = goLink;
      });
    },

    getWindowWidth() {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    },

    getScreenMode () {
      return this.getWindowWidth() < 768 ? 'narrow' : 'wide';
    },

    setWeixinShareInfo() {
      window.wechatJsSdk && window.wechatJsSdk.share();
    },

    $: function (selector) {
      return this.$root.find(selector);
    }
  }

  connectService.init();
})