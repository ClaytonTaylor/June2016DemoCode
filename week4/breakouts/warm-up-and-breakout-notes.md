# Good Morning! Warm-up Time!

> Speaking in code:

- Make a canonical angular HTML page
- Make an `app.js` file
- Declare an angular module call it `Chuckuthon`
- Chain a controller `ChuckingAwesomeController`
- Chain a factory `ChuckFactory`

## Breakout Topics

```javascript
    try {
        // any code that `throws` errors
        * throw "Some crazy sh*t happened"
    } catch( error ) {

    }
```

#### anchor tag
When a user clicks on `<a href="/#/hello">`, a `hash-changed` event fires. PERFECT for `ui-router`!

#### buttons
By default the `type` attribute of buttons is `submit`.
If your button was in a `<form action="/login">`, it will `submit` your form!

#### Backbone
I can send you guys one of my Backbone apps. (@marcus)

#### Angular 2.0
I can pre-pare a mini-lecture on this.

#### ES6/JS6
ECMAScript 6 is awesome!

I tend to use:
- `let`
```javascript
    // let restricts scope at the block level
    function scopeyScope(array) {

        for( var i = 0; i < array.length; i++ ) {
            var thingey = array[i]
        }
        console.log(thingey) // last element of the array

    }

    function limitedScope(array) {
        for( var i = 0; i < array.length-1; i++ ) {
            let thingey = array[i]
        }        
        console.log(thingey) // undefined
    }
```
- `const`

```javascript
    const myConstantVariableThatWontChange = 3.145
```

- `arrow functions ()=>{}`

```javascript
    [1,2,3].forEach(function(elem){
        console.log(elem)
    })

    // reduced syntax! drop the function keyword, add a HASH ROCKET
    [1,2,3].forEach((elem) => {
        console.log(elem)
    })

    // hhmm... but we can go further
    [1,2,3].forEach((elem) =>console.log(elem))

    // umm... okay?
    [1,2,3].forEach( elem => console.log(elem) )

    // okay I know this! filter!
    var filteredArray = [1,2,3].filter(function(elem){
        return elem > 2
    })

    // okay, I have seen that
    var filteredArray = [1,2,3].filter((elem) => {
        return elem > 2
    })

    // still wit cha
    var filteredArray = [1,2,3].filter( elem => {
        return elem > 2
    })

    // still wit cha
    var filteredArray = [1,2,3].filter( elem => elem > 2 )
```

- `class`
```javascript
    function Person(name) {
        this.name = name
    }

    Person.prototype.sayHello = function () {
        console.log("Hello, I am ", this.name);
    };

    class Person {
        constructor(name) {
            this.name = name
        }
        sayHello() {
            console.log("Hello, I am ", this.name);
        }
    }

    var myPerson = new Person('Brandon')
```

- `template literals`

```javascript
    var animal = 'Donkey'
    var name = 'Mr. BackinPackin'

    var mySentence1 = "Hello. "+ name + " is a " + animal
    var mySentence2 = `Hello ${name} is a ${animal}`
```

- `default params`
```javascript
    var link = function (height, color, url) {
        var height = height || 50
        var color = color || 'red'
        var url = url || 'http://azat.co'
    }

    var link = function(height=50, color='red', url='http://azat.co'){

    }
```

I know about, but haven't used:
- `with`
- `yield`
- `generators`
- `modules`
