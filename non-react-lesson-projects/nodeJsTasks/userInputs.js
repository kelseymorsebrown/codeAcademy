console.log('Type something and hit enter.');

process.stdin.on('data', (userInput) => {
  let input = userInput.toString().trim();
  console.log('You typed: ', input);
});
