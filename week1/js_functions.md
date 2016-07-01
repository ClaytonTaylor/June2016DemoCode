---
title: Functions and Scope
type: lesson
duration: "1:25"
creator:
  name: Tony
  city: Boulder
competencies: Programming
---

# JavaScript Functions 
We know you've already looked at functions while you were wroking through your pre-work, but we're gonna review everything you covered, and then some! Welcome to the world of JavaScript functions! [*Queue corny School House Rock song!*](https://youtu.be/ODGA7ssL-6g)
<br>

### Objectives
*After this lesson, students will be able to:*

- Describe why functions are created
- Use functions to break programs into smaller sub-programs
- Describe how parameters relate to functions
- Explain what scope is


### Preparation
*Before this lesson, students should already be able to:*

- Write basic JavaScript
- Use a text editor
- Use basic JavaScript types and declare variables

## Keep your code DRY using Functions - Intro (5 mins)
1. **Q:** Why are functions important to use? **A:** Functions are reusable, and keep your code DRY & organized; more answers etc...
2. **Q:** What's the difference between a *parameter* and an *argument*? **A:** When a function that needs information is declared, the items inside of the parantheses (immediatley after the function name) are paramenters, as are those same items inside of the curlies. The parameters are used like variables within your function. When you *call* a function that needs information, the informtion you pass into the function (or parens) are *arguments*.

A function is a statement or a group of statements that can be called anywhere in the program so that the statements inside the function do not need to be written over and over again.

When writing functions in JavaScript, think of functions as an object, like a string or a number - this means that functions can be passed to other functions as an argument and can be used just like any other object we've been working with.

Functions are essential to write JavaScript and keep the code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

 * **Functions** are a block of code designed to perform a particular task
    * **Declared function** 
    * **Anonymous function / function expression**
    * **Closure function**
    * **Constructor function**
    
 * **Arguments** are the expressions that you pass in to a function call
 * **Parameters** are the formal variable names the function uses for its inputs



## Defining Functions and Calling Functions - Codealong (15 mins)


A function can be defined using two different syntaxes. For example, we can define a function `speak` that receives one argument in either of the following ways:

```javascript
var speak = function(words){
alert(words);
}

function speak(words){
alert(words);
}
```
>YOU DO - Create your own versions of speak



Here's a quick summary of what your computer does when you're looking to run your JavaScript file:

	1. Read the Source Code in a JavaScript file into memory
	2. Compile the source code
		a. Lexical Analysis
		b. Build Scope
		c. Turn source code into a form understood by BROWSER, bytecode
	3. Execute bytecode


The difference is subtle but important. The first function declaration is assigning an "anonymous" function to a variable. The second function declaration is a named function. The practical difference is that the named function will be processed when the code is interpreted, so the function can be called before it's defined.

No matter what syntax you use, a function always has:

- A name
- An optional list of arguments - or information to use - defined by the parenthesis before the opening curly brace
- Statements inside the function - this is the code executed every the function is called
- They also return a value


#### Calling Functions (INVOKE)

Calling a function will execute the code defined inside this function.

Defining and calling a function is different - a function will not be called when it's defined.

You call a function by using parenthesis after the function's name `()`:


```javascript
var hello = function(){
  console.log("hello there")
}

hello();

=> hello there
```
#### Functions with Parameters
Some functions need to be provided with information in order to acheive a particular task.

```javascript
function sayName(name, age) {
   alert( name + " is " + age + " years old.");
}
```
Now let's call this function:

```javascript
sayName("Tony", 28);
}
```




####We Do: Declare a Function that Takes Parameters - 10 minutes

- Let's write another function with parameters together. 

```javascript
function adding(a, b) {
	return a + b;
}
```
- Now let's call this function, but one thing to note is that we are passing in ***VALUES*** as arguments here:

```javascript
adding(2, 2);
```
- Next let's use that same function, but pass in ***variables*** as arguments instead of values:

```javascript
var number1 = 1;
var number2 = 2;
adding(number1, number2);
```
>YOU DO - Declare a function that calculates the area of a box! Remember that you need to feed the function information about our box

#### Passing a function as an argument


A function can be passed as an argument to another function:


```javascript
function sayHello(name){
return 'hello '+ name;
}

function shout(a, foo) {
alert(foo(a));
}

shout('world!', sayHello);
// alert box that says "hello world!"
```
####We Do: Function Calling Another Function

```javascript
function firstFunc() {
  secondFunc();
  alert("The function called 'firstFunc' has been called.");
}
function secondFunc() {
  alert("The function called 'secondFunc' has been called.");
}
```


- And Again

```javascript
function feedHippo(nameOfHippo, dayOfWeek){
  var food = getHippoFood(dayOfWeek);
  console.log(nameOfHippo + " has been fed " + food);
}
function getHippoFood(dayOfWeek){
  var foodAry = ["cheese", "burger", "pizza", "donut", "apple", "white marbles"];
  return foodAry[dayOfWeek];
}
```


## The Terminology of Scope - Codealong (10 mins)


There are different terminologies to talk about scope in Javascript. If you read about `(function|global|lexical|public/private)scope` or `closure` or `namespace`, all these keywords are referring to the `scope`, one way or another.

#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. If we declare a variable, it's defined globally:

```javascript
var name = 'Tony';
```

Global scope can be really confusing when you run into namespace clashes. You won't want to use global scoping for all your variables, as using global scope the right way is quite complex, but every Javascript program uses the global scope in one way or another.

> Note: If time permits, instructors may want to briefly go over what [namespace](http://www.codeproject.com/Articles/829254/JavaScript-Namespace) means in JavaScript.

#### Local scope

Local scope refers to any scope that is defined right past the global one. If you define a function, this function will have its own scope inside the body of the function. Any function defined inside another function has a also a local scope and can refer to the parent scope, but this logic doesn't work the other way around.

#### Function scope - can't get inside from outside!

A variable defined inside a function cannot be accessed outside the function, this is the scope function:

```javascript
var a = "this is the global scope";
function myFunction() {
	var b = "this variable is defined in the local scope";
}
myFunction();
alert(b);
```

This will throw a reference error because the variable `b` is not accessible outside of the scope if the function where it is defined.

#### Accessing variables in the same scope

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables of the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.

```javascript
// Global Scope
var a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
	return a + " " + name;
}

sayHello("RefactorU");
=> "Hello RefactorU";
```

#### Nested function scope

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

```javascript
  var a = 1;

  function getScore () {
    var b = 2,
    c = 3;

    function add() {
    return a + b + c;
    }

    return add();
  }

  getScore();
  => 6
```

## `this` - Codealong (5 mins)



A function's `this` keyword is always referring to the current context

#### This in the Global context

In the global scope, this refers to the global object:

```javascript
this === window
=> true

this.document === document
=> true

this.aValue = "RefactorU";
=> "RefactorU"
console.log(window.aValue);
=> "RefactorU"
```

#### As an object method

If a function is part of an object (we then call it a method), `this` refers to the object that has been defined and called:

```javascript
var refactoru = {
  name: "RefactorU",
  whatsTheName = function() {
    return this.name;
  }

refactoru.whatsTheName();
=> "RefactoU"
```

## Independent Practice - Write some functions (15 mins)

Work through as many as these exercises as you can within the next 15 mins - use the [starter-code](starter-code) provided!

1. Write a function `lengths` that accepts a single parameter as an argument, namely
an array of strings. The function should return an array of numbers where each
number is the length of the corresponding string.

```javascript
var words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]
```

2. Write a Javascript function called `transmogrifier`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the power of 2` is 225. Use your function to find the following answers.

```javascript

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

```

3.  Write a function `wordReverse` that accepts a single argument, a string. The
method should return a string with the order of the words reversed. Don't worry
about punctuation.

```javascript
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"
wordReverse("Put Hans back on the line")
# => "line the on back Hans Put"
```

## Conclusion (5 mins)

The only way to master JavaScript scope is to practice. You'll have a lot of confusing errors with the JavaScript you write at the beginning of your journey into programming! This will force you to name variables and functions the right way to make sure there is no conflict.

- Describe a function.
- Explain what happens before JavaScript code is executed.
- Explain the difference between local and global scope.

For more details about functions and scope [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
