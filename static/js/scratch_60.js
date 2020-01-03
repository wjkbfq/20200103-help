(function () {
    var brandTpl = `
<div class="c-hero-section-note haslink">

	<a href="https://serverless.com/" target="_blank" class="c-hero-section-note-link">

<img src="https://main.qcloudimg.com/raw/450c8ab5a64af4ff44cb3f920ea2b5be.png" class="c-hero-section-note-img" alt="serverless">

		<img src="https://main.qcloudimg.com/raw/450c8ab5a64af4ff44cb3f920ea2b5be.png" class="c-hero-section-note-img-hover" alt="serverless hover">

	<span>全球战略合作</span>

	</a>
                </div>
`;

    var $brandParent = $('.J-pdBanner .c-hero-section-ct');
    $brandParent.append(brandTpl);

    // 设置banner大logo
    $('.J-pdBanner .c-hero-icon-mod').addClass('sf-video').css('background-image', 'url("http://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/product/sf/css/img/banner.png")').append(
        `<video class="sf-vi" muted="" src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/product/sf/css/sf-video.mp4" loop="loop" autoplay="">
                </video>`);

})();