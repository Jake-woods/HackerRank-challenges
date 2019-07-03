// https://www.hackerrank.com/challenges/30-review-loop/problem

function processData(input) {
   const inpArr = input.split("\n");
   const loopCount = parseInt(inpArr[0]);

   for (let i = 0; i < loopCount; i++) {
      let msg = inpArr[i + 1];
      let msgLength = msg.length;
      let msgArr = msg.split("");
      let odds = "";
      let evens = "";

      for (let j = 0; j < msgLength; j++) {
         if (j % 2 === 0) {
            evens += msgArr[j];
         } else {
            odds += msgArr[j];
         }
      }
      console.log(`${evens} ${odds}`);
   }
}

// Notes
// Splitting input at new line breakpoint
// Getting loop count from first item in inpArr
// Looping amount of times desired from loopCount
// Getting current message, length, splitting to get chars
// Looping through the message length
// Checking each character to see if the index is even or odd
// Adding to each accordingly
// Printing final value of evens and odds


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
   _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});