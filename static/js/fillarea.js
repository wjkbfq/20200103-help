
// 获取CDN节点的json文件，按所在大洲为单位，填充到世界地图上
$.post("https://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/product/gcd/js/cdn-nodes.json", function(result) {

    // var nodes = JSON.parse(result);
    var nodes = result;
    // console.log(nodes['south-america']);
    var nodeDomGroup = '';

    $('.map-area').each(function() {

        var curArea = $(this).attr('data-area');
        // console.log(nodes[curArea].length);     

        // 一个大洲的节点一起生成
        nodeDomGroup = '';

        for (var i = 0; i < nodes[curArea].length; i++) {
            // console.log(nodes[curArea][i].left);
            var nodeAreaName = nodes[curArea][i].areaname;
            var nodeStyle = 'node-style-' + curArea;

            // 20.24、9.8: 在  2024 * 980 的世界地图上获取实际的坐标，转换成百分比
            var nodeLeftPosition = parseInt(nodes[curArea][i].left) / 20.24 + '%';
            var nodeTopPosition = parseInt(nodes[curArea][i].top) / 9.8 + '%';
            var nodeTextdirection = nodes[curArea][i].textdirection;


            nodeDomGroup += '<div class="c-map-dot animate ' + nodeStyle + '"' +
                'style="left:' + nodeLeftPosition + ';top:' + nodeTopPosition + ';">' +
                '<div class="c-map-dot-layer"></div>' +
                '<span class="c-map-dot-text">'
                + '<div class="c-bubble c-bubble-bottom c-map-bubble"><div class="c-bubble-inner"><h3 class="title">' + nodeAreaName + '</h3></div></div></div>';
        };

        $(this).html(nodeDomGroup)
    });
});



// 切换大洲tab查看地区列表
$('.area-node-tab > ul > li').click(function(ev){
    // alert($(this).index());
    ev.preventDefault();

    $('.area-node-tab > ul > li').removeClass('actived');
    $(this).addClass('actived');


    $('.node-list .c-tab-panel').hide();
    $('.node-list .c-tab-panel').eq($(this).index()).show();

})