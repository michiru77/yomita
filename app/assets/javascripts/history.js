// クリックされた変数をsessionに保存する
function historySearch(fruit) {
    historyStorage(fruit);
}

var small_img_list = new Array();

// クリックした表紙を履歴に追加
function tohistory(url,src,title,author,caption,isbn) {
    //alert("isbn\t"+isbn);
    //alert("gon.isbn\t"+gon.isbn.indexOf(isbn));
    //alert("appendList\t"+appendList.indexOf(isbn));
    if( (gon.isbn.indexOf(isbn)==-1) && (appendList.indexOf(isbn)==-1) ){
        $('#history_page').append(
            '<img src="'+ src +'" width="90px" height="auto" alt="'+ isbn +'" >'
        )
    }

    if((appendList.indexOf(isbn)==-1)){

        var book = {
            url: tb.getUrl(),
            img: tb.getImg(),
            title: tb.getTitle(),
            author: tb.getAuthor(),
            caption: tb.getCaption()
        };
        histBd.setBooks(book);
        var id = histIg.getId() + 3000;
        /* ヘッダーに並べる本のimg */
        small_img_list.push('<img ' + 'id="' + id + '" '
                            + 'src="' + src + '" width="20px" height="auto"'
                            + '>');

        if(small_img_list.length>20){
            small_img_list.shift();
        }

        $('.small-img').html(null);

        /* 本の道筋(img)をヘッダーにappendする処理 */
        /* ちょっとしたバグ:追加するごとに関数が呼ばれる*/
        for(var i=0;i<small_img_list.length;i++){
            $('.small-img').append(small_img_list[i])
            /*
              .find('img')
              .mouseover(function () {
              var src = $(this).attr('src');
              //var title =
              showImg(src);
              })
              .mouseout(function() {
              hideImg();
              });
            */
        }

        appendList.push(isbn);
    }
}

//履歴削除
function history_delete(one) {
    return $.ajax({
        url: '/home_index',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            number: one
        }
    });
}
//個別履歴削除
function history_cDelete(isbn) {
    return $.ajax({
        url: '/home_defcDelete',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            cDeleteN: isbn
        }
    });
}


//画像imgデータを新しく作成した履歴ページに送信
function historyStorageIndex(img,isbn) {
    return $.ajax({
        url: '/',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            img: img,
            ISBN1: isbn
            //caption: caption
            //title: title,
            //author: author,
            //caption: caption
        }
    }).done(function(data){

    }).fail(function(data){
        $('#out').html('<p>Session failure</p>');
    });
}

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
