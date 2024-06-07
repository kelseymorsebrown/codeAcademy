// I did not write this code, this Code Academy lesson was about test writing
import axios from './axios';
import 'regenerator-runtime/runtime.js';

export const fetchData = async () => {
  const rates = await axios.get('https://api.ratesapi.io/api/latest');
  return rates;
};

export default fetchData;
