function excepGenre() {

    var _genres = [];

    this.setGenre = function(genre) {
        _genres.push(genre);
    };

    this.checkGenre = function(genre) {

        genre = genre.toString();

        var _excep = 0;
        _genres.forEach(function(g) {
            if (genre.match(g) !== null) {
                _excep = 1;
            }
        });
        return _excep;
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
        } else {
            alert("miss");
        }
    };

}

function BooksData() {

    var _books = [];
    var _book = {};

    this.getBooks = function(i) {
        return _books[i];
    };
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

    this.setBooks = function(data) {

        var url = data["params"]["itemUrl"];
        var img = data["params"]["largeImageUrl"];
        var title = data["params"]["title"];
        var author = data["params"]["author"].replace(/\/.*$/, '');
        var genreId = data["params"]["booksGenreId"].split('/', 1);
        var caption = data["params"]["itemCaption"];
        var isbn = data["params"]["isbn"];

        _book = {
            url: url,
            img: img,
            title: title,
            author: author,
            genreId: genreId,
            caption: caption,
            isbn: isbn
        };

        _books.push(_book);
    };

    this.reset = function() {
        _books.length = 0;
    };

}

function TopBook() {

    var _topBook = {};

    this.getUrl = function() {
        return _topBook.url;
    };
    this.getImg = function() {
        return _topBook.img;
    };
    this.getTitle = function() {
        return _topBook.title;
    };
    this.getAuthor = function() {
        return _topBook.author;
    };
    this.getCaption = function () {
        return _topBook.caption;
    };
    this.getIsbn = function() {
        return _topBook.isbn;
    };

    this.setTopBook = function(book) {
        Object.assign(_topBook, book);
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
