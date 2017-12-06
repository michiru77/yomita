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

    this.setBooksData = function(data,id) {

        var url = data["params"]["itemUrl"];
        var img = data["params"]["largeImageUrl"];
        var title = data["params"]["title"];
        var author = data["params"]["author"].replace(/\/.*$/, '');
        var genreId = data["params"]["booksGenreId"];
        genreId.split('/')[genreId.length-1];
        var caption = data["params"]["itemCaption"];
        var isbn = data["params"]["isbn"];

        _books[id] = {
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
