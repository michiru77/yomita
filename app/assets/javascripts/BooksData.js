class BooksData {

    constructor() {
        this.urls = [];
        this.imgs = [];
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
    }

    getUrl(i) {
        return this.urls[i];
    }
    getImg(i) {
        return this.imgs[i];
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

    setBooksData(data){

        var url = data["params"]["itemUrl"];
        this.urls.push(url);

        var img = data["params"]["largeImageUrl"];
        this.imgs.push(img);

        var title = data["params"]["title"];
        this.titles.push(title);

        var author = data["params"]["author"].replace(/\/.*$/, '');
        this.authors.push(author);

        var genreId = data["params"]["booksGenreId"];
        genreId.split('/')[genreId.length-1];
        this.genreIds.push(genreId);

        var caption = data["params"]["itemCaption"];
        this.captions.push(caption);
    }

    reset() {
        this.urls.length = 0;
        this.imgs.length = 0;
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
    getImg() {
        return this.img;
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
    setImg(img) {
        this.img = img;
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

class BooksCounter {
    constructor() {
        this.count = 0;
    }
    getCount() {
        this.count += 1;
        return this.count;
    }
    resetCount() {
        this.count = 0;
    }
}
