function excepGenre() {

    var _genres = [];

    this.setGenre = function(genre) {
        _genres.push(genre);
    };

    this.checkGenre = function(genre) {
        genre = genre.toString();
        for (var i=0; i<_genres.length; i++) {
            var excep = genre.match(_genres[i]);
            if (excep !== null ) {
                return 1;
            }
        }
        return 0;
    };

}

function Page() {

    var _page = 0;

    this.getPage = function() {
        _page += 1;
        return _page;
    };

    this.getRandPage = function() {
        return  Math.floor(Math.random()*100);
    };

    this.reset = function() {
        _page = 0;
    };

}

function Switch() {

    var _select = 0;

    this.getFunc = function() {
        return _select;
    };

    this.setFunc = function(select) {
        if (select === "sort") {
            _select = 0;
        } else if (select === "title") {
            _select = 1;
        } else if (select === "author") {
            _select = 2;
        } else if (select === "genre"){
            _select = 3;
        } else {
            alert("miss");
        }
    };

}

function BooksData() {

    var _books = [];

    this.getUrl = function(i) {
        return _books[i].url;
    };
    this.getImg = function(i) {
        return _books[i].img;
    };
    this.getTitle = function(i) {
        return _books[i].title;
    };
    this.getAuthor = function(i) {
        return _books[i].author;
    };
    this.getGenreId = function(i) {
        return _books[i].genreId;
    };
    this.getCaption = function(i) {
        return _books[i].caption;
    };
    this.getIsbn = function(i) {
        return _books[i].isbn;
    };

    this.getBooks = function(i) {
        return _books[i];
    };
    this.setBooks = function(data) {
        _books.push(data);
    };

    this.reset = function() {
        _books.length = 0;
    };

}

function TopBook() {

    var _topBook = [];

    this.getTopBook = function() {
        return _topBook[0];
    };
    this.getUrl = function() {
        return _topBook[0].url;
    };
    this.getImg = function() {
        return _topBook[0].img;
    };
    this.getTitle = function() {
        return _topBook[0].title;
    };
    this.getAuthor = function() {
        return _topBook[0].author;
    };
    this.getCaption = function () {
        return _topBook[0].caption;
    };
    this.getIsbn = function() {
        return _topBook[0].isbn;
    };

    this.setTopBook = function(book) {
        _topBook[0] = book;
    };

}

function IdGen() {

    var _id = 0;

    this.getId = function() {
        var id = _id;
        _id += 1;
        return id;
    };

    this.reset = function() {
        _id = 0;
    };

}
