/*
  ページが読み込まれた後に，booksSearch() に4つの引数を渡して実行する。

  author: 作者名を格納
  title:  タイトルを格納
  hits:   検索ヒット数を指定。0-30までの整数
  mode:   作者検索であれば0，タイトル検索であれば1
*/

$(document).ready(function(){
    $('#photos_6').click(function(){
        $('#photos_1').html(null);
        //var src = $(this).children('img').attr('src');
        var src = event.target.src;
        //console.log(src);
        var foo = '<p>'
            + '<img src="'
            + src
            + '">'
            + '</p>'
        $('#photos_1').append(foo);
        $('.seikou').hide();
    });
});

$(window).load(function(){
    var author = '西尾維新';
    var title = '恋愛';
    var hits = 30;
    var mode = 1;
    booksSearch(author, title, hits, mode);
});

// 作者検索関数
function authorSearch(author, hits) {
    return $.ajax({
        url: '/home_authorSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            author: author,
            hits: hits
        }
    });
}

// タイトル検索関数
function titleSearch(title, hits) {
    return $.ajax({
        url: '/home_titleSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            title: title,
            hits: hits
        }
    });
}

// mode 値によって作者，タイトル検索を実行する
function booksSearch(author, title, hits, mode) {
    switch(mode) {
    case 0:
        authorSearch(author, hits).done(function(data){
            outBooks(data);
        }).fail(function(data){
            $('#out').html('<p>Failure</p>');
        });
        break;
    case 1:
        titleSearch(title, hits).done(function(data){
            outBooks(data);
        }).fail(function(data){
            $('#out').html('<p>Failure</p>');
        });
        break;
    }
}

// 取得した書籍データを html に整形して出力
function outBooks(data) {
    $.each(data, function(i) {
        var author = data[i]["params"]["author"].replace(/\/.*$/, '');
        var url = data[i]["params"]["itemUrl"];
        var imgUrl = data[i]["params"]["largeImageUrl"];
        var cap = data[i]["params"]["itemCaption"];
        var noImg = imgUrl.match(/noimage/);

        if (noImg === null) {
            imgUrl = imgUrl.replace(/\?.*$/, '');
            var list = '<p><img src="'
                + imgUrl
                + '" '
                + ' alt="'
                + author
                + '"></p>'
            $("#photos_6").append(list);
        }
    });
}
