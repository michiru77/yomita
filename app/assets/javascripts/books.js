//= require books_class
//= require search
//= require history

const bd = new BooksData();
const tb = new TopBook();
const ig = new IdGen();
const sw = new Switch();
const pg = new Page();

$(window).load(function(){

    //スクロールサーチイベント切り替え変数をセット
    sw.setFunc('sort');
    pg.reset();

    //トップページリロード時のローディング画像セット
    $('#top_loading').html('<div id="loading_1"><img src="/gif-load.gif"></div>');

    var sort = 'sales';
    var page = pg.getRandPage();
    setTimeout(function(){
        sortSearch(sort,page,0);
    },1000);

});

// #photos_1にmouse pointerを置いた際の処理。
$(document).ready(function() {
    $('#photos_1 img').mouseover(function(e){
        $(this).css("cursor","pointer");
        console.log('mouseover:' + e.target.id);
    });
});

// クリックした表紙をトップへ移動する
$(document).ready(function() {
    $('#photos_6').click(function(){

        //スクロールサーチイベント切り替え変数をセット
        sw.setFunc('title');
        pg.reset();

        var id = event.target.id;
        tb.setTopBook(bd.getBooks(id));

        var url = tb.getUrl();
        var src = tb.getImg().replace(/\?.*$/, '');
        var title = tb.getTitle();
        var author = tb.getAuthor();
        var caption = tb.getCaption();
        var isbn = tb.getIsbn();

        // 履歴を上に残す
        tohistory(url,src,title,author,caption,isbn);

        $('#photos_6').html(null);

        // タイトル検索
        var searchTitle = title.slice(0,2);

        setTimeout(function(){
            // ここに検索関数を放り込む
            titleSearch(searchTitle, pg.getPage(), 0);
        },1000);

        // トップに表紙を配置
        putTopBook(url,src,title,author,caption);

        // photos_1 へスクロールアップ
        scrollUp();

        // 履歴情報の保存
        var img = src;
        historyStorageIndex(img,isbn);
    });
});

//作者名をクリックすると作者検索を実行
$(document).ready(function() {
    $('.author').click(function() {
        var author = event.target.name;
        authorSearch(author,1,0);
        // photos_6 までスクロールダウン
        scrollDown();

        //スクロールサーチイベント切り替え変数セット
        sw.setFunc('author');
        pg.reset();
    })
});

// photos_1 の表紙をクリックするとキャプションを表示する
$(document).ready(function() {

    $(function () {
        $('#photos_1').click(function () {
            //キーボード操作などにより、オーバーレイが多重起動するのを防止する
            $(this).blur();	//ボタンからフォーカスを外す
            if ($("#modal-overlay")[0]) return false;		//新しくモーダルウィンドウを起動しない (防止策1)
            //if($("#modal-overlay")[0]) $("#modal-overlay").remove();		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)
            //オーバーレイを出現させる
            $("body").append('<div id="modal-overlay"></div>');
            $("#modal-overlay").fadeIn("slow");
            //コンテンツをセンタリングする
            centeringModalSyncer();
            //コンテンツをフェードインする
            $("#modal-content").fadeIn("slow");
            //[#modal-overlay]、または[#modal-close]をクリックしたら…
            $("#modal-overlay,#modal-close").unbind().click(function () {
                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $("#modal-content,#modal-overlay").fadeOut("slow", function () {
                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove();
                });
            });
        });
        //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
        $(window).resize(centeringModalSyncer);

        //センタリングを実行する関数
        function centeringModalSyncer() {
            //画面(ウィンドウ)の幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();
            // コンテンツ(#modal-content)の幅、高さを取得
            // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
            var cw = $("#modal-content").outerWidth({margin: true});
            var ch = $("#modal-content").outerHeight({margin: true});
            var cw = $("#modal-content").outerWidth();
            var ch = $("#modal-content").outerHeight();
            //センタリングを実行する
            $("#modal-content").css({"left": ((w - cw) / 2) + "px", "top": ((h - ch) / 2) + "px"});
        }
    });
});

//本の道筋imgをクリックした時の処理
$(document).ready(function() {
    $('#display_history').click(function() {

        //スクロールサーチイベント変数値set
        sw.setFunc('title');
        pg.reset();

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

        //htmlをnull
        $('#photos_6').html(null);

        setTimeout(function(){
            // ここに検索関数を放り込む
            titleSearch(searchTitle, pg.getPage(), 0);
        },1000);

        // photos_6 までスクロールダウン
        scrollDown();

        //履歴情報の保存
        var img = src;
    });
});

//履歴ページのimgをクリックしたときの処理
$(function(){
    $("#history_page").click(function() {

        // スクロールサーチイベント変数値セット
        sw.setFunc('title');
        pg.reset();

        var img = event.target.src;
        var isbn = event.target.alt;

        if( $("[name=choice_delete]:checked").val()==1 ){
            history_cDelete(isbn);
            //$('#history_page').html(null);
            event.target.remove();
            //$('#history_page').append();
        }else{
            //全てのhtmlの中身を削除
            // $('#display_history').html(null);
            $('.line').html(null);
            $('#photos_6').html(null);
            $('#photos_1').html(null);

            // ISBN検索により photos_1 の書籍データを取得
            isbnSearch(isbn, 0);

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

            //個別削除ボタンを隠す
            $('#choice_hide').hide();

            //「履歴ページをみる」ボタンを表示する
            $('#rireki_page_show').show();

            //履歴のミチシルベを表示する
            $('#display_history').show();
        }

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
        $('#history_page').html(null);
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
        //$("#choice_delete").show();
        $("#choice_hide").show();
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
        //$("#choice_delete").hide();
        $("#choice_hide").hide();
    });
});

// トップへ戻るボタンをクリックした時の処理
$(function(){
    $("#to_Top_page").click(function() {
        location.reload();
    });
});

// photos_1 に表紙を配置
function putTopBook(url,src,title,author,caption) {

    // トップの表紙，URLを追加ra
    var top = '<div id="hiroya" class="iconBuyButtonTop">'
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

    if(caption){
        // あらすじ追加
        var captionHtml = '<p class="red bold">'
            + caption
            + '<br /></p>'
            + '<p><a id="modal-close" class="button-link">閉じる</a></p>';
    }else{
        var captionHtml = '<p class="red bold">'
            + 'あらすじはありません'
            + '<br /></p>'
            + '<p><a id="modal-close" class="button-link">閉じる</a></p>';
    }

    $('#modal-content-innar').html(null);
    $('#modal-content-innar').append(captionHtml);
}

// スクロールアップ
function scrollUp() {
    var position = $("#photos_1").offset().top;
    $("html,body").animate({
        scrollTop: position
    });
}

// スクロールダウン
function scrollDown() {
    var position = $("#photos_6").offset().top;
    $("html,body").animate({
        scrollTop: position
    });
}

// ページ下部検知
$(function() {
    $(window).scroll(function(ev) {
        var $window = $(ev.currentTarget),
            height = $window.height(),
            scrollTop = $window.scrollTop(),
            documentHeight = $(document).height();

        if (documentHeight === height + scrollTop) {

            //ローディング画像追加
            $('#end_loading').html('<div id="loading_2"><img src="/gif-load.gif"></div>');

            //サーチ切り替えナンバー取得
            var number = sw.getFunc();

            sleep(1000);
            if (number == 0) {
                sortSearch('sales', pg.getRandPage(), 1);
            }else if(number == 1){
                titleSearch(tb.getTitle().slice(0,2), pg.getPage(), 1);
            } else {
                authorSearch(tb.getAuthor(), pg.getPage(), 1);
            };
        };
    });
});

//スリープ処理関数
function sleep(waitMsec) {

    var startMsec = new Date();
    // 指定ミリ秒間、空ループ。CPUは常にビジー。
    while (new Date() - startMsec < waitMsec);
};
