# React Notes

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

## Props

[Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component#)

```javascript
import React from 'react';

class ParentComponent extends React.Component {
  render() {
    return <ChildComponent prop1="Mike" prop2="piza">
  }
}

function ChildComponent(props) {
  return <h2>This is prop1: {props.prop1}. This is prop2: {props.prop2}.</h2>
}
```

Every component has something called props, which is an object that holds information about that component. Use the expression `this.props` to see a component’s props object.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(<Greeting firstName="Rybu" />, document.getElementById('app'));
```

You can pass information to a react component by giving that component an attribute. If you want to pass information that isn’t a string, then wrap that information in curly braces.

```javascript
<MyComponent foo="bar" />
<Greeting myInfo={['top', 'secret', 'lol']} />
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
```

### Giving Default Values to Component props

There are three ways to specify a default value for a react component prop.

In all three of the below examples:

- If `<Example />` doesn't get passed any text, then it will display "This is default text".
- If `<Example />` does get passed some text, then it will display that passed-in text.

### 1. Adding a `defaultProps` static property to the component

```javascript
function Example(props) {
  return <h1>{props.text}</h1>;
}

Example.defaultProps = {
  text: 'This is default text',
};
```

### 2. Specify the defutalt value directly in the funciton definition

```javascript
function Example({ text = 'This is default text' }) {
  return <h1>{text}</h1>;
}
```

### 3. Set the default value in the function body

```javascript
function Example(props) {
  const { text = 'This is default text' } = props;
  return <h1>{text}</h1>;
}
```

## Resources

- [React: Common components](https://react.dev/reference/react-dom/components/common#)
- [What is a component’s instance?](https://discuss.codecademy.com/t/what-is-a-components-instance/384827)
