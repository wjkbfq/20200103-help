(function() {
var dcss = ["//imgcache.qq.com/open_proj/proj_qcloud_v2/community-pc/build/AskDialog/AskDialog-201906131103.css","//imgcache.qq.com/qcloud/draft-master/dist/draft-master-v1.3.38.css?max_age=31536000"];
var loadCss = function(src) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = src;
	link.setAttribute('data-role', 'global');
	document.head.appendChild(link);
};
for (var i = 0; i < dcss.length; i++) loadCss(dcss[i]);

var loadScript = function(src, callback) {
	var script = document.createElement('script');
	script.onerror = function(error) { callback(error, null); };
	script.onload = function() { callback(null, null); };
	script.src = src;
	document.head.appendChild(script);
};

function loadQuickAsk(callback) {
	if (!callback) {
		console.error('callback is required for loadQuickAsk()');
	}
	if (window.QuickAsk && !window.QuickAsk.debug) {
		return callback(null, window.QuickAsk);
	}
	if (typeof _babelPolyfill == 'undefined') {
		loadScript('//imgcache.qq.com/qcloud/main/scripts/release/common/vendors/babel/polyfill.6.23.min.js', startup);
	}
	else {
		startup();
	}
	function startup() {
		window.isClientContext = true;
		window.isServerContext = false;
		window.QC_ASK_HOST = "cloud.tencent.com";
		window.QC_ASK_LOGINED = false;
		if (!QC_ASK_LOGINED) {
			var err = new Error('需要登录');
			err.type = 'LOGIN_REQUIRED';
			return callback(err);
		}
		loadScript('//imgcache.qq.com/qcloud/developer/scripts/release/quickask.e092101ec1.js?max_age=31536000', function(error) {
			if (error) return callback(error);
			if (window.QuickAsk) {
				window.QuickAsk.setup({ serviceUrl: "//cloud.tencent.com/developer/ask/quick", profile: {"accountInfoCompleted":false} });
				callback(null, window.QuickAsk);
			}
			else {
				callback(new Error('快速提问组件加载失败！'));
			}
		});
	}
}
window.loadQuickAsk = loadQuickAsk;
})();