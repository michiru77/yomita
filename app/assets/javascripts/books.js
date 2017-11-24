//= require BooksData
//= require search

/*
  ページが読み込まれた後に，titleSearch() に二つの引数を渡して実行する。

  author: 作者名を格納
  title:  タイトルを格納
  hits:   検索ヒット数を指定。0-30までの整数
*/
$(window).load(function(){
    bd = new BooksData();
    tb = new TopBook();
    var author = '西尾維新';
    var title = '恋愛';
    var hits = 30;
    titleSearch(title, hits);

    // authorSearch(author, hits);
    // genreSearch(genreId, hits);
});

// 取得した書籍データを html に整形して出力する
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
            var list = '<p>'
                + '<img id="'
                + i
                + '" '
                + 'src="'
                + imgUrl
                + '"> '
                + '</p>'
            $("#photos_6").append(list);
        }
    });
}

// クリックした表紙をトップへ移動する
$(document).ready(function() {
    $('#photos_6').click(function(){
        var src = event.target.src.replace(/\?.*$/, '');
        var id = event.target.id;
        tb.setTitle(bd.getTitle(id));
        tb.setAuthor(bd.getAuthor(id));
        tb.setCaption(bd.getCaption(id));
        bd.reset();

        var top = '<p>'
            + '<img src="'
            + src
            + '">'
            + '</p>';
        $('#photos_1').html(null);
        $('#photos_1').html(top);
        $('#photos_6').html(null);
        var hits = 30;
        var title = tb.getTitle().slice(0,2);
        titleSearch(title, hits);


        var title_html = tb.getTitle();
        $('.title').html(null);
        $('.title').append(title_html);

        var author_html = tb.getAuthor();
        $('.author').html(null);
        $('.author').append('<a href="#">'
            +'<i class="fa fa-user-circle-o" aria-hidden="true"></i>' + author_html + '</a>'
        );

        var caption_html = tb.getCaption();
        $('.red bold').html(null);
        $('.red bold').append(caption_html);

        //履歴情報の保存
        var apple = 'りんご';
        historySearch(apple);
    });
});


// クリックされた変数をsessionに保存する
function historySearch(fruit) {
    historyStorage(fruit).done(function(data){
        $('.apple').append('hoge');
        console.log('hoge');
        outFruit(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}


function historyStorage(fruit) {
    return $.ajax({
        url: '/home_history',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            fruit: fruit
        }
    });
}

function outFruit(data) {
    var ringo = 'りんご';
    $('.apple').append(data);
}
