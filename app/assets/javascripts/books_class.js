function BooksData() {

    var _urls = [];
    var _imgs = [];
    var _titles = [];
    var _authors = [];
    var _genreIds = [];
    var _captions = [];
    var _isbns = [];

    this.getUrl = function(i) {
        return _urls[i];
    };
    this.getImg = function(i) {
        return _imgs[i];
    };
    this.getTitle = function(i) {
        return _titles[i];
    };
    this.getAuthor = function(i) {
        return _authors[i];
    };
    this.getGenreId = function(i) {
        return _genreIds[i];
    };
    this.getCaption = function(i) {
        return _captions[i];
    };
    this.getIsbn = function(i) {
        return _isbns[i];
    };

    this.setBooksData = function(data) {

        var url = data["params"]["itemUrl"];
        _urls.push(url);

        var img = data["params"]["largeImageUrl"];
        _imgs.push(img);

        var title = data["params"]["title"];
        _titles.push(title);

        var author = data["params"]["author"].replace(/\/.*$/, '');
        _authors.push(author);

        var genreId = data["params"]["booksGenreId"];
        genreId.split('/')[genreId.length-1];
        _genreIds.push(genreId);

        var caption = data["params"]["itemCaption"];
        _captions.push(caption);

        var isbn = data["params"]["isbn"];
        _isbns.push(isbn);
    };

    this.reset = function() {
        _urls.length = 0;
        _imgs.length = 0;
        _titles.length = 0;
        _authors.length = 0;
        _genreIds.length = 0;
        _captions.length = 0;
        _isbns.length = 0;
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

/*
  class Test {
  constructor() {
  this.test = {};
  }
  setData(url,img,title,author,caption,isbn) {
  this.test['url'] = url;
  this.test['img'] = img;
  this.test['title'] = title;
  this.test['author'] = author;
  this.test['caption'] = caption;
  this.test['isbn'] = isbn;
  }
  getData(tmp) {
  Object.assign(tmp, this.test);
  }
  }
*/
