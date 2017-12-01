//= require compiled/BooksData
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
    var title = '科学';
    titleSearch(title, 0);
    // authorSearch(author, 0);
    // genreSearch(genreId, 0);
});

function tohistory(src,title,author,caption) {
    $('#display_history').append(
        //'<p>'+
        '<img src="'+ src +'" width="90px" height="auto" alt=":title'+ title +':author'+ author +':caption'+ caption +'" >'
        //+ '</p>'
    );
}

// クリックした表紙をトップへ移動する
$(document).ready(function() {
    $('#photos_6').click(function(){
        var src = event.target.src.replace(/\?.*$/, '');
        var id = event.target.id;
        var title = bd.getTitle(id);
        var author = bd.getAuthor(id);
        var caption = bd.getCaption(id);
        var isbn = bd.getIsbn(id);

        var top = '<div class="iconBuyButtonTop">'
            + '<p>'
            + '<img src="'
            + src
            + '">'
            + '</p>'
            + '<a href="">'
            + '<i class="fa fa-shopping-cart fa-fw fa-border" aria-hidden="true"></i>'
            + '</a>'
            + '</div>';
        $('#photos_1').html(null);
        $('#photos_1').html(top);

        //履歴を上に残す
        tohistory(src,title,author,caption);

        $('#photos_6').html(null);
        titleSearch(title.slice(0,2), 0);

        //タイトル追加
        $('.title').html(null);
        $('.title').append(title);

        //作者追加
        $('.author').html(null);
        $('.author').append('<a href="#" name="'+ author +'">'
                            +'<i class="fa fa-user-circle-o" aria-hidden="true"></i>' + author + '</a>'
                           );


        //あらすじ追加
        $('#modal-content-innar').html(null);
        $('#modal-content-innar').append(
            '<p class="red bold">'
                + caption
                + '<br /></p>'
                + '<p><a id="modal-close" class="button-link">閉じる</a></p>'
        );

        //履歴情報の保存
        var img = src;
        //historySearch(apple);
        //historyStorage(img,title,author,caption);
        historyStorageIndex(img);
    });
});

$(document).ready(function() {
    $('.author').click(function() {
        var author = event.target.name;
        $('#photos_6').html(null);
        authorSearch(author, 0);
    })
});




function historyStorage(img,title,author,caption) {
    return $.ajax({
        url: '/home_history',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            img: img,
            title: title,
            author: author,
            caption: caption
        }
    }).done(function(data){
        $('.apple').append('hoge');
        console.log('hoge');
        outFruit(data);
    }).fail(function(data){
        $('#out').html('<p>Session failure</p>');
    });
}

// クリックされた変数をsessionに保存する
function historySearch(fruit) {
    historyStorage(fruit);
}

//セッション履歴削除関数
$(document).ready(function() {
    $('#rireki').click(function() {
        history_delete(1);
        $('#display_history').html(null);
    });
});

//履歴削除
function history_delete(one) {
    return $.ajax({
        url: '/home_history',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            number: one
        }
    });
}

//履歴imgをクリックした時の処理
$(document).ready(function() {
    $('#display_history').click(function() {
        //var src = event.target.src.replace(/\?.*$/, '');
        var src = event.target.src;
        var alt = event.target.alt;
        var title = alt.replace(/:title(.*):author.*$/,"$1");
        var author = alt.replace(/:author(.*):caption.*$/,"$1");
        var caption = alt.replace(/:caption(.*)$/,"$1");

        var top =
            '<p>'
            + '<img src="'
            + src
            + '">'
            + '</p>';

        $('#photos_1').html(null);
        $('#photos_1').html(top);

        $('#photos_6').html(null);
        var title_new = title.slice(0,2);
        //var title = ''
        titleSearch(title_new, 0);

        //タイトル追加
        //var title_html = tb.getTitle();
        $('.title').html(null);
        $('.title').append(title);

        //作者追加
        //var author_html = tb.getAuthor();
        $('.author').html(null);
        $('.author').append('<a href="#" name="'+ author +'">'
                            +'<i class="fa fa-user-circle-o" aria-hidden="true"></i>' + author + '</a>'
                           );

        //あらすじ追加
        //var caption_html = tb.getCaption();
        $('#modal-content-innar').html(null);
        $('#modal-content-innar').append(
            '<p class="red bold">'
                + caption
                + '<br /></p>'
                + '<p><a id="modal-close" class="button-link">閉じる</a></p>'
        );
        //$('#michiru_sen').append(caption);
    });
});


//画像imgデータを新しく作成した履歴ページに送信
function historyStorageIndex(img) {
    return $.ajax({
        url: '/history_page',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            img: img
            //caption: caption
            //title: title,
            //author: author,
            //caption: caption
        }
    }).done(function(data){
        //$('#photos_1').html(null);
        //$('#photos_6').html(null);
        //$('#display_history').html(null);
        //$('.apple').append('hoge');
        //console.log('hoge');
        //outFruit(data);
        //$('#photos_6').append(gon.ItemUrl);
    }).fail(function(data){
        $('#out').html('<p>Session failure</p>');
    });
}


//履歴ページを動的に作る関数
$(document).ready(function() {
    $('#rireki_page').click(function() {
        $('#photos_1').html(null);
        $('#photos_6').html(null);
        $('#display_history').html(null);
        $('#photos_6').append('gon.imageを載せます');
        $('#photos_6').append('<p></p>');
        $('#michiru_sen').append('<img src="'+ gon.clorets +'">');
        $('#michiru_sen').append(gon.hiroya);
        $('#michiru_sen').append(gon.gazou);
        $('#michiru_sen').append('<%='+ gon.clorets +'%>');
    });
});







$(function(){
    $("#photos_1").click(function(){
        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $( this ).blur() ;	//ボタンからフォーカスを外す
        if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)
        //オーバーレイを出現させる
        $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
        $( "#modal-overlay" ).fadeIn( "slow" ) ;
        //コンテンツをセンタリングする
        centeringModalSyncer() ;
        //コンテンツをフェードインする
        $( "#modal-content" ).fadeIn( "slow" ) ;
        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $( "#modal-overlay,#modal-close" ).unbind().click( function(){
            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){
                //[#modal-overlay]を削除する
                $('#modal-overlay').remove() ;
            } ) ;
        } ) ;
    } ) ;
    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $( window ).resize( centeringModalSyncer ) ;
    //センタリングを実行する関数
    function centeringModalSyncer() {
        //画面(ウィンドウ)の幅、高さを取得
        var w = $( window ).width() ;
        var h = $( window ).height() ;
        // コンテンツ(#modal-content)の幅、高さを取得
        // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
        var cw = $( "#modal-content" ).outerWidth( {margin:true} );
        var ch = $( "#modal-content" ).outerHeight( {margin:true} );
        var cw = $( "#modal-content" ).outerWidth();
        var ch = $( "#modal-content" ).outerHeight();
        //センタリングを実行する
        $( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
    }
} ) ;

//履歴ページを見るボタンをクリック
$(function(){
    $("#rireki_page_show").click(function() {
/*
        $(window).load(function(){
           location.reload();
        });
*/
        $('#display_history').fadeOut(1);
        $('.line').fadeOut(1);
        $('.title').fadeOut(1);
        $('.author').fadeOut(1);
        $('#photos_6').fadeOut(1);
        $('#photos_1').fadeOut(1);

        $('#display_history').html(null);
        $('.line').html(null);
        $('.title').html(null);
        $('.author').html(null);
        $('#photos_6').html(null);
        $('#photos_1').html(null);

        $('#history_page').fadeIn(500);

    });
});

//トップへ戻るボタンをクリック
$(function(){
    $("#to_Top_page").click(function() {
        location.reload();
    });
});

//履歴ページのimgをクリックしたときの処理
$(function(){
    $("#history_page").click(function() {
        $('#history_page').fadeOut(1);
        var src = event.target.src.replace(/\?.*$/, '');
        $('#photos_1').append(
            '<img src="'+ src +'" alt="">'
        )
        $('#photos_1').fadeIn(500);
    });
});