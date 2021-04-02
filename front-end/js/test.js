// Write function below
const factorial = number => {
    result = number;
    for (i=number; i>1; i--) {
      result = result * (i-1);
    }
    return result;
  }
  
  console.log(`The factorial of 6 is ${factorial(6)}`);