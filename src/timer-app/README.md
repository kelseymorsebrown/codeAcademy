# Timer App

[Learn JavaScript Object-Oriented Programming by Building a Timer Application](https://www.freecodecamp.org/news/learn-javascript-object-oriented-programming/)

This project is from freeCodeCamp, not Code Academy, but I'm putting in this repo anyway as a general "professional development" spot.

## Supplementary Documentation

Here are some supplemntary docs linked within the project article for future reference:

### freeCodeCamp articles

- [HTML Button onclick – JavaScript Click Event Tutorial](https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/)
- [How to Center a Div with CSS – 10 Different Ways](https://www.freecodecamp.org/news/how-to-center-a-div-with-css-10-different-ways/)
- [JavaScript Wait – How to Sleep N Seconds in JS with .setTimeout()](https://www.freecodecamp.org/news/javascript-wait-how-to-sleep-n-seconds-in-js-with-settimeout/)

### MDN Docs

- [setInterval() global function](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [Classes > constructor method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Classes > extends keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

### Demo Code

Here are links to their demo code of this project for comparison (most of it is identical)

- [Timer using Procedural Programming](https://codepen.io/miyaliu666-the-styleful/pen/VwEYwoJ)
- [Timer using Object Oriented Programming](https://codepen.io/miyaliu666-the-styleful/pen/oNaggXR)
- [Timer using OOP with events](https://codepen.io/miyaliu666-the-styleful/pen/JjmooXz)

## Attribution

The meow and woof mp3s in the "Object Oriented" directory are from [Orange Free Sounds](https://orangefreesounds.com/)
- [Cat's Loud Meow Sound](https://orangefreesounds.com/cats-loud-meow-sound-clip/) is licensed under a Creative Commons Attribution 4.0 International License
- [Large Dog Woof Sound Effect](https://orangefreesounds.com/large-dog-woof-sound-effect/) is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License

## Notes

For the "procedural programming" verison of the app, there were a couple things that I couldn't get to work when I ran my [1_Procedural/index.html](1_Procedural/index.html) file in the browser (or using the LiveServer VsCode extension) that worked just fine when I copy/pasted my [1_Procedural/index.js](1_Procedural/index.js) code into the [codePen](https://codepen.io/miyaliu666-the-styleful/pen/VwEYwoJ). I tried to use breakpoints and `debugger` statements to troubleshoot, but it almost seems like these lines were never getting hit in the first place? It makes me wonder if it has to do with those lines of code not being wrappedin in a function that gets explicitly called in the html? But that's how it's set up in the codePen demo as well? I'm extremely baffled.

1. When I tried using `let` instead of `var` in lines 6 through 9, it completely broke the app and clicking the buttons didn't do anything.
2. I couldn't get the input limit functionality in lines 11 through 33 to do literally anything.
