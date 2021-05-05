/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));*/



function zero() { 
  if(arguments.length == 1){
    return  arguments[0](0);
  }
  else {
      return 0;
    }
}
  
function one() { 
    if(arguments.length == 1){
    return  arguments[0](1);
  }
  else {
      return 1;
    }
}
function two() { 
      if(arguments.length == 1){
    return  arguments[0](2);
  }
  else {
      return 2;
    }
}
  
function three() { 
      if(arguments.length == 1){
    return  arguments[0](3);
  }
  else {
      return 3;
    }
}
function four() {
      if(arguments.length == 1){
    return  arguments[0](4);
  }
  else {
      return 4;
    }
}
function five() { 
      if(arguments.length == 1){
    return  arguments[0](5);
  }
  else {
      return 5;
    }
}
function six() { 
      if(arguments.length == 1){
    return  arguments[0](6);
  }
  else {
      return 6;
    }
}
function seven() { 
      if(arguments.length == 1){
    return  arguments[0](7);
  }
  else {
      return 7;
    }
}
function eight() { 
      if(arguments.length == 1){
    return  arguments[0](8);
  }
  else {
      return 8;
    }
}
function nine() { 
      if(arguments.length == 1){
    return  arguments[0](9);
  }
  else {
      return 9;
    }
}

function plus() {
  var right = arguments[0]; 
  return function(left) { 
    return left + right; 
  }
}
function minus() {
  var right = arguments[0]; 
  return function(left) { 
    return left - right; 
  }
}
function times() {
  var right = arguments[0]; 
  return function(left) { 
    return left * right; 
  }
}
function dividedBy() {
  var right = arguments[0]; 
  return function(left) { 
    return Math.floor(left / right); 
  }
}