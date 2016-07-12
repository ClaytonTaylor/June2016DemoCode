# AngularJS Directives

### Purpose
The purpose of this lecture is to teach students what a directive is, and how angular uses them to connect your HTML to your JS.

Students should also become familiar with some basic angular directives, such as:

#### In this lecture
- ng-app
- ng-controller
- ng-repeat
- ng-model
- ng-click

# Lecture Notes

### What are Angular directives?

> At a high level, directives are simply custom HTML attributes, element names, comments, or CSS classes that tell AngularJS's **HTML compiler** ([`$compile`](https://docs.angularjs.org/api/ng/service/$compile)) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

## ng-app

This directive is used to initialize an app in angular. You can have multiple `ng-app` directives within an Angular webpage.

A common convention for this directive is to place it on the `<html>` tag:

```html
    <html ng-app="SuperHeros"></html>
```

Without this directive, we cannot declare modules in Angular.

## ng-controller

We use `ng-controller` to declare a piece of our app. Controllers are usually mapped to a concentrated set of logic, like the processing of a form.

```html
    <html ng-app="SuperHeros">
        <body>
            <div ng-controller="TheAvengers"></div>
        </body>
    <html>
```

It is common convention to use `controller as` syntax when declaring a controller. This allows makes our markup a bit more semantic as well as gives us the ability to use the native JS keyword `this` as opposed to the original convention of `$scope`.

```javascript
    angular.module('SuperHeros', [])
        .controller('TheAvengers', avengersController)

    function avengersController() {
        this.title = "Every team needs a captain!"
    }
```

## ng-repeat

This directive is a favorite of many as it saves developers a ton of work to create many of the same type of DOM elements at a time. Think of it as a `for` loop for HTML!

Let's add an array of names to our controller and use `ng-repeat` to show each of them in their own `<p>` tag in our markup.

In our JavaScript:

```javascript
    angular.module('SuperHeros', [])
        .controller('TheAvengers', avengersController)

    function avengersController() {
        this.title = "Every team needs a captain!"
        this.heroes = ['Captain America', 'Iron Man', 'Thor']
    }
```

In our HTML:

```html
    <div ng-controller="TheAvengers as avengers">
        <h1>{{ title }}</h1>
        <ul>
            <li ng-repeat="avenger in avengers.heroes">{{ avenger }}</li>
        </ul>
    </div>
```

## ng-model
With Angular, we have the ability to bind the values of HTML elements to be reflected in real-time. For example, we can have the value of an input field be mirrored, or bound, to another element using `ng-model`.

Let's add an input that takes a new name and displays that name below the list created by ng-repeat:

```html
    <div ng-controller="TheAvengers as avengers">
        <h1>{{ title }}</h1>
        <ul>
            <li ng-repeat="avenger in avengers.heroes">{{ avenger }}</li>
        </ul>
        <input type="text" ng-model="avengers.newAvenger" placeholder="Add your hero!"/>
        <p>{{ avengers.newAvenger }}</p>
    </div>
```

If you start typing in this text field, you'll see the content of `<h1>` tag get populated with the same text from the `<input>` field in real-time.

Though not required, it is good practice to initialize the variables that we reference in the markup within our `controller`.

```javascript
    angular.module('SuperHeros', [])
        .controller('TheAvengers', avengersController)

    function avengersController() {
        this.title = "Every team needs a captain!"
        this.newAvenger = ''
        this.heroes = ['Captain America', 'Iron Man', 'Thor']
    }
```


## ng-click
This directive is nothing more than Angular's way of attaching event listeners to an element, but with the added benefit of data binding. Conventionally, this directive is mapped to a function declared in our controller.

Let's create a button that adds an element to the array of names in our controller.

In our HTML:

```html
    <div ng-controller="TheAvengers as avengers">
        <h1>{{ title }}</h1>
        <ul>
            <li ng-repeat="avenger in avengers.heroes">{{ avenger }}</li>
        </ul>
        <input type="text" ng-model="avengers.newAvenger" placeholder="Add your hero!"/>
        <!-- <p>{{ avengers.newAvenger }}</p> -->
        <button ng-click="avengers.addNewHero()">Add<button>
    </div>
```

In our JavaScript:

```javascript
    angular.module('SuperHeros', [])
        .controller('TheAvengers', avengersController)

    function avengersController() {
        this.title = "Every team needs a captain!"
        this.newAvenger = ''
        this.heroes = ['Captain America', 'Iron Man', 'Thor']

        this.addNewHero = function() {
            this.heros.push(this.newAvenger)
        }
    }
```

When you type some text into the `<input>` field can click the `<button>` we created, you will see that Angular will "automagically" add a new `<li>` element with the content value of the text we entered.
