console.log("Print all odd numbers in natural numbers from 20 to 50:");
console.log("");

for (i = 20; i <= 50; i++) {
  // let's divide the value by 2
  // if the remainder is not a zero then it's an odd number

  if (i % 2 != 0) {
    console.log(i);
  }
}
