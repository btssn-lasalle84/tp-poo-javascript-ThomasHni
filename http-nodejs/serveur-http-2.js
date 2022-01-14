const http = require('http'); // charge le module http

// crée un serveur http sur le port 1966
http.createServer((request, response) =>
{
    // répond le code d'état 200 qui signifie OK
    response.writeHead(200, {'Content-Type': 'text/html'});
    // retourne le résultat (ici du simple HTML)
    //response.write('<h1>Bonjour le monde !</h1>');
    var resultat =  '<!DOCTYPE html>' +
                        '<html>' +
                            '<head>' +
                                '<meta charset="utf-8">' +
                                '<title>Un titre</title>' +
                            '</head>' +
                            '<body>' +
                                '<h1 style="color:blue;">Bonjour le monde !</h1>' +
                            '</body>' +
                        '</html>';
    response.write(resultat);
    // attend le traitement de la réponse
    response.end();
}).listen(1966);

// Exécution du serveur : node serveur-http-2.js
// Test client http://localhost:1966
