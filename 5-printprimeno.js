console.log("Print all prime numbers occurring in 1st 50 natural numbers:");
console.log(" ");
// looping from 1 to 50
for (let i = 1; i <= 50; i++) {
  let num = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      num++;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (num == 0) {
    console.log(i);
  }
}
