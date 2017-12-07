// ソート検索関数
function sortSearch(sort, page, check) {
    return $.ajax({
        url: '/home_sortSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            sort: sort,
            hits: 30,
            page: page
        }
    }).done(function(data){
        outBooks(data, check);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
};

// 作者検索関数
function authorSearch(author, page, check) {
    return $.ajax({
        url: '/home_authorSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            author: author,
            hits: 30,
            page: page
        }
    }).done(function(data){
        outBooks(data, check);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
};

// タイトル検索関数
function titleSearch(title, page, check) {
    return $.ajax({
        url: '/home_titleSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            title: title,
            hits: 30,
            page: page
        }
    }).done(function(data){
        outBooks(data, check);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// ジャンル検索関数
function genreSearch(genreId, page, check) {
    return $.ajax({
        url: '/home_genreSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            booksGenreId: genreId,
            hits: 30,
            page: page
        }
    }).done(function(data){
        outBooks(data, check);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
};

// ISBN 検索関数
function isbnSearch(isbn, check) {
    return $.ajax({
        url: '/home_isbnSearch',
        type: 'GET',
        dataType: 'json',
        async: false,
        data: {
            isbn: isbn,
            hits: 1
        }
    }).done(function(data){
        historyToTop(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
};

function historyToTop(data){
    var i = 0;
    bd.reset();
    ig.reset();
    bd.setBooks(data[i],i);
    tb.setTopBook(bd.getBooks(i));
};

// 取得した書籍データを html に整形して出力する
function outBooks(data, check) {

    if(check === 0 || check !== 1) {
        $('#photos_6').html(null);
        bd.reset();
        ig.reset();
    };

    $.each(data, function(i) {

        var id = ig.getId();
        bd.setBooks(data[i],id);
        var url = bd.getUrl(id);
        var img = bd.getImg(id);
        var genre = bd.getGenreId(id);

        var ex = genre.toString();
        // 写真集
        var ex1 = ex.match(/001013/);
        // 漫画/青年
        var ex2 = ex.match(/001001003/);
        // 文庫/写真集
        var ex3 = ex.match(/001019014/);
        // エンタメ/フィギュア
        var ex4 = ex.match(/001011010/);
        // 電子ブック
        var ex5 = ex.match(/001024/);

        var noImg = img.match(/noimage/);;
        if (noImg === null && ex1 === null && ex2 === null && ex3 === null && ex4 === null && ex5 === null) {
            var list =// '<div class="iconBuyButton">'
                //+ '<p>'
                '<span class="iconBuyButton">'
                + '<img id="' + id + '" '
                + 'src="' + img + '"> '
            //+ '</p>'
                + '<a href="'+ url + '" '
                + 'target="_blank">'
                + '<i class="fa fa-shopping-cart fa-fw fa-border" aria-hidden="true"></i>'
                + '</a>'
                + '</span>';
            //+ '</div>';
            $("#photos_6").append(list);
        };
    });
    // ローディング画像削除
    $('#top_loading').html(null);
};
