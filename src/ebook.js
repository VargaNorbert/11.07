"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ebook = void 0;
class Ebook {
    constructor(title, price, isbn, size) {
        this.size = size;
        this.title = title;
        this.price = price;
        this.isbn = isbn;
    }
}
exports.Ebook = Ebook;
