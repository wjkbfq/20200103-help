// 腾讯云数据上报
typeof pgvMain === 'function' && pgvMain({ repeatApplay: 'true', virtualDomain: 'studio.qcloud.dev.qq.com' });

const reportIframeUrl = 'https://cloud.tencent.com/act/thirdpartyreport';

function getReportIframeUrl(url) {
    const location = window.location;
    const originUrlStr = location.protocol + '//' + encodeURIComponent(location.hostname) + encodeURIComponent(location.pathname);
    const queryStr = url.split('?')[1];
    if (queryStr) {
        return reportIframeUrl + '?' + encodeURI(queryStr) + '&url=' + encodeURIComponent(originUrlStr);
    } else {
        return reportIframeUrl + '?url=' + encodeURIComponent(originUrlStr);
    }
}

if (window.frames['report_iframe']) {
    window.frames['report_iframe'].location.href = getReportIframeUrl(window.location.href);
}

// 谷歌数据上报
window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }

gtag('js', new Date());

gtag('config', 'UA-65952334-9');
