// 作者検索関数
function authorSearch(author, hits) {
    return $.ajax({
        url: '/home_authorSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            author: author,
            hits: hits
        }
    }).done(function(data){
        outBooks(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// タイトル検索関数
function titleSearch(title, hits) {
    return $.ajax({
        url: '/home_titleSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            title: title,
            hits: hits
        }
    }).done(function(data){
        outBooks(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// ジャンル検索関数
function genreSearch(genreId, hits) {
    return $.ajax({
        url: '/home_genreSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            booksGenreId: genreId,
            hits: hits
        }
    }).done(function(data){
        outBooks(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}


