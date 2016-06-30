# JS Arrays and Objects

## Purpose
> The purpose of this lecture is to teach students how to work with collections in JavaScript.

Students should learn how to define and modify arrays and objects, including using array methods and for-loops.

## Lecture Notes

### Array literal
Arrays are non-primitive.
```javascript
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(days.length)
```

### Accessing properties & methods
Access individual elements with bracket notation.
```javascript
    console.log(days[1]);
    days[0] = 'Moonday';
    days.push('Funday');
    console.log(days);
    days.pop();
    console.log(days);
```

### Operators
`++` and `+=` are operators with side-effects. They produce a new value, and also modify the original value.
```javascript
    var i = 0;
    i++
    i+=1
    i = i + 1
```

### Loops
Loops are used to **ITERATE** over arrays or over a bounded range.

#### For Loops
There are four parts to a for loop
- initializer
- loop conditional
- loop incrementer
- loop body

```javascript
    // your canoncial for loop
    for ( var i = 0; i < days.length; i++ ) {
        if ( days[i] === 'Saturday' ) {
            alert('Party!')
        }
        else if ( days[i] === 'Sunday' ) {
            alert('Take a nap.')
        }
        else {
            alert('work work work...')
        }
    }
```

#### While Loops
While loops have a slightly different syntax and will keep looping until some conditional is met.

```javascript
    var keepGoing = true
    var i = 0
    while( keepGoing === true ) {
        console.log('The value of (i) =', i)
        if( i > 10 ) {
            keepGoing = false // without this, the loop would go on forever, and ever, and ever...
        }
    }
```

### Object literals
```javascript
    // name:value pair.  a.k.a. key:value pair. The keys are always strings.
    var sharkNado = {
        title  : 'Sharknado II',
        genre  : 'Science Fiction',
        rating : 8,
    };
    var HTTM = {
        title  : 'Hot Tub Time-Machine',
        genre  : 'Historical autiobiography',
        rating : 11,
    }
    var movies = [];
    movies.push(sharkNado);
    movies.push(HTTM);
    console.log(movies) // an array of objects! How useful.

    HTTM['title']
    var property = prompt('Which property do we want to check?');
    console.log(HTTM.property) // this won't work
    // bracket notation is the only way to look up dynamic properties on an object
    console.log(HTTM[property]);
    HTTM.year = 2013;
    HTTM['ye' + 'ar'] = 2013;
    console.log(movie);
    for ( var key in HTTM ){
        console.log('The ' + key + ' of the movie is ' + HTTM[key] + '.');
    }
```
