// Problem 1
//convert Kilometer to meter.

function kilometerToMeter(num) {
  // to get positive number.
  if (num < 0) {                
    return ("distance cannot be negative.");
  }
    // 1 kilometer=1000 meter;
  return num * 1000;         

}
console.log(kilometerToMeter(909));

//problem2
//BudgetCalculator
function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    // to check positive number
    return ("number cannot be negative. Check again!")
  }
  var watchPrice = watch * 50;
  var phonePrice = phone * 100;
  var laptopPrice = laptop * 500;
  var total = watchPrice + phonePrice + laptopPrice;
  return total;
}
var totalAmount = budgetCalculator(5, 7, 8);

console.log(totalAmount);


//problem 3
// hotelCost
function hotelCost(day) {
  var cost = 0;
  if (day >= 0 && day <= 10) {
    cost = cost * 100;
  }
  else if (day >= 11 && day <= 20) {
    var firstPayment = 10 * 100;
    var remainingPayment = day - 10;
    var secondPayment = remainingPayment * 80;
    cost = firstPayment + secondPayment;
  }
  else {

    var firstPayment = 10 * 100;
    var remainingPayment = day - 10;
    var secondPayment = remainingPayment * 80;
    var remainingPayment = day - 20;
    var thirdPayment = remainingPayment * 50;
    cost = firstPayment + secondPayment + thirdPayment;

  }

  return cost;
}
console.log(hotelCost(51));

//Problem 4
// MegaFriend
function megaFriend(name) {
  var length = 0;
  var largest;

  for (var i = 0; i < name.length; i++) {
    if (name[i].length > length) {
      var length = name[i].length;
      largest = name[i];
    }
  }
  return largest;
}
var name = ["Mashrafee", "Mushfiq", "Shakib", "Mahmudullah", "Tamim"];


var longest = megaFriend(name);
console.log(longest);