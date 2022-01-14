const http = require('http'); // charge le module http
// cf. https://nodejs.org/api/http.html

// crée un serveur http sur le port 1966
http.createServer((request, response) =>
{
    // répond le code d'état 200 qui signifie OK
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // retourne le résultat (ici du simple texte)
    response.write('Bonjour le monde !\n');
    // attend le traitement de la réponse
    response.end();
}).listen(1966);

// Exécution du serveur : node serveur-http-1.js
// Test client http://localhost:1966
