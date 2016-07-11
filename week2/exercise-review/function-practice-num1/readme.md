1. Write a function called `tripleFive` which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.

```javascript
    tripleFive()
    Five! Five! Five!
```

```javascript
// answer
function tripleFive() {
    for( var i=0; i<3; i++ ) {
        console.log('Five!')
    }
}
tripleFive()
```

2. Write a function called `lastLetter` which takes a single `String` argument and **returns** the last character in the string.

```javascript
    lastLetter('hello') should return 'o'
    lastLetter('island') should return 'd'
```

```javascript
    function lastLetter( string ) {
        // console.log( string.slice(-1) )
        // return string.slice(-1)
        return string[string.length-1]
    }
```

3. Write a function called `square` which takes a single argument which is a `Number`, and **returns number * number**.

```javascript
    square(3) should return 9
    square(5) should return 25
```

```javascript
    function square( num ) {
        // return num * num;
        return Math.pow(num, 2)
    }
```

3. Write a function called `negate` which takes a single number argument and returns the negative of that number.

```javascript
    negate(5) should return -5
    negate(-8) should return 8
```

```javascript
    function negate( num ) {
        return -num;
    }
```

4. Write a function called `toArray` which takes three arguments and returns an array with each of those arguments as items.

```javascript
    toArray(1, 4, 5) should return [1, 4, 5]
    toArray(8, 9, 10) should return [8, 9, 10]
```

```javascript
    function toArray( x, y, z ) {
        // var thisArray = [x,y,z];
        // return thisArray;
        return [x,y,z]
    }
```

5. Write a function called `startsWithA` which takes a single string argument and returns `true` if the given string's first letter is 'A' and `false` otherwise.

```javascript
    startsWithA('aardvark') // should return true
    startsWithA('bear') // should return false
```

```javascript
    function startsWithA( word ) {
        // if( word.indexOf('a') === 0 || word.indexOf('A') === 0 ) {
        return word.charAt(0).toLowerCase() === 'a'
        // if( word[0] == 'a' || word[0] == 'A' ) {
        //
        // }
    }
```

```
    ...
```

10. Write a function called `getSeconds` which takes a single string argument in the format `MM:SS` (minutes, and seconds) and returns the total number of seconds represented by that timespan.

```javascript
    getSeconds('01:30') // should return 90
    getSeconds('10:25') // should return 625
```

```javascript
    function getSeconds( time ) { // time is a String parameter/argument
        // var timeMaster = time.split(':') // ['01','30']
        // return Number(timeMaster[0])*60 + Number(timeMaster[1])
        return time.substring(0,2)*60 + time.substring(3)*1
        // var segments = time.split(':')
        // return segments[0]*1*60 + segments[1]*1
    }
```
