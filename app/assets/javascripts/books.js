//= require compiled/class
//= require search
//= require history_to_top
//= require history

$(window).load(function(){
    bd = new BooksData();
    tb = new TopBook();
    ig = new IdGen();

    var author = '池井戸潤';
    var title = '恋愛';
    var isbn = '9784863367012';
    titleSearch(title, 0);
    // authorSearch(author, 0);
    // genreSearch(genreId, 0);
    // isbnSearch(isbn, 0);
});

// クリックした表紙をトップへ移動する
$(document).ready(function() {
    $('#photos_6').click(function(){

        var id = event.target.id;
        tb.setUrl(bd.getUrl(id));
        tb.setImg(bd.getImg(id));
        tb.setTitle(bd.getTitle(id));
        tb.setAuthor(bd.getAuthor(id));
        tb.setCaption(bd.getCaption(id));
        tb.setIsbn(bd.getIsbn(id));

        var url = tb.getUrl();
        var src = tb.getImg().replace(/\?.*$/, '');
        var title = tb.getTitle();
        var author = tb.getAuthor();
        var caption = tb.getCaption();
        var isbn = tb.getIsbn();

        // 履歴を上に残す
        tohistory(url,src,title,author,caption,isbn);

        // タイトル検索
        var searchTitle = title.slice(0,2);
        titleSearch(searchTitle, 0);

        // トップに表紙を配置
        putTopBook(url,src,title,author,caption);

        // 履歴情報の保存
        var img = src;
        // historySearch(apple);
        //historyStorage(apple);
        historyStorageIndex(img,isbn);
    });
});

//履歴imgをクリックした時の処理
$(document).ready(function() {
    $('#display_history').click(function() {

        var src = event.target.src;
        var alt = event.target.alt;
        var url = getUrl(alt);
        var title = getTitle(alt);
        var author = getAuthor(alt);
        var caption = getCaption(alt);

        // トップに表紙を配置
        putTopBook(url,src,title,author,caption);

        // タイトルの頭二文字を抽出
        var searchTitle = title.slice(0,2);
        titleSearch(searchTitle,0);

        // photos_6 までスクロールダウン
        scrollDown();

        //履歴情報の保存
        var img = src;
        //historySearch(apple);
        //historyStorage(img,title,author,caption);
        //historyStorageIndex(img);
    });
});

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

// 履歴削除ボタンをクリックした時の処理
$(document).ready(function() {
    $('#rireki').click(function() {
        history_delete(1);
        $('#display_history').html(null);
    });
});

//履歴ページを見るボタンをクリックした時の処理
$(function(){
    $("#rireki_page_show").click(function() {

        $('#display_history').hide(1000);
        $('.line').hide(1000);
        $('.title').hide(1000);
        $('.author').hide(1000);
        $('#photos_6').hide(1000);
        $('#photos_1').hide(1000);

        $('#rireki_page_show').hide();
        $('#history_page').show(1000);
        $('#Modoru').show();
    });
});

//戻るボタンを押した時の処理
$(function(){
    $("#Modoru").click(function() {

        $('#history_page').hide(1000);

        $('#display_history').show(1000);
        $('.line').show(1000);
        $('.title').show(1000);
        $('.author').show(1000);
        $('#photos_6').show(1000);
        $('#photos_1').show(1000);

        $('#rireki_page_show').show();

        $('#Modoru').hide();
    });
});

// トップへ戻るボタンをクリックした時の処理
$(function(){
    $("#to_Top_page").click(function() {
        location.reload();
    });
});

//履歴ページのimgをクリックしたときの処理
$(function(){
    $("#history_page").click(function() {

        var img = event.target.src;
        var isbn = event.target.alt;

        //全てのhtmlの中身を削除
        $('#display_history').html(null);
        $('.line').html(null);
        $('#photos_6').html(null);
        $('#photos_1').html(null);

        // ISBN検索により photos_1 の書籍データを取得
        isbnSearch(isbn, 0);

        /************************スリープ処理を行います***************************/

        /************************スリープ処理を行います***************************/

        //タイトル取得
        var url = tb.getUrl();
        var src = event.target.src.replace(/\?.*$/, '');
        var title = tb.getTitle();
        var author = tb.getAuthor();
        var caption = tb.getCaption();

        // トップに表紙を配置
        putTopBook(url,src,title,author,caption);

        // タイトル，作者要素を表示
        $('.title').show();
        $('.author').show();

        // photos_1，photos_6の表紙を表示
        $('#photos_1').show(1000);
        $('#photos_6').show();

        //タイトル上2文字検索
        search_title = title.slice(0,2);
        titleSearch(search_title);

        //履歴ページを隠す
        $('#history_page').hide(1000);

        //戻るボタンを隠す
        $('#Modoru').hide();

        //「履歴ページをみる」ボタンを表示する
        $('#rireki_page_show').show();

        //履歴のミチシルベを表示する
        $('#display_history').show();
    });
});

// 作者名をクリックすると作者検索を実行
$(document).ready(function() {
    $('.author').click(function() {
        var author = event.target.name;
        authorSearch(author, 0);
        // photos_6 までスクロールダウン
        scrollDown();
    })
});

// photos_1 の表紙をクリックするとキャプションを表示する
$(function(){
    $("#photos_1").click(function(){
        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $( this ).blur();	//ボタンからフォーカスを外す
        if( $( "#modal-overlay" )[0] ) return false;		//新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove();		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)
        //オーバーレイを出現させる
        $( "body" ).append( '<div id="modal-overlay"></div>' );
        $( "#modal-overlay" ).fadeIn( "slow" );
        //コンテンツをセンタリングする
        centeringModalSyncer();
        //コンテンツをフェードインする
        $( "#modal-content" ).fadeIn( "slow" );
        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $( "#modal-overlay,#modal-close" ).unbind().click( function(){
            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){
                //[#modal-overlay]を削除する
                $('#modal-overlay').remove();
            });
        });
    });
    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $( window ).resize( centeringModalSyncer );
    //センタリングを実行する関数
    function centeringModalSyncer() {
        //画面(ウィンドウ)の幅、高さを取得
        var w = $( window ).width();
        var h = $( window ).height();
        // コンテンツ(#modal-content)の幅、高さを取得
        // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
        var cw = $( "#modal-content" ).outerWidth( {margin:true} );
        var ch = $( "#modal-content" ).outerHeight( {margin:true} );
        var cw = $( "#modal-content" ).outerWidth();
        var ch = $( "#modal-content" ).outerHeight();
        //センタリングを実行する
        $( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} );
    }
});
