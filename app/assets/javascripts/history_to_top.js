// photos_1 に表紙を配置
function putTopBook(url,src,title,author,caption) {

    // トップの表紙，URLを追加
    var top = '<div class="iconBuyButtonTop">'
        + '<p><img src="'
        + src
        + '"></p>'
        + '<a href="'
        + url
        + '" target="_blank">'
        + '<i class="fa fa-shopping-cart fa-fw fa-border" aria-hidden="true"></i>'
        + '</a></div>';
    $('#photos_1').html(null);
    $('#photos_1').html(top);

    // タイトル追加
    $('.title').html(null);
    $('.title').append(title);

    // 作者追加
    $('.author').html(null);
    var authorHtml = '<a href="#" name="' + author + '">'
        + '<i class="fa fa-user-circle-o" aria-hidden="true"></i>' + author + '</a>';
    $('.author').html(null);
    $('.author').append(authorHtml);

    // あらすじ追加
    var captionHtml = '<p class="red bold">'
        + caption
        + '<br /></p>'
        + '<p><a id="modal-close" class="button-link">閉じる</a></p>';
    $('#modal-content-innar').html(null);
    $('#modal-content-innar').append(captionHtml);
}

// alt から URL を取得
function getUrl(alt) {
    var url = alt.match(/url:.*:url/).toString();
    url = url.replace(/url:/,'');
    url = url.replace(/:url/,'');
    return url;
}

// alt から Title を取得
function getTitle(alt) {
    var title = alt.match(/title:.*:title/).toString();
    title = title.replace(/title:/,'');
    title = title.replace(/:title/,'');
    return title;
}

// alt から Author を取得
function getAuthor(alt) {
    var author = alt.match(/author:.*:author/).toString();
    author = author.replace(/author:/,'');
    author = author.replace(/:author/,'');
    return author;
}

// alt から Caption を取得
function getCaption(alt) {
    var caption = alt.match(/caption:.*:caption/).toString();
    caption = caption.replace(/caption:/,'');
    caption = caption.replace(/:caption/,'');
    return caption;
}
