function excepGenre() {

    var _genres = [];
    var _excep = 0;

    this.setGenre = function(genre) {
        _genres.push(genre);
    };

    this.checkGenre = function(genre) {

        genre = genre.toString();

        for (var g of _genres) {
            var excep = genre.match(g);
            if (excep !== null) {
                _excep = 1;
                break;
            } else {
                _excep = 0;
            };
        };

        return _excep;
    };

};

function Page() {

    var _p = 0;

    this.getPage = function() {
        _p += 1;
        return _p;
    };

    this.getRandPage = function() {
        return  Math.floor(Math.random()*100);
    };

    this.reset = function() {
        _p = 0;
    };

};

function Switch() {

    var _f = 0;

    this.getFunc = function() {
        return _f;
    };

    this.setFunc = function(f) {
        if (f === "sort") {
            _f = 0;
        } else if (f === "title") {
            _f = 1;
        } else if (f === "author") {
            _f = 2;
        } else {
            alert("miss");
        };
    };

};

function BooksData() {

    var _books = [];

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

    this.setBooks = function(data,i) {

        var url = data["params"]["itemUrl"];
        var img = data["params"]["largeImageUrl"];
        var title = data["params"]["title"];
        var author = data["params"]["author"].replace(/\/.*$/, '');
        var genreId = data["params"]["booksGenreId"].split('/', 1);
        var caption = data["params"]["itemCaption"];
        var isbn = data["params"]["isbn"];

        _books[i] = {
            url: url,
            img: img,
            title: title,
            author: author,
            genreId: genreId,
            caption: caption,
            isbn: isbn
        };
    };

    this.reset = function() {
        _books.length = 0;
    };

};

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
        Object.assign(_topBook,book);
    };
    this.setUrl = function(url) {
        _topBook.url = url;
    };
    this.setImg = function(img) {
        _topBook.img = img;
    };
    this.setTitle = function(title) {
        _topBook.title = title;
    };
    this.setAuthor = function(author) {
        _topBook.author = author;
    };
    this.setCaption = function(caption) {
        _topBook.caption = caption;
    };
    this.setIsbn = function(isbn) {
        _topBook.isbn = isbn;
    };

};

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

};
