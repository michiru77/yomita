class BooksData {

    constructor() {
        this.urls = [];
        this.imgUrls = [];
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
    }

    getUrl(i) {
        return this.urls[i];
    }
    getImgUrl(i) {
        return this.imgUrls[i];
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
    getCaption(i) {
        return this.captions[i];
    }

    setUrl(data) {
        var url = data["params"]["itemUrl"];
        this.urls.push(url);
    }
    setImgUrl(data) {
        var imgUrl = data["params"]["largeImageUrl"];
        this.imgUrls.push(imgUrl);
    }
    setTitle(data) {
        var title = data["params"]["title"];
        this.titles.push(title);
    }
    setAuthor(data) {
        var author = data["params"]["author"].replace(/\/.*$/, '');
        this.authors.push(author);
    }
    setGenreId(data) {
        var genreId = data["params"]["booksGenreId"];
        genreId.split('/')[genreId.length-1];
        this.genreIds.push(genreId);
    }
    setCaption(data) {
        var caption = data["params"]["itemCaption"];
        this.captions.push(caption);
    }

    reset() {
        this.urls.length = 0;
        this.titles.length = 0;
        this.authors.length = 0;
        this.genreIds.length = 0;
        this.captions.length = 0;
    }
}

class TopBook {
    getUrl() {
        return this.url;
    }
    getImgUrl() {
        return this.imgUrl;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getCaption() {
        return this.caption;
    }

    setUrl(url) {
        this.url = url;
    }
    setImgUrl(imgUrl) {
        this.imgUrl = imgUrl;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
    setCaption(caption) {
        this.caption = caption;
    }
}
