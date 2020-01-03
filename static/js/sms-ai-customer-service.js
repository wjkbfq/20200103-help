function appendConnectAi(tryCnt) {
    var tpl = '<div class="qc-scrollbar-item qc-scrollbar-service"> <div class="qc-scrollbar-button qc-scrollbar-toggle smart-help" hotrep="hp.sidebar.connectus" title="智能客服" onClick="window.location.href=\'https://console.cloud.tencent.com/smarty?from=SMSintro\'" style="height: 118px; background-image: url(https://main.qcloudimg.com/raw/e966352ffa247a17691a6f8a8d819c46.svg);"></div> </div>';

    var $container = $('.J-qc-scrollbar .qc-scrollbar-inner');

    if ($container.length > 0) {
        $container.prepend(tpl);
    } else if (tryCnt > 0) {
        setTimeout(function () {
            appendConnectAi(tryCnt - 1);
        }, 500);
    }
}

appendConnectAi(10);