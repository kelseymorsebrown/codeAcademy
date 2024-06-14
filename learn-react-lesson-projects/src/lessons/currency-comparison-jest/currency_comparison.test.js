import CurrencyComparison from './currency_comparison';

// Task 10: Import and mock fetchData
import fetchData from './utils/fetch-data.js';

jest.mock('./utils/fetch-data.js');

const testSalary = new CurrencyComparison(50000);

// Task 1: Create a test for testSalary.currencyConversion below
it('Converts currency', () => {
  const currencyCode1 = 'CAD';
  const expectedValue1 = 1.21;
  const currencyCode2 = 'EUR';
  const expectedValue2 = 0.82;
  const rates = {
    MXN: 19.9021,
    CAD: 1.2121,
    EUR: 0.8235,
  };

  const actualValue1 = testSalary.currencyConversion(rates, currencyCode1);
  const actualValue2 = testSalary.currencyConversion(rates, currencyCode2);

  expect(actualValue1).toBe(expectedValue1);
  expect(actualValue2).toBe(expectedValue2);
});

// Task 5: Create a test for testSalary.hourlyPayUSD below
it('Returns the hourly pay in USD based on a given conversion rate', () => {
  const rateCAD = 1.21;

  const expectedValue = 20.66;
  const actualValue = testSalary.hourlyPayUSD(rateCAD);

  expect(expectedValue).toBe(actualValue);
});

// Task 6: Complete this test!
it('Respond with different salaries based on currency', (done) => {
  //arrange
  const currency = 'CAD';
  const exchangeRate = 1.21;
  const expectedValue = {
    USD: 25,
    CAD: 20.66,
    salary: 50000,
  };

  //act
  testSalary.response(currency, exchangeRate, (result) => {
    //assert
    try {
      expect(result).toEqual(expectedValue);
      done();
    } catch (error) {
      done(error);
    }
  });
});

// Task 10 & 11: Complete this test!
it('Receives current currency exchange data', async () => {
  //arrange
  const mockResponse = {
    status: 'Mock',
    data: {
      base: 'USD',
      rates: {
        CCD: 50,
      },
      date: '2021-05-17',
    },
  };
  const expectedValue = [{ CCD: 50 }, 'Mock'];

  // Mock the resolved value of fetchData
  fetchData.mockResolvedValueOnce(mockResponse);

  //act
  const actualValue = await testSalary.fetchCurrentExchange();

  //assert
  expect(actualValue).toEqual(expectedValue);
});
