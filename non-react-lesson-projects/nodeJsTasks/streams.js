// using ES6 imports instead of Nodejs require
import * as fs from 'node:fs';
import * as readline from 'node:readline';
import * as path from 'path';

// ES6 shenanegains
const __dirname = import.meta.dirname;

const inStock = [
  'apples',
  'pears',
  'bread',
  'tofu',
  'beans',
  'flan',
  'tamarind',
];

const myInterface = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, 'shoppingList.txt')),
});

function printData(data) {
  console.log(`Shopping for: ${data}`);
}

myInterface.on('line', printData);

const fileStream = fs.createWriteStream(
  path.join(__dirname, 'shoppingResults.txt')
);

function transformData(line) {
  inStock.includes(line)
    ? fileStream.write(`${line} ✓\n`)
    : fileStream.write(`${line} ✗ (Out of stock)\n`);
}

myInterface.on('line', transformData);
