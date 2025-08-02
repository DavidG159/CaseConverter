'use strict';

//variable
const lowercase = document.querySelector('lowCase');
const uppercase = document.querySelector('uppderCase');
const mixedcase = document.querySelector('mixedCase');
const copypasta = document.querySelector('copyPasta');
const textarea = document.querySelector('textcontent');


//function

function lowCase(text) {

    return text.toLowerCase();

}

function upCase(text) {

    return text.toUpperCase();

}

function mixedCase(text) {

    return text.split('').map((letter, i) => (i % 2) == 0 ? letter.toUpperCase() : letter.toLowerCase()).join('');

}

function copyPasta(text) {



}

//higher-order function
function convertText(str, fn) {

}

//EventListeners

