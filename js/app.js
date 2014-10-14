/* this is our application code */
"use strict";

var name = 'Dave';


function sayHello(name) {
    alert('Hello ' + name);
}

var f = sayHello;

//sayHello('Fred');
//f('Fred');

function onNameChange() {
    var nameInput = document.getElementById('name-input');
    document.getElementById('message').innerHTML = 'Hello  ' + nameInput.value;
}

function onReady() {
    var elem = document.getElementById('message');
    elem.innerHTML = 'Hello ' + name;

    var nameInput = document.getElementById('name-input')
    nameInput.value = 'Username';

    nameInput.value = name;
    nameInput.addEventListener('keyup', onNameChange);
}

document.addEventListener('DOMContentLoaded', onReady);

