"use strict";
class Invoice {
    //Constructor function - to initialize the values
    constructor(c, d, a) {
        this.client = c;
        this.date = d;
        this.amount = a;
    }
    //Method - to return something (here a string) 
    format() {
        return (`Received ${this.amount} from ${this.client} on ${this.date}`);
    }
}
const invoice1 = new Invoice('Ram', '12 Dec', 2000);
const invoice2 = new Invoice('Sita', '19 Feb', 1500);
console.log(invoice1); // We can print this invoice1 & 2 object without defining method but to print in any specific format/pattern (like in sting) we need method 
console.log(invoice2);
// let invoices: string[] = [];  // => By this ONLY strings are allowed to put in this arrray
let invoices = []; // => By this ONLY Invoices are allowed to put in this arrray
// invoices.push('Ram');  // It will give error as ONLY invoices are allowed to put in this & not any other type
invoices.push(invoice1);
invoices.push(invoice2);
//We can change like this also :-
invoice1.client = 'Hari';
invoice2.amount = 5000;
console.log(invoices);