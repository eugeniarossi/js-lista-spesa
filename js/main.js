'use strict';

//------------- ESEMPIO CICLO FOR ------------------

// Salvo la lista non ordinata del DOM in una variabile
const ul = document.querySelector('ul');
// Creo un array con la lista di elementi
const shoppingList = ['pane', 'latte', 'pasta'];

// Definisco un ciclo for
for (let i = 0; i < shoppingList.length; i++) {
    // Creo un elemento li 
    const li = document.createElement('li');
    // Assegno il contenuto ad li
    li.innerText = (shoppingList[i]);
    // Inserisco li nella lista del DOM
    ul.append(li);
}

//---------------- CICLO WHILE ---------------------

// Creo un secondo array con ulteriori elementi
const shoppingList2 = ['succo', 'cookies', 'caffè'];
// Definisco una variabile = 0
let x = 0;

// Definisco il ciclo while
while (x < shoppingList2.length) {
    // Creo un elemento li 
    const li = document.createElement('li');
    // Assegno il contenuto ad li
    li.innerText = (shoppingList2[x]);
    // Inserisco li nella lista del DOM
    ul.append(li);
    // Incremento x
    x++;
}

//--------------- CICLO DO WHILE --------------------

// Creo un terzo array con ulteriori elementi
const shoppingList3 = ['thè', 'cannella'];
// Definisco una variabile = 0
let y = 0;

// Definisco il ciclo do while
do {
    // Creo un elemento li 
    const li = document.createElement('li');
    // Assegno il contenuto ad li
    li.innerText = (shoppingList3[y]);
    // Inserisco li nella lista del DOM
    ul.append(li);
    // Icremento y
    y++;
// Definisco la condizione del ciclo
} while (y < shoppingList3.length);

