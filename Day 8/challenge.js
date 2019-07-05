// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
   //Enter your code here
   const phonebook = [];
   input = input.split('\n');
   let loopCount = parseInt(input[0]);

   for (let i = 0; i < loopCount; i++) {
      let currentLine = input[i + 1]
      currentLine = currentLine.split(" ");
      phonebook[currentLine[0]] = currentLine[1];
   }

   for (let i = loopCount + 1; i < input.length; i++) {
      let current = (phonebook[input[i]])
      if (current !== undefined) {
         console.log(input[i] + '=' + current);
      } else {
         console.log('Not found');
      }
   }

}