import {Book} from './book.js';

export class Ebook implements Book{

    title : string;
    price : number;
    isbn : number;
    size : number;

    constructor(title : string,price : number,isbn : number,size:number){
        this.size= size;
        this.title= title;
        this.price = price;
        this.isbn=isbn;
    }

}