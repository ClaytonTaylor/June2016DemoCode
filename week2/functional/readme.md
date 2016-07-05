# Functional Style Programming

## Preface
What does it mean when program is written in a "Functional style?"

Functional style programming is often explained using phrases like "functions as first-class objects" and "eliminating side effects". To programmers just starting their JS journey, statements like these can be daunting!

There are really only two concepts that need to be understood to get a handle on the "functional style".
* Immutability (do not make changes to the original structure)
* Statelessness (should perform a task as if it were the first time, keeps no state between calls [static])

In the simplest terms, the real benefit of adopting a functional style is that our programs can be broken down into smaller, simpler pieces that are both more reliable and easier to understand.

## Functional vs Imperative

### Imperative

```javascript
  var chooseOne = ['charmander','bulbasaur','squirtle'];

  console.log(chooseOne);

  // capitalize each element of the array using a canonical
  for( var i=0; i < chooseOne.length; i++ ) {
      chooseOne[i]=chooseOne[i].toUpperCase(); // mutates original array, side-effects
  }

  console.log(chooseOne);
```

### Functional
```javascript
    var chooseOne = ['charmander','bulbasaur','squirtle'];


    var capticalChooseOne = chooseOne.map(function(pokemon){
        return pokemon.toUpperCase();
    })

    console.log(chooseOne, capticalChooseOne);
```

#### Built-in methods that are functional

* Arrays
    - `concat`, `filter`, `join`, `map`, `reduce`, `some`

* Strings
    - `concat`, `repeat`, `slice`, `split`

## Designing your own Functional methods

1. All of your functions must accept at least one argument.
2. All of your functions must return data or another function.

```javascript
var Units = {
    human: function(attributes) { // functional
        return {
            race: 'Human',
            name: attributes.name,
            height: attributes.height,
            weight: attributes.weight,
            gender: attributes.gender,
            origin: 'Earth'
        }
    },
    dragoon: function(attributes) { // functional
        return {
            race: 'Dragoon',
            name: attributes.name,
            height: attributes.height,
            weight: attributes.weight,
            gender: attributes.gender,
            origin: 'Dragonica'
        }        
    },
    rename: function(name, unit) { // non-functional
        unit.name = name;

        return unit;
    }
}
```
