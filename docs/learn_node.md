# Learn Node.js

## Application Ecosystem

The **front-end** of a website or application consists of the HTML, CSS, JavaScript, and static assets sent to a client, like a web browser. When a web application caters content to the specific user rather than sending the same files for every visitor of the web page, it's called "dyanamic content"

- A **web server** is a process running on a computer somewhere that listens for incoming requests for information over the internet and sends back responses.
- Storing, accessing, and manipulating data is a large part of a web application's **back-end**

The **server-side** of a web application, sometimes called the **application server**, is the collection of programming logic required to deliver dynamic content to a client, manage security (such as authorization and authentication), process payments, and myriad other tasks.

- **Authentication:** the process of validating the identity of a user
- **Authorization:** controls which users have access to which resources and actions

Data is stored in **databases** which can be **relational** databases or **NoSQL** databases.

- **[Relational (aka "SQL")](https://www.codecademy.com/article/what-is-rdbms-sql) databases:** store info in tables with columns and rows.
  - **Structured Query Language** aka SQL: a programming language for accessing and changing data stored in relationsal databases
  - Popular SQL databases:
    - [MySQL](https://www.mysql.com/)
    - [PostgreSQL](https://www.postgresql.org/)
- **[Non-relational (aka "NoSQL")](https://en.wikipedia.org/wiki/NoSQL) databases:** use systems like key-value pairs or a document [storage](https://www.codecademy.com/resources/docs/javascript/storage) model.
  - Popular NoSQL databases:
    - [MongoDB](https://www.mongodb.com/)
    - [Redis](https://redis.io/)

![chart of SQL vs NoSQL databases](https://ptgmedia.pearsoncmg.com/images/chap4_9780135853290/elementLinks/04fig04_alt.jpg)

The **back-end** of web application often has a **web API** which is a way of interacting with an application's data through HTTP requests and responses. This type of HTTP request indicates how it would like to interact with a web application's data (create new data, read existing data, update existing data, or delete existing data), and it receives some data back as a response.

A **stack** is the collection of technologies used to create the front-end and back-end of a web application

- the [MEAN stack](<https://en.wikipedia.org/wiki/MEAN_(software_bundle)>) is a technology stack for building web applications that uses **M**ongoDB as the database, **N**ode.js with **E**xpress.js for the rest of the back-end, and **A**ngular as a front-end framework.
- the [LAMP Stack](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) uses Linux, Apache, MySQL, and PHP.

Example back-end frameworks:

| Framework     | Language                                  |
| ------------- | ----------------------------------------- |
| Laravel       | PHP                                       |
| Express.js    | JavaScript (runs in the Node environment) |
| Ruby on Rails | Ruby                                      |
| Spring        | Java                                      |
| JSF           | Java                                      |
| Flask         | Python                                    |
| Django        | Python                                    |
| ASP.NET       | C#                                        |

## JavaScript for Node.js

Essential JS concepts for Node.js

- [arrow expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are a ES6 feature that allow devs to omit parts of a function they don't need, allowing code to become more maintainable and organized.
- Node.js and JavaScript uses a mix of synchronous code (blocking I/O) and asynchronous code (non-blocking I/O). [Overview of Blocking vs Non-Blocking calls in Node.js](https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking)
  - A Promise is a JavaScript object that represents the eventual outcome of an asynchronous operation. It has three different outcomes:
    - pending: the result is undefined and the epxression is waiting for a result
    - fulfilled: the promise has been completed successfully and returned a value
    - rejected: the promise did not successfully complete, the result is an error object
  - The async... await syntax allows devs to easily implement Promise-based code.
    - `async` keyword in conjunction with a function declaration creates an async function taht returns a Promise
    - `await` keyword blocks the event loop until a given promise resolves or rejects. also allows us to assign the resolved value of a Promise to a variable.
- [`setInterval()` function](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) executes a code block at a specificed interval, in milliseconds

  - Requires two arguments: the name of the function (the code block that will be executed), and the number of milliseconds (how often the function will be executed). You caan also (optionally) pass additional arguments which will be supplied as parameters for the function that will be executed by `setInterval()`.
  - Will continue to execute until the `clearInterval()` function is called or the node process is exited.

  ```javascript
  // Defining a function that instantiates setInterval
  const showAlert = () => {
    // Calling setInterval() and passing a function that shows an alert every 5 seconds.
    setInterval(() => {
      alert('I show every 5 seconds!');
    }, 5000);
  };

  // Calling the newInterval() function that calls the setInterval
  showAlert();
  ```

- [`setTimeout()` function](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) executes a code block after a specified amount of time (in milliseconds) and is only executed once.

  - Accepts the same arguments as the `setInterval()` function.
  - Using the `clearTimeout()` function will prevent the function specified from being executed.

  ```javascript
  // Defining a function that calls setTimeout
  const showTimeout = () => {
    // Calling setTimeout() that passes a function that shows an alert after 5 seconds.
    setTimeout(() => {
      alert('I only show once after 5 seconds!');
    }, 5000);
  };

  // Calling the showTimeout() function
  showTimeout();
  ```

## JSON

- Stands for JavaScript Object Notation
- A popular, language-independent, standard format for storing and exchanging data
- Has become the de facto standard that facilitates storing and sending data between all programming languages
- Heavily used to facilitate data transfer in web applications between a client, such as a web browser, and a server
  - For example: when you fill out a web form, the form data is converted from HTML to JavaScript objects to JSON objects and sent to a remote web server for processing
- Syntax rules are derived from JavaScript objects and look very similar.
  - The curly braces, `{..}`, hold objects.
  - The square brackets, `[..]`, hold arrays.
  - Data is stored in name-value pairs separated by a colon, `:`.
  - Every name-value pair is separated from another pair by a comma, `,`. Similarly, every item in an array is delimited by a comma as well.
  - Trailing commas are forbidden.
  - JSON property names must be in double-quoted (`" "`) text even though JavaScript names do not hold by this stringency.
- A JSON data type must be one of the following:
  - string (double-quoted)
  - number (integer or floating point)
  - object (name-value pair)
  - array (comma-delimited)
  - boolean (true or false)
  - null
- Types that are not represented in JSON, such as dates, can be stored as a string and converted to a language-specific data structure

## Node.js

- Node.js (invented in 2009 by Ryan Dahl) is a JavaScript _runtime_ -- an environment that lets us execute JavaScript code outside of the browser
- A **runtime** converts code written in a _high-level_, human-readable, programming lnaguage and compiles it down to code the computer can execute
- Node can be sued to build web servers and web applications in JavaScript as well as creating command-line applications or desktop applications
- Can be combined with frameworks like Express.js to create effective web applicaiton back-ends

### Node REPL

- [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) is an abbreviation for **r**ead-**e**val-**p**rint **l**oop. It's a program that loops through three different states:
  - a read state where the program reads input from a suer
  - the eval state where the program evaluates the user's input
  - the print state where the program prints out its evalutaiton to a console
  - then it loops though these states again
- Node comes with a built-in JavaScript REPL
- Access it by typing the command `node` with nothing after it into the terminal and hitting enter
- A `>` characterw ill show up in the terminal, indicating the REPL is running and prompting your input
  - Default is that enter means the input is ready for eval
  - to type multiple lines & have them evaluated at once, type `.editor` while in the REPL
  - Once in "editor" mode, type `CTRL` + `d` when you're ready for the input to be evaluated
- Each REPL has a single shared memory & you can access any variables or functions you define until you exit it
- Node environment contains Node-specific global elements, which sit inside the [Node `global` object](https://nodejs.org/api/globals.html)
  - `console.log(Object.keys(global))` to see them all listed out as an array
- There is no `Window` object in a Node environment: this is b/c `Window` object is the JavaScript object in the browser that holds the DOM, and we don't have a DOM in the Node environment

### Executing a program

- Create a javascript file. Ex: `myProgram.js`
- In terminal, type `node myProgram.js`
- Terminal will print the output of the program

### Core Modules

- **Modularity:** a software design technique where one program has distinct parts, each providing a single piece of the overall functionality.
  - Essential for scalable programs
  - A [module](https://www.codecademy.com/resources/docs/javascript/modules) is a collection of code located in a file. The terms "module" and "file" are often used interchangably.
  - These files can be included in other files by using the `require()` function
- Node has several built-in modules called **Core Modules** that are defined within the Node.js's source code in the `lib/` folder.
- Access the complete list of core modules by entering the REPL and then typing the command `require('module').builtinModules`

  ```javascript
  // Require in the 'events' core module:
  const events = require('events');
  ```

#### Console

Example console methods:

- `.log()` — to print messages to the terminal.
- `.assert()` — to print a message to the terminal if the value is falsy.
- `.table()` — to print out a table in the terminal from an object or array.

```javascript
const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray);
console.table(petsArray);
console.assert(petsArray.length > 5);
```

```bash
[ 'dog', 'cat', 'bird', 'monkey' ]
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │  'dog'   │
│    1    │  'cat'   │
│    2    │  'bird'  │
│    3    │ 'monkey' │
└─────────┴──────────┘
Assertion failed
```

#### Process

A _process_ is the instance of a computer program that is being executed. Node's [global `process` object](https://nodejs.org/api/process.html) has methods and info about the current process.

- `process.env` an object which stores and controls info about the environment in which the process is currently running

  - One convention is to add a property to `process.env` with the key `NODE_ENV` and a value of either `production` or `development`

  ```javascript
  if (process.env.NODE_ENV === 'development') {
    console.log('Testing! Testing! Does everything work?');
  }
  ```

- `process.memoryUsage()` returns info on the CPU demands of the current process
  - The `process.memoryUsage().heapUsed` method will return a number representing how many bytes of memory the current process is using. ("heap" can mean different things depending on the context. In some contexts it can refer to a [specific data structure](<https://en.wikipedia.org/wiki/Heap_(data_structure)>), but in this context it refers to [a block of computer memory](https://en.wikipedia.org/wiki/Memory_management))
- `process.argv` holds an array of command line values provided when the current process was initiated.

  - the first element in the array is the absolute path to Node, which ran the process
  - the second element in the array is the path to the file that's running
  - the following elements will be any command line arguments provided when teh process was initiated. Command line args are separated from one another with spaces

  ```bash
  node myProgram.js testing several features
  ```

  ```javascript
  console.log(process.argv[3]); // Prints 'several'
  ```

#### OS

The `os` module contains information about the computer, operating system, and network on which the program is running. Unlike `process` and `console`, the `os` module is not global and needs to be included into the file in order to gain access to its methods.

```javascript
const os = require('os');
```

- `os.type()` — to return the computer's operating system.
- `os.arch()` — to return the operating system CPU architecture.
- `os.networkInterfaces()` — to return information about the network interfaces of the computer, such as IP and MAC address.
- `os.homedir()` — to return the current user's home directory.
- `os.hostname()` — to return the hostname of the operating system.
- `os.uptime()` — to return the system uptime, in seconds.

#### Utility

Devs sometimes classify outlier functions used to maintain code and debug certain aspects of a program's functionality as "utility functions". These functions don't necessarily create new functionality in a program, but are internal tools used to maintain and debug the code.

The Node.js `util` core module contains methods designed for this purpose. It needs to be required into a file with `const util = require('util');`

`types` object provides methods for runtime type checking in Node. Ex: `util.types.isDate()` checks for `Date` objects and returns a boolean value

`.promisify()` turns callback functions into promises. Since promises are over preferred over callbacks (and especially nested callbacks) you can use `.promisify()` to turn tese into promises.

<table>
<tr>
<th>Before</th>
<th>After</th>
</tr>
<tr>
<td>

```javascript
function getUser(id, callback) {
  return setTimeout(() => {
    if (id === 5) {
      callback(null, { nickname: 'Teddy' });
    } else {
      callback(new Error('User not found'));
    }
  }, 1000);
}

function callback(error, user) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  console.log(`User found! Their nickname is: ${user.nickname}`);
}

getUser(1, callback); // -> `User not found`
getUser(5, callback); // -> `User found! Their nickname is: Teddy`
```

</td>
<td>

```javascript
const getUserPromise = util.promisify(getUser);

getUserPromise(id)
  .then((user) => {
    console.log(`User found! Their nickname is: ${user.nickname}`);
  })
  .catch((error) => {
    console.log('User not found', error);
  });

getUser(1); // -> `User not found`
getUser(5); // -> `User found! Their nickname is: Teddy`
```

</td>
</tr>
</table>

#### Events

The `events` module provides `EventEmitter` objects used to assign listener functions triggered on specified events.

Traditional programing gives the computer a series of instructions to execute in a pre-defined order. Conversely, programming web applications involves writing logic to handle situations without knowing exactly when they'll occur.

Node applies the same concept of event-driven principles to the back-end environment and provides an `EventEmitter` class which can be accessed by requiring the `events` core module.

`.on()` method of an event emitter instance assigns a listener callback function to a named event. 1st arg is a string (name of the event), 2nd arg is the listener callback function.

`emit()` method announces a named event has occured. 1st arg is a string (name of the event), 2nd arg is the data that should be passed into the listener callback function.

```javascript
// Require in the 'events' core module
let events = require('events');

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

let newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};

// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener);

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad'); //newUserListener will be invoked with 'Lily Pad'
```

#### User inputs/outputs

In the Node environment, the console is the terminal, and the `console.log()` method is a "thin wrapper" on the `.stdout.write()` method of the `process` object. `stdout` stands for "standard output".

In Node, we can also receive input from a user through the terminal using the `stdin.on()` method on the `process` object. Under the hood, `process.stdin` is an instance of `EventEmitter`. Input read through the terminal is received as a [Buffer](https://nodejs.org/api/buffer.html#buffer_buffer) object with a new line character at the end.

```javascript
process.stdin.on('data', (userInput) => {
  let input = userInput.toString();
  console.log(input);
});
```

In the above example, when a user enters text into the terminal and hits enter, a `'data'` event will be fired and our anonymous listener callback will be invoked. The `userInput` is an instance of [the Node Buffer class](https://nodejs.org/api/buffer.html#buffer_buffer), so we convert it to a string before printing.

#### Error

The Node environment's `error` module has all the standard JavaScript errors as well as the JavaScript `Error` class for creating new error instances. `error` is within the global scope so no need to import it with `require()`

**Error-first callback functions** are callback functions which have an error as the first expected argument and the data as the second argument. If the asynchronous task results in an error, it will be passed in as the first argument to the callback function. If no error was thrown, the first argument will be undefined.

Many asynchronous Node APIs use these because traditional `try...catch` statements won't work for errors thrown during asynchronous operations.

<table>
<tr>
<th>Before</th>
<th>After</th>
</tr>
<tr>
<td>

```javascript
const api = require('./api.js');

// Not an error-first callback
let callbackFunc = (data) => {
  console.log(`Something went right. Data: ${data}\n`);
};

try {
  api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch (err) {
  console.log(`Something went wrong. ${err}\n`);
}
```

</td>
<td>

```javascript
const api = require('./api.js');

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

api.errorProneAsyncApi('problematic input', errorFirstCallback);
```

</td>
</tr>
<tr>
<td>
Output:

```bash
Running naiveErrorProneAsyncFunction with input: problematic input...

/home/ccuser/workspace/node-js-essentials-the-error-module/api.js:20
        throw new Error('whoops')
        ^

Error: whoops
    at Timeout._onTimeout (/home/ccuser/workspace/node-js-essentials-the-error-module/api.js:20:15)
    at listOnTimeout (internal/timers.js:557:17)
    at processTimers (internal/timers.js:500:7)
```

</td>
<td>
Output:

```bash
Running errorProneAsyncApi with input: problematic input...

Something went wrong. Error: whoops
```

</td>
<tr>
</table>

#### Buffer

The `buffer` module is used to handle binary data. It is within the global scope and do not need to be `require()`ed to be accessed.

A `Buffer` object represents a fixxed amount of memory that can't be resized.

Provides a varity of methods to handle binary data.

- `.alloc()` creates a new `Buffer` object with the size specified in the first parameter.

  - 1st arg is the size of the buffer. It is required.
  - 2nd arg is a value to fill the buffer with (Default is 0). It is optional.
  - 3rd arg is encoding (default is UTF-8). It is optinal.

  ```javascript
  const buffer = Buffer.alloc(5);
  console.log(buffer); // Ouput: [0, 0, 0, 0, 0]
  ```

- `.toString()` translates the `Buffer` object into a human readable string. Accepts 3 optional arguments.

  - 1st arg is encoding (default is UTF-8)
  - 2nd arg is the byte offset to begin translating in the `Buffer` object (default is 0)
  - 3rd arg is the byte offset to end translating in the `Buffer` object (default is the length of the buffer)

  ```javascript
  const buffer = Buffer.alloc(5, 'a');
  console.log(buffer.toString()); // Output: aaaaa
  ```

- `.from()` creates a new `Buffer` object from the specified string, array, or buffer. Accpets 2 arguments.

  - 1st arg is an object to fill the buffer with
  - 2nd arg is encoding (default is UTF-8). it is optional.

```javascript
const buffer = Buffer.from('hello');
console.log(buffer); // Output: [104, 101, 108, 108, 111]
```

- `.concat()` joins all buffer objects passed in an array into one `Buffer` object - which is handy since `Buffer` objects can't be resized. Accepts 2 artguments:
  - 1st arg is an array of `Buffer` objects.
  - 2nd arg is length of the concatenated buffer. It is optional.

```javascript
const buffer1 = Buffer.from('hello'); // Output: [104, 101, 108, 108, 111]
const buffer2 = Buffer.from('world'); // Output:[119, 111, 114, 108, 100]
const array = [buffer1, buffer2];
const bufferConcat = Buffer.concat(array);

console.log(bufferConcat); // Output: [104, 101, 108, 108, 111, 119, 111, 114, 108, 100]
```

#### FS

The `fs` module is used to interact with the user's filesystem. When running JavaScript code on a browser, it's important for a script to have only limited access to a user's filestystem.

**Sandboxing:** the technique of isolating some applications from others. It protects users from malicious programs and invasions of privacy.

Less restricted interaction with the filesystem is essential for the back-end, and the Node `fs` module is an API that was modeled after the [POSIX](https://en.wikipedia.org/wiki/POSIX) standard for interacting with the filesystem.

Each method on `fs` has a synchronous versaion and an asynchronous version.

```javascript
// require the fs core module
const fs = require('fs');

// define an error-first callback function
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

// invoked readFile with three args:
fs.readFile(
  './file.txt', // a string containing the path to the the file
  'utf-8', // a string specifying the file's character encoding
  readDataCallback // the callback funtion to be invoked when the asynchornous task of reading the file system is complete
  // Node will pass the contents of file.txt into the provided callback as its second argument
);
```

#### Readable Streams

**Stream**: wwhen data is processed sequentialy, piece by piece, rather than all at once. It is preferable since you don't need enough RAM to process all the data ont once, nor do you need to have all the data on hand to begin processing it.

A simple usage is reading and writing to files line-by-line.

Readable streams end when they have no more data to read, but writeable streams could remain open indefinitely. Use the `.end()` method to indicate the end of a writeable stream.

```javascript
// require readline and fs core modules
const readline = require('readline');
const fs = require('fs');

// invoke readline.createInterface with an object containing the input and store it as a variable
const myInterface = readline.createInterface({
  // set input to fs.createReadStream which creates a stream from the text.txt file
  input: fs.createReadStream('text.txt'),
});

// assign a listener callback to execute when line events are emitted
// a line event will be emitted after each line from the file is read
myInterface.on('line', (fileLine) => {
  // listener callback will log the line that was just read to the console
  console.log(fileLine);
});
```

```javascript
// require fs core modules
const fs = require('fs');

// set the output file
const fileStream = fs.createWriteStream('output.txt');

// write to the file
fileStream.write('This is the first line!');
fileStream.write('This is the second line!');

// close the writeable stream
fileStream.end();
```

#### Timers

[timer module](https://nodejs.org/api/timers.html#timers_class_immediate) used when we want some code to be executed at a specified point in time. The methods of `timer` are global, so you don't need to `require()` them.

- Timer functions in Node.js are mostly similar to front-end JavaScript timer functions like `setTimeout()` and `setInterval()`
- The main difference is that Node.js timer functions are added to the Node.js event loop, meaning they are scheduled and put into a queue
- The queue is processed at every iteration of the event loop
- If a timer function is executed outside of a module, the behavior will be random (non-deterministic)

The `setImmediate()` function executes the specified callback function immediately after the current [poll phase](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout) is completed

- Often compared to `setTimeout()` function
- Accepts 2 arguments: the callback function (required) and arguments for the callback function (optional)
- If you instantiate multiple `setImmediate()` functions they will be queued for execution in the order that they were created

```javascript
setImmediate(() => {
  console.log('Hello! My name is Codey.');
});
```

#### HTTP Module

[http module](https://nodejs.dev/en/api/v19/http) used to process HTTP requests in JavaScript and Node.js and create HTTP servers.

`.createServer()` method creates an HTTP server.

- Takes a callback function as its only argument
- The callbuck function itself has two arguments: the request (`req`) and the response (`res`)
  - `req` object contains all the information about the HTTP request
  - `res` object contains methods and properties pertaining to the generation of a response by the HTTP server such as `.setHeader()` (sets HTTP headers on the response), `.statusCode` (set the status code of the response), and `.end()` (dispatches the response to the client who made the request)

The `.listen()` method is called on the server instance (created by `.createServer()`) to listen for connections.

- Takes a port number as its first argument, which tells the server to listen for connections at the given port number
- Takes an optional callback function as a second argument, allowing it to carry out a task after the server has been successfully started

```javascript
const server = http.createServer((req, res) => {
  // sends the string "server is running" to the client, which will display on the web page
  res.end('Server is running!');
});

server.listen(8080, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});
```

There are also a few methods in the `http` module to facilitate a server making requests to external APIs.

`.request()` method takes two arguments: a configuration object with details about the request, and a callback to handle the response

```javascript
const options = {
  hostname: 'example.com',
  port: 8080,
  path: '/projects',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const request = http.request(options, (res) => {
  // Handle response here
});
```

`.get()` method automatically sets the method to `GET` and calls `req.end()` automatically.

#### URL Module

An HTTP server requires info from the request URL to accurately process a request. Request URL is on the `url` property of the `req` object.

The [url module](https://nodejs.org/api/url.html) allows for parsing different parts of a URL easily. Revolves around the `URL` class.

A new `URL` object can be instantiated using the `URL` class, and the different parts can be assessed and modified via various properties including:

- `hostname` Gets and sets the host name portion of the URL
- `pathname` Gets and sets the path portion of the URL.
- `searchPrams` Gets the search parameter object representing the query parameters contained within the URL. Returns an instance of the [URLSearchParams](https://nodejs.org/docs/latest-v14.x/api/url.html#url_class_urlsearchparams) class.

`URL` and `URLSearchParams` classes are defined by the [WHATWG URL specification](https://url.spec.whatwg.org/) which is also used by the browser, allowing developers to have a similar developer experience working with both client and server-side JavaScript.

```javascript
const url = require('url');

const url = new URL('https://www.example.com/p/a/t/h?query=string');

const host = url.hostname; // example.com
const pathname = url.pathname; // /p/a/t/h
const searchParams = url.searchParams; // {query: 'string'}
```

`url` module can also be used to construct a URL.

```javascript
const url = require('url');

const createdUrl = new URL('https://www.example.com');
createdUrl.pathname = '/p/a/t/h';
createdUrl.search = '?query=string';

createUrl.toString(); // Creates https://www.example.com/p/a/t/h?query=string
```

#### Querystring

The [querystring module](https://nodejs.org/api/querystring.html#querystring_querystring_decode) is dedicated to providing utilities soley focused on parsing and formatting URL query strings. It requires the query string to have already been isolated from the incoming URL, so pre-processing is necessary before being able to use `querystring`.

In the latest versions of Node (v16.x), the core functionality of `querystring` has been absorbed into the `url` module via `URLSearchParams` API but the features in the `querystring` module itself are still handy when using the long term support versions of Node.js (v14.x)

`querystring` is more performant than `<URLSearchParams>` but is not a standardized API. Use `<URLSearchParams>` when performance is not critical or when compatibility with browser code is desirable.

- `.parse()` parses the URL query string into a collection of key/value pairs. `.decode()` is an alias for `.parse()`
- `.stringify()` produces a URL query string from a given object via the object's "own properties." `.encode()` is an alias for `.stringify()`
- `.escape()` performs [percent-encoding](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding) on a given query string
- `.unescape()` decodes percent-encoded characters within a given query string

```javascript
const str = 'prop1=value1&prop2=value2';
querystring.parse(str); // Returns { prop1: value1, prop2: value2}

const props = { prop1: value1, prop2: value2 };
querystring.stringify(props); // Returns 'prop1=value1&prop2=value2'
```

### Modules in Node.js vs ES6

There are multiple ways of implementing modules depending on the runtime environment in which your code is executed. In JavaScript, there are [two runtime environments](https://www.codecademy.com/article/introduction-to-javascript-runtime-environments) and each has a preferred module implementation:

- The Node runtime environment and the `module.exports` and `require()` syntax.
- The browser’s runtime environment and the ES6 `import`/`export` syntax.
  - See [Implementing Moudles using ES6 syntax](https://www.codecademy.com/article/implementing-modules-using-es-6-syntax)

To make functions in a file available to other files, add them as properties to the built-in `module.exports` object.

```javascript
function myFunc() {
  // code here
}

module.exports.myFunc = myFunc;
```

To access modules from another file, use the `require()` syntax at the top of the file. `require()` accepts a single argume, a string that corresponds to the relative filepath to the module being imported.

```javascript
const myFunc = require('./myFunc.js');
```

You can also use destructuring to grab only one module from a file that exports multiple modules.

```javascript
const { functionOne } = require('./severalFuncs.js');
```

Node.js module documentation: [v14.x](https://nodejs.org/docs/latest-v14.x/api/modules.html)

## NPM

In addition to core Node.js modules, devs can also take advantage of modules created by other devs, many of which are shared freely, to solve common problems and simplify the development process. When used in code, these third-party modules are referred to as **dependencies**.

Most of the time, these dependencies are installed in packages handled by a **package manager**. (A **package** is a third-party module wrapped up with the list of _that module's own dependencies_).

A package manager is a tool that:

- Downloads and installs the packages to be used as dependencies on a project.
- Checks the packages to make sure they don't have any known vulnerabilities.
- Checks if packages can be updated to a newer version.
- handles all of the packages' sub-dependencies.
- Cleanly removes all the files of a package when it's no longer needed.
- Provides a repeatable and consistent process of installing dependencies for you and your teammates.

[NPM](https://www.codecademy.com/resources/docs/javascript/npm) (Node Package Manger) is the default package manager for Node.js

### Package Scopes

Most npm packages should be installed locally (within the project) so each project can control which specific versions of its dependenceis is uses.

To install a package locally, `cd` into the project and use `npm i <package name>`

While most dependencies play a direct role in the functionality of your application, **development dependencies** are used for the purpose of making development easier or more efficient. For exmaple, the [nodemon](https://www.npmjs.com/package/nodemon) package (a tool used to automatically restart a program when a file changes, alleviating the need to do so manually each time you save a file) is better suited as a development dependnecy since it makes devs' lives easier but makes no changes to the app itself.

To install a package as a dev dependency, add the flag `--save-dev` (or it's alias `-D`): `npm i <package name> --save-dev`

Dev dependencies are listed in the **"devDependencies"** field of the package.json file which indicates packages being used specifically for development that will not be included in a production release of the project. They are stored in the local `node_modules/` folder along with local dependenceis.

If you only want to leave out dev dependencies wihen installing packages, run `npm i --production` instead of `npm i`

**Global packages** are installed to be available system-wide, without the need to install them each time you create a new application. Typically, packages installed this way will be used in the command-line rather than imported into a project's code. For example: the [http-server package](https://www.npmjs.com/package/http-server) which allows you to spin up a zero-configuration server from anywhere in the command-line.

To install a package globally, use the `-g` flag: `npm i <package name> -g`

Packages installed globally will NOT be listed in a projects package.json file and they will be stored in [a separate global node_modules/ folder](https://docs.npmjs.com/cli/v7/configuring-npm/folders).
