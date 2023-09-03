let log = console.log;

///////////////////////////////////////////// task 1 ////////////////////////////////////

// function checkScope() {
//   let i = 'function scope';
//   if (true) {
//     let i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }

//   console.log('Function scope i is: ', i);
//   return i;

// }

// checkScope();
// log(checkScope());

///////////////////////////////////////////// task 2 ////////////////////////////////////

// const s = [5, 7, 2];
// function editInPlace() {
//   // Змініть код лише під цим рядком
// s[0] = 2;
// s[1] = 5;
// s[2] = 7;
//   // Використання s = [2, 5, 7] може бути недійсним

//   // Змініть код лише над цим рядком
// }
// editInPlace();

///////////////////////////////////////////// task 3 ////////////////////////////////////

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // Змініть код лише під цим рядком
//   Object.freeze(MATH_CONSTANTS);

//   // Змініть код лише над цим рядком
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

///////////////////////////////////////////// task 4 ////////////////////////////////////

// const magic = () =>  {
//   return new Date();
// };

///////////////////////////////////////////// task 5 ////////////////////////////////////

// const myConcat = (arr1, arr2) => {
//   return arr1.concat(arr2);
// };

// console.log(myConcat([1, 2], [3, 4, 5]));

///////////////////////////////////////////// task 6 ////////////////////////////////////

// // Змініть код лише під цим рядком
// const increment = (number, value = 1) => number + value;
// // Змініть код лише над цим рядком

///////////////////////////////////////////// task 7 ////////////////////////////////////

// const sum = (...args) => {
//   //const args = [x, y, z];
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// log(sum(0, 1, 2));
///////////////////////////////////////////// task 8 ////////////////////////////////////

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];  // Змініть цей рядок

// console.log(arr2);

///////////////////////////////////////////// task 9 ////////////////////////////////////

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Змініть код лише під цим рядком

// const { today } = HIGH_TEMPERATURES;
// const { tomorrow } = HIGH_TEMPERATURES;

// // Змініть код лише над цим рядком

///////////////////////////////////////////// task 10 ////////////////////////////////////

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Змініть код лише під цим рядком

// const { today: highToday } = HIGH_TEMPERATURES;
// const { tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// // Змініть код лише над цим рядком

///////////////////////////////////////////// task 11 ////////////////////////////////////

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// // Змініть код лише під цим рядком

// const { today: { low: lowToday } } = LOCAL_FORECAST;
// const { today: { high: highToday } } = LOCAL_FORECAST;

// // Змініть код лише над цим рядком

///////////////////////////////////////////// task 12 ////////////////////////////////////

// let a = 8, b = 6;
// // Змініть код лише під цим рядком
// [a, b] = [b, a];


///////////////////////////////////////////// task 13 ////////////////////////////////////

///////////////////////////////////////////// task 14 ////////////////////////////////////

///////////////////////////////////////////// task 15 ////////////////////////////////////