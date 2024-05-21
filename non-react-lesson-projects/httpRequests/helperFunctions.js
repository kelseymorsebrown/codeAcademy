// Formats response to look presentable on webpage
const renderResponseGet = (res) => {
  // Handles if res is falsey
  if (!res) {
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if (!res.length) {
    responseFieldGet.innerHTML =
      '<p>Try again!</p><p>There were no suggestions found!</p>';
    return;
  }

  // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 10
  for (let i = 0; i < Math.min(res.length, 10); i++) {
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join('');

  // Manipulates responseField to render the modified response
  responseFieldGet.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return;
};

// Renders response before it is modified
const renderRawResponseGet = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseFieldGet.innerHTML = `<text>${JSON.stringify(
    trimmedResponse
  )}</text>`;
};

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponseGet = (res) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for (let key in res) {
    rawJson[key] = res[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ', \n');
  // Manipulates responseField to show the returned JSON.
  responseFieldGet.innerHTML = `<pre>${rawJson}</pre>`;
};

// Manipulates responseField to render a formatted and appropriate message
const renderResponsePost = (res) => {
  // Displays either message depending on results
  if (res.errors) {
    responseFieldPost.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    responseFieldPost.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
};

// Manipulates responseField to render an unformatted response
const renderRawResponsePost = (res) => {
  // Displays either message depending on results
  if (res.errors) {
    responseFieldPost.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    let structuredRes = JSON.stringify(res).replace(/,/g, ', \n');
    structuredRes = `<pre>${structuredRes}</pre>`;
    responseFieldPost.innerHTML = `${structuredRes}`;
  }
};

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponsePost = (response) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for (let key in response) {
    rawJson[key] = response[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ', \n');
  // Manipulates responseField to show the returned JSON.
  responseFieldPost.innerHTML = `<pre>${rawJson}</pre>`;
};
