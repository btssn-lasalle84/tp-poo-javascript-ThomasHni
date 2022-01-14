// Exemple 1
function Voiture(fabricant, modele, annee) 
{
  this.fabricant = fabricant || "";
  this.modele = modele || "";
  this.annee = annee || 0;
  this.affiche = function() 
  {
    console.log("fabricant = " +  this.fabricant);
    console.log("modele = " +  this.modele);
    console.log("annee = " +  this.annee);
  }
}

var voiture1 = new Voiture();
voiture1.affiche();
voiture1.fabricant = "Renault";
voiture1.affiche();

var voiture2 = new Voiture("Peugeot", "208", 2013);
voiture2.affiche();

// Exemple 2
var Animal = {
  type: "invertébré",
  afficherType : function() 
  {
    console.log(this.type);
  }
}

var animal1 = Object.create(Animal);
animal1.afficherType();

var poisson = Object.create(Animal);
poisson.type = "poisson";
poisson.afficherType();
