Q 1. Design and develop UI to explain at least 3 of following -
● CSS Box Model
● CSS Flex Box
● CSS Grid
● CSS Position

● CSS BOX MODEL:- With the help of CSS Box model we can create rectangular box on a web page.
It consists of four main components: content, padding, border, and margin. 

 exa:-

 ● CSS Flex Box:- With the help of flex box  we can create one-dimensional layout.
 and it's gives you the tools to create basic and advanced website layouts in flexible and responsive ways.

 ● CSS Grid :- It's allows you to create two-dimensional grid-based layouts. It allows for the division of a web page into rows and columns,


 Q 2. Write code to explain at least 2 of following (Complete explanation of use required) -
● Function
● Array
● Object
● Promise

● Function:- Function is a piece of reusable code that performs a specific task or calculates a value. Functions allow you to organize your code into modular and reusable units, making your code more readable, maintainable, and efficient.

Exa:-  function StudName(name) {
  console.log("Hello, " + name + "! How are you?");
}
// Calling the function multiple times
StudName("Sunny"); 
StudName("Sangam"); 
StudName("Sachin");

In the above code we can see we have declear one function but we call the function multiple times.

● Array:- Arrays are used to store multiple values in a single variable. It is a collection of elements that can be of any data type, such as numbers, strings, objects, or even other arrays. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size as needed.

Exa:- // Creating an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(numbers[0]); // Output: 1
console.log(numbers[3]); // Output: 4

// Adding elements to the array
numbers.push(6);
console.log(numbers); // Output: [1, 10, 3, 4, 5, 6]

In above example we can see first we create a array that length is 5 in the second term we are access the array element then it's gives 1, or 4 output and in third term we have add one more element in our array using .push then the our output will change accordingly 

Q 3. Write algorithm to explain at least 1 of following -
● Bubble sort
● Merge sort


● Bubble sort:- Bubble sort is a simple sorting algorithm that repeatedly steps through a list of elements, compares adjacent elements, and swaps them if they are in the wrong order.

exa:- function bubbleSort(arr) {
  var n = arr.length;  
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }}}  
  return arr;
}
// Example usage
var numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // Output: [2, 3, 4, 5, 8]

The above code run until the entire array is sorted.

Q 4. Consider an array of size 15 or more, where the array consists of random numbers.Then find -
● Sum of array
● Largest numbers in array
● Find unique numbers in array
● Repeated numbers in array

● Sum of array:- // Random array with 15 elements
var numbers = [12, 5, 8, 3, 15, 10, 6, 9, 4, 2, 7, 1, 11, 13, 14];

// Variable to store the sum
var sum = 0;

// Iterate over the array and accumulate the sum
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Output the sum = 120
console.log("Sum of the array is: " + sum);