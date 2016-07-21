# Error Handling (Frontend)
> Now that you have had some practice integrating APIs, it is a good time to talk about error handling (so that you can refer to this lecture when sh*t hits the fan in your midterm and final projects).

### Purpose
The purpose of this lecture is to help students handle requests that fail from third-party (and eventually self-created) APIs and to discuss general strategies for handling errors in JavaScript.

By the end of this lecture, students should know about:
* The error callback in `promises` (`$http.then`)
* `try`/`catch` blocks
* `console.error`

## Handling API errors
By now, we have covered the general concepts of AJAX as well as the `$http` service in `angular`. The following code should feel familiar:

```javascript

    angular.module('Chuckathon', [])
        .controller('ChuckingAwesomeController', ChuckingAwesome)
        .factory('ChuckFactory', ChuckFactory)

    ChuckingAwesome.$inject = ['ChuckFactory']

    function ChuckingAwesome(ChuckFactory) {
        var chuck = this;

        chuck.title = "Time waits for no man. Unless that man is Chuck Norris."
        chuck.currentJoke = ""

        chuck.clickitySplit = function() {
            ChuckFactory.getRandomQuote()
                .then(function(res){
                    console.log('Chuck Norris has spoken:', res.data)
                    chuck.currentJoke = res.data.value.joke
                })
        }
    }

    function ChuckFactory() {
        return {
            getRandomQuote: function() {
                return $http.get('http://api.icndb.com/jokes/random')
            }
        }
    }
```

```html
    <!DOCTYPE html>
    <html ng-app="Chuckathon">
        <head>
            <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.js"></script>
        </head>
        <body ng-controller="ChuckingAwesomeController as chuck">
            <button type="button" ng-click="chuck.clickitySplit()">New Quote</button>
            <p>{{ chuck.currentJoke }}</p>
        </body>
    </html>
```

Although we would expect this to work all the time, if the API ever returned an **error** because maybe the server hosting the API:
- went down in a fire
- responded with a backend error
- all of a sudden implements CORS and you aren't using `jsonp`
- changes it's endpoint/hostname/domain
- changes it's API format and does not support versioning (that sucks, but happens)
- just straight up serves a bad response for some mysterious reason

... the above code WOULD NOT HANDLE THE ERROR!!! :(

So how can we make sure our `App` can handle API errors? Simple!

**Add an error handler callback to your <code>then</code> functions!**
**Add an error handler callback to your <code>then</code> functions!**
**Add an error handler callback to your <code>then</code> functions!**

**Seriously, ADD an error handler callback to your `then` functions!**

```javascript
    function ChuckingAwesome(ChuckFactory) {
        var chuck = this;

        chuck.title = "Time waits for no man. Unless that man is Chuck Norris."
        chuck.currentJoke = ""

        chuck.clickitySplit = function() {
            ChuckFactory.getRandomQuote()
                .then(function(res){
                    console.log('Chuck Norris has spoken:', res.data)
                    chuck.currentJoke = res.data.value.joke
                }, function(error){
                    // provide some feedback to the user so the know what the heck is going on!
                    console.error('Chuck Norris is broken:', error)
                    chuck.currentJoke = 'Oh no. Chuck Norris has beaten the API into submission!'
                })
        }
    }
    // also show pulling out handlers as named functions
```

## Try/Catch
Try catch blocks are fundamental to almost any programming language. They are usually the safest and best way to handle what is considered UNSAFE code (code that deliberately `throws` errors, which often times will stop the execution of your code and cause one of our favorite angry red texts: `Uncaught exception...`)

```javascript
    var validJSONstring = '{"name":"Bob"}'
    var invalidJSONstring = '{name:Bob}'

    var validJSONobject = JSON.parse(validJSONstring) // we are good here...
    var invalidJSONstring = JSON.parse(invalidJSONstring) // uh oh!!!
```

`JSON.parse` allows us to take **valid** `JSON` strings and turn them into `Objects`. However, `JSON.parse` will `throw` an error when an invalid string is given. How can we safely handle the situation where we are not gaurenteed a valid JSON string? (e.g. an API has a bug where the response is invalid JSON, more common than one might think!)

```javascript
    var validJSONstring = '{"name":"Bob"}'
    var invalidJSONstring = '{name:Bob}'

    try {
        var validJSONobject = JSON.parse(validJSONstring) // we are good here...
        var invalidJSONstring = JSON.parse(invalidJSONstring) // uh oh!!!
    } catch(error) {
        console.error('Could not parse JSON!', error)
    }
```

That's all folks!
