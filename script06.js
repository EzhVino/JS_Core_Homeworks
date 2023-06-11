// 1) 1 3 6 4 2 5 
// '3' выведется вторым, потому что, пока мы не добавили промису асинхронности с помощью .then или .catch, он - синхронный

// console.log('1');

// setTimeout(() => console.log('2'), 1);

// let promiseNew = new Promise((resolve) => {
//     console.log('3');
//     resolve();
// });

// promiseNew.then(() => console.log('4'));

// setTimeout(() => console.log('5'));

// console.log('6');

// 2) 1 3 2
// 'a' не выводится, потому что мы никак не обработали результат .then или .catch

// let promiseTree = new Promise((resolve, reject) => {
//     resolve("a");

//     console.log("1");

//     setTimeout(() => {
//         console.log("2");
//     }, 0);

//     console.log("3");
// });

// 3) abc
//  finally пропустится, потому что он ничего не может принимать и из него нельзя получать значений, 
// catch пропустит, потому что нет никакой ошибки
// let promiseTwo = new Promise((resolve, reject) => {
//     resolve("a");
// });

// promiseTwo
//     .then((res) => {
//         return res + "b";
//     })
//     .then((res) => {
//         return res + "с";
//     })
//     .finally((res) => {
//         return res + "!!!!!!!";
//     })
//     .catch((res) => {
//         return res + "d";
//     })
//     .then((res) => {
//         console.log(res);
//     });

// 4) 1 123 2 123  3 321 4 undefined 
// последнее значение будет undefined, потмоу что из предшествующего .catch мы не возвращаем никакого значения, просто консолим  3 321

// function doSmth() {
//     return Promise.resolve("123");
// }

// doSmth()
//     .then(function (a) {
//         console.log("1", a); //
//         return a;
//     })
//     .then(function (b) {
//         console.log("2", b);
//         return Promise.reject("321");
//     })
//     .catch(function (err) {
//         console.log("3", err);
//     })
//     .then(function (c) {
//         console.log("4", c);
//         return c;
//     });

// 5) 1 4 3 2
// сначала весь синхрон 1 4 , потом микротаску 3, потом макротаску 2

// console.log("1");

// setTimeout(function () {
//     console.log("2");
// }, 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// 6) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

const array = [10, 12, 15, 21];

function printIndexesWithDelay(array) {
    for (let i = 0; i < array.length; i++) {
        setTimeout(function () {
            console.log(`${array[i]}: index ${i}`);
        }, 3000 * i);
    }
}

printIndexesWithDelay(array);




