# HTTP Requests Notes

## Glossary

- **HTTP:** Hypertext Transfer Protocol
  - Used to structure requests and responses over the internet.
  - Requires data to be transfered from one point to another over the network. This transfer happens using TCP.
  - The command language that devices on both sides of the connection must follow in order to communicate.
  - HTTP requests can be read by anyone at certain network junctures, so it's not a good idea to deliver sensitive or personal information using this protocol.
  - [HTTP](https://www.codecademy.com/resources/docs/general/http) (codeacademy docs)
- **HTTPS:** HTTP Secure
  - Allows you to encrypt data that you send and recieve
  - Important to use when passing sensitive or personal information
  - Up to the businesses maintaining the servers to set it up - they must apply for a certificate from a [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority) in order to support HTTPS
  - [HTTPS on Wikipedia](https://en.wikipedia.org/wiki/HTTPS#Difference_from_HTTP)
- **TCP:** Transmission Control Protocol
  - Manages the channels between your browser and the server.
- **URL:** Uniform Resource Locator
- **IP:** Internet Protocol
- **Client:** computer making the request
- **REST:** REpresentational State Transfer
  - An architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.
  - The implementation of the client and the implementation of the server can be done independently without each knowing about the other
  - Separates the user interface concerns from the data storage concern
  - [What is REST?](https://www.codecademy.com/article/what-is-rest)
- **CRUD:** Create, Read, Update, and Delete (CRUD) are the four basic functions that API models should be able to do, at most.
  - [What is CRUD?](https://www.codecademy.com/article/what-is-crud)
- **Query string:** part of a URL that assigns values to specified parameters
  - [Query string](https://en.wikipedia.org/wiki/Query_string)
- **API:** Application Program Interface
- **Open standard:** A publicly available definition of how some functionality should work. Does not actually build out that functionality.

## HTTP & TCP

Typing a URL into a browser commands it to open a TCP channel to the server that corresponds to that URL. Once the TCP connection is established, the client sends a HTTP GET request to the server to retrieve the webpage it should display. After the server has sent the response, it closes the TCP connection.

1. User: Types a URL into the browser
1. Browser: Extracts the 'http' part & recognizes that it's the name of the network protocol to use
1. Browser: Takes the domain name from the URL & asks the internet Domain Name Server to return the IP address
1. Client: Opens a connection to the server at that address, using the http protocol as specified
1. Client: Sends a HTTP _GET_ request to the server to retrieve the webpage it should display. GET request contains the IP address of the host and optionally a data payload

   ```http
   GET / HTTP/1.1
   Host: www.codecademy.com
   ```

1. Server: If it's is able to locate the path requested, it will send back a response that includes the following parts:

   - The version of HTTP being used.
   - Headers similar to the ones used for HTTP requests.
   - A body that contains the successfully requested resource.
   - A status code with a message explaining why the request succeeded or failed.

1. Server: After it has sent the response, it closes the TCP connection.

Example response headers:

```http
HTTP/1.1 200 OK
Content-Type: text/html
```

```http
HTTP/1.1 404 NOT FOUND
```

## Requests With Fetch API

The four most commonly used types of HTTP requests:

- GET: _retrieves_, or _gets_, information from some source (usually a website)
- POST: _posts_ information to a source that will process the information and send it back
- PUT
- DELETE

The `fetch()` function:

- Creates a request object that contains relevant information that an API needs.
- Sends that request object to the API endpoint provided.
- Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

Two `.then()`methods are chained to the `fetch()` function:

- The first `.then()` method checks and returns the response as well as throws an exception when a network error is encountered.
  - Will only fire after the promise status of fetch() has been resolved
  - First argument: an arrow function with the request response passed into it
  - Second argument: an arrow function that will be triggered when the fetch() promise is rejected
- The second `.then()` method is added on so that we can use the response however we may choose.
  - Will only fire after the previous .then() method has finished running without error
  - Takes the `response.json()` object returned from the previous `.then()` method as its parameter

The [fetch() browser API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) may not be supported by older browsers. You can increase the accessibility of applications using `fetch()` by adding a `fetch()` polyfill to support older browsers:

```bash
npm install whatwg-fetch --save
```

### GET

Boilerplate code:

```javascript
// sends request
fetch('https://api-to-call.com/endpoint')
  .then(
    (response) => {
      // converts response object to JSON
      if (response.ok) {
        return response.json();
      }
      // handles errors
      throw new Error('Request failed!');
    },
    // handles errors
    (networkError) => console.log(networkError.message)
  )
  .then((jsonResponse) => {
    // Code to execute with jsonResponse
  });
```

### POST

`fetch()` takes two arguments:

- an endpoint
- an object that contains information needed for the request:
  - that the request method is a POST request
  - the information that will be sent to the API to process

A successful POST request will return a response body, which will vary depending on how the API is set up.

Boilerplate code:

```javascript
// sends request
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({ id: '200' }),
})
  .then(
    (response) => {
      // converts response object to JSON
      if (response.ok) {
        return response.json();
      }
      // handles errors
      throw new Error('Request failed!');
    },
    // handles errors
    (networkError) => console.log(networkError.message)
  )
  .then((jsonResponse) => {
    // Code to execute with jsonResponse
  });
```

### Async GET & POST

- `async` & `await` introduced in ES8
- `async` function returns a promise
- `await` keyword used within an `async` function - suspends the program while waiting for a promise to resolve
- `try...catch` statement: code in the `try` block will be run and in the event of an exception, the code in the `catch` statement will run.

Boilerplate code:

```javascript
const getData = async () => {
  try {
    // sends request
    const response = await fetch('https://api-to-call.com/endpoint');

    // handles response if successful
    if (response.ok) {
      const jsonResponse = await response.json();

      // code to execute with jsonResponse
    }

    // handles response if unsuccessful
    throw new Error('Request Failed!');
  } catch (error) {
    // handles response if unsuccessful
    console.log(error);
  }
};
```

```javascript
const getData = async () => {
  try {
    // sends request
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({ id: 200 }),
    });

    // handles response if successful
    if (response.ok) {
      const jsonResponse = await response.json();

      // code to execute with jsonResponse
    }

    // handles response if unsuccessful
    throw new Error('Request Failed!');
  } catch (error) {
    // handles response if unsuccessful
    console.log(error);
  }
};
```

### CORS

If you see errors with your `fetch()` method, it may not be working properly due to CORS restrictions.

**For development purposes only** you can bypas this restriction with an API called [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo). It takes requests sent to its API endpoint, makes them for the requesting app with the proper CORS permissions, and then returns the response back to the requesting app.

- In your browser, visit https://cors-anywhere.herokuapp.com/corsdemo and click “Request temporary access to the demo server”
- Back in your code, prepend the URL path you passed to the first argument in `fetch()` with the following: `https://cors-anywhere.herokuapp.com/`

- [React CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/)
- [What is CORS?](https://www.stackhawk.com/blog/what-is-cors/)
- [NodeJS CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/nodejs-cors-guide-what-it-is-and-how-to-enable-it/)

## Caches

Client browsers can use caches for serving content instead of making repeated requests for the same content. (ex: [CDNs](https://www.codecademy.com/resources/docs/general/cdn))

## APIs

- May apps expose interfaces to their information in the form of an API (application program interface)
- These external requests need to be secured using authentication, since they could overwhelm a service and also access uer information
- The most basic pattern for API access from anotehr application is using an API Key
- Public API's usually provide a developer portal when you can register your applicaiton and generate a corresponding API key that is unique to your applicaiton.
- The API can track what type and frequency of requests each application is making, which can be used to [throttle requests](https://en.wikipedia.org/wiki/Rate_limiting) from a specific application to a pre-defined level of service. It also prevents apps from spamming an endpoint or abusing user data, since the API can easily block that app's API key.

### Authentication

- When user enters name & password, the application's server checks the credentials to determine if the user exists & if the supplied password is correct. If the credentials are correct, the user is logged in.
- Typically, upon a successful login, the application will respond with an _authentication token_ (or auth token) for the client to use for additional HTTP requests. The token is stored on the user's computer to avoid needing to continuously log in. Tokens generally expire after a certain amount of time for security purposes.
  - In the original OAuth specification, access tokens could last for time periods in the range of years
  - OAuth2 updates include refresh tokens that encourage tokens to expire more frequently

### OAuth

- For many apps, a generic dev-level API key is not sufficient, since APIs sometimes have the ability to provide access to user data, but most services only want to give this access if the user grants permission.
- One solution is to have the user give their login creds to the intermediary application, but this isn't secure and would give full access to that requesting application - which is probably more than it needs
- OAuth is an open standard and is commonly used to grant permission for applications to access user information w/o forcing users to give away their passwords.
  - OAuth was developed out of Twitter, so there were important use cases not originally considered as part of the specification
  - OAuth2 was created to address those use cases - including allowing for different authentication flows depending on teh specific application requsting access and the level of access being requested
  - OAuth2 is also an open standard
- Each API implements their own version of OAuth but they are all based around the same OAuth specification.

#### General OAuth flow

- Application implementing OAuth will ask the user to select which service tehy would like to sue for credentials (ex: "log in with Google, Facebook, or Twitter")
- User selects a service, and is redirected to the service login
- Service login confirms the user's identity & provides the user w/a list of permissions the originating applicaiton is trying to gain on the user's account
- If the user confirms they want to allow this access, they will be redirected back to the original site, along with an _access token_, which is then saved by the originating application
- This _access token_ will be included in requetss by the applicaiton to prove the user has granted access and enable access to the appropriate data for that user.

#### Common OAuth2 flows

Client Credentials Grant Flow:

- For when an application doesn't need access to user info, but wants the added security & consistency of the OAuth2 spec
- Used to access applicaiton-level data (similar to the developer API key)
- End user doesn't participate
- Instead of an API key, a _client ID_ and a _client secret_ (strings provided to the application when it was authorized to use the API) are excenged for an acess token (and sometimes a refresh token)
  - Essential to **ensure the client secret does not become public info**
  - Devs should be careful to not commit this info to a public git repo
  - Should not be exposed on the client-side & all requests containing it shoul dbe sent server-side
- Flow is similar to the first example where username & password were exhcanged for an authentication tiken
- The returned access token is included on requests to identify the client making the requests
- This access token is often short-lived, expiring frequently
- Upon expiration, a new access token can be obtained by re-sending the client credentials or, preferably, a refresh token
- Refresh tokens encourage access tokens to expire often & be continously changed
  - When used to generate a new access token, it usually expires any previous access tokens

Authorization Code Grant Flow:

- One of the most common
- Similar to the general OAuth flow w/an added step linking the requesting application to the authentication
- When the user is redirected to the authenticating site & verifies the applicaiton requesting access & permissions, they are re-directed back to the referring side with an _authoization code_
- The requesting app takes this code & submits it to the authenticating API along with the applications client ID and client secret to recieve an access token & a refresh token, which are used in the same manner as the Client Credentials Grant flow.
  - This step of the flow should be done on the server side of the requesting applciaiton to avoid exposing the client ID and secret
- Since tokens are tied to both suers & requesting applications, the API has a great deal of control over limiting access based on user behavior, application behavior, or both

Implicit Grant Flow:

- For the case where an app may need to access OAuth API but doesn't have the necessary server-side capabilities to keep the client ID & secret key secure (as required for the Client Credentials Grant Flow & Authorization Code Grant Flow)
- Prommps the user through similar authorization steps as the Authoization Code flow, but doesn't involve the exchange of the client secret
- Result is an access token, and typically no refresh token
- Access token is used by the application to make additional requests to the service, but is not sent to the server side of the requesting applicaiotn
- Allows applications to use OAuth APIs without fear of potentially exposing long-term access to a user or application's information

## Resources

- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [API](https://www.codecademy.com/resources/docs/general/api)
