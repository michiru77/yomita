//= require BooksData
//= require search

/*
  ページが読み込まれた後に，titleSearch() に二つの引数を渡して実行する。

  author: 作者名を格納
  title:  タイトルを格納
*/
$(window).load(function(){
    bd = new BooksData();
    tb = new TopBook();
    var author = '池井戸潤';
    var title = '恋愛';
    titleSearch(title);
    //authorSearch();

    // authorSearch(author);
    // genreSearch(genreId);
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
            var list = '<div class="iconBuyButton">'
                + '<p>'
                + '<img id="'
                + i
                + '" '
                + 'src="'
                + imgUrl
                + '"> '
                + '</p>'
                + '<i class="fa fa-shopping-cart fa-fw fa-border" aria-hidden="true"></i>'
                + '</div>'
            $("#photos_6").append(list);
        }
    });
}

function tohistory(src) {
    $('#display_history').append(
        //'<p>'+
        '<img src="'+ src +'" width="90px" height="auto">'
        //+ '</p>'
    );
}

//履歴imgをクリックした時の処理
$(document).ready(function() {
    $('#display_history').click(function() {
        //var src = event.target.src.replace(/\?.*$/, '');
        var src = event.target.src;
        /*
        var id = event.target.id;
        tb.setTitle(bd.getTitle(id));
        tb.setAuthor(bd.getAuthor(id));
        tb.setCaption(bd.getCaption(id));
        */
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

        titleSearch_history(title);

        //タイトル追加
        var title_html = tb.getTitle();
        alert(title_html);
        $('.title').html(null);
        $('.title').append(title_html);

        //作者追加
        var author_html = tb.getAuthor();
        $('.author').html(null);
        $('.author').append('<a href="#" name="'+ author_html +'">'
            +'<i class="fa fa-user-circle-o" aria-hidden="true"></i>' + author_html + '</a>'
        );

        //あらすじ追加
        var caption_html = tb.getCaption();
        $('#modal-content-innar').html(null);
        $('#modal-content-innar').append(
            '<p class="red bold">'
            + caption_html
            + '<br /></p>'
            + '<p><a id="modal-close" class="button-link">閉じる</a></p>'
        );
    });
});




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


        //履歴を上に残す
        tohistory(src);


        $('#photos_6').html(null);
        var hits = 30;
        var title = tb.getTitle().slice(0,2);

        titleSearch(title);

        //タイトル追加
        var title_html = tb.getTitle();
        alert(title_html)
        $('.title').html(null);
        $('.title').append(title_html);

        //作者追加
        var author_html = tb.getAuthor();
        $('.author').html(null);
        $('.author').append('<a href="#" name="'+ author_html +'">'
                            +'<i class="fa fa-user-circle-o" aria-hidden="true"></i>' + author_html + '</a>'
                           );

        //あらすじ追加
        var caption_html = tb.getCaption();
        $('#modal-content-innar').html(null);
        $('#modal-content-innar').append(
            '<p class="red bold">'
                + caption_html
                + '<br /></p>'
                + '<p><a id="modal-close" class="button-link">閉じる</a></p>'
        );

        //履歴情報の保存
        var apple = src;
        historySearch(apple);
    });
});

$(document).ready(function() {
    $('.author').click(function() {
        var author = event.target.name;
        bd.reset();
        $('#photos_6').html(null);
        authorSearch(author);
    })
});

// クリックされた変数をsessionに保存する
function historySearch(fruit) {
    historyStorage(fruit).done(function(data){
        $('.apple').append('hoge');
        console.log('hoge');
        outFruit(data);
    }).fail(function(data){
        //$('#out').html('<p>Failure</p>');
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
