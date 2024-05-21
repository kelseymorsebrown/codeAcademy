// Information to reach Datamuse API
const urlGet = 'https://api.datamuse.com/words?';

// Information to reach Rebrandly API
// to get API key, use: https://www.codecademy.com/article/rebrandly-signup
const apiKey = REBRANDY_API_KEY;
const urlPost = 'https://api.rebrandly.com/v1/links';

// Selects page elements
const inputFieldPost = document.querySelector('#inputPost');
const submit = document.querySelector('#submit');
const inputFieldGet = document.querySelector('#inputGeet');
const shortenButton = document.querySelector('#shorten');
const responseFieldGet = document.querySelector('#responseFieldGet');
const responseFieldPost = document.querySelector('#responseFieldPost');

// Asynchronous function
const getSuggestions = () => {
  const wordsmithFormData = new FormData(
    document.getElementById('wordsmith_form'),
    document.querySelector('#submit')
  );
  const queryParams = wordsmithFormData.get('wordsmith_query');
  const wordQuery = wordsmithFormData.get('text_input');
  const endpoint = `${urlGet}${queryParams}${wordQuery}`;

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

const getSuggestionsAsyncAwait = async () => {
  const wordsmithFormData = new FormData(
    document.getElementById('wordsmith_form'),
    document.querySelector('#submit')
  );
  const queryParams = wordsmithFormData.get('wordsmith_query');
  const wordQuery = wordsmithFormData.get('text_input');

  const endpoint = `${urlGet}${queryParams}${wordQuery}`;

  try {
    const response = await fetch(endpoint, { cache: 'no-cache' });

    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponseGet(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

const shortenUrlAsyncAwait = async () => {
  const urlToShorten = inputFieldPost.value;
  const data = JSON.stringify({ destination: urlToShorten });

  try {
    const response = await fetch(urlPost, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
        apikey: apiKey,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseFieldGet.firstChild) {
    responseFieldGet.removeChild(responseFieldGet.firstChild);
  }

  if (document.getElementById('sl').checked) {
    getSuggestions();
  } else {
    getSuggestionsAsyncAwait();
  }
};

const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseFieldPost.firstChild) {
    responseFieldPost.removeChild(responseFieldPost.firstChild);
  }

  if (document.getElementById('promise_post').checked) {
    shortenUrl();
  } else {
    shortenUrlAsyncAwait();
  }
};

submit.addEventListener('click', displaySuggestions);
shortenButton.addEventListener('click', displayShortUrl);
