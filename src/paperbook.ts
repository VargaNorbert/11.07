import {Book} from './book.js';

export class PaperBook implements Book{

    title : string;
    price : number;
    isbn : number;
    weight : number;

    constructor(title : string,price : number,isbn : number,weight:number){
        this.weight= weight;
        this.title= title;
        this.price = price;
        this.isbn=isbn;
    }

}