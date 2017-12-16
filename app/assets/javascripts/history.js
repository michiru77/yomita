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

        /* ヘッダーに並べる本のimg */
         small_img_list.push('<img class="Hello" src="' + src + '" width="20px" height="auto" alt="'
             + 'url:' + url + ':url '
             + 'title:'+ title + ':title '
             + 'author:' + author + ':author '
             + 'caption:' + caption + ':caption'
             + '" >');

        if(small_img_list.length>20){
            small_img_list.shift();
        }

        $('.small-img').html(null);

        /* 本の道筋(img)をヘッダーにappendする処理 */
        /* ちょっとしたバグ:追加するごとに関数が呼ばれる*/
        for(var i=0;i<small_img_list.length;i++){
          $('.small-img').append(small_img_list[i])
              .find('img')
              .mouseover(function () {
              var src = $(this).attr('src');
              //var title =
              showImg(src);
          })
              .mouseout(function() {
                  hideImg();
              });
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
