# JSX notes

Below content is quoted from CodeAcademy Intro to JSX.

[react/jsx on codeacademy](https://www.codecademy.com/resources/docs/react/jsx)

## JSX Expressions

A JSX expression must have exactly _one_ outermost element. The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

In other words, this code will work:

```jsx
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```

But this code will not work:

```jsx
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```

It’s easy to forget about this rule and end up with errors that are tough to diagnose.

If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a `<div>` element.

## Rendering JSX

```jsx
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);
```

React relies on two things to render: what content to render and where to place the content.

The first line:

- Uses [the `document` object](https://developer.mozilla.org/en-US/docs/Web/API/Document) which represents our web page.
- Uses the `getElementById()` method of `document` to get [the `Element` object](https://developer.mozilla.org/en-US/docs/Web/API/Element) representing the HTML element with the passed in id (`app`).
- Stores the element in `container`.

In the second line we use `createRoot()` from the `react-dom/client` library, which creates a React root from `container` and stores it in `root`. `root` can be used to render a JSX expression. This is the “where to place the content” part of React rendering.

The last line uses the `render()` method of `root` to render the content passed in as an argument. Here we pass an `<h1>` element, which displays `Hello world`. This is the “what content to render” part of React rendering.

## The Virtual DOM

React root's `render()` method _only updates DOM elements that have changed._ If you render the exact same thing twice in a row, the second render will do nothing.

This is accomplished using React's [virtual DOM](https://www.youtube.com/watch?v=jwRAdGLUarw).

For every [DOM object](http://eloquentjavascript.net/13_dom.html), there's a corresponding "virtual DOM object" which is a _representation_ of a DOM object, like a lightweight copy. It's got the same properties as a real DOM object, but unlike the real thing it can't directly change what's on teh screen.

Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

Here’s what happens when you try to render a JSX element and update the DOM in React:

1. The entire virtual DOM gets updated.
1. The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
1. The changed objects, and _the changed objects only_, get updated on the real DOM.
1. Changes on the real DOM cause the screen to change.

In our example from earlier, React would be smart enough to rebuild your one checked-off list-item and leave the rest of your list alone.