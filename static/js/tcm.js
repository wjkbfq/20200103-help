var qrEventOnload = function () {
    $('body').append('\
	<div class="p-mask J-docMask" style="display: none;"></div>\
	<div class="p-alert J-docQrCode" style="top: 50%;left: 50%; margin: -145px 0 0 -134px;display: none"> \
		    <div class="p-alert-close J-docQrClose">关闭</div> \
		    <div class="p-alert-bd"> \
		        <div class="p-qr-wrap"> \
		            <div class="p-qr-img"> \
		                <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/product/css/img/qr.jpg" alt=""> \
		            </div> \
		            <div class="p-qr-txt"> \
		                使用手机扫码体验腾讯云助手 \
		            </div> \
		        </div> \
		    </div> \
		</div>\
            ');

    var showQrBtnSelector = [
        '.J-pdBanner > div > div.c-hero-section-ct > div.c-hero-section-btn > a',
        '.cp-aside > div > div:nth-child(1) > div > a'].join(',');

    $(document).on('click', showQrBtnSelector, function () {
        $('.J-docMask,.J-docQrCode').show();
    }).on('click', '.J-docMask,.J-docQrClose', function () {
        $('.J-docMask,.J-docQrCode').hide();
    });
};

function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	qrEventOnload();
}

if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	window.setTimeout( qrEventOnload );

} else {
	document.addEventListener( "DOMContentLoaded", completed );
	window.addEventListener( "load", completed );
}
