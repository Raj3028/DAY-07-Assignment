console.log("Print all even numbers in first 50 natural numbers:");
console.log("");

for (i = 1; i <= 50; i++) {
  // let's divide the value by 2
  // if the remainder is zero then it's an even number
  if (i % 2 === 0) {
    console.log(i);
  }
}
