var  HTTP = require('http'), // native to node
     HTTPS = require('https'), // native to node
     express = require('express'), // npm install this
     fs = require('fs'), // native to node
     // making TWO apps here...
     app = express();

app.get('/', (req, res) => {
     res.send('Site root');
});

HTTP.createServer( app ).listen( 80 );
HTTPS.createServer({ // https://nodejs.org/api/https.html
     key:  fs.readFileSync('/etc/letsencrypt/live/<your_domain>/privkey.pem'),
     cert: fs.readFileSync('/etc/letsencrypt/live/<your_domain>/cert.pem')
}, app).listen( 443 );
