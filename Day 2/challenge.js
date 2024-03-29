'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
   inputString += inputStdin;
});

process.stdin.on('end', _ => {
   inputString = inputString.replace(/\s*$/, '')
      .split('\n')
      .map(str => str.replace(/\s*$/, ''));

   main();
});

function readLine() {
   return inputString[currentLine++];
}

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
   const taxMeal = (meal_cost / 100) * tax_percent;
   const tipMeal = (meal_cost / 100) * tip_percent;

   console.log(Math.round(meal_cost + taxMeal + tipMeal));
}

function main() {
   const meal_cost = parseFloat(readLine());

   const tip_percent = parseInt(readLine(), 10);

   const tax_percent = parseInt(readLine(), 10);

   solve(meal_cost, tip_percent, tax_percent);
}

// https://www.hackerrank.com/challenges/30-operators/problem