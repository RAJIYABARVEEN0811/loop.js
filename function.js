//  add two numbers
function add(a, b) {
    return a + b;
  }
  console.log("Addition:", add(5, 3));
  
  
  //expression to multiply two numbers
  const multiply = function(a, b) {
    return a * b;
  };
  console.log("Multiplication:", multiply(4, 2));
  
  
  // Arrow function to subtract two numbers
  const subtract = (a, b) => {
    return a - b;
  };
  console.log("Subtraction:", subtract(10, 6));
  
  
  // Function with parameters and return value
  function greet(name) {
    return "Hello " + name;
  }
  console.log(greet("Varun"));
  

  
  // Global variable
  let globalVar = "I am Global";
  
  function scopeExample() {
  
    let localVar = "I am Local";
  
    console.log(globalVar); 
    console.log(localVar); 
  }
  
  scopeExample();
  
  console.log(globalVar); 
