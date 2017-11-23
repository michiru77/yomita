//= require BooksData
/*
  ページが読み込まれた後に，booksSearch() に4つの引数を渡して実行する。

  author: 作者名を格納
  title:  タイトルを格納
  hits:   検索ヒット数を指定。0-30までの整数
  mode:   作者検索であれば0，タイトル検索であれば1
*/
$(window).load(function(){
    bd = new BooksData();
    var author = '西尾維新';
    var title = '恋愛';
    var hits = 30;
    titleSearch(title, hits);
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
    }).done(function(data){
        outBooks(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
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
    }).done(function(data){
        outBooks(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

function genreSearch(genre, hits) {
    return $.ajax({
        url: '/home_genreSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            size: 0,
            booksGenreId: genre,
            hits: hits
        }
    }).done(function(data){
        outBooks(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// 取得した書籍データを html に整形して出力
function outBooks(data) {
    $.each(data, function(i) {
        var url = data[i]["params"]["itemUrl"];
        var imgUrl = data[i]["params"]["largeImageUrl"];
        bd.setTitle(data[i]);
        bd.setAuthor(data[i]);
        bd.setGenreId(data[i]);
        bd.setCaption(data[i]);

        var noImg = imgUrl.match(/noimage/);
        if (noImg === null) {
            var list = '<p><img src="'
                + imgUrl
                + '" '
                + 'alt="'
                + i
                + '"> '
                + '</p>'
            $("#photos_6").append(list);
        }
    });
}

$(document).ready(function() {
    $('#photos_6').click(function(){
        var src = event.target.src.replace(/\?.*$/, '');
        var alt = event.target.alt;
        var title = bd.getTitle(alt);
        var top = '<p>'
            + '<img src="'
            + src
            + '">'
            + '</p>';

        $('#photos_1').html(null);
        $('#photos_1').html(top);
        var hits = 30;
        $('#photos_6').html(null);
        var title = title.slice(0,2);
        titleSearch(title, hits);
        //        $("html").animate({scrollTop:0},"500");
    });
});

$(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {

    }
});
