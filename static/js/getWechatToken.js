//getWechatToken用于请求微信凭证
function getWechatToken() {
  var url = document.location.href
  $.ajax({
    url:Params.getWechatToken_params.url,
    type:'POST',
    data:Params.getWechatToken_params.data,
    success:function(res) {
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.appId, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.noncestr, // 必填，生成签名的随机串
        signature: res.data.signature,// 必填，签名
        jsApiList: [
          'updateTimelineShareData',
          'updateAppMessageShareData',
          'onMenuShareTimeline',
		  'onMenuShareAppMessage',
		  'onMenuShareQQ',
		  'onMenuShareWeibo',
		  'onMenuShareQZone'
        ] // 必填，需要使用的JS接口列表
      });
      wx.ready(function () {   //需在用户可能点击分享按钮前就先调用

        wx.updateTimelineShareData({
          title: '我最喜爱的 Cloud Studio 插件评选大赛火热进行中！百万大奖等你来赢！', // 分享标题
          link: url + '?from=timelime', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'https://studio.qcloud.coding.net/campaign/favorite-plugins-assets/share-icon.jpg', // 分享图标
          success: function () {
            // 用户点击了分享后执行的回调函数
          },
        });
        wx.updateAppMessageShareData({
          title: '我最喜爱的 Cloud Studio 插件评选大赛火热进行中！百万大奖等你来赢！', // 分享标题
          desc: '提交插件赢取大奖，分享还有话费好礼', // 分享描述
          link: url + '?from=wxMessage', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'https://studio.qcloud.coding.net/campaign/favorite-plugins-assets/share-icon.jpg', // 分享图标
          success: function () {
            // 用户点击了分享后执行的回调函数
          }
        });
      })
    }
  })
}

//判断是否是微信
var isWeixin = function () {
  var ua = navigator.userAgent.toLowerCase();
  return (/MicroMessenger/i).test(ua);
};

if (isWeixin()) {
  getWechatToken();
}