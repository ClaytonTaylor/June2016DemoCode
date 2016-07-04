// DOM - document object model. the live, rendered HTML page. it's like comparing a script for a play to actors actually acting it out on stage. 
// document.getElementById
// document.getElementsByTagName

// var h1s = document.querySelectorAll('h1 strong')
// var userInput = prompt('say something')
// h1s[0].innerText = userInput
// console.log(h1s)

var myButtons = document.querySelectorAll('#doStuff')

// a callback function is when we pass a function into another function because we don't want it to be called immediately, but we want javascript to call it for us when the time is right.
// in this case, our callback function is handling a click event, so we can also call it an event-handler function.
// i never call this function myself, so I can't control what is passed into it.
myButtons[0].addEventListener('click', function(event){
    console.log(event)
    var theText = document.querySelectorAll('#otherText')[0]
    theText.innerText = theText.innerText + '!'
    console.log("I clicked a button!")
})