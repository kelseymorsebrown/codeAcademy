# React Testing

## Jest

Jest is the default test running included and preconfigured in `create-react-app` so no further installation is necessary when using `create-react-app` to build a new app! Here's the [getting started guide](https://jestjs.io/docs/getting-started) for posterity.

Test files must be located, or match the following naming conventions under the `/src` top level-directory:

- files with names ending in `.test.js`
- files with names ending in `.spec.js`
- `.js` files within a `__tests__/` directory

The test file structure you choose will depend on the specific needs of your project (and personal preference) - just make sure you pick one method and stick to it for the whole project.

It's good practice to match the name of the test file to the file that you want to test. Ex: the test file for `math.js` should be called `math.test.js`.

Once test files are created, you run tests using the command `npm test` which launches the test in _watch mode_, allowing the test to re-run every time the file is saved. To quit out of watch mode, type `q` in the terminal.

### Configuring Jest

- Customize terminal output from tests using [command line flags](https://jestjs.io/docs/cli#reference).
- `--coverage` flag allows us to get a report of which lines of our code were actually tested

```bash
npm test -- --coverage
```

The `--` between `npm test` and `--coverage` separates the argument from the test command itself.

Coverage report analyzes 4 categories of code:

- Statement coverage analyzes the percentage of the program's statements that have been executed.
- Branch coverage analyzes the percentage of the program's edge cases that have been executed.
- Function coverage analyzes the percent of the program's functions that have been called during testing.
- Line coverage analyzes the percentage of the program's executable lines in the source file that have been executed.

### Unit Testing

`it()` and `test()` are functionally the same, but you should pick one and use it consistently to make your test more readable.

```javascript
it('should render onto the screen', () => {});
test('should render onto the screen', () => {});
```

`it()` and `test()` take three arguments:

1. A string describing what's being tested
2. A callback function containing assertations and other testing logic
3. And optional timeout in milliseconds that specifies how long a test should wait before automatically aborting. If unspecified, this defaults to 5000 ms.

```javascript
//file: __tests__/recipes.test.js

// import the functions to test
import { findRecipe, getIngredients } from './recipes.js';

it('gets the full recipe for pesto', async () => {
  // testing logic for findRecipe() omitted...
}, 10000);

it('gets only the ingredients list for pesto', () => {
  // testing logic for getIngredients() omitted...
});
```

Contents of the callback function should follow the Arrange, Act, Assert best practice testing pattern:

- Arrange: set up the variables and conditions we need
- Act: invoke the functionality we want to test
- Assert: check if the code has produced the expected output

The `expect()` function asserts the expected behavior of our program and is almost always used in conjunction with matcher methods such as `.toBe()`. Multiple `expect()` assertions can be made within a single `it()` call, and all must pass in order for the entire test to pass.

```javascript
expect(2 + 2).toBe(4);
```

See the full list of matcher methods in the [docs](https://jestjs.io/docs/expect)

Common ones include:

- `.toBeDefined()` is used to verify that a variable is not undefined
- `.toEqual()` is used to perform deep equality checks between objects
- `.toBe()` is similar to `.toEqual()` but is used to compare primitive values
- `.toBeTruthy()` is used to verify whether a value is truthy or not
- `.not` is used before another matcher to verify that the opposite result is true
- `.toContain()` is used when we want to verify that an item is in an array

### Testing Async Code

Must account for possible timing issues in testing that arise from asynchronous operations in code.

- use `done()` for asynchronous code that uses callbacks
- use `async`/`await` for code that returns Promises

#### done()

- By default, Jest is not aware that it must wait for asynchronous callbacks to resolve before finishing a test
- Without special handling, you can get false positives
- `done` parameter in the `test()` callabck function. value of `done` is a function, and when included as a paramter, jest knows that the test should not finish until this `done()` function is called.

Example test validating a `findRecipes()` method that will make an ascynchronous REST API call and pass the resolved data to a callback function.

```javascript
// tell Jest to wait until the done function is called before concluding the test
it('Gets the full recipe for pesto', (done) => {
  //arrange
  const dish = 'pesto';
  const expectedRecipe = {
    Basil: '2 cups',
    'Pine Nuts': '2 tablespoons',
    Garlic: '2 cloves',
    'Olive Oil': '0.5 cups',
    'Grated Parmesan': '0.5 cups',
  };

  //act
  findRecipe(dish, (actualRecipe) => {
    //assert
    try {
      expect(actualRecipe).toEqual(expectedRecipe);
      // done is called after the expect() assertion is made
      // so the expect() results will not be reported until the
      // async opertiaon is complete and Jest moves on to the next test
      done();
    } catch (error) {
      done(error);
    }
  });
});
```

Things to notice:

- We need to pass `done` as an argument to the `it()` function to signal that the test will perform an async operation.
- The `expect()` and `done()` calls are being made in a `try` block, which is not required but is best practice for the following reasons:
  - If we didn't use a `try` block, if the assertion were to fail, `expect()` would throw an error before the `done()` function gets a chance to be called, and so Jest would think the test failed due to a a timeout error rather than the actual error thrown by the failed `expect()` assertion.
  - By using a `catch` block, we can capture the error value thrown and pass it to `done()`, which then displays it in the test output.

#### async/await

- If instead of passing the fetched data to a callback, the function returns a Promise, use `async` and `await` keywords.

Jest will wait for any `await` statement to resolve before continuing on

Example test validating a `findREcipes()` method that returns a Promise:

```javascript
it('Gets the full recipe for pesto', async () => {
  //arrange
  const dish = 'Pesto';
  const expectedRecipe = {
    Basil: '2 cups',
    'Pine Nuts': '2 tablespoons',
    Garlic: '2 cloves',
    'Olive Oil': '0.5 cups',
    'Grated Parmesan': '0.5 cups',
  };

  //act
  const actualRecipe = await findRecipe(dish);

  //assert
  expect(actualRecipe).toEqual(expectedRecipe);
});
```

### Mocking

Testing functions that make API calls with the real API is not ideal for a few reasons:

- We only care about whether or not the function that performs the API call works, not whether the 3rd party API works
- It can create fragile tests that may fail simply due to network issues.
- If we were interacting with a production-grade database, we could accidentally alter official data.

Instead, we want to create a **mock** function that bypasses the API call and returns values that we control.

Creating a mock function and then replacing the real cuntion with the mocked one requires two seperate steps.

#### Creating a mocked function

1. Create a directory labeled `__mocks__/` in the same directory as the module we want to mock.
2. Inside that directory, create a file with the same name as the module that will be mocked.
3. Create a module with the functionality that we want. Functions that we want to mock can be created using `jest.fn()` (see [jest docs](https://jestjs.io/docs/mock-function-api))
4. Export the module

Example mock for a function called `apiRequest()` that is exported from fa file called `utils/api-request.js`:

- Since we are mocking the `utils/api-request.js` file, we create a file called `utils/__mocks__/api-request.js`.
- Inside that file, declare an `apiRequest()` function that is assigned a value of `jest.fn()`.
- By passing a callback function to `jest.fn()`, we can define the behavior of the mocked function. In this case, we have the mocked function return a custom Promise that matches the structure expected by our application (an object with `status` and `data` properties).
- Lastly, we export `apiRequest` as the default export.

```javascript
// file: utils/__mocks__/api-request.js
// Create a Jest mock function with the same name as the function we're mocking
const apiRequest = jest.fn(() => {
  //Return a resolved Promise with a mock response object
  return Promise.resolve({
    status: '',
    data: {},
  });
});

export default apiRequest;
```

#### Replacing a function with a mocked function in testing

1. In the test file, import the real function
2. Use the `jest.mock()` function to override the value with the mocked one defined in the `__mocks__/` folder.

- `jest.mock()` accepts a string as an argument that should match the file path to the file being mocked
- This second step only applies to local modules. When mocking modules installed into the `node_modules` directory, the module will be automatically mocked when it is imported in step 1

Example mocking a function called `apiRequest()`:

- Any `apiRequest()` function calls made in the Jest tests will use the mocked version instead

```javascript
// import the actual module
import apiRequest from './api-request.js';

// then tell Jest mock the implementation!
jest.mock('./api-request.js');
```

We can further manipulate how specific methods in the mocked module behave by using special methods attached to functions mocked with `jest.fn()`. For example `mockFunction.mockResolvedValueOnce()` accepts a value that the next call to `mockFUnction()` will resolve to. See [Jest docs](https://jestjs.io/docs/mock-function-api) for other methods available for controlling mocked functions.

```javascript
import { findRecipe } from './recipes.js';

// import the actual module
import apiRequest from './api-request.js';

// then, tell Jest to mock the implementation!
jest.mock('./api-request.js');

it('Gets the full recipe for a dish', async () => {
  // arrange
  const dish = 'Pesto';
  const expectedValue = { 'Magical Deliciousness': '3 cups' };

  // set the resolved value for the next call to apiRequest
  const mockResponse = {
    status: 'mock',
    data: { 'Magical Deliciousness': '3 cups' },
  };

  // .mockResolvedValueOnce() method used to determine
  // what the next call to the apiRequest() function
  // will resolve to
  apiRequest.mockResolvedValueOnce(mockResponse);

  // act
  const actualRecipe = await findRecipe(dish);

  // assert
  expect(actualRecipe).toEqual(expectedValue);
});
```

## React Testing Library

- A UI-layer testing framework that helps us ensure that our React components are rendering and behaving properly
- Built explicltly for testing React components
- Allows testing components in a way that mimics real user interactions
  - User will only care if they can use the app or not - they don't care about the implementation details of a React component (like state or props)

With the React Testing Library, we can:

- Virtually render React components in the testing environment
- Use the `screen` object to query elements in the DOM to make assertions
- Utilize the `user-event` library extension to simulate user interactions in the DOM
- Understand the difference between query methods in React Testing Library
- Work with asynchronously rendered elements and understand the best practices to test them
- Verify the behavior of components that make API calls

### The Render and Screen Objects

- `render()`: a function we can use to virtually render components and make them available in our unit tests. Takes in JSX as an argument similar to `ReactDOM.render()`
- `screen`: special object which can be thought of as a representation of the browser window.
  - `screen.debug()`: prints out all the DOM contents so we can make sure that our virtually rendered components are available to the test
- import from `@testing-library/react`

Example test:

```javascript
import { render, screen } from '@testing-library/react';

const Greeting = () => {
  return <h1>Hello World</h1>;
};

it('prints out the contents of the DOM', () => {
  render(<Greeting />);
  screen.debug();
});
```

And the `screen.debug()` output:

```html
<body>
  <div>
    <h1>Hello World</h1>
  </div>
</body>
```

### Querying with RTL

To work with the DOM elements to test how they react to user actions:

1. Query for and extract the DOM nodes from our virtually rendered components
2. Check to see if the extratcted DOM nodes were rendered as expected

RTL ha smany built-in query methods to simplify this process.

#### .getByX query methods

- There are a number of `.getByX` query methods in the [docs](https://testing-library.com/docs/queries/about/)
- They are all accessible as methods on the `screen` object
- If there is a match, meaning that it was able to find a matching node for the query, it will return the element
  - Otherwise, it will throw an error and immediately cause the test to fail.
- Examples
  - `.getByText()` extracts a DOM element with text that matches a specified string
  - `.getByRole()` extracts a DOM note by its role type
  - `.getAllByText()` returns an array
- They can be tested using Jest assertions, some of which are extensions provided by the `testing-library/jest-dom` library, like `expect.toBeChecked()`
  - [jest-dom docs](https://github.com/testing-library/jest-dom)
  - Import into testing file: `import '@testing-library/jest-dom';`

```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const Button = () => {
  return (
    <button type="submit" disabled>
      Submit
    </button>
  );
};

it('Rendered a "Submit" button', () => {
  // Render the Button component
  render(<Button />);
  // Extract the <button>Submit</button> node
  const button = screen.getByText('Submit');
});

it('extracts the button DOM node', () => {
  // Render the Button component
  render(<Button />);
  // Extract the <button>Submit</button> node
  const button = screen.getByRole('button');
});

it('shows the button as disabled', () => {
  // render Button component
  render(<Button />);
  // Extract <button>Submit</button> Node
  const button = screen.getByRole('button');
  // Assert button is disabled
  expect(button).toBeDisabled();
});
```

#### .queryByX query methods

- `.queryByX` methods return `null` if they don't find a DOM node
  - Useful when asserting that an element is NOT present in the DOM

The below examples test a simple component that renders a header with the text 'Hello World!' and then changes the text to 'Goodbye!' 500ms after the user clicks a button.

```javascript
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('Hello World!');

  // Changes header text after interval of 500ms
  const handleClick = () => {
    setTimeout(() => {
      setText('Goodbye!');
    }, 500);
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default App;
```

Example test:

```javascript
import App from './components/App';
import { render, screen } from '@testing-library/react';

it('Header should not show Goodbye yet', () => {
  // Render App
  render(<App />);
  // Attempt to extract the header element
  const header = screen.queryByText('Goodbye!');
  // Assert null as we have not clicked the button
  expect(header).toBeNull();
});
```

#### .findByX query methods

- Use `.findByX` methods to query for aynchronous elements which will eventualy appear in the DOM
- They return a Promise, which resolves when the queried element renders in the DOM
- The callback function that carries out the unit test must be defined as `async` and the `screen.findByX` method must be preceeded by `await`

Example test for a header that will display the text `'Goodbye'` after the button is clicked, where the header has a 500ms delay.

```javascript
it('should show text content as Goodbye', async () => {
  // Render App
  render(<App />);
  // Extract button node
  const button = screen.getByRole('button');
  // click button
  userEvent.click(button);
  // Wait for the text 'Goodbye!' to appear
  const header = await screen.findByText('Goodbye!');
  // Assert header to exist in the DOM
  expect(header).toBeInTheDocument();
});
```

#### .waitFor() method

- Useful for testing components that _disappear_ asynchronously.
- Takes a callback function as an argumentw here we can make asynchronous function calls, perform queries, and/or run assertions
- needs to be prefaced with `await`
- `import { waitFor } from '@testing-library/react';`
- example structure:

  ```javascript
  await waitFor(() => {
    expect(someAsyncMethod).toHaveBeenCalled();
    const someAsyncNode = screen.getByText('hello world');
    expect(someAsyncNode).toBeInTheDocument();
  });
  ```

For example, to test a component where the header is removed after 250ms when the button "Remove Header" is clicked;

```javascript
// In header.js:
export const Header = () => {
  const handleClick = () => {
    setTimeout(() => {
      document.querySelector('h1').remove();
    }, 250);
  };
  return (
    <div>
      <h1>Hey Everybody</h1>
      <button onClick={handleClick}>Remove Header</button>
    </div>
  );
};
```

```javascript
import { waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Header } from './heaader.js';

it('should remove header display', async () => {
  // Render Header
  render(<Header />);
  // Extract button node
  const button = screen.getByRole('button');
  // click button
  userEvent.click(button);

  // Wait for the element to be removed asynchronously
  await waitFor(() => {
    const header = screen.queryByText('Hey Everybody');
    expect(header).toBeNull();
  });
});
```

### Mimicking User Interactions

- `@testing-library/user-event` exports a single object `userEvent`
- import: `import userEvent from '@testing-library/user-event';`
- Contains many built-in methods that allow us to mimic user interactions following this syntax pattern:

  ```javascript
  userEvent.interactionType(nodeToInteractWith);
  ```

- `userEvent.type()` for example accepts a DOM note to interact with, and a string to type into that node.
- `userEvent.click()` simulates clicks
- `userEvent.hover()` simulates hovering
- See the [docs](https://testing-library.com/docs/user-event/intro/) for more methods

Example simulating a user filling in a text box:

```javascript
const GreetingForm = () => {
  return (
    <form>
      <label htmlFor="greeting">Greeting:</label>
      <input type="text" id="greeting" />
      <input type="submit" value="Submit" />
    </form>
  );
};

it('should show text content as Hey Mack!', () => {
  // Render the component to test
  render(<GreetingForm />);
  // Extract the textbox component
  const textbox = screen.getByRole('input');
  // Simulate typing 'Hey Mack!'
  userEvent.type(textbox, 'Hey Mack!');
  // Assert textbox has text content 'Hey Mack!'
  expect(textbox).toHaveValue('Hey Mack!');
});
```

### Testing for Accessibility

- Write “queries that reflect the experience of visual/mouse users as well as those that use assistive technology.”
- Usually, this means using the same text that the user would see, rather than the implementation details like class names or IDs.
- If a test can find and interact with your elements by their text, it's more likely that a user who uses assistive technology can as well.
- Sticking to querying wtih `byRole` queries which queries any elements within the [accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)
- Example, if we tried to use `getByRole` to test an input form like this `<input id="search" value="" />`, it would not be able to query for this element, which exposes a component that is inaccessible

  - To fix it, the element would need a `type` (which provides a [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)) and a `label` with an `htmlFor` attribute which provides an [accessible name](https://www.tpgi.com/what-is-an-accessible-name/) for an element

  ```javascript
  <label htmlFor="search">
    <input type="search" id="search" value="" />
  </label>
  ```

  - and the query can be `screen.getByRole('searchbox', {name: /search/i})`
