(function () {
    var tpl = `
              <div class="c-hero-section-note haslink">
                    <a href="https://www.elastic.co/" target="_blank" class="c-hero-section-note-link">
                        <img src="https://main.qcloudimg.com/raw/d0e6c986a020557f1ed658a4aee41f33.png" class="c-hero-section-note-img" alt="elastic">
                        <img src="https://main.qcloudimg.com/raw/90533b706a0263948010969129e49e32.png" class="c-hero-section-note-img-hover" alt="elastic hover">
                        <span>全球战略合作</span>
                    </a>
                </div>
`;

    var $parent = $('.J-pdBanner .c-hero-section-ct');

    $parent.append(tpl);
})();