/*This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

Array.prototype.square = function () {
  let arr = this;
  let squares = [];
  for (let i = 0; i < arr.length; i++)
    squares[i] = arr[i] * arr[i];
  return squares;
}

Array.prototype.cube = function () {
  let arr = this;
  let cubes = [];
  for (let i = 0; i < arr.length; i++)
    cubes[i] = arr[i] * arr[i] * arr[i];
  return cubes;
}

Array.prototype.average = function () {
  let arr = this;
  let sum = 0;
  let len = arr.length;
  if (len != 0) {
    for (let i = 0; i < len; i++)
      sum = sum + arr[i];
    let average = sum / arr.length;
    return average;
  }
  else
    return NaN;
}

Array.prototype.sum = function () {
  let arr = this;
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum = sum + arr[i];
  return sum;
}

Array.prototype.even = function () {
  let arr = this;
  let index = 0;
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evens[index] = arr[i];
      index++;
    }
  }
  return evens;
}

Array.prototype.odd = function () {
  let arr = this;
  let index = 0;
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      odds[index] = arr[i];
      index++;
    }
  }
  return odds;
}