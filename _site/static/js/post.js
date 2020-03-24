/**
 * 页面ready方法
 */
$(document).ready(function() {
    generateContent();
    // share();
    gitment();
});

/**
 * 侧边目录
 */
function generateContent() {
    var $mt = $('.toc');
    var toc = $(".post ul#markdown-toc").clone().get(0);
    $mt.each(function(i,o){
        $(o).html(toc);
    });
}

function share(){
    window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};
    with(document)0[getElementsByTagName("script")[0].parentNode.appendChild(createElement('script')).src='//bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}


function gitment() {
    var gitment = new Gitment({
        id: window.location.pathname,
        owner: 'renzhifan',
        repo: 'blog',
        oauth: {
            client_id: 'f3dd18c7c10242a9c275',
            client_secret: '654fc9ad99218ceab536470dd466354ef618c04d',
        },
    });
    gitment.render('post-comment')
    $("#post-comment").removeClass('hidden');
}


