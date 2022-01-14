#!/usr/bin/env node

var readlineSync = require('readline-sync');

// saisie d'une chaîne de caractères
var langue = readlineSync.question("Quelle est votre langue ? (fr, ...) ");
var message;

// une instruction conditionnelle
if (langue == "fr")
{
    message = "Bonjour le monde";
}
else
{
    message = "Hello world";
}

// saisie d'un entier
var nb = readlineSync.question("Donnez un nombre : ");

var i = 0;
// une boucle
while (i < nb)
{
    //console.log(message);
    console.log(message + " " + (i + 1) + " fois");
    i += 1;
}
