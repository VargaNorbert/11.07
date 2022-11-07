import {Book} from './book.js';
import {PaperBook} from './paperbook.js';
import {Ebook} from './ebook.js';

let books : Book[];
let parent = document.getElementById('hiba') as HTMLDivElement;
let ratio = document.getElementById('paperbook') as HTMLInputElement;
let valto = document.getElementById('valto') as HTMLInputElement;
let gomb = document.getElementById('gomb') as HTMLButtonElement;
let weight : string = 'Weight';
let size : string = 'Size';

let title:string;
let price : number;
let isbn : number;
let valtozo : number;

document.addEventListener('DOMContentLoaded',()=>{

    
    
    

    ratio.addEventListener('change',()=>{

    if(ratio.checked){
        valto.placeholder=weight;
    }else{
        valto.placeholder=size;
    };
    })

    function hiba(uzenet:string){
        let p = document.createElement('p');
    
        p.innerHTML = uzenet;
        parent.appendChild(p);
    }

    document.getElementById('title')?.addEventListener('change',()=>{
        title =(document.getElementById('title') as HTMLInputElement).value;
        if(title.length<1){
            hiba('A címmező nem lehet üres');
        }
    })

    document.getElementById('price')?.addEventListener('change',()=>{
        price = parseInt((document.getElementById('price') as HTMLInputElement).value);
        if(price<0){
            hiba('Az ár nem lehet negatív');
        }
    })

    document.getElementById('isbn')?.addEventListener('change',()=>{
        isbn = parseInt((document.getElementById('isbn') as HTMLInputElement).value);

       
    })

    document.getElementById('price')?.addEventListener('change',()=>{
        valtozo=  parseInt((document.getElementById('valto') as HTMLInputElement).value);
    })


});