// https://discuss.codecademy.com/t/ravenous-part-4-interacting-with-the-yelp-api/745429/7
// https://expressjs.com/en/resources/middleware/cors.html

import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

dotenv.config({ path: __dirname + '/.env' });
const app = express();

app.use(cors());

app.get('/yelp/businesses/search', async (req, res) => {
  const { term, location, sort_by } = req.query;

  console.log(`Server: ${process.env.REACT_APP_YELP_API_KEY}`);

  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
