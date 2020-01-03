//reqConfig.js用于配置请求接口参数
var Params = {
  getWechatToken_params:{
    url:'https://studio.qcloud.coding.net/backend/public/get-weixin-client-credential',   //获取微信凭证接口地址
    data:{
      url: document.location.href,
    },
  },
  loadPluginList_params:{
    url:'https://studio.qcloud.coding.net/backend/public/user-plugins',   //获取某插件详情接口地址
    data:{
      page:0,
      size:10,
      field:"sumScore",
      //pluginTypeId 参数不用再这里写
    }
  }
}