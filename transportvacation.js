function rentalCarCost(days) {
  // Your solution here
  var cost = 40;
  var total;
  if(days>=7){
    total=(days*cost)-50;
  }
  else if(days>=3){
    total=(days*cost)-20;
  }
  else {
    total = cost*days;
  }
  return total;
}
