const http = require('http'); // charge le module http
const url = require('url'); // charge le module url
// cf. https://nodejs.org/docs/latest-v10.x/api/url.html
const querystring = require('querystring');
// cf. https://nodejs.org/docs/latest-v10.x/api/querystring.html

// crée un serveur http sur le port 1966
http.createServer((request, response) =>
{
    // quelques informations sur la requête
    console.log("request ->");
    console.log(request.headers);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.method);

    // traiter la requête
    var requeteURL = url.parse(request.url, true).query;
    console.log("requeteURL ->");
    console.log(requeteURL);
    console.log(requeteURL.page);

    var requeteQUERY = querystring.parse(request.url); // il faut enlever le ?
    console.log("requeteQUERY ->");
    console.log(requeteQUERY);
    //console.log(requeteQUERY.page); // il faut enlever le ?

    // répond le code d'état 200 qui signifie OK
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

    // retourne la page demandée
    if(requeteURL.page == '1')
        response.write('La page 1 !');
    else if(requeteURL.page == '2')
        response.write('La page 2 !');
    else
        response.write('Une autre page !');

    // attend le traitement de la réponse
    response.end();
}).listen(1966);

// Exécution du serveur : node serveur-http-3.js
// Test client http://localhost:1966/?page=1
// Test client http://localhost:1966/?page=2
// Test client http://localhost:1966/?page=3

// Exemple de résultat :
/*
    request ->
    {
      host: 'localhost:1966',
      'user-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0',
      accept: 'text/html,application/xhtml+xml,application/xml;',
      'accept-language': 'fr-FR,en-US;q=0.7,en;q=0.3',
      'accept-encoding': 'gzip, deflate',
      connection: 'keep-alive',
      'upgrade-insecure-requests': '1',
      'cache-control': 'max-age=0'
    }
    /?page=2
    1.1
    GET
    requeteURL ->
    [Object: null prototype] { page: '2' }
    2
    requeteQUERY ->
    [Object: null prototype] { '/?page': '2' }
*/
