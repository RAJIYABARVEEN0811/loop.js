// Print 1 to 10 using for loop
console.log("For Loop:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print 1 to 5 using while loop
console.log("\nWhile Loop:");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// Print 1 to 3 using do-while loop
console.log("\nDo-While Loop:");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 3);

// Print 1–10 (skip 5, stop at 8)
console.log("\nContinue & Break:");
for (let n = 1; n <= 10; n++) {

  if (n === 5) {
    continue; // skip 5
  }

  if (n === 8) {
    break; // stop at 8
  }

  console.log(n);
}
