class Book {
    constructor(title, author, pageCount){
        this._title = title;
        this._author = author;
        this._pageCount = pageCount;
    }
    printInfo(){
        return `Название: ${this._title}, Автор: ${this._author}, колличество страниц: ${this._pageCount}`;
    }
}

export {Book}