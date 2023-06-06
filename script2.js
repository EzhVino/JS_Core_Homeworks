// 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// Массивы в JS отличаются от массивов в классическом понимании тем, что их длину можно динамически увеличивать\уменьшать, 
// хотя по задумке - у массивов фиксированный размер (а вот у связных списков длина произвольная)
// Массивы в JS не типизированы (в один JS-массив можно сложить разные типы данных, а в одном "классическом" массиве можно 
// хранить данные только одного типа)
// Массивы в JS имеют характеристики нескольких структур данных: 

// массив - как стэк или очередь (которые собственно - его производные типы), линейный, но обращаться можем не только к первому или последнему элементу, а к любому - по индексу
// как хэш-таблица, потому что можем обращаться к элементу по ключу-индексу (хотя сама хэш-таблица включает себя индексированный массив)



// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.apply(obj);
logger.call(obj);
const loggerFunc = logger.bind(obj);
loggerFunc();

// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

let user = {
    firstName: "Вася"
};

function func() {
    console.log(this.firstName);
}

Function.prototype.pseudoBind = function (context, ...rest) {
    context.binder = this;
    return function () {
        const result = context.binder(...rest);
        delete context.binder;
        return result;
    }
}

func.pseudoBind(user)()
console.log(user);

logger.pseudoBind(obj)();