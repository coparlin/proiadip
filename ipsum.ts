function subtract(num1: number = 10, num2: number = 0): number {
  // Check if the second number is provided, if not, use default value of 0
  num2 = num2 ?? 0;
  
  // Perform the subtraction and return the result
  return num1 - num2;
}
