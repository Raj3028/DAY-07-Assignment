console.log("Print all numbers that are divisible by 5:");
console.log("");

var nos = [12, 45, 67, 89, 90, 34, 35, 55];

for (var i = 0; i < nos.length; i++) {
  if (nos[i] % 5 === 0) {
    console.log(nos[i] + "  is divisible by 5");
  }
}
