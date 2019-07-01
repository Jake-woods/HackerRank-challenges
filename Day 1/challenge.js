process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
   input_stdin += data;
});

process.stdin.on('end', function () {
   input_stdin_array = input_stdin.split("\n");
   main();
});

// Reads complete line from STDIN
function readLine() {
   return input_stdin_array[input_currentline++];
}

function main() {
   // Declare second integer, double, and String variables.
   let anInt;
   let aDouble;
   let aString;
   // Read and save an integer, double, and String to your variables.
   anInt = parseInt(readLine());
   aDouble = parseFloat(readLine());
   aString = readLine();
   // Print the sum of both integer variables on a new line.
   console.log(i + anInt);
   // Print the sum of the double variables on a new line.
   console.log((d + aDouble).toFixed(1));
   // Concatenate and print the String variables on a new line
   console.log(s + aString);
   // The 's' variable above should be printed first.
}