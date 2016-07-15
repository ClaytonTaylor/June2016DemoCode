# Filters and Factories
> The purpose of this lecture is to introduce students to filters and factories. After this lecture, students should feel comfortable with the following concepts:

- Storing application data and low-level logic in factories, to share amongst multiple controllers, and to keep individual controllers as lean as possible.
- Using filters to modify the presentation of data, without affecting the underlying data itself.

## Lecture Notes

### Factories
- Another component in `Angular`
- Registered to a `module` just like a `controller`

```javascript
    angular.module('myApp')
        .factory('myFactory', myFactoryFunction)
```

#### What are Factories used for?
- Controllers **cannot** communicate with one another, so factories can serve as a bridge between controllers
- They can be used in multiple `controllers`
- They are most often times used to hold `data` or common `methods`
- Factories can be used to **share** information between controllers
- Factories are SINGLETONS (only ever created ONCE)
	* Passed by **reference** anywhere they are `$injected`
    * They tend to be injected into controllers or **other** factories
- Factories typically return `Objects`

```javascript
    function myFactoryFunction() {        
        return {
            myCollection: [{
                name: 'Jack (?)',
                occupation: 'The Joker'
            },{
                name: 'Bruce Wayne',
                occupation: 'Batman'
            },{
                name: 'Clark Kent',
                occupation: 'Superman'
            }]
        }
    }
```

### Filters
There are a few filters that are special and significantly affect `ngRepeat`

`orderBy` => sorts and re-orders items

```html
    <div ng-controller="myController as controller">
        <input type="text" ng-model="controller.input">
        <ul>
            <li ng-repeat="item in controller.items | orderBy:'name':true">
                {{item.name}} - <b>${{item.price}}</b>
            </li>
        </ul>
    </div>
```

- `filter` => conditionally shows/hides items

```html
    <div ng-controller="myController as controller">
        <h1> Custom Filter Function </h1>
        <ul>
            <li ng-repeat="item in controller.items | filter:controller.cheapItems">
                {{item.name}} - {{item.price}}
            </li>
        </ul>

        <hr>

        <h1> Simple Search </h1>
        <input type="text" ng-model="controller.search" placeholder="Search items">
        <ul>
            <li ng-repeat="item in controller.items | filter: controller.search">
                {{item.name}} - {{item.price}}
            </li>
        </ul>
    </div>
```
