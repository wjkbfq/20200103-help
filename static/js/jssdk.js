function defineBillingJssdkModule(a){window.billingJssdkModuleList?window.billingJssdkModuleList.push(a):window.billingJssdkModuleList=[a]}!function(a,b){var c=function(){var b=new RegExp("(?:^|;+|\\s+)language=([^;]*)"),c=a.cookie.match(b);return c&&"zh"!==c[1]?"cloudcache.tencent-cloud.com":"imgcache.qq.com"}(),d={jquery:"//"+c+"/open/qcloud/js/version/201408/jquery.201408191328.js?t=20140821&max_age=31536000",seajs:"//"+c+"/qcloud/buy/platform/build/seajs.js?max_age=31536000"},e={init:function(){var a=this;a.loadSeaJs(function(){a.loadJquery(function(){a.defineModules()})})},loadSeaJs:function(a){var c=this,e=!1;b.seajs&&b.seajs.require&&b.seajs.use&&(e=!0),e?a():c.loadJs(d.seajs,a)},defineModules:function(){setTimeout(function(){for(var a=b.billingJssdkModuleList.length,c=0;c<a;c++)b.billingJssdkModuleList[c]();seajs.use("billing/jssdk/index")},0)},loadJquery:function(a){var c=!1;b.jQuery&&b.jQuery.ajax?c=!0:seajs&&seajs.require&&seajs.require("$")&&seajs.require("$").ajax&&(c=!0),c?a():this.loadJs(d.jquery,a)},loadJs:function(b,c){var d=a,e=d.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src",b),e.setAttribute("async",!1),e.onerror=function(){},e.onload=e.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||c&&c()},d.getElementsByTagName("head")[0].appendChild(e)}};e.init()}(document,window),defineBillingJssdkModule(function(){define("billing/jssdk/ajaxer",function(a,b,c){var d=a("billing/jssdk/util"),e=d.$,f=a("billing/jssdk/net"),g=a("billing/jssdk/helper"),h={generateDeals:function(a){var b=e.Deferred(),c="generateDeals";return f.post({url:"/cgi/order?action=gen",data:a.params,version:a.version,success:function(d){g.retBusinessCode(c,a.business,0),b.resolve(d)},fail:function(d){g.retBusinessCode(c,a.business,1),b.reject(d)}}),b.promise()},generateDealsAndPay:function(a){var b=e.Deferred(),c="generateDealsAndPay";return f.post({url:"/cgi/order?action=genDealsAndPay",data:a.params,version:a.version,success:function(d){g.retBusinessCode(c,a.business,0),b.resolve(d)},fail:function(d){g.retBusinessCode(c,a.business,1),b.reject(d)}}),b.promise()},createResource:function(a){var b=e.Deferred(),c="createResource";return f.post({url:"/cgi/billing?action=createResource",data:a.params,version:a.version,success:function(d){g.retBusinessCode(c,a.business,0),b.resolve(d)},fail:function(d){g.retBusinessCode(c,a.business,1),b.reject(d)}}),b.promise()},modifyResource:function(a){var b=e.Deferred(),c="modifyResource";return f.post({url:"/cgi/billing?action=modifyResource",data:a.params,version:a.version,success:function(d){g.retBusinessCode(c,a.business,0),b.resolve(d)},fail:function(d){g.retBusinessCode(c,a.business,1),b.reject(d)}}),b.promise()},unblockResource:function(a){var b=e.Deferred(),c="unblockResource";return f.post({url:"/cgi/billing?action=unblockResource",data:a.params,version:a.version,success:function(d){g.retBusinessCode(c,a.business,0),b.resolve(d)},fail:function(d){g.retBusinessCode(c,a.business,1),b.reject(d)}}),b.promise()},queryPrice:function(a){var b=e.Deferred(),c="queryPrice";return f.post({url:"/cgi/billing?action=queryPrice",data:a.params,version:a.version,success:function(d){g.retBusinessCode(c,a.business,0),b.resolve(d)},fail:function(d){g.retBusinessCode(c,a.business,1),d.msg=d.msg+"["+(d.returnCode||d.code)+"]",b.reject(d)}}),b.promise()},setRenewFlag:function(a){var b=e.Deferred(),c="setRenewFlag";return f.post({url:"/cgi/billing?action=setRenewFlag",data:a.params,version:a.version,success:function(d){g.retBusinessCode(c,a.business,0),b.resolve(d)},fail:function(d){g.retBusinessCode(c,a.business,1),b.reject(d)}}),b.promise()}};c.exports=h})}),function(){var a="ALLOY_REPORT_TEMP",b={},c=!1,d=function(a){var c;return window&&window.localStorage?(c=window.localStorage.getItem(a),c&&JSON.parse(c)||void 0):b[a]},e=function(a,c){c?window&&window.localStorage?window.localStorage.setItem(a,JSON.stringify(c)):b[a]=c:window&&window.localStorage?window.localStorage.removeItem(a):delete b[a]},f=function(b,c){var f=[];try{f=d(a),(!f instanceof Array||!f)&&(f=[]),f.push({t:b,d:c}),e(a,f)}catch(g){console.error(g)}f.push({t:b,d:c})},g=["monitor","tdw","huatuo","retcode","tdbank","tdw.setDefaultTable","tdbank.setDefaultTable","tdw.setDefaultData","tdbank.setDefaultData","tdw.clearDefaultData","tdbank.clearDefaultData"],h={},i=function(){var b;b=d(a),!b instanceof Array&&(b=[]);for(var c=0;c<b.length;c++)try{var f=b[c].t.split(".");if(f.length>1){if(!h[f[0]])return;h[f[0]][f[1]].apply(this,b[c].d)}else h[f[0]].apply(this,b[c].d)}catch(g){console.error(g)}e(a),window.__reportWating=!1},j=function(a){if(a=a||0,("undefined"!=typeof window||"undefined"!=typeof document)&&!window.QReport.isMain&&a<4){var b="//s.url.cn/pub/js/alloyreport.js?_bid=2231";a&&a<3?b="//s"+a+".url.cn/pub/js/alloyreport.js":a&&(b="//qun.qq.com/pub/js/alloyreport.js");var d=document.createElement("script");d.setAttribute("src",b),d.onload=d.onreadystatechange=function(){if(!(c||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState))if(c=!0,window.QReport.isMain)try{window.QReport.reset=window.AlloyReportCore&&window.AlloyReportCore.reset||function(){},Object.assign(h,window.QReport),i()}catch(b){}else{switch(c=!1,a){case 0:window.QReport.monitor(2396704);break;case 1:window.QReport.monitor(2396705);break;case 2:window.QReport.monitor(2396706)}j(a+1)}},d.onerror=function(){switch(a){case 0:window.QReport.monitor(2396704);break;case 1:window.QReport.monitor(2396705);break;case 2:window.QReport.monitor(2396706)}j(a+1)},document.body.appendChild(d)}};"function"!=typeof Object.assign&&(Object.assign=function(a){"use strict";if(!a)throw new TypeError("Cannot convert undefined or null to object");a=Object(a);for(var b=1;b<arguments.length;b++){var c=arguments[b];if(c)for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a});for(var k=0;k<g.length;k++){var l=g[k],m=l.split("."),n=function(a){return function(){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c]);f(a,b)}}(l);m.length>1?(h[m[0]]||(h[m[0]]={}),h[m[0]][m[1]]=n):h[m[0]]=n}"undefined"!=typeof window&&(window.QReport=h,window.AlloyReport=h,window.__reportWating=!0),"undefined"!=typeof module&&module.exports&&(module.exports=h),"undefined"==typeof window&&"undefined"==typeof document||(window.QReport=h,window.AlloyReport=h,window.__reportWating=!0,j(0))}(),defineBillingJssdkModule(function(){define("billing/jssdk/config",function(a,b,c){var d="//buy.cloud.tencent.com",e="qcloud.com";~location.hostname.lastIndexOf("tencent.com",location.hostname.length-"tencent.com".length)&&(e="cloud.tencent.com");var f={baseUrl:d,baseHost:e,postProxyPath:"/postProxy.html",h5Check:d+"/m/order/check",pcCheck:d+"/order/check",h5Pay:d+"/m/order/pay",pcPay:d+"/order/pay",h5Done:d+"/m/order/done",pcDone:d+"/order/done",simplePcPay:d+"/pay/index",loginBaseUrl:"https://cloud.tencent.com/login?s_url=",intlLoginBaseUrl:"https://intl.cloud.tencent.com/login?s_url=",h5Recharge:"https://buy.cloud.tencent.com/m/recharge",pcRecharge:"https://console.cloud.tencent.com/account/recharge",hostConfig:{buy:["buy.cloud.tencent.com","buy.qcloud.com"],console:["console.cloud.tencent.com","console.qcloud.com"],main:["cloud.tencent.com","www.qcloud.com"]},errCode:{},charCodeMap:["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","_"]};c.exports=f})}),defineBillingJssdkModule(function(){define("billing/jssdk/helper",function(a,b,c){var d=a("billing/jssdk/util"),e=d.$,f=a("billing/jssdk/config"),g=a("billing/jssdk/i18n"),h={PC_BUY_ERROR_MSG_DIALOG:'    <div class="shop-dialog-msg">        <i class="shop-error-icon"></i>        <span class="shop-dialog-msg-txt"><%-errorMsg%></span>    </div>',PC_CONSOLE_ERROR_MSG_DIALOG:"  <div>    <p>      <%-errorMsg%>    </p>  </div>"},i={validateParams:function(a){var b=!0,c=a.business;return a&&c&&/\w/g.test(c)&&a.version&&/^\d+\.?\d+$/g.test(a.version)&&e.isPlainObject(a.params)||(b=!1),b},directToPay:function(a){a=a.params;var b={};a.dealNames&&e.isArray(a.dealNames)?b.dealName=a.dealNames.join("|"):a.bigDealIds&&e.isArray(a.bigDealIds)&&(b.bigDealId=a.bigDealIds.join("|"));var c="check"==a.pageMode?"check":"simplePcPay",g=f.simplePcPay;"check"==c?g=d.isMobile()?f.h5Check:f.pcCheck:d.isMobile()&&(g=f.h5Check),b.dealName&&b.dealName.length>1800||b.bigDealId&&b.bigDealId.length>1800?(a.productFrom&&(g+="&productFrom="+a.productFrom),d.submitForm("post",g,"_self",b)):b.dealName||b.bigDealId?location.href=g+"?"+e.param(b):console.warn("params err")},directToCheck:function(a){a=a.params;var b=a.productFrom,c=f.pcCheck;d.isMobile()&&(c=f.h5Check),b&&(c+="&productFrom="+b),d.submitForm("post",c,"_self",{itemDetails:a.itemDetails})},directToDone:function(a){var b=a.dealName&&a.dealName.split("|")||[],c=a.productFrom;window.location.href.indexOf("/pay/index")!==-1&&(a.isFromNewPayPage=1);var g=f.pcDone;d.isMobile()&&(g=f.h5Done),b.length>100?(1==a.isReportOrder?(g+="?isReportOrder=1",c&&(g+="&productFrom="+c)):c&&(g+="?productFrom="+c),d.submitForm("POST",g,"_self",a)):location.replace(g+"?"+e.param(a))},directToRecharge:function(a){var b=f.pcRecharge;d.isMobile()&&(b=f.h5Recharge),location.href=b+"?"+e.param(a)},getErrDialogOpts:function(a){var b=this;a=a||{};var c=a.code,h=a.msg||g.__("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");"string"!=typeof h&&(h=h.toString());var i=a.returnCode,j={msg:h.replace(/\n/g,"<br/>"),defaultCancelBtn:!0,buttonName:g.__("\u786e\u5b9a")},k=function(a){var b=location.href;a.goodsKey&&(b=d.isMobile()?f.h5Check:f.pcCheck),location.replace(d.getLoginUrl(a,b))};switch(+c){case 7:case 9:case 21:j.msg=a.uiMsg||g.__("\u767b\u5f55\u6001\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"),j.buttonName=g.__("\u786e\u5b9a"),j.defaultCancelBtn=!1;var l={};!/goodsKey=/.test(location.href)&&a.data&&a.data instanceof Object&&"string"==typeof a.data.goodsKey&&(l.goodsKey=a.data.goodsKey),j.callback=k(l);break;case 641:case 2401:j.buttonName=g.__("\u53bb\u5145\u503c"),j.callback=function(){b.directToRecharge({s_url:encodeURIComponent(location.href)})};break;case 652:case 2402:var m=e.isPlainObject(a.data)&&a.data||{};j.msg=m.msg||g.__("\u53c2\u6570\u6709\u8bef\uff0c\u8bf7\u68c0\u67e5\u540e\u518d\u8bd5"),i=m.status||i,"string"==typeof j.msg&&(j.msg=j.msg.replace(/\n/g,"<br/>")),m.buttonName&&m.url?(j.buttonName=d.escape(m.buttonName),j.callback=function(){location.replace(encodeURI(m.url))}):(j.buttonName=g.__("\u786e\u5b9a"),j.defaultCancelBtn=!1)}return j.msg=j.msg+"["+i+"]",j},createErrMsgDialog:function(a,b){if(a){var c=b.msg||"",e={},f=b.buttonName;if(e[f]=function(){b.callback&&b.callback(),a&&a.hide()},"buy"===this.siteType||"console"===this.siteType){var i="buy"===this.siteType?h.PC_BUY_ERROR_MSG_DIALOG:h.PC_CONSOLE_ERROR_MSG_DIALOG;c=d.tmpl(i,{errorMsg:c})}return a.create(c,480,"",{title:b.title||g.__("\u6e29\u99a8\u63d0\u793a"),preventResubmit:!0,defaultCancelBtn:b.defaultCancelBtn||!1,isMaskClickHide:!1,button:e})}},decorateBuyH5Dialog:function(a){var b;return a&&(b={create:function(b,c,d,e){var f="";for(var h in e.button)f=h,btnCallback=e.button[h];var i={buttons:[{name:f,callback:function(){btnCallback&&btnCallback(),a.hide()}}],content:b};e.defaultCancelBtn&&i.buttons.push[{name:g.__("\u53d6\u6d88")}],a.show(i)},hide:function(){a.hide()}}),b},reverseBusinessCode:function(a){a=String(a);var b=f.charCodeMap,c=b.length,d=a.length,e=+a.substring(0,d-3),g=+a.substring(d-3,d-1);g=0==g?100:g;for(var h=[],i=g>3?3:g,j=1;j<=i;j++){var k=Math.pow(c,i-j),l=e/k;h.push(b[Math.floor(l)]),e%=k}var m="";if(g==i)m=h.join("");else for(var n=0;n<g;n++)m+=0==n?h[0]:n==Math.floor(g/2)?h[1]:n==g-1?h[2]:"*";return m},transformBusinessCode:function(a,b){var c=f.charCodeMap,d=a.length,e=c.length,g=3,h=[];d<=g?h=a.split(""):(h.push(a[0]),h.push(a[Math.floor(d/2)]),h.push(a[d-1]));var i=0,j=h.length;for(var k in h){var l=h[k],m=c.indexOf(l),n=m==-1?0:m;i+=n*Math.pow(e,j-k-1)}var o=d>100?"00":d<10?"0"+d:d;return+(String(i)+o+b)},retBusinessCode:function(a,b,c){var d="https://buy.cloud.tencent.com/cgi/jssdk?action="+a,e=this.transformBusinessCode(b,c);this.retCode(d,e,1)},retCode:function(a,b,c){var d=/\/cgi\/(.*\?)/.exec(a),e=/action=.*/.exec(a);if(d&&e){var g=d[1]+e[0].split("&")[0];g=g.replace(/\?action=/,"/"),AlloyReport.monitor(3044251),AlloyReport.retcode({appid:20346,url:"https://buy."+f.baseHost+"/cgi/"+g,type:0==b?1:2,code:b,time:c,platform:"pc",rate:1,includeSearch:!0})}}};c.exports=i})}),defineBillingJssdkModule(function(){define("billing/jssdk/i18n",function(a,b,c){var d=a("billing/jssdk/util"),e={"\u53c2\u6570\u6709\u8bef\uff0c\u8bf7\u68c0\u67e5\u540e\u518d\u8bd5":{zh:"\u53c2\u6570\u6709\u8bef\uff0c\u8bf7\u68c0\u67e5\u540e\u518d\u8bd5",en:"Parameter error. Please check and try again"},"\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5":{zh:"\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",en:"Request error. Please check and try again"},"\u786e\u5b9a":{zh:"\u786e\u5b9a",en:"Ok"},"\u53d6\u6d88":{zh:"\u53d6\u6d88",en:"Cancel"},"\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01\u8fd4\u56de\u7801: ":{zh:"\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01\u8fd4\u56de\u7801: ",en:"Network timeout. Please try again later! Error Code: "},"\u767b\u5f55\u6001\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55":{zh:"\u767b\u5f55\u6001\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",en:"Login status verification failed, please re-login!"},"\u53bb\u5145\u503c":{zh:"\u53bb\u5145\u503c",en:"Go to top up"},"\u751f\u6210\u8ba2\u5355\u5931\u8d25\uff0c\u53c2\u6570\u9519\u8bef\uff01":{zh:"\u751f\u6210\u8ba2\u5355\u5931\u8d25\uff0c\u53c2\u6570\u9519\u8bef\uff01",en:"Failed to generate the order, parameter error!"},"\u8d44\u6e90\u64cd\u4f5c\u5931\u8d25\uff0c\u53c2\u6570\u9519\u8bef\uff01":{zh:"\u8d44\u6e90\u64cd\u4f5c\u5931\u8d25\uff0c\u53c2\u6570\u9519\u8bef\uff01",en:"Failed to manage resource, parameter error!"}};c.exports={__:function(a,b){return d.i18n(a,b,e)}}})}),defineBillingJssdkModule(function(){define("billing/jssdk/index",function(a,b,c){var d=a("billing/jssdk/util"),e=d.$,f=a("billing/jssdk/ajaxer"),g=a("billing/jssdk/helper"),h=d.getWebSiteType(),i=function(){var b=null,c="";return"buy"===h&&location.href.indexOf("buy.cloud.tencent.com/m/buy")!==-1?(c="lib_h5/components/dialog",b=g.decorateBuyH5Dialog(a(c))):"buy"!==h&&"console"!==h||(c="dialog",b=a(c)),b}(),j={BUY_TAIWAN_DIALOG:d.isEnUser()?'    <div class="shop-mask"></div>    <div class="dialog-layer dialog-layer-l" style="position:fixed; width:600px;left:50%; top:50%; transform: translate(-50%,-50%)">        <div class="dialog-layer-main">            <div class="dialog-layer-title">                <h3>Please confirm the following disclaimer of liabilities</h3><a class="close buy-taiwan-dialog-cancel" title="Close" href="javascript:;"><i>\xd7</i></a>            </div>            <div class="dialog-layer-cont">                <div class="dialog-tip">                    <p class="text-overflow">As the product you purchased is available in jurisdictions including Taipei, please acknowledge the following disclaimer of liabilities:</p>                </div>                <!-- \u5185\u5bb9 s -->                <div class="dialog-article">                    <div class="dialog-article-inner">                        <div class="dialog-article-hd">                            <p class="dialog-article-title">Special Representations and Warranties<br/>[Taiwan]</p>                        </div>                        <div class="dialog-article-bd">                            <p>The applicant intends to subscribe to the cloud computing services (the \u201cCloud Services\u201d) provided by [Taifuyun] through its agent, [Aceville], and hereby represents and warrants to Taifuyun and Aceville as follows:</p>                            <p>                                1. The applicant is not and has no plan to offer any services to the customers located in Taiwan; or if the applicant is providing or plans to provide any services to the customers located in Taiwan, providing its services to the customers located in Taiwan through the Cloud Services complies or will comply with all applicable laws and regulations of Taiwan, including obtaining the required special permits or licenses, such as those for the financial services or telecommunications services;<br/>                                2. The applicant has no intention to adversely affect the military security,  cybersecurity, economic or financial order, society, politics, or culture of Taiwan and it has no intention to spread rumors or misinformation in Taiwan; and<br/>                                3. The applicant will not conduct any activities that will be deemed as against the public order or good moral of Taiwan.                            </p>                            <p>By clicking the below \u201csubmit\u201d button, the applicant submits the above representations and warranties to Taifuyun and Aceville and hereby confirms and agrees that the above representations and warranties made are true and correct, with no omission, misleading, frauds, or deceptions; otherwise, the applicant shall bear all of the responsibilities and liabilities and shall compensate Taifuyun and Aceville, and their respective affiliated company for all of the damages caused to them.</p>                        </div>                    </div>                </div>                <!-- \u5185\u5bb9 e -->            </div>            <div class="dialog-layer-ft">                <a href="javascript:void(0);" class="shop-btn buy-taiwan-dialog-submit"><span>SUBMIT</span></a><a href="javascript:void(0);" class="shop-btn weak buy-taiwan-dialog-cancel"><span>Disagree</span></a>            </div>        </div>    </div>':'    <div class="shop-mask"></div>    <div class="dialog-layer dialog-layer-l" style="position:fixed; width:600px;left:50%; top:50%; transform: translate(-50%,-50%)">        <div class="dialog-layer-main">            <div class="dialog-layer-title">                <h3>\u8bf7\u786e\u8ba4\u4ee5\u4e0b\u514d\u8d23\u58f0\u660e</h3><a class="close buy-taiwan-dialog-cancel" title="\u5173\u95ed" href="javascript:;"><i>\xd7</i></a>            </div>            <div class="dialog-layer-cont">                <div class="dialog-tip">                    <p class="text-overflow">\u60a8\u5373\u5c06\u7533\u8bf7\u8d2d\u4e70\u53f0\u5317\u53ef\u7528\u533a\u4e91\u670d\u52a1\uff0c\u9700\u8981\u786e\u8ba4\u4ee5\u4e0b\u514d\u8d23\u58f0\u660e\uff1a</p>                </div>                <!-- \u5185\u5bb9 s -->                <div class="dialog-article">                    <div class="dialog-article-inner">                        <div class="dialog-article-hd">                            <p class="dialog-article-title">\u58f0\u660e</p>                        </div>                        <div class="dialog-article-bd">                            <p>\u672c\u516c\u53f8\u62df\u5411\u817e\u8baf\u4e91\u8ba1\u7b97\uff08\u5317\u4eac\uff09\u6709\u9650\u8d23\u4efb\u516c\u53f8\uff08\u4e0b\u79f0\u300c\u817e\u8baf\u300d\uff09\u63d0\u51fa\u7533\u8bf7\u4f7f\u7528\u53f0\u6e7e\u5730\u533a\u7aef\u670d\u52a1\u8d44\u6e90\uff08\u4e0b\u79f0\u300c\u53f0\u6e7e\u8d44\u6e90\u300d\uff09\uff0c\u4e3a\u6b64\uff0c\u672c\u516c\u53f8\u5179\u5411\u817e\u8baf\u58f0\u660e\u4e0e\u4fdd\u8bc1\u5982\u4e0b\uff1a</p>                            <p>                                1. \u672c\u516c\u53f8\u4f7f\u7528\u53f0\u6e7e\u8d44\u6e90\u4e0d\u7528\u4e8e\u5f71\u54cd\u4e24\u5cb8\u5173\u7cfb\u548c\u5e73\u7a33\u5b9a\u3001\u7834\u574f\u4e24\u5cb8\u7ecf\u6d4e\u53d1\u5c55\u548c\u7e41\u8363\u3001\u635f\u5bb3\u4e24\u5cb8\u540c\u80de\u56e2\u7ed3\u53cb\u7231\u548c\u751f\u6d3b\u5e78\u798f\u7b49\u7528\u9014\uff1b<br/>                                2. \u672c\u516c\u53f8\u786e\u8ba4\u6240\u7ecf\u8425\u7684\u4e1a\u52a1\u7b26\u5408\u5927\u9646\u76f8\u5173\u6cd5\u5f8b\u6cd5\u89c4\u653f\u7b56\u7684\u540c\u65f6\uff0c\u4e5f\u9700\u9075\u5b88\u53f0\u6e7e\u5730\u533a\u76f8\u5173\u6cd5\u5f8b\u6cd5\u89c4\uff1b<br/>                                3. \u672c\u516c\u53f8\u4f7f\u7528\u53f0\u6e7e\u8d44\u6e90\u5e76\u975e\u4e3a\u5bf9\u4f4d\u4e8e\u53f0\u6e7e\u5883\u5185\u4e4b\u5ba2\u6237\u3001\u987e\u5ba2\u3001\u6216\u6d88\u8d39\u8005\u63d0\u4f9b\u670d\u52a1\u3002                            </p>                            <p>\u672c\u516c\u53f8\u786e\u8ba4\u5e76\u4fdd\u8bc1\u4ee5\u4e0a\u58f0\u660e\u4e0e\u4fdd\u8bc1\u771f\u5b9e\u65e0\u8bef\uff0c\u7edd\u65e0\u9690\u533f\u3001\u8bef\u5bfc\u3001\u8bc8\u6b3a\u3001\u6b3a\u7792\u7b49\u60c5\u4e8b\uff0c\u5982\u6709\u8fdd\u53cd\uff0c\u672c\u516c\u53f8\u613f\u627f\u62c5\u4e00\u5207\u540e\u679c\u4e0e\u6cd5\u5f8b\u8d23\u4efb\uff0c\u5e76\u8d54\u507f\u817e\u8baf\u53ca\u5176\u5173\u8054\u516c\u53f8\u6240\u53d7\u4e4b\u4e00\u5207\u635f\u5bb3\u6216\u635f\u5931\u3002</p>                        </div>                    </div>                </div>                <!-- \u5185\u5bb9 e -->            </div>            <div class="dialog-layer-ft">                <a href="javascript:void(0);" class="shop-btn buy-taiwan-dialog-submit"><span>\u540c\u610f\u4ee5\u4e0a\u58f0\u660e</span></a><a href="javascript:void(0);" class="shop-btn weak buy-taiwan-dialog-cancel"><span>\u4e0d\u540c\u610f</span></a>            </div>        </div>    </div>',BUY_WATERMARK:'    <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="200px">        <text x="50%" y="50%" dy="9px"            text-anchor="middle"            stroke="#000000"            stroke-width="1"            stroke-opacity="0.1"            fill="none"            transform="rotate(-75, 50 100)"            style="font-size: 18px;">            <%-uin%>-<%-YYYYMMDD%>        </text>    </svg>'},k={init:function(a){a=a||{},this.initDialog(a.dialog)},initDialog:function(a){a&&a.create&&a.hide&&(a=a)},validateParams:function(a){var b=this,c=!0;return g.validateParams(a)||(b._showErrMsgDialog({code:4,msg:"\u8bf7\u6839\u636e\u6587\u6863\u6307\u5f15\u4f20\u5165\u53c2\u6570\uff0c\u68c0\u67e5\u540e\u91cd\u8bd5"}),c=!1),c},queryPrice:function(a){var b=e.Deferred();return a.business=a.buiness||a.business,this.validateParams(a)?(f.queryPrice(a).done(function(a){b.resolve(a.data)}).fail(function(a){b.reject(a)}),b.promise()):b.reject()},setRenewFlag:function(a){var b=this,c=e.Deferred();return a.business=a.buiness||a.business,b.validateParams(a)?(f.setRenewFlag(a).done(function(a){c.resolve(a.data)}).fail(function(a){b._showErrMsgDialog(a),c.reject(a)}),c.promise()):c.reject()},createResource:function(a){var b=this,c=e.Deferred();return a.business=a.buiness||a.business,b.validateParams(a)?(f.createResource(a).done(function(a){c.resolve(a.data)}).fail(function(a){b._showErrMsgDialog(a),c.reject(a)}),c.promise()):c.reject()},modifyResource:function(a){var b=this,c=e.Deferred();return a.business=a.buiness||a.business,b.validateParams(a)?(f.modifyResource(a).done(function(a){c.resolve(a.data)}).fail(function(a){b._showErrMsgDialog(a),c.reject(a)}),c.promise()):c.reject()},unblockResource:function(a){var b=this,c=e.Deferred();return a.business=a.buiness||a.business,b.validateParams(a)?(f.unblockResource(a).done(function(a){c.resolve(a.data)}).fail(function(a){b._showErrMsgDialog(a),c.reject(a)}),c.promise()):c.reject()},generateDeals:function(a){var b=this,c=e.Deferred();return a.business=a.buiness||a.business,b.validateParams(a)?(f.generateDeals(a).done(function(d){var e=a;e.params=d.data,b.directToPay(e),c.resolve(d.data)}).fail(function(a){b._showErrMsgDialog(a),c.reject(a)}),c.promise()):c.reject()},generateDealsAndPay:function(a){var b=this,c=e.Deferred();return a.business=a.buiness||a.business,b.validateParams(a)?(f.generateDealsAndPay(a).done(function(d){for(var e={dealNameList:[],goodsIdList:[],regionIdList:[]},f=0,g=a.length;f<g;f++){var h=a[f];e.goodsIdList.push(h.goodsCatetoryId),e.regionIdList.push(h.regionId)}e.dealNameList=d.data.dealNames||[],b._directToDone(e),c.resolve(d.data)}).fail(function(a){b._showErrMsgDialog(a),c.reject(a)}),c.promise()):c.reject()},directToPay:function(a){a.business=a.buiness||a.business,this.validateParams(a)&&g.directToPay(a)},directToCheck:function(a){a.business=a.buiness||a.business,this.validateParams(a)&&g.directToCheck(a)},directToRecharge:function(a){if(a.business=a.buiness||a.business,this.validateParams(a)){var b=a.params;b.s_url||(b.s_url=encodeURIComponent(location.href)),g.directToRecharge({s_url:b.s_url})}},showTaiwanDialog:function(a){var b=this,c=e.Deferred();if(a.business=a.buiness||a.business,!this.validateParams(a))return c.reject();if(!this.$taiwanDialog){this.$taiwanDialog=e(j.BUY_TAIWAN_DIALOG),e(document.body).append(this.$taiwanDialog);var f=window.loginInfo&&window.loginInfo.userInfo&&(window.loginInfo.userInfo.uin||window.loginInfo.userInfo.ownerUin),g=new Date,h=g.getFullYear()+("0"+(g.getMonth()+1)).slice(-2)+("0"+g.getDate()).slice(-2),i=d.tmpl(j.BUY_WATERMARK,{uin:f,YYYYMMDD:h}),k="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(i)));this.$taiwanDialog.find(".dialog-article").css("background-image",'url("'+k+'")')}return this.$taiwanDialog.show(),this.$taiwanDialog.find(".buy-taiwan-dialog-submit").off("click").on("click",function(){c.resolve(),b.$taiwanDialog.hide()}),this.$taiwanDialog.find(".buy-taiwan-dialog-cancel").off("click").on("click",function(){c.reject(new Error("disagree")),b.$taiwanDialog.hide()}),c.promise()},_directToDone:function(a){g.directToDone({payMode:1,from:"payDealBtn",dealName:a.dealNameList.join("|"),goodsId:a.goodsIdList.join("|"),regionId:a.regionIdList.join("|"),isReportOrder:0,orderMode:2==a.orderMode?a.orderMode:null})},_showErrMsgDialog:function(a){if(i){var b=g.getErrDialogOpts(a);return g.createErrMsgDialog(i,b)}}};c.exports=k,window.__billingSdk=k})}),defineBillingJssdkModule(function(){define("billing/jssdk/net",function(require,exports,module){function createCache(a,b){return function(){var c=b;return cache[c]||(cache[c]=$.Deferred(function(){a(this,c)}).promise()),cache[c].done(arguments[0])}}function buildCachedIframe(a){return createCache(function(b){var c=document.createElement("iframe");c.style.display="none",c.src=a,c.onload=function(){b.resolve(c),c.onload=null},document.body.appendChild(c)},a)}var util=require("billing/jssdk/util"),$=util.$,config=require("billing/jssdk/config"),i18n=require("billing/jssdk/i18n"),helper=require("billing/jssdk/helper"),cache={},net={get:function(a){var b="//buy."+config.baseHost;return"buy"!==util.getWebSiteType()&&(a.crossDomain=!0,b=config.baseUrl),a.url=b+a.url,this._ajax("GET",a)},post:function(a){var b="//buy."+config.baseHost;return"buy"!==util.getWebSiteType()&&(a.crossDomain=!0,util.isIE(9)?a.postProxy="//"+config.baseHost+config.postProxyPath:b=config.baseUrl),a.url=b+a.url,this._ajax("POST",a)},_ajax:function(method,options){AlloyReport.monitor(3458281);var _self=this,_startTime=new Date,urlParams={t:(new Date).getTime(),uin:util.getUin(),csrfCode:util.getACSRFToken(),webEventId:Math.floor(9999999*Math.random())+1};options.url=this._addParam(options.url,urlParams);var startTime=new Date,_cb=function(ret){var endTime=new Date;"string"==typeof ret&&(ret=eval("("+ret+")")),ret&&ret.uiMsg&&(console&&console.warn&&0!==ret.code&&console.warn("Error code="+ret.code+",msg="+ret.msg),ret.msg=ret.uiMsg,delete ret.uiMsg),helper.retCode(options.url,ret.code,endTime-startTime),null!=ret?null!=ret.code?ret&&0==ret.code?options.success&&options.success(ret):options.fail&&options.fail(ret):options.success&&options.success(ret):options.fail&&options.fail(ret)};if("POST"==method&&util.isIE(9)&&1==options.crossDomain)return _self.proxyPost(options,_cb);var requestOptions={type:method,url:options.url,data:options.data||{},dataType:options.crossDomain?"jsonp":"json",jsonp:options.jsonpCallback||"jsonpCallback",async:void 0==options.async||options.async,cache:!1,timeout:25e3,success:function(a){_cb(a)},error:function(a){AlloyReport.monitor(3458282),_cb({code:a&&a.status||9999,msg:i18n.__("\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01\u8fd4\u56de\u7801: ")+(a&&a.status||9999)})}};return options.crossDomain&&(requestOptions.dataType="json",requestOptions.xhrFields={withCredentials:!0}),"2.0"===options.version&&(requestOptions.contentType="application/json;charset=utf-8",requestOptions.data=JSON.stringify(requestOptions.data)),$.ajax(requestOptions)},proxyPost:function(a,b){var c="callback"+Math.floor(1e7*Math.random());window[c]=function(a){b(a);try{delete window[c]}catch(d){window[c]=null}};var d=function(b){try{b.contentWindow.postSend(a.url,a.data,c)}catch(e){"TypeError"===e.name&&buildCachedIframe(a.postProxy)(d)}};buildCachedIframe(a.postProxy)(d)},_addParam:function(a,b){var c=/\?/.test(a)?"&":"?";return a+=c+util.objectToParams(b)}};module.exports=net})}),defineBillingJssdkModule(function(){define("billing/jssdk/util",function(a,b,c){var d="$",e=window.jQuery||a(d),f=a("billing/jssdk/config");window.console=window.console||{log:function(){}};var g="",h={$:e,cookie:{get:function(a){var b=new RegExp("(?:^|;+|\\s+)"+a+"=([^;]*)"),c=document.cookie.match(b);return c?c[1]:""},set:function(a,b,c,d,e){if(e){var f=new Date;f.setTime(f.getTime()+36e5*e)}return document.cookie=a+"="+b+"; "+(e?"expires="+f.toGMTString()+"; ":"")+(d?"path="+d+"; ":"path=/; ")+(c?"domain="+c+";":"domain="+document.domain+";"),!0},del:function(a,b,c){document.cookie=a+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; "+(c?"path="+c+"; ":"path=/; ")+(b?"domain="+b+";":"domain="+document.domain+";")}},tmpl:function(){var a={},b=function(a){return 0==a?a:(a=(a||"").toString(),a.replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;"))},c=function(a,b){if(b)for(var c in b){var d=new RegExp("<%#\\s?"+c+"%>","g");a=a.replace(d,b[c])}return a};return function d(e,f,g){var h=!/\W/.test(e);!h&&(e=c(e,g));var i=h?a[e]=a[e]||d(c(document.getElementById(e).innerHTML,g)):new Function("obj","_escape","var _p='';with(obj){_p+='"+e.replace(/[\r\t\n]/g," ").split("\\'").join("\\\\'").split("'").join("\\'").split("<%").join("\t").replace(/\t-(.*?)%>/g,"'+$1+'").replace(/\t=(.*?)%>/g,"'+_escape($1)+'").split("\t").join("';").split("%>").join("_p+='")+"';} return _p;"),j=function(a){return i(a,b)};return f?j(f):j}}(),getACSRFToken:function(){if(!g){var a=this.cookie.get("skey"),b=5381;if(a||(a=this.cookie.get("p_skey")),!a)return"";for(var c=0,d=a.length;c<d;++c)b+=(b<<5)+a.charCodeAt(c);g=2147483647&b}return g},getUin:function(){return parseInt(this.cookie.get("uin").replace(/\D/g,""),10)||""},setACSRFToken:function(a){g=a},paramsToObject:function(a){var b,c,d,f,g,h={};return"object"==typeof a?a:(d=a||window.location.search,d=d.replace("?",""),b=d.split("&"),e(b).each(function(a,b){c=b.split("="),f=c[0],g=c.slice(1).join("="),h[decodeURIComponent(f)]=decodeURIComponent(g)}),h)},objectToParams:function(a,b){var c=e.param(a);return b&&(c=decodeURIComponent(c)),c},cloneObject:function(a,b){var c=a.constructor===Array?[]:{};for(var d in a)b&&b.ignore&&b.ignore.indexOf(d)>=0||a.hasOwnProperty(d)&&(c[d]=a[d]&&"object"==typeof a[d]?this.cloneObject(a[d]):a[d]);return c},isMobile:function(){return this.isAndroid()||this.isIOS()},isAndroid:function(){return/android/i.test(window.navigator.userAgent)},isIOS:function(){return/iPod|iPad|iPhone/i.test(window.navigator.userAgent)},submitForm:function(a,b,c,d){var f=e("#billing_jssdk_form");f.length<=0?f=e("<form></form>").attr({id:"billing_jssdk_form"}).appendTo(e("body")):f.empty(),f.attr({action:b,target:c,method:a}),e.each(d,function(a,b){e('<input type="hidden">').attr({name:a,value:b}).appendTo(f)}),f.submit()},isIntlSite:function(){return/intl\.cloud\.tencent\.com/.test(location.host)},getWebSiteType:function(){var a=f.hostConfig,b="main";for(var c in a){var d=a[c];if(d.indexOf(location.host)!==-1){b=c;break}}return b},getUserLanguageType:function(){
var a=h.cookie.get("language"),b=h.cookie.get("cn_en_tag"),c="zh";return 1!=b&&"en"!=a||(c="en"),c},isEnUser:function(){var a=this.getUserLanguageType();return"en"===a},i18n:function(a,b,c){var d=this.getUserLanguageType(),f=c[a]&&c[a][d]||a;return b&&e.isPlainObject(b)&&(f=this.vsub(f,b)),f},isIE:function(a){var b=document.createElement("b");return b.innerHTML="<!--[if IE "+a+"]><i></i><![endif]-->",1===b.getElementsByTagName("i").length},getLoginUrl:function(a,b){var c=window.isIntlUser||this.isIntlSite(),d=c?f.intlLoginBaseUrl:f.loginBaseUrl;return b=b||location.href,a&&a instanceof Object&&!e.isEmptyObject(a)&&(b+=/\?/.test(b)?/&$/.test(b)?"":"&":"?",b+=e.param(a)),d+encodeURIComponent(b)},escape:function(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=a.replace(/"/g,"&quot;"),a=a.replace(/'/g,"&#039;")},vsub:function(a,b){return(""+a).replace(/\$\{([^\{\}]+)\}/g,function(a,c,d){return null==(d=(b||{})[c])?"":d})}};c.exports=h})});