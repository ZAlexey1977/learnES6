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

// function removeFirstTwo(list) {
//   let [a, b, ...arr] = [...list];
//   list = arr;
//   return list;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);
// log(sourceWithoutFirstTwo);

///////////////////////////////////////////// task 14 ////////////////////////////////////

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Змініть код лише під цим рядком
// const half = ({ max, min }) => (max + min) / 2.0;
// // Змініть код лише над цим рядком

///////////////////////////////////////////// task 15 ////////////////////////////////////

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Змініть код лише під цим рядком
//   const failureItems = arr.map((el) => {
//     el = `<li class="text-warning">${el}</li>`;
//     return el;
//   });

//   // Змініть код лише над цим рядком

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// log(failuresList);

///////////////////////////////////////////// task 16 ////////////////////////////////////

// const createPerson = (name, age, gender) => {
//   // Змініть код лише під цим рядком
//   return { name, age, gender };
//   // Змініть код лише над цим рядком
// };

///////////////////////////////////////////// task 17 ////////////////////////////////////

// // Змініть код лише під цим рядком
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   }
// };
// // Змініть код лише над цим рядком
// bicycle.setGear(3);
// console.log(bicycle.gear);

///////////////////////////////////////////// task 18 ////////////////////////////////////

// // Змініть код лише під цим рядком
// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // Змініть код лише над цим рядком

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Повинно показувати 'carrot'

///////////////////////////////////////////// task 19 ////////////////////////////////////

// // Змініть код лише під цим рядком
// class Thermostat {
//   constructor(temperature) {
//     this._temperature = temperature;
//   }
//   get temperature() {
//     return (5 / 9 * (this._temperature - 32));
//   }

//   set temperature(newTemp) {
//     this._temperature = (newTemp * 9.0 / 5 + 32);
//   }
// }
// // Змініть код лише над цим рядком

// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; // 24.44 градусів за Цельсієм
// log(temp)
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм
// log(temp)
///////////////////////////////////////////// task 20 ////////////////////////////////////

{/* <html>
  <body>
    <!-- Змініть код лише під цим рядком -->
   <script type="module" src="index.js"></script>
    <!-- Змініть код лише над цим рядком -->
  </body>
</html> */}

///////////////////////////////////////////// task 21 ////////////////////////////////////

// const uppercaseString = (string) => {
//   return string.toUpperCase();
// }

// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }

// export { uppercaseString, lowercaseString };

///////////////////////////////////////////// task 22 ////////////////////////////////////

// import { uppercaseString, lowercaseString } from './string_functions.js'
// // Змініть код лише над цим рядком

// uppercaseString("hello");
// lowercaseString("WORLD!");

///////////////////////////////////////////// task 23 ////////////////////////////////////

// import * as stringFunctions from './string_functions.js'
// // Змініть код лише над цим рядком

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

///////////////////////////////////////////// task 24 ////////////////////////////////////

// export default function subtract(x, y) {
//   return x - y;
// }

///////////////////////////////////////////// task 25 ////////////////////////////////////

// import subtract from './math_functions.js'
// // Змініть код лише над цим рядком

// subtract(7, 4);

///////////////////////////////////////////// task 26 ////////////////////////////////////

// const makeServerRequest = new Promise((resolve, reject) => {

// });

///////////////////////////////////////////// task 27 ////////////////////////////////////

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer;

//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

///////////////////////////////////////////// task 28 ////////////////////////////////////

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer налаштований правильно, щоб відобразити позитивну відповідь сервера
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

// makeServerRequest.then(result => {
//   console.log(result);
// })

///////////////////////////////////////////// task 29 ////////////////////////////////////

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer налаштований на похибку, щоб відобразити невдалу відповідь сервера
//   let responseFromServer = false;

//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

// makeServerRequest.then(result => {
//   console.log(result);
// });

// makeServerRequest.catch(error => {
//   console.log(error);
// })

/////////////////////////////////////////////////////////////////////////////////