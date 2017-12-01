// 作者検索関数
function authorSearch(author, check) {
    return $.ajax({
        url: '/home_authorSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            author: author,
            hits: 30
        }
    }).done(function(data){
        outBooks(data, check);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// タイトル検索関数
function titleSearch(title, check) {
    return $.ajax({
        url: '/home_titleSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            title: title,
            hits: 30
        }
    }).done(function(data){
        outBooks(data, check);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// ジャンル検索関数
function genreSearch(genreId, check) {
    return $.ajax({
        url: '/home_genreSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            booksGenreId: genreId,
            hits: 30
        }
    }).done(function(data){
        outBooks(data, check);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// ISBN 検索関数
function isbnSearch(isbn, check) {
    return $.ajax({
        url: '/home_isbnSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            isbn: isbn,
            hits: 30
        }
    }).done(function(data){
        outBooks(data, check);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// 取得した書籍データを html に整形して出力する
function outBooks(data, check) {

    (check === 0 || check !== 1) && bd.reset();

    $.each(data, function(i) {

        bd.setBooksData(data[i]);
        var img = bd.getImg(i);
        var url = bd.getUrl();

        var noImg = img.match(/noimage/);
        if (noImg === null) {
            var list = '<div class="iconBuyButton">'
                + '<p>'
                + '<img id="' + i +'" '
                + 'src="' + img + '"> '
                + '</p>'
                + '<a href="'+ url + '" '
                + 'target="_blank">'
                + '<i class="fa fa-shopping-cart fa-fw fa-border" aria-hidden="true"></i>'
                + '</a>'
                + '</div>';
            $("#photos_6").append(list);
        }
    });
}
