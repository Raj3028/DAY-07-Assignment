console.log("Print all numbers of this array:");
console.log(" ");
// a sample 2-D array
var num = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

for (var i = 0; i < num.length; i++) {
  console.log("Table " + i);
  for (var j = 0; j < num.length; j++) {
    console.log("   " + num[i][j]);
  }
}
