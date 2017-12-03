"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooksData = function () {
    function BooksData() {
        _classCallCheck(this, BooksData);

        this.urls = [];
        this.imgs = [];
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
        this.isbns = [];
    }

    _createClass(BooksData, [{
        key: "getUrl",
        value: function getUrl(i) {
            return this.urls[i];
        }
    }, {
        key: "getImg",
        value: function getImg(i) {
            return this.imgs[i];
        }
    }, {
        key: "getTitle",
        value: function getTitle(i) {
            return this.titles[i];
        }
    }, {
        key: "getAuthor",
        value: function getAuthor(i) {
            return this.authors[i];
        }
    }, {
        key: "getGenreId",
        value: function getGenreId(i) {
            return this.genreIds[i];
        }
    }, {
        key: "getCaption",
        value: function getCaption(i) {
            return this.captions[i];
        }
    }, {
        key: "getIsbn",
        value: function getIsbn(i) {
            return this.isbns[i];
        }
    }, {
        key: "setBooksData",
        value: function setBooksData(data) {

            var url = data["params"]["itemUrl"];
            this.urls.push(url);

            var img = data["params"]["largeImageUrl"];
            this.imgs.push(img);

            var title = data["params"]["title"];
            this.titles.push(title);

            var author = data["params"]["author"].replace(/\/.*$/, '');
            this.authors.push(author);

            var genreId = data["params"]["booksGenreId"];
            genreId.split('/')[genreId.length - 1];
            this.genreIds.push(genreId);

            var caption = data["params"]["itemCaption"];
            this.captions.push(caption);

            var isbn = data["params"]["isbn"];
            this.isbns.push(isbn);
        }
    }, {
        key: "reset",
        value: function reset() {
            this.urls.length = 0;
            this.imgs.length = 0;
            this.titles.length = 0;
            this.authors.length = 0;
            this.genreIds.length = 0;
            this.captions.length = 0;
            this.isbns.length = 0;
        }
    }]);

    return BooksData;
}();

var TopBook = function () {
    function TopBook() {
        _classCallCheck(this, TopBook);
    }

    _createClass(TopBook, [{
        key: "getUrl",
        value: function getUrl() {
            return this.url;
        }
    }, {
        key: "getImg",
        value: function getImg() {
            return this.img;
        }
    }, {
        key: "getTitle",
        value: function getTitle() {
            return this.title;
        }
    }, {
        key: "getAuthor",
        value: function getAuthor() {
            return this.author;
        }
    }, {
        key: "getCaption",
        value: function getCaption() {
            return this.caption;
        }
    }, {
        key: "getIsbn",
        value: function getIsbn() {
            return this.isbn;
        }
    }, {
        key: "setUrl",
        value: function setUrl(url) {
            this.url = url;
        }
    }, {
        key: "setImg",
        value: function setImg(img) {
            this.img = img;
        }
    }, {
        key: "setTitle",
        value: function setTitle(title) {
            this.title = title;
        }
    }, {
        key: "setAuthor",
        value: function setAuthor(author) {
            this.author = author;
        }
    }, {
        key: "setCaption",
        value: function setCaption(caption) {
            this.caption = caption;
        }
    }, {
        key: "setIsbn",
        value: function setIsbn(isbn) {
            this.isbn = isbn;
        }
    }]);

    return TopBook;
}();

var IdGen = function () {
    function IdGen() {
        _classCallCheck(this, IdGen);

        this.id = 0;
    }

    _createClass(IdGen, [{
        key: "getId",
        value: function getId() {
            var id = this.id;
            this.id += 1;
            return id;
        }
    }, {
        key: "reset",
        value: function reset() {
            this.id = 0;
        }
    }]);

    return IdGen;
}();