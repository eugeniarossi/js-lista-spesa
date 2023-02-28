'use strict';

// Creo un array con la lista degli elementi
const shoppingList = ['lorem', 'ipsum', 'sit amet', 'consectetur', 'adipisicing', 'elit'];
// Salvo in una variabile la lista del DOM
const ul = document.querySelector('ul');

// Definisco due variabili in cui salvo gli elementi input
const textInput = document.getElementById('text-input');
const addButton = document.getElementById('add-button');

// Definisco una variabile = 0
let i = 0;

// Definisco il ciclo while
while (i < shoppingList.length) {
    // Creo un elemento li 
    const li = document.createElement('li');
    // Assegno il contenuto ad li
    li.innerText = (shoppingList[i]);
    // Inserisco li nella lista del DOM
    ul.append(li);
    // Incremento i
    i++;
}

// Definisco una lista di tutti gli li
let liList = document.querySelectorAll('li');
// console.log(liList);

// Assegno agli li l'evento onclick
for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener('click', function() {
        liList[i].classList.toggle('line-through');
    })
}

// Aggiungo un evento onclick al button add
addButton.addEventListener('click', function() {
    // Leggo il valore di input text
    const newItem = textInput.value;

    if (newItem === '') {
        alert('Inserisci del testo');
    } else {
        // Creo un elemento li 
        const li = document.createElement('li');
        // Assegno il contenuto ad li
        li.innerText = (newItem);
        // Inserisco li nella lista del DOM
        ul.append(li);
    }
    // Azzero il value dell'input text
    textInput.value = '';
});