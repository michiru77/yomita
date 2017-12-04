class BooksData {

    constructor() {
        this.urls = [];
        this.imgs = [];
        this.titles = [];
        this.authors = [];
        this.genreIds = [];
        this.captions = [];
        this.isbns = [];
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
    getIsbn(i) {
        return this.isbns[i];
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

        var isbn = data["params"]["isbn"];
        this.isbns.push(isbn);
    }

    reset() {
        this.urls.length = 0;
        this.imgs.length = 0;
        this.titles.length = 0;
        this.authors.length = 0;
        this.genreIds.length = 0;
        this.captions.length = 0;
        this.isbns.length = 0;
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
    getIsbn() {
        return this.isbn;
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
    setIsbn(isbn) {
        this.isbn = isbn;
    }
}

class IdGen {
    constructor() {
        this.id = 0;
    }
    getId() {
        var id = this.id;
        this.id += 1;
        return id;
    }
    reset() {
        this.id = 0;
    }
}

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
    
