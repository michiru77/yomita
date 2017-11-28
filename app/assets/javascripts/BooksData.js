class BooksData {

    constructor() {
        this.urls = [];
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
        this.isbns = [];
    }

    getIsbn(i) {
        return this.isbns[i];
    }
    setIsbn(data) {
        var isbn = data["params"]["isbn"];
        this.isbns.push[isbn];
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
        this.titles.length = 0;
        this.authors.length = 0;
        this.genreIds.length = 0;
        this.captions.length = 0;
    }
}

class TopBook {
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getCaption() {
        return this.caption;
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
