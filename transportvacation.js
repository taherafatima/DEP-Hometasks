function rentalCarCost(d) {
  // Your solution here
  var cost = 40;
  var total;
  if(d>=7){
    total=(d*cost)-50;
  }
  else if(d>=3){
    total=(d*cost)-20;
  }
  else {
    total = cost*d;
  }
  return total;
}