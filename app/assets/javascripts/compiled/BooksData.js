"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooksData = function () {
    function BooksData() {
        _classCallCheck(this, BooksData);

        this.urls = [];
        this.imgUrls = [];
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
    }

    _createClass(BooksData, [{
        key: "getUrl",
        value: function getUrl(i) {
            return this.urls[i];
        }
    }, {
        key: "getImgUrl",
        value: function getImgUrl(i) {
            return this.imgUrls[i];
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
        key: "setUrl",
        value: function setUrl(data) {
            var url = data["params"]["itemUrl"];
            this.urls.push(url);
        }
    }, {
        key: "setImgUrl",
        value: function setImgUrl(data) {
            var imgUrl = data["params"]["largeImageUrl"];
            this.imgUrls.push(imgUrl);
        }
    }, {
        key: "setTitle",
        value: function setTitle(data) {
            var title = data["params"]["title"];
            this.titles.push(title);
        }
    }, {
        key: "setAuthor",
        value: function setAuthor(data) {
            var author = data["params"]["author"].replace(/\/.*$/, '');
            this.authors.push(author);
        }
    }, {
        key: "setGenreId",
        value: function setGenreId(data) {
            var genreId = data["params"]["booksGenreId"];
            genreId.split('/')[genreId.length - 1];
            this.genreIds.push(genreId);
        }
    }, {
        key: "setCaption",
        value: function setCaption(data) {
            var caption = data["params"]["itemCaption"];
            this.captions.push(caption);
        }
    }, {
        key: "reset",
        value: function reset() {
            this.urls.length = 0;
            this.imgUrls.length = 0;
            this.titles.length = 0;
            this.authors.length = 0;
            this.genreIds.length = 0;
            this.captions.length = 0;
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
        key: "getImgUrl",
        value: function getImgUrl() {
            return this.imgUrl;
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
        key: "setUrl",
        value: function setUrl(url) {
            this.url = url;
        }
    }, {
        key: "setImgUrl",
        value: function setImgUrl(imgUrl) {
            this.imgUrl = imgUrl;
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
    }]);

    return TopBook;
}();