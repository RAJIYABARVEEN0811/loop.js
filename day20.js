// Create an array
let numbers = [1, 2, 3, 4];

console.log("Original Array:", numbers);

// 1. push() → add element at end
numbers.push(5);
console.log("After push:", numbers);

// 2. pop() → remove last element
numbers.pop();
console.log("After pop:", numbers);

// 3. unshift() → add element at beginning
numbers.unshift(0);
console.log("After unshift:", numbers);

// 4. shift() → remove first element
numbers.shift();
console.log("After shift:", numbers);


// 5. Print all elements using for loop
console.log("Array elements:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
