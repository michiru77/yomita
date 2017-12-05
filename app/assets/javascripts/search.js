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

// ソート検索関数
function sortSearch(sort, check) {
    return $.ajax({
        url: '/home_sortSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            sort: sort,
            hits: 30,
            page: 1
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
}

function historyToTop(data){
    var i = 0;
    bd.reset();
    bd.setBooksData(data[i]);
    tb.setUrl(bd.getUrl(i));
    tb.setImg(bd.getImg(i));
    tb.setTitle(bd.getTitle(i));
    tb.setAuthor(bd.getAuthor(i));
    tb.setCaption(bd.getCaption(i));
    tb.setIsbn(bd.getIsbn(i));
}

// 取得した書籍データを html に整形して出力する
function outBooks(data, check) {

    if(check === 0 || check !== 1) {
        $('#photos_6').html(null);
        bd.reset();
        ig.reset();
    }

    $.each(data, function(i) {

        var id = ig.getId();
        bd.setBooksData(data[i]);
        var img = bd.getImg(i);
        var url = bd.getUrl(i);

        var noImg = img.match(/noimage/);
        if (noImg === null) {
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
        }
    });
}
