var  HTTP = require('http'), // native to node
     HTTPS = require('https'), // native to node
     express = require('express'), // npm install this
     fs = require('fs'), // native to node
     // making TWO apps here...
     HTTPS_app = express(),
     HTTP_app = express();

 // HTTP_app.use(( req, res, next ) => {
 //     res.set('X-Forwarded-Proto','https');
 //     res.redirect('https://'+ req.headers.host + req.url);
 //     next();
 // });

HTTP_app.get('*', (req, res) => {
     console.log('Querystring:', req.query);
     res.send(req.query);
});

HTTPS_app.get('*', (req, res) => {
     console.log('Querystring:', req.query);
     res.send(req.query);
});

HTTPS_app.post('*', (req, res) => {
     console.log('POST payload:', req.body);
     res.send(req.body);
});

// HTTP server, just listens for connections and immediately redirects to HTTPs
HTTP.createServer( HTTP_app )
     .listen( 80 );

// openssl req -x509 -sha256 -nodes -newke y rsa:2048 -days 365 -keyout localhost.key -out localhost.crt

// cloudflare.com

// HTTPS server, the real app listens on this.
HTTPS.createServer({ // https://nodejs.org/api/https.html
     key: fs.readFileSync('./localhost.key'),
     cert: fs.readFileSync('./localhost.crt')
}, HTTPS_app).listen( 443 );
