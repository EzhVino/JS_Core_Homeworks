// Задание 1 – Создать объект counter всеми возможными способами
const counter = {
    info: 'this counter can count'
};

// console.log(counter);

//------------------------------------------------------------
const counter2 = new Object();
counter2.info = 'this counter can count'

// console.log(counter2);

//------------------------------------------------------------
const counter2Descendant = Object.create(counter2, {
    hasParent: {
        value: true,
        configurable: false
    }
})

// console.log(counter2Descendant);

//------------------------------------------------------------
const counter3 = Object.assign({}, counter2, { initialValue: 0 });

// console.log(counter3);

//------------------------------------------------------------
class CountingMachine {
    constructor(limit) {
        this.limit = limit;
    }
    count() {
        for (let i = 1; i <= this.limit; i++) {
            console.log(i);
        }
    }
}

// let usersNumber = Number(prompt('till what number you want to count?'))
// const counter4 = new CountingMachine(usersNumber);
// counter4.count();


//------------------------------------------------------------
// Задание 2 – Скопировать объект counter всеми возможными способами;

const copiedCounter = Object.assign({}, counter3);

// console.log(copiedCounter);

//------------------------------------------------------------
const copiedCounter2 = { ...counter3 };

// console.log(copiedCounter2);

//------------------------------------------------------------
const deepCopy = _.cloneDeep(counter3);

// console.log(deepCopy)

//------------------------------------------------------------
const copiedCounter3 = JSON.parse(JSON.stringify(counter3));

// console.log(copiedCounter3);

//------------------------------------------------------------
const copiedCounter5 = structuredClone(counter3);

// console.log(copiedCounter5);


//------------------------------------------------------------
// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

//FD----------------------------------------------------------
function makeCounter(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }
}

// makeCounter(3);

//FE----------------------------------------------------------
const makeCounter2 = function (limit) {
    if (limit < 1) {
        throw new Error('limit shoud not be less than 1');
    } else {
        for (let i = 1; i <= limit; i++) {
            console.log(i);
        }
    }
}

// makeCounter2(0);

//NFE---------------------------------------------------------
const makeCounter3 = function makeCounter4(limit) {
    if (limit) {
        for (let i = 1; i <= limit; i++) {
            console.log(i);
        }
    } else {
        makeCounter4(5);
        console.log('...вышел зайчик погулять');
    }
};

// makeCounter3();

//IIFE--------------------------------------------------------
// (function (limit) {
//     for (let i = 1; i <= limit; i++) {
//         console.log(i);
//     }
// }(4));

//Стрелочная---------------------------------------------------
const makeCounter5 = limit => `this counter can hypothetically count till ${limit}`

// console.log(makeCounter5(5));

//Callback-- ---------------------------------------------------
function makeCounter6(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }
}

// setTimeout(makeCounter6, 1000, 3)

//Конструктор----------------------------------------------------
function Counter(limit) {
    this.limit = limit,
        this.startCount = function () {
            for (let i = 1; i <= limit; i++) {
                console.log(i);
            }
        }
}

const counter5 = new Counter(4);
counter5.info = 'this counter can count';
// console.log(counter5);


//---------------------------------------------------------------
// Бонус Задание 1 – Написать функцию глубокого сравнения двух обьектов:


const obj1 = {
    here: {
        is: "on",
        other: "3"
    },
    object: "Y",
    func: function () {
        console.log('hello');
    },
};

const obj2 = {
    here: {
        is: "on",
        other: "2"
    },
    object: "Y",
    func: function () {
        console.log('hello');
    },
};

const deepEqual = (obj1, obj2) => {

    if (typeof obj1 === 'object') {

        const keys1 = Object.keys(obj1)
        const keys2 = Object.keys(obj2)

        if (keys1.length !== keys2.length) return false;

        for (const key of keys1) {
            if (deepEqual(obj1[key], obj2[key]) === false) return false;
        }
    }
    else if (typeof obj1 === 'function') {
        return (obj1.toString() === obj2.toString());
    }
    else if (obj1 !== obj2) return false;
    return true;
}

console.log(deepEqual(obj1, obj2));


//---------------------------------------------------------------
// Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
    let arr = Array.from(str)
    return arr.reverse().join('');
}

// console.log(reverseStr('Sasha'));



