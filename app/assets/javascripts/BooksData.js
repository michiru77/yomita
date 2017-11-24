class BooksData {
    constructor() {
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
    }

    getTitle(i) {
        //        alert(this.titles[i]);
        return this.titles[i];
    }
    getAuthor(i) {
        return this.authors[i];
    }
    getGenreId(i) {
        return this.genreIds[i];
    }
    getCaption(i) {
        return this.captions[i];
    }

    setTitle(data) {
        var title =  data["params"]["title"];
        this.titles.push(title);
    }
    setAuthor(data) {
        var author = data["params"]["author"].replace(/\/.*$/, '');
        this.authors.push(author);
    }
    setGenreId(data) {
        var genreId = data["params"]["booksGenreId"];
        genreId.split('/')[genreId.length-1];
        this.genreIds.push(genreId);
    }
    setCaption(data) {
        var caption = data["params"]["itemCaption"];
        this.captions.push(caption);
    }

    reset() {
        this.titles.length = 0;
        this.authors.length = 0;
        this.genreIds.length = 0;
        this.captions.length = 0;
    }
}

class TopBook {
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getCaption() {
        return this.caption;
    }
    
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
    setCaption(caption) {
        this.caption = caption;
    }
}


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