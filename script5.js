// 1) Какие бывают алгоритмы сортировок? 
// 1.1 сортировка пузырьком - сравниваем пары соседних элементов, если второй меньше первого, меняем местами и переходим 
// на 1 индекс дальше. Когда массив закончится, повторяем проход, пока значения не отсортируются по возрастанию
// 1.2 сортировка вставками - работаем с отсортированной и неотсортированной частью массива. первый элемент - уже как бы отсортированная
// часть, все остальное - неотсортированное. берем первый элемент неотсортированной части, сравниваем, где он должен находиться относительно первого
// и туда вставляем, первые 2 отсортированы. снова берем первый элемент неотсортированной части, сравниваем, где он должен находиться
// в отсортированной части - туда и вставляем. и тд 
// 1.3 сортировка выбором - ищем максимальный элемент массива и перемещаем в конец. он стал - первым в отсортированной части. проходимся 
// по несортированной и ищем максимальный элемент и перемещаем в конец несортированной части. и тд
// 1.4 быстрая сортировка - делим массив пополам, берем срединное значение и все, что меньше, ставим до, больше – после. Подмассивы сортируем так же
// 1.5 сортировка слиянием - делим массив пополам, половины пополам и т.д., пока не останется по 1 элементу. Потом сливаем в пары
// (чтобы 1е были меньше 2х) и сравниваем первые элементы в каждом массиве, и записываем в результирующий список, 
// потом сравниваем по 4кам и т.д. пока все комбинации не сольются в один результирующий массив

// Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person.
// Добавить метод logInfo чтоб он был доступен всем объектам.

// const person = new Object()

// const person1 = {
//     type: 'human'
// }

// const person2 = Object.create(person, {
//     secondary: {
//         value: true,
//         enumerable: true
//     }
// });

// const personCloned = Object.create(Object.getPrototypeOf(person2), Object.getOwnPropertyDescriptors(person2))
// console.log(personCloned.type);

// Object.setPrototypeOf(person2, person);

// person2.__proto__.logInfo = function () {
//     console.log('this is a person');
// }

// person2.logInfo()

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

// class PersonThree {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         this._name = value;
//     }
// }

// class Person extends PersonThree {
//     constructor(name, surname) {
//         super(name);
//         this.surname = surname;
//     }

//     get fullname() {
//         return `${this.name} ${this.surname}`;
//     }
//     set fullname(full) {
//         [this.name, this.surname] = full.split(' ');
//     }
// }

// let sasha = new Person('Sasha', 'Koltsova');
// console.log(sasha.fullname);
// console.log(sasha.fullname = 'Sasha Sviridova');


// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total
// result = [4, 9]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 13;

// const firstSum = (arr, total) => {

//     for (let i = 0; i < arr.length; i++) {
//         let rest = total - arr[i];
//         if (arr.find(el => el === rest) !== undefined) {
//             const result = [];
//             result.push(arr[i], rest);
//             return result;
//         }
//     }
// }

// console.log(firstSum(arr, total));

// Сложность O(n^2) 


