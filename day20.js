let numbers = [1, 2, 3, 4];

console.log("Original Array:", numbers);


numbers.push(5);
console.log("After push:", numbers);


numbers.pop();
console.log("After pop:", numbers);


numbers.unshift(0);
console.log("After unshift:", numbers);

numbers.shift();
console.log("After shift:", numbers);

console.log("Array elements:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
