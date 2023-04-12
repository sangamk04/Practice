// var name = "masai"

// function test(){
// 	var temp=1
// }
// test()

// var user = "Arya";

// function sayHello(){
//   return `Hello ${user}`;
// }

// var userMsg = sayHello(user);

// function sayHi() {
//     var name = 'Lydia';
//     var age = 21;
//     console.log(name);
//     console.log(age);
//   }
  
//   sayHi();

// console.log('First');
// setTimeout(() => console.log('Second'), 0);
// console.log('Third');

// console.log('First');
// function secondCall() {
//   console.log('Second');
// }
// setTimeout(secondCall, 2000); 
// setTimeout(() => console.log('Third'), 0); 
// console.log('Third');

// console.log('First');
// function secondCall() {
//   console.log('Second');
// }
// setTimeout(secondCall, 1000);
// setTimeout(() => console.log('Third'), 0);
// console.log('Fourth');

function main() {
    console.log('A');
    setTimeout(function display() {
      console.log('B');
    }, 0);
    console.log('C');
   }
   main();
