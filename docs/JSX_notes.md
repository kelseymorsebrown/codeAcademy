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

You use `className` instead of `class` in JSX.

You have to use the `/` in self closing tags in JSX. Ex: You must use `<br/>` in JSX. `<br>` is fine in HTML, but will cause an error in JSX.

To have JavaScript inside your html inside a JSX file, you need to enclose the JavaScript in curly braces.

```jsx
const sideLength = '200px';

const panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength}
  />
);
```

### You can NOT inject an `if` statement into a JSX expression

This code will break:

```jsx
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
```

Option 1: write an if statement and _not_ inject it into JSX.

```jsx
if (coinToss() === 'heads') {
  img = <img src={pics.kitty} />;
} else {
  img = <img src={pics.doggy} />;
}

root.render(img);
```

Option 2: Ternary operator

```jsx
const headline = <h1>{age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff'}</h1>;
```

Option 3: && operator

`&&` works best for conditionals that will sometimes do an action but other times do nothing at all.
If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered.
If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.

```jsx
const tasty = (
  <ul>
    <li>Applesauce</li>
    {!baby && <li>Pizza</li>}
    {age > 15 && <li>Brussels Sprouts</li>}
    {age > 20 && <li>Oysters</li>}
    {age > 25 && <li>Grappa</li>}
  </ul>
);
```

Option 4: || operator

In addition to the AND `&&` operator, we can use the OR `||` operator. Given a list of variables or expressions, `||` will return the value of the first one whose boolean evaluates to true.

### Lists in JSX

If you want to create a list of JSX elements, then using `.map()` is often the most efficient way.

Sometimes your list will need to include something called `keys`. A `key` is a JSX attribute.

```jsx
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person, i) => (
  <li key={'person_' + i}>{person}</li>
));
root.render(<ul>{peopleList}</ul>);
```

The attribute's _name_ is `key` and it's _value_ should be something unique, similar to an `id` attribute. They don't do anything visible - React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list items in the wrong order.

A list needs `keys` if either of the following is true:

1. The list items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
2. A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

If neither of these conditions is true, then you don’t have to worry about keys. If you aren’t sure, then it never hurts to use them!

### React.createElement

You can write React code without using JSX.

When the following JSX expression is compiled:

```jsx
const h1 = <h1>Hello world</h1>;
```

the compiler transforms the JSX element into the method `React.createElement()`:

```react
const h1 = React.createElement(
  "h1",
  null,
  "Hello world"
);
```

Every JSX element is secretly a call to `React.createElement()`

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
