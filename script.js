function validateInput() {
    const input = document.getElementById("numberInput").value;
    const errorElement = document.getElementById("error");
  
    // Clear any previous error message
    errorElement.textContent = '';
  
    if (input === "") {
      errorElement.textContent = "Please enter a positive integer.";
      return false;
    }
  
    const num = parseInt(input);
  
    if (isNaN(num) || num <= 0) {
      errorElement.textContent = "Please enter a valid positive integer.";
      return false;
    }
  
    return num;
  }
  
  function calculateFactorial(method) {
    const num = validateInput();
  
    if (!num) return;
  
    let result = 0;
    let methodUsed = "";
  
    if (method === "iterative") {
      result = factorialIterative(num);
      methodUsed = "Iterative";
    } else if (method === "recursive") {
      result = factorialRecursive(num);
      methodUsed = "Recursive";
    }
  
    // Show the result and method
    document.getElementById("result").textContent = `Factorial: ${result} (Method: ${methodUsed})`;
  }
  
  function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function factorialRecursive(n) {
    if (n === 1) {
      return 1;
    }
    return n * factorialRecursive(n - 1);
  }
  