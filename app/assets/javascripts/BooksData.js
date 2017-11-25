class BooksData {
    constructor() {
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
    }

    getTitle(i) {
        //        alert(this.titles[i]);
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

    setTitle(data) {
        var title =  data["params"]["title"];
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
