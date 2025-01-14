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

#### 1. Adding a `defaultProps` static property to the component

```javascript
function Example(props) {
  return <h1>{props.text}</h1>;
}

Example.defaultProps = {
  text: 'This is default text',
};
```

#### 2. Specify the default value directly in the funciton definition

```javascript
function Example({ text = 'This is default text' }) {
  return <h1>{text}</h1>;
}
```

#### 3. Set the default value in the function body

```javascript
function Example(props) {
  const { text = 'This is default text' } = props;
  return <h1>{text}</h1>;
}
```

## Hooks

- With React, we feed static and dynamic data models to JSX to render a view to the screen.
- Hooks are used to “hook into” the internal component state for managing dynamic data in function components.
- React Hooks are functions that let us manage the internal sate of components and handle post-rendering side effects directly from our function components.
- Hooks allow us to determine what we want to show the user by declaring how our user interface should look based on the state.

Built in hooks:

- `useState()`
- `useEffect()`
- `useContext()`
- `useReducer()`
- `useRef()`
- See [the full list](https://react.dev/reference/react) in the React docs

Two main rules to keep in mind when using Hooks:

- Only call Hooks at the top level - not inside of loops, conditions, or nested functions.
- Only call Hooks from React functions or custom Hooks

### State Hook

- We employ the State Hook using `const [currentState, stateSetter] = useState( initialState );`.
  - `currentState`: the current value of the state
  - `stateSetter`: a function that we can use to update the value of this state
  - `initialState`: initializes the value of the state for the component’s first render
- State setters can be called in event handlers.
- We can define simple event handlers inline in our JSX and complex event handlers outside of our JSX.

#### Update Function Component State

When you call `useState()` returns an array with two values:

- The _current state_: the current value of this state.
- The _state setter_: A function that we can use to update the value of this state.

You can assign them to local variables using array destructuring. It’s a convention to name the setter variable using the current state variable with “set” prepended. Ex: `email` and `setEmail()`

Calling the _state setter_ signals to React that the component needs to re-render, so the whole function defining the component is called again. The magic of `useState()` is that it allows React to keep track of the current value of the state from one render to the next.

#### Initializing State

Passing a value as an argument to the `useState()` function call affects the component in three ways:

1. During the first render, the _initial state argument_ is used.
1. When the state setter is called, React ignores the initial state argument and uses the new value.
1. When the component re-renders for any other reason, React continues to use the _same value from the previous render_.

While omitting an initial value when calling `useState()` is usually fine for the computers, it can make it confusing to humans reading the code. So if we don’t have the value needed during the first render, we can explicitly pass `null` instead of passively leaving the value as `undefined`.

```javascript
import React, { useState } from 'react';

function ToggleLoading() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>Turn Loading On</button>
      <button onClick={() => setIsLoading(false)}>Turn Loading Off</button>
    </div>
  );
}
```

Here's an example that manages the changing value of a string as a user types into a text input field:

```javascript
import React, { useState } from 'react';

export default function EmailTextInput() {
  // use array destructuring to create our local state variable email and our local setter function setEmail().
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  };

  // the onChange event listener calls the handleChane event handler function each time the user types something in this element
  return <input value={email} onChange={handleChange} />;
}
```

The following three code blocks are all equivalent, but it's common in React code to use the simplified version.

```javascript
const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
};
```

```javascript
const handleChange = (event) => setEmail(event.target.value);
```

```javascript
const handleChange = ({ target }) => setEmail(target.value);
```

#### Set From Previous State

- React updates are _asynchronous_
- There are some scenarios where portions of your code will run before the state is finished updating
- Grouping the state updates together can improve performance, but it an also result in outdated state values.
- Best practice is to update state with a callback function, preventing accidental outdated values.

For example:

```javascript
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // When the state setter calls the callback function,
  // the state setter callback function takes our previous count as an argument.
  // The value returned by the state setter callback function is used as the next value of count
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}
```

#### Arrays and Objects in State

- We use a state setter callback function when our next value depends on our previous value.
- We use arrays and objects to organize and manage related data that tend to change together.
- Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: `setArrayState((prev) => [ ...prev ])` and `setObjectState((prev) => ({ ...prev }))`.

Arrays are the best data model for managing and rendering JSX lists.

- _static data_ is data that does not change. It's best practice to define static data models outside of function components since htey don't need to be recreated each time our component re-renders.
- _dynamic data_ is data that does change, usually based on a user's actions.
- When updating an array in a state, we replace the previous array with a brand new array rather than adding new data to the previous array.
- Any info we want to save from the previous array needs to be explicitly copied over to our new array using the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...prev`.

You can also use state with objects.

- When updating an object in state, we do not modify the same object and instead must copy over the values from the previous object when setting th next valu eof a state. Inside the state setter callback function, wrap curly brackets in parenthesis which tells JavaScript that hte curly brackets refer to a new object to be returned.
- The spread syntax is the same for objects as for arrays and fills in the corresponding fields from our previous state, and then we overwrite the appropraite key with its updated value

```javascript
setFormState((prev) => ({ ...prev, key: value }));
```

#### Seperate Hooks for Seperate States

It’s best practice to have multiple, simpler states instead of having one complex state object.

- Create differnt state variables for data that can change seperately
- Managing dynamic data is easier when we keep our data models as simple as possible
- Often in React we package and organize data in collections to pass between components, then seperate that data within components where different parts of the data change seperately.
- Hooks give the freexom to organize data in the way that makes the most sense to you

<table>
<tr>
<td>

```javascript
import React, { useState } from 'react';

function Musical() {
  const [state, setState] = useState({
    title: 'Best Musical Ever',
    actors: ['George Wilson', 'Tim Hughes', 'Larry Clements'],
    locations: {
      Chicago: {
        dates: ['1/1', '2/2'],
        address: 'chicago theater',
      },
      SanFrancisco: {
        dates: ['5/2'],
        address: 'sf theater',
      },
    },
  });
}
```

</td>
<td>

```javascript
import React, { useState } from 'react';
function MusicalRefactored() {
  const [title, setTitle] = useState('Best Musical Ever');
  const [actors, setActors] = useState([
    'George Wilson',
    'Tim Hughes',
    'Larry Clements',
  ]);
  const [locations, setLocations] = useState({
    Chicago: {
      dates: ['1/1', '2/2'],
      address: 'chicago theater',
    },
    SanFrancisco: {
      dates: ['5/2'],
      address: 'sf theater',
    },
  });
}
```

</td>
</tr>
</table>

### Effect Hook

The `useEffect()` hook takes in a function and an array.

The Effect Hook is all about scheduling when our effect’s code gets executed.

The function will be executed after the current render process finishes and only if the elements inside the array has changed from the previous render. The Event Hook can be used to run side effects (call to an external API, update another state, etc.) or attach event listeners.

```javascript
useEffect(
  () => {
    // Runs side effect here

    return () => {
      // Do clean up here
    };
  },
  [] // Array of dependencies
);
```

Terminology:

- _effect_: the function that we pass as the first argument of `useEffect()`. By default, the Effect Hook calls this effect after each render.
- _dependency array_: the array of varaibles the effect depends on we can optionally pass as the second argument of `useEffect()`. Prevents repeatedly calling the effect when it is not needed.
- _cleanup function_: function you can optionally have be returned by the effect. Used if the effect does anything that needs to be cleaned up to prevent memory leaks. If the effect returns a cleanup function, then the Effect Hook will call this cleanup function before calling the effect again as well as when the component is being unmounted.

#### Function Component Effects

The Effect Hook tells our component to do something every time it’s rendered (or re-rendered). For example:

1. fetch data from a back-end service.
1. subscribe to a stream of data.
1. manage timers and intervals.
1. read from and make changes to the DOM.

Three key moments when the Effect Hook can be utilized:

1. When the component is first added, or mounted, to the DOM and renders.
1. When the state or props change, causing the component to re-render.
1. When the component is removed, or unmounted, from the DOM.

`useEffect()` has no return value - used only to call the function passed into it as an argument.

#### Clean Up Effects

Some effects require **cleanup**. Ex: when you add event listeners to some element in the DOM, it's important to remove them when you're odne with them to avoid memory leaks.

Because effects run after every render and not just once, if you used an effect to add a new event listener without a cleanup function to remove it, then a new event listener would be added to the DOM every time that the component re-renders and you end up with a BUNCH of duplicitive event listeners that could cause bugs or the app to crash.

```javascript
import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
  const increment = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  useEffect(() => {
    document.addEventListener('mousedown', increment);
    return () => {
      document.removeEventListener('mousedown', increment);
    };
  });

  return <h1>Document Clicks: {clickCount}</h1>;
}
```

#### Control When Effects Are Called

The Effect Hook has a second argument called the **dependency array** that is used to tell the `useEffect()` method when to call the effect and when to skip it. When you utilie the dependency array, the effect is always called after the first render but only called again if something in the dependency array has changed values between renders.

Pay extra close attention to when an effect is called when it's responsible for fetching data from a server. Unnecessary round trips back and forth between React components and the server can be costly in terms of:

- Processing
- Performance
- Data usage for mobile users
- API service fees

Use the State Hook and the Effect Hook together to only fetch new data when a specific piece of state has changed.

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes
```

If you only want an effect to run when the component mounts (renders for the first time) and not when the component re-renders, you can pass an empty array to `useEffect()` as the **dependency array**.

```javascript
useEffect(() => {
  alert('component rendered for the first time');
  return () => {
    alert('component is being removed from the DOM');
  };
}, []);
```

The dependency array can be configured to control when the effect is called in the following ways:

| Dependency Array | Effect called after first render & …           |
| ---------------- | ---------------------------------------------- |
| `undefined`      | every re-render                                |
| Empty array      | not called after re-renders                    |
| Non-empty array  | when any value in the dependency array chances |

#### Seperate Hooks for Seperate Effects

It is best practice to seperate concerns by managing different data with different hooks.

Compare the complexity of these two code blocks:

<table>
<tr>
<th style="width:50%">Data bundled up into a single object</th>
<th style="width:50%">Seperated concerns</th>
</tr>
<tr>
<td>

```javascript
// Handle both position and menuItems with one useEffect hook.
const [data, setData] = useState({ position: { x: 0, y: 0 } });
useEffect(() => {
  get('/menu').then((response) => {
    setData((prev) => ({ ...prev, menuItems: response.data }));
  });
  const handleMove = (event) =>
    setData((prev) => ({
      ...prev,
      position: { x: event.clientX, y: event.clientY },
    }));
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);
```

</td>
<td>

```javascript
// Handle menuItems with one useEffect hook.
const [menuItems, setMenuItems] = useState(null);
useEffect(() => {
  get('/menu').then((response) => setMenuItems(response.data));
}, []);

// Handle position with a separate useEffect hook.
const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMove = (event) =>
    setPosition({ x: event.clientX, y: event.clientY });
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);
```

</td>
</tr>
</table>

## Patterns & Organization

To help reduce a component’s complexity, we can break it down into multiple simpler components.

One popular React programming pattern is to seperate container (stateful) components from presentational (stateless) components, where container components manage complex state or logic and presentational components only render JSX.

Presentational.js

```javascript
function Presentational(/*...props*/) {
  // body of the component
}

export default Presentational;
```

Container.js

```javascript
import { Presentational } from 'Presentational.js';
function Container() {
  // renders Presentational component
}
```

### Container Components

A container component should be in charge of maintaining the state (creating and updating) and passing it on to any component it renders through props.

### Presentational Components

A presentational component's only job is to contain JSX.

- It should be an exported component
- It should be rendered by a conainer component (so it shouldn't render itself)
- Does not maintain state, but can still be reactive - a change in props also triggers a potential change in the rendered JSX
- Should never directly update its props, and should instead use a change handler function passed in as a prop from the container component.

### Parent/Child and Sibling/Sibling Communication

Container components must define and provide a way for the presentational component to communicate with it using a change handler function passed as a prop. Indirectly results in communication between sibling components (components with a common parent).

In the below example:

- `Container` maintainst the `isActive` state & passes `setIsActive` to `Presentational` through the `toggle` prop
- When `Presentational` needs to communicate a change to the `active` prop, it uses the `setIsActive` function passed to it through the `toggle` prop
- When `Presentational` communicates a change through `toggle`, it causes a state update in `Container`, which provides the updated value for `isActive` to both `Presentational` and `OtherPresentational` through the `active` prop.

```javascript
function Container() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Presentational active={isActive} toggle={setIsActive}/>
      <OtherPresentational active={isActive}/>
    </>
    );
  }

function Presentational(props) {
  return (
    <h1>Engines are {props.active}</h1>
    <button onClick={() => props.toggle(!props.active)}>Engine Toggle</button>
  );
}

function OtherPresentational(props) {
  // render...
}
```

## Styles

### Inline Styles and Style Object Variables

- Inline style is a style written as an attribute

  - has double curly braces: outer braces indicate its contents should be read as javascript, inner braces create an object literal

  ```javascript
  <h1 style={{ color: 'red' }}>Hello world</h1>
  ```

- Styles can also be stores as object variables that can be assigned as the value of a "style" attribute

  ```javascript
  const darkMode = {
    color: 'white',
    background: 'black',
  };
  ```

  ```javascript
  <h1 style={darkMode}>Hello world</h1>
  ```

- CSS property names must be written in _camelCase_ in React. Ex `backgroundColor` instead of `background-color`.
  - This is because a hyphen is a reserved operator in JavaScript and will be interpreted as a minus sign.
- In Javascript, style _values_ are almost always strings and require quotation marks. If you write a style value as a number, then the unit `'px'` is assumed.

### CSS Modules

- You can also write a seperate stylesheet for each component
- Import the stylesheet using the `import` keyword: `import './App.css'`
- If multiple stylesheets have the same class names, the names can collide and create style conflicts
- A way to prevent this is to use CSS modules
- Importing the styles as a module causes the styles to only be available for the component that imported the style
- This is done automatically by creating unique class names for each module
- **CSS Modules are the preferred method for styling in React, as they maintain the comositional philosophy of React**

To use CSS modules:

- Name the stylesheet in this format:

  ```javascript
  fileName.module.css;
  ```

- Import the stylesheet into the file containing the component

  ```javascript
  import styles from './fileName.module.css';
  ```

- The `styles` object holds the class selectors of `fileName.module.css`
- To access the selectors, use dot notation:

  ```javascript
  <div className={styles.divStyle}></div>
  ```

- Styles are applied using the `className` attribute rather than `class` because `class` is a reseved JavaScript keyword.

## Forms

- In a non-React environment, when a user types data into a form's input fields, the server doesn't know about it until the user hits a "submit" button, which sends all fo the form's data over to the server simultaneously.
- The problem is the period of time during with a form thinks a user has typed on thing, but the server things the user has typed a different thing - what if during that time, a _third_ part of the website needs to know what a user has typed? The server & the form would have conflicting answers, which could lead to problems.
- In a React form, you want the server to know about every change to the form inputs _as soon as they happen_ so your screen will always be in sync with the rest of the application
- The state of a React form is managed by the component, and updates are triggered by the `onChange` event.
- The `onChange` event uses an event handler to capture changes and determine what actions to take.
- A React form uses the State hook to store the value of the input field in the component's state. The state can then be updated with the state setter.
- React components can be "controlled" or "uncontrolled". Most React forms are controlled, as they control the input's value with the state.

Example uses of React forms:

- Autofill search that tries to offer suggested search terms as you type into the field
- AUtoloading the search results, which load as you type things into the search field
- Games such as speed typing games can utilize React forms to give you points or deductions based on typing accuracy

### Input onChange

- In regular HTML, the state of the form is managed by the browser but doesn't update the server until the user hits "submit"
- In React forms, the state of the form can be managed by the component, and updates are trigged by the `onChange` event
- Your change handler function calls the state setter function to set the state variable to whatever text is currently in the `<input>` field, however that won't update the `value` prop for `<input>`.
  - In React, the `value` prop of an input elemeent is used to control the value of the input and keep it in sync with the component's state
  - So without setting the `value` prop, changes to the input wouldn't be reflected in the _component's_ state
  - So you _also_ need to remember to give your `<input>` tag a `value` attribute that equals your state variable so when the state is updated, the component re-renders, and the `value` prop is set to the new value from the component's state, which makes the component state the "source of truth" for the input's value and ensures everything's in sync and the form data is consistent

```javascript
import React, { useState } from 'react';

function Input() {

  // Define an input state variable and its corresponding state setter function
  const [userInput, setUserInput] = useState('')

  // Define an input event handler that will listen for change events and update the state of the input
  function handleUserInput(e) {
    setUserInput(e.target.value)
  }

  return (
    <>
      <form>
        <label for="exampleInput">Input field: </label>
        <input
          id='exampleInput'
          type='text'

          {/* Tell your handler function to listen to change events */}
          onChange={handleUserInput}

          {/* Set the input tag's value to the state variable so the form data is always in sync with the component state */}
          value={userInput}
        />
      </form>
      <p><strong>Current User Input: </strong></p>
      <p>{userInput}</p>
    </>
  )
}

```

### Controlled vs Uncontrolled

- **Controlled Component:** a component that does not maintain any internal state & is controlled by someone else. Most React components are controlled.
- **Uncontrolled Component:** a component that maintains its own internal state.

In React, you generally want to use controlled components whenever possible because they allow for change-by-change tracking of input form values and better align with React's pattern of storing mutable data in a component's state.

However, if you only need access to the value of the form on submission or are using a `<input type='file'>` form element, then uncontrolled components can be a valuable tool to have in your React toolbelt.

**Note:** "controlled" and "uncontrolled" cannot be used interchangeably with the terms "stateless" and "stateful"

- The terms "controlled" and "uncontrolled" are always used in the context of React forms, which can be "stateless" or "stateful".
- However, "controlled" and "uncontrolled" components are usually attributed with a "stateless" and a "stateful" nature, respectively.
  - A controlled component has its state controlled from outside. Because of this, controlled components are usually stateless as they do not store their own state and receive it from a parent component.
  - Uncontrolled components are essentially stateful, as they store and maintain their own internal state.

[React Docs: Controlled and uncontrolled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

### Uncontrolled Component

An `<input  type='text />` element is an example of an _uncontrolled component_ becuase it keeps track of its own text (aka maintains its own internal state) and you can access what its text is at any time, possibly with some code like this:

```javascript
let input = document.querySelector('input[type="text"]');

let typedText = input.value;
// will always be equal to whatever text is currently in the text box
```

Another way to retrieve the value of an uncontrolled component directly from the DOM when we need it is to use a [ref](https://react.dev/learn/referencing-values-with-refs).

You can create a new uncontrolled component using the [`useRef()` method](https://react.dev/reference/react/useRef).

- `useRef()` returns an object with a `.current` property that refers to the DOM node it is bound to
- This ref object is bound to a form element using the `ref` attribute
- Whenever the value of that form element needs to be retrieved, you refer back to the ref object's `.current` property

```javascript
import ReactDOM from 'react-dom';
import React from 'react';

function PhoneNumberForm() {
  // the numberRef object is created
  const numberRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // the value of the form element can be retireved from the DOM node stored in numberRef.current
    const number = numberRef.current.value;

    if (Number.isNaN(Number(number))) {
      alert('Error: Only numbers allowed.');
    } else if (number.length >= 10) {
      alert('Error: Number length exceeded 10 digits.');
    } else {
      alert(`Sending confirmation code to ${number}.`);
    }
  };

  // the numberRef object is bound to the <input> form element
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" ref={numberRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PhoneNumberForm;
```

**Note:** `<input>` DOM nodes are instances of [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), so their values can be retrieved using the `.value` property. Other form elements may use different properties to access their input values.

### Controlled Component

On other other hand, if you ask a controlled component for information about itself, it will have to get it's information through `props`.

While form elements (`<input>`, `<textarea>`, etc.) are capable of managing their own internal state, in React we typically prefer to maintain anymutable state values within the state property of our components - in other words, turn them into controlled components.

You do this by providing a `value` attribute on the `<input>` element and assigning a component state variable to it.

This allows us to perform immediate validation on every change in the form - like ensure that only numbers are used, or enforce character limits.

```javascript
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function PhoneNumberForm() {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    const newNumber = e.target.value;

    if (!Number.isNaN(Number(newNumber)) && newNumber.length <= 10) {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending confirmation code to ${number}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" value={number} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PhoneNumberForm;
```

### When to use Uncontrolled Components

While creating uncontrolled components are faster and easier than creating controlled components in some ways, given their departure from the React pattern of storing mutable data in a component's state, controlled components are recommended for most scenarios.

**The one situation in which uncontrolled components must always be used:**

- `<input>` form elements with the `type="file"` attribute
- The value for this type of `<input>` form element can only be set by a user, and not programmatically, and therefore the only way to retrieve this value is through a ref.

In this example, we again create a ref using the `React.createRef()` method and then bind it to the `<input>` form element. The uploaded file is stored in the array-like FileList returned by `fileRef.current.files` and the `.size` property of this file is accessed when the user submits the form.

```javascript
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function PhoneNumberForm() {
  const fileRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const size = fileRef.current.files[0].size;
    alert(`This file is ${size} bytes`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="file" ref={fileRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PhoneNumberForm;
```

## Resources

- [React: Common components](https://react.dev/reference/react-dom/components/common#)
- [What is a component’s instance?](https://discuss.codecademy.com/t/what-is-a-components-instance/384827)
- [React: CodeAcademy Resource Docs](https://www.codecademy.com/resources/docs/react)
  - [Components](https://www.codecademy.com/resources/docs/react/components)
  - [Context](https://www.codecademy.com/resources/docs/react/context)
  - [Hooks](https://www.codecademy.com/resources/docs/react/hooks)
  - [JSX](https://www.codecademy.com/resources/docs/react/jsx)
  - [Lifecycle Methods](https://www.codecademy.com/resources/docs/react/lifecycle-methods)
  - [Props](https://www.codecademy.com/resources/docs/react/props)
  - [React Native](https://www.codecademy.com/resources/docs/react/react-native)
  - [Routing](https://www.codecademy.com/resources/docs/react/routing)
  - [State](https://www.codecademy.com/resources/docs/react/state)
  - [Virtual DOM](https://www.codecademy.com/resources/docs/react/virtual-dom)
- [Deploying a React App\* to GitHub Pages](https://github.com/gitname/react-gh-pages)
- [How to use React contedt](https://www.freecodecamp.org/news/how-to-use-react-context/)
- Bootstrap docs
  - [Adding Bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)
  - [Introduction](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
  - [Layout: containers](https://getbootstrap.com/docs/5.3/layout/containers/)
  - [Layout: grid](https://getbootstrap.com/docs/5.3/layout/grid/)

CodeAcademy LearnReact Cheatsheets:

- [JSX](https://www.codecademy.com/learn/react-101/modules/react-101-jsx-u/cheatsheet)
- [React Components](https://www.codecademy.com/learn/react-101/modules/learn-react-components/cheatsheet)
- [Components Interacting](https://www.codecademy.com/learn/react-101/modules/learn-react-components-interacting/cheatsheet)
- [Hooks](https://www.codecademy.com/learn/react-101/modules/react-hooks-u/cheatsheet)
- [Programming Patterns](https://www.codecademy.com/learn/react-101/modules/react-programming-patterns/cheatsheet)
- [React Styles](https://www.codecademy.com/learn/react-101/modules/react-styles/cheatsheet)
- [React Forms](https://www.codecademy.com/learn/react-101/modules/react-forms/cheatsheet)

Task List Tutorials/Examples

- [CodeAcademy](https://www.codecademy.com/paths/build-web-apps-with-react/tracks/react-component-state/modules/react-hooks-u/lessons/the-state-hook/exercises/review)
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
- [geeks for geeks](https://www.geeksforgeeks.org/create-todo-app-using-reactjs/)
- [pusher](https://pusher.com/tutorials/todo-app-react-hooks/#introduction)

Helpful packages

- [@simbathesailor/use-what-changed](https://github.com/simbathesailor/use-what-changed) helps you figure out which dependency array variable caused a given useEffect hook to fire
  - see [this stackoverflow comment](https://stackoverflow.com/a/63837778/28151991)
