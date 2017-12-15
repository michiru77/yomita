function excepGenre() {

    var _genres = [];

    this.setGenre = function(genre) {
        _genres.push(genre);
    };

    this.checkGenre = function(genre) {

        genre = genre.toString();
        var parentGenre = _genres.indexOf(genre.slice(0,6));
        var genre = _genres.indexOf(genre);

        if (parentGenre === -1 && genre === -1) {
            return 0;
        } else {
            return 1;
        };
    };

};

function Page() {

    var _page = 0;

    this.getPage = function(event) {
        _page += 1;
        return _page;
    };

    this.getRandPage = function(event) {
        return  Math.floor(Math.random()*100);
    };

    this.reset = function(event) {
        _page = 0;
    };

};

function Switch() {

    var _select = 0;

    this.getFunc = function(event) {
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

    this.reset = function(event) {
        _books.length = 0;
    };

};

function TopBook() {

    var _topBook = {};

    this.getUrl = function(event) {
        return _topBook.url;
    };
    this.getImg = function(event) {
        return _topBook.img;
    };
    this.getTitle = function(event) {
        return _topBook.title;
    };
    this.getAuthor = function(event) {
        return _topBook.author;
    };
    this.getCaption = function () {
        return _topBook.caption;
    };
    this.getIsbn = function(event) {
        return _topBook.isbn;
    };

    this.setTopBook = function(book) {
        Object.assign(_topBook,book);
    };

};

function IdGen() {

    var _id = 0;

    this.getId = function(event) {
        var id = _id;
        _id += 1;
        return id;
    };

    this.reset = function(event) {
        _id = 0;
    };

};
