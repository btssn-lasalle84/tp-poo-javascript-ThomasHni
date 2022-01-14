# TP POO : JavaScript

- [TP POO : JavaScript](#tp-poo--javascript)
  - [Le langage JavaScript](#le-langage-javascript)
    - [Présentation](#présentation)
    - [Le typage](#le-typage)
  - [La syntaxe](#la-syntaxe)
  - [Interprétation de code POO](#interprétation-de-code-poo)
  - [Travaux pratiques](#travaux-pratiques)
    - [Pré-requis](#pré-requis)
    - [Travail demandé](#travail-demandé)
  - [Bac à sable et développement en ligne](#bac-à-sable-et-développement-en-ligne)

**Les objectifs de ce TP sont de s’initier à la programmation JavaScript en transférant ses connaissances de la programmation orientée objet.**

## Le langage JavaScript

Cette partie présente les éléments essentiels à connaître sur JavaScript. Evidemment, cela ne remplace pas un cours ou la documentation officielle du langage.
### Présentation

JavaScript (qui est souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que **Node.js**. Le code JavaScript est interprété ou compilé à la volée (JIT). 

> JavaScript ne doit pas être confondu avec le langage de programmation Java.

Le standard pour JavaScript est **ECMAScript**.

> JavaScript a été créé en 1995 par Brendan Eich. Il a été standardisé sous le nom d’ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. JavaScript n’est depuis qu’une implémentation d’ECMAScript, celle mise en oeuvre par la fondation Mozilla. L’implémentation d’ECMAScript par Microsoft (dans Internet Explorer jusqu’à sa version 9) se nomme JScript, tandis que celle d’Adobe Systems se nomme ActionScript.

C’est un langage à objets utilisant le concept de **prototype** (une POO sans classe, fondée sur la notion de prototype qui est un objet à partir duquel on crée de nouveaux objets) :

- Tous les objets sont des instances ;
- On définit et on crée un ensemble d’objets avec des fonctions qui sont des constructeurs ;
- On crée un seul objet grâce à l’opérateur `new` ;
- Le constructeur ou le prototype définit un ensemble de propriétés initiales. Il est possible d’ajouter ou de retirer des propriétés dynamiquement.

> Les classes JavaScript ont été introduites avec ECMAScript 2015 : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes.

Ressources :

- Site officiel : https://developer.mozilla.org/fr/docs/Web/JavaScript
- Standard ECMA-262 : www.ecma-international.org
- Node.js : https://nodejs.org/en/
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Le_modèle_objet_JavaScript_en_détails
- Cours JavaScript : http://tvaira.free.fr/web/cours-javascript.pdf et http://tvaira.free.fr/web/

Le langage JavaScript est un des langages les plus populaires actuellement :

![](images/tiobe.png)

### Le typage

Tous les langages de programmation permettent de manipuler des valeurs avec des variables.

Le typage d’une variable consiste à associer à son nom un « type » de donnée.

> Pour rappel, le « type » est la convention d’interprétation (codage) de la séquence de bits qui constitue la variable. Le type de la variable spécifie aussi la longueur de cette séquence (8 bits, 32 bits, 64 bits, ...).

Suivant les langages de programmation, il existe plusieurs manières de considérer le typage :

- Typage statique : il consiste à demander au programmeur de déclarer expressément chaque variable en indiquant son type. Exemples de langage à typage statique : C, C++, Java, C#
- Typage dynamique : il consiste à laisser l’interpréteur réaliser cette opération de typage « à la volée » lors de l’exécution du code. C’est la valeur affectée à la variable qui précisera son type.
Exemples de langage à typage dynamique : PHP, Perl, Python, **JavaScript**, bash (shell Linux)
- Typage fort : Un langage de programmation est dit fortement typé lorsqu’il garantit que les types de données employés décrivent correctement les données manipulées. Exemples de langage fortement typé : C++, Java, C#, Python
- Typage faible : Un langage de programmation est dit faiblement typé lorsqu’il ne considère pas comme une erreur les changements de types. Exemples de langage faiblement typé : PHP, **JavaScript**, C (car il accepte les transtypages implicites comme par exemple `int` vers `short`)

Le langage JavaScript est doté d’un **typage dynamique faible**.

Exemple d’utilisation des types en JavaScript (`type.js`) :

```js
var a = 1; // un nombre
var b = 2.5; // un nombre
var c = "hello"; // une chaine de caracteres
var d; // undefined

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

var x = "5"; // une chaine de caracteres
var y = 1+ y; // un nombre
console.log(typeof x);
console.log(typeof y);

console.log(y); // NaN (Not a Number)
```

Le code JavaScript a besoin d’un objet global pour y rattacher les déclarations (variables et fonctions) avant d’exécuter des instructions. La situation la plus connue est celle de l’objet `window` obtenu dans le contexte d’une page web. Du code JavaScript peut être intégré directement au sein des pages web (avec les balises `<script></script>`, pour y être exécuté sur le poste client. C’est alors le navigateur web qui prend en charge l’exécution de ces programmes appelés scripts.

```html
<!DOCTYPE html>
<html dir="ltr" lang="fr">
  <head>
    <meta charset="utf8" />
    <script>
      // Le code JavaScript
      alert('Hello world!');
    </script>
  </head>
<body>
</body>
</html>
```

JavaScript peut également être utilisé comme langage de programmation sur un serveur HTTP à l’image des langages comme PHP. Il existe par ailleurs des projets indépendants et Open Source d’implémentation de serveurs en JavaScript. Parmi eux, on pourra distinguer **Node.js**, une plateforme polyvalente de développement d’applications réseau.

## La syntaxe

Le langage JavaScript utilise une syntaxe très proche de celle utilisée en C/C++.

En C, chaque instruction se termine par un point-virgule (`;`). JavaScript est plus souple, permettant à une fin de ligne de marquer implicitement la fin d’une instruction. Cet usage est déconseillé.

## Interprétation de code POO

Soit le script JavaScript `poo.js` :

```js
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
```

Question 1. Qu’est-ce que `Voiture` ?

Question 2. Qu’est-ce que `voiture1` ?

Question 3. Qu’est-ce que `fabricant` ?

Question 4. Qu’est-ce que `affiche()` ?

Question 5. Qu’est-ce que fait `affiche()` ?

Question 6. Qu’est-ce que font `new` et `create()` ?

> A compléter dans le fichier `compte-rendu.md` (au format [Markdown](https://guides.github.com/features/mastering-markdown/)) fourni.

## Travaux pratiques

### Pré-requis

Programmer en JavaScript avec Nodejs sous Ubuntu : https://doc.ubuntu-fr.org/nodejs

```sh
$ sudo apt install nodejs
$ sudo apt install npm
$ npm install --save readline-sync
```

Version de Nodejs :

```sh
$ node --version
v11.15.0
```

Il est possible de programmer directement dans l’interpréteur Nodejs en mode CLI :

```sh
$ node
> var a = 1;
undefined
> console.log(a);
1
undefined
> .exit
```

> L’interpréteur affiche le retour de chaque instruction ou `undefined` sinon.

Le script JavaScript `helloworld.js` à exécuter avec Nodejs :

```js
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
```

> La première ligne sert à préciser le chemin de l’interpréteur précédé des caractères `#!` (le _shebang_) qui exécutera le script. Cette ligne est inutile dans le cas d’une programmation web.

Il existe plusieurs manières d’exécuter un script JavaScript de façon locale (mode CLI) :

- le rendre exécutable :

```sh
$ chmod +x helloworld.js
$ ./helloworld.js
```

- utiliser l’interpréteur Nodejs :

```sh
$ node poo.js
```

### Travail demandé

Pour l’écriture d’un programme orientée objet en JavaScript, on désire disposer d’objets `Rectangle`.

Un `Rectangle` doit posséder une largeur et une longueur. Lorsque l’on crée un Rectangle, il est possible de préciser sa largeur et sa longueur sinon il aura des valeurs non définies (`undefined`).

Fournir un programme `rectangle.js` qui permet de répondre aux questions suivantes :

Question 7. Implémenter l’objet `Rectangle`.

Question 8. Instancier un objet `rectangle` par défaut et un objet `carre` dont la largeur et la longueur sont égales à 100.

Question 9. Ajouter une méthode `affiche()` qui affichera la largeur et la longueur (si celles-ci sont définies) d’un objet `Rectangle` sous la forme "largeur x longueur". Appeler la méthode `affiche()` sur les objets `rectangle` et `carre`.

Question 10. Ajouter les méthodes `aire()` et `perimetre()` qui retourne successivement l’aire et le périmètre d’un objet `Rectangle`. Afficher l’aire et le périmètre de l’objet `carre`.

_Bonus :_ Implémenter le programme Hello World sous forme d’un serveur web local sur le port 5000.

## Bac à sable et développement en ligne

Il est souvent nécessaire de passer par un "bac à sable".

> En informatique, le bac à sable (_sandbox_) est une zone d'essai permettant d'exécuter des programmes en phase de test ou dans lesquels la confiance est incertaine. C'est notamment très utilisé en sécurité informatique pour sa notion d'isolation.

Il existe de nombreux sites web qui fournissent des EDI (Environnement de Développement Intégré) en ligne pour tester du code ou des services : un espace d'apprentissage séparé. Ils permettent aussi d'échanger des exemples.

Quelques sites :

- **JSFiddle : https://jsfiddle.net/ pour HTML, CSS et JavaScript**
- Codeply : https://www.codeply.com/ pour les frameworks JavaScript
- Coding Ground For Developers : https://www.tutorialspoint.com/codingground.htm pour tout !
    - **JavaScript : https://www.tutorialspoint.com/online_javascript_editor.php**
    - PHP : https://www.tutorialspoint.com/execute_php_online.php
    - Python : https://www.tutorialspoint.com/execute_python3_online.php
    - Markdown : https://www.tutorialspoint.com/online_markdown_editor.php
- Visual Studio Code Online : https://vscode.dev/
- Gitpod : https://www.gitpod.io/
- Codeanywhere (Cloud IDE) : https://codeanywhere.com/

Exercices d’entraînement : http://tvaira.free.fr/web/

---
Thierry Vaira : **[thierry(dot)vaira(at)gmail(dot)com](thierry.vaira@gmail.com)**
