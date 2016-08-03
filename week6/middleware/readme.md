### Objectives
1. Understand: What is middleware? Why do we need it?
2. Understand: Mounting vertically vs. horizontally
3. Create: custom middleware
4. Understand: Middleware priority levels
5. Implement: 3rd-party middleware (`morgan`, `body-parser`, `cookie-parser`)

An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` middleware function in the application’s request-response cycle. The `next` middleware function is commonly denoted by a variable named `next`.

Some of most used examples of middleware
- authentication
- request logging
- analytics

## Custom Middleware
Middleware functions can:
- Execute any code
- Modify the `request` and `response` objects
- End the `request`/`response` cycle
- Call the `next` function in the middleware stack

Middleware functions **MUST** either call the `next()` or end the request by sending a response.

If a middleware function fails to call `next()` or send a response, your application will be left *hanging*.

## Application-level middleware (mounting vertically)
You can load middleware across your entire app. This would fire the middleware function *ON EACH REQUEST*

```javascript
    // Would log UNIX time in milliseconds on the command line on each request
    app.use(function(req,res,next){
        console.log('Now:', Date.now());
        next();
    });

    app.get('/', function() {
        res.send('Root beer :D');
    });
```

## Router-level (mounting horizontally)
You can load middleware on a per route basis, which would fire only for a given route or route pattern.

```javascript
    var app = express();

    app.get('/api', checkKeyMiddleware, function(req, res) {
        res.json({
            data: 'Grumpy wizards make a toxic brew for the jovial queen!'
        });
    });

    // example using next, checks an incoming GET request for the parameter "key", common for APIs
    function checkKeyMiddleware( req, res, next ) {
        if( req.query.key ) {
            next();
        } else {
            res.send();
        }
    }
```

The *ORDER* of middleware matters.

```javascript
    var app = express();

    // app.use(checkKeyMiddleware); should go here

    app.get('/api', function(req, res) {
        res.json({
            data: 'Grumpy wizards make a toxic brew for the jovial queen!'
        });
    });

    // example using next, checks an incoming GET request for the parameter "key", common for APIs
    function checkKeyMiddleware( req, res, next ) {
        if( req.query.key ) {
            next();
        } else {
            res.end();
        }
    }

    app.use(checkKeyMiddleware); // does not protect the API routes!
```

## Error-handling
Always takes *FOUR* parameters, but work just like all other middleware:

```javascript
    app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send({
            status: 500,
            message: 'Hold the door!'
        });
    });
```

## Built-in (to express)
Express had once incorporated `Connect`, a node module full of useful middleware, but this dependency was removed in order to make Express a lighter weight framework. You can still leverage `Connect` piece by piece (in fact, cookie-parser, body-parser, and others come directly from Connect!), but Express now only provides one internal middleware function: `static`

`static` is a widely used middleware that can serve static files (html, images, css, js, etc...)

```javascript
    // would serve all of the files in public
    app.use( express.static(__dirname +'/public') );

    // for windows systems (safety)
    var path = require('path');
    var publicPath = path.join(__dirname,'public');
    app.use( express.static(publicPath) );

    // would serve only html files from the public folders
    app.use( express.static(publicPath, { extensions: ['htm','html'] }))
```

## Third-party Middleware
By far, the most commonly used middleware is from third party modules.

> (Live example with morgan)

```bash
    $ npm install morgan --save
```
```javascript
    var logger = require('morgan')
    app.use( logger('dev') )
```

> (Live example with body-parser)

```bash
    $ npm install body-parser --save
```
```javascript
    var bodyParser = require('body-parser')
    app.use( bodyParser.json()) // parse body string into a json object in `req.body`
    app.use( bodyParser.urlencoded({ extended: true }) ) // enable URLencoded data to by parsed into `req.body`
```

**Note:** the `req` object contains `query` (GET requests), `body` (POST requests), and `params`.

> ( 10 minute code slot: mount the cookie-parser middleware )

That's all folks!
