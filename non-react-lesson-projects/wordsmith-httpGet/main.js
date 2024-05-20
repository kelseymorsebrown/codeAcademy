// Information to reach API
const urlGet = 'https://api.datamuse.com/words?sl=';

// to get API key, use: https://www.codecademy.com/article/rebrandly-signup
const apiKey = REBRANDY_API_KEY;
const urlPost = 'https://api.rebrandly.com/v1/links';

// We will need a Rebrandly API key.

console.log(apiKey);

// Selects page elements
const inputFieldGet = document.querySelector('#inputGet');
const inputFieldPost = document.querySelector('#inputPost');

const submit = document.querySelector('#submit');
const shortenButton = document.querySelector('#shorten');
const responseFieldGet = document.querySelector('#responseFieldGet');
const responseFieldPost = document.querySelector('#responseFieldPost');

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputFieldGet.value;
  const endpoint = `${urlGet}${wordQuery}`;

  fetch(endpoint, { cache: 'no-cache' })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      // renderRawResponseGet(jsonResponse)
      renderResponseGet(jsonResponse);
    });
};

const shortenUrl = () => {
  const urlToShorten = inputFieldPost.value;
  const data = JSON.stringify({ destination: urlToShorten });
  fetch(urlPost, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      apikey: apiKey,
    },
    body: data,
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      },
      (networkError) => console.log(networkError.message)
    )
    .then((jsonResponse) => {
      console.log('api key: ', apiKey);
      renderResponsePost(jsonResponse);
    });
};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseFieldGet.firstChild) {
    responseFieldGet.removeChild(responseFieldGet.firstChild);
  }
  getSuggestions();
};

const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseFieldPost.firstChild) {
    responseFieldPost.removeChild(responseFieldPost.firstChild);
  }
  shortenUrl();
};

submit.addEventListener('click', displaySuggestions);
shortenButton.addEventListener('click', displayShortUrl);
