"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let books;
let parent = document.getElementById('hiba');
let ratio = document.getElementById('paperbook');
let valto = document.getElementById('valto');
let gomb = document.getElementById('gomb');
let weight = 'Weight';
let size = 'Size';
let title;
let price;
let isbn;
let valtozo;
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d;
    ratio.addEventListener('change', () => {
        if (ratio.checked) {
            valto.placeholder = weight;
        }
        else {
            valto.placeholder = size;
        }
        ;
    });
    function hiba(uzenet) {
        let p = document.createElement('p');
        p.innerHTML = uzenet;
        parent.appendChild(p);
    }
    (_a = document.getElementById('title')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', () => {
        title = document.getElementById('title').value;
        if (title.length < 1) {
            hiba('A címmező nem lehet üres');
        }
    });
    (_b = document.getElementById('price')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', () => {
        price = parseInt(document.getElementById('price').value);
        if (price < 0) {
            hiba('Az ár nem lehet negatív');
        }
    });
    (_c = document.getElementById('isbn')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', () => {
        isbn = parseInt(document.getElementById('isbn').value);
    });
    (_d = document.getElementById('price')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', () => {
        valtozo = parseInt(document.getElementById('valto').value);
    });
});
