#!/usr/bin/env node

function Rectangle(largeur, longueur) 
{
    this.largeur = largeur;
    this.longueur = longueur;
    this.affiche = function() 
    {
        if (this.largeur !== undefined && this.longueur !== undefined)
            console.log(this.largeur + " x " +  this.longueur);
    }
    this.aire = function() 
    {
        return this.largeur * this.longueur;
    }
    this.perimetre = function()
    {
        return (this.largeur * 2) + (this.longueur * 2);
    }
}

var rectangle = new Rectangle();
rectangle.affiche();

var carre = new Rectangle(100, 100);
carre.affiche();
console.log("aire = " + carre.aire());
console.log("perimetre = " + carre.perimetre());

module.exports = Rectangle;
