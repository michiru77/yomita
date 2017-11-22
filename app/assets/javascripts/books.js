/*
  ページが読み込まれた後に，booksSearch() に4つの引数を渡して実行する。

  author: 作者名を格納
  title:  タイトルを格納
  hits:   検索ヒット数を指定。0-30までの整数
  mode:   作者検索であれば0，タイトル検索であれば1
*/

class booksData {
    constructor() {
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
    }

    getTitle(i) {
        return this.titles[i];
    }
    getAuthor(i) {
        return this.authors[i];
    }
    getGenreId(i) {
        return this.genreIds[i];
    }
    getCaptions(i) {
        return this.captions[i];
    }

    setTitle(title) {
        this.titles.push(title);
    }
    setAuthor(author) {
        this.authors.push(author);
    }
    setGenreId(genreId) {
        this.genreIds.push(genreId);
    }
    setCaptions(caption) {
        this.captions.push(caption);
    }
}

$(window).load(function(){
    var bd = new booksData();
    var author = '西尾維新';
    var title = '恋愛';
    var genre = 001004008;
    var hits = 30;
    titleSearch(title, hits);
    toTop(new booksData());

});

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

function genreSearch(genre, hits) {
    return $.ajax({
        url: '/home_genreSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            size: 0,
            booksGenreId: genre,
            hits: hits
        }
    }).done(function(data){
        outBooks(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

// 取得した書籍データを html に整形して出力
function outBooks(data) {
    $.each(data, function(i) {
        var url = data[i]["params"]["itemUrl"];
        var title = data[i]["params"]["title"];
        var author = data[i]["params"]["author"].replace(/\/.*$/, '');
        var genreId = data[i]["params"]["booksGenreId"];
        genreId = genreId.split('/')[genreId.length-1];
        var imgUrl = data[i]["params"]["largeImageUrl"];
        var cap = data[i]["params"]["itemCaption"];
        var noImg = imgUrl.match(/noimage/);

        if (noImg === null) {
            var list = '<p><img src="'
                + imgUrl
                + '" '
                + 'alt="'
                + 'title:'
                + title
                + ':tl '
                + 'author:'
                + author
                + ':at '
                + 'genreId:'
                + genreId
                + ':gr'
                + '">'
                + '</p>'
            $("#photos_6").append(list);
        }
    });
}

var toTop = function(bd) {
    $('#photos_6').click(function(){
        var src = event.target.src.replace(/\?.*$/, '');
        var alt = event.target.alt;
        var title = getTitle(alt);
        var author = getAuthor(alt);
        var genreId = getGenreId(alt);
        var top = '<p>'
            + '<img src="'
            + src
            + '" '
            + 'alt="'
            + 'title:'
            + title
            + ':tl '
            + 'author:'
            + author
            + ':at '
            + 'genreId:'
            + genreId
            + ':gr'
            + '">'
            + '</p>';

        $('#photos_1').html(null);
        $('#photos_1').html(top);
        var hits = 30;
        $('#photos_6').html(null);
        var title = title.slice(0,2);
        titleSearch(title, hits);
        //        $("html").animate({scrollTop:0},"500");
    });
}

$(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {

    }
});

function getTitle(alt) {
    title = alt.match(/title:.*.:tl/)[0];
    title = title.replace(/title:/, '');
    title = title.replace(/\:tl/, '');
    return title
}

function getAuthor(alt) {
    author = alt.match(/author:.*:at/)[0];
    author = author.replace(/author:/, '');
    author = author.replace(/:at/, '');
    return author
}

function getGenreId(alt) {
    genreId = alt.match(/genreId:.*:gr/, '')[0];
    genreId = genreId.replace(/genreId:/, '');
    genreId = genreId.replace(/:gr/, '');
    return genreId
}
