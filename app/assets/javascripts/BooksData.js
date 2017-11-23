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
    getCaptions(i) {
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
}
