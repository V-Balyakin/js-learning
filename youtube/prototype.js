const person = new Object({
    name: 'Valentin',
    age: 27,
    greet: function() {
        console.log('Hi!');
    }
});

Object.prototype.sayHello = function () {
    console.log('Hello!');
};

const oxana = Object.create(person);
oxana.name = 'Aksana';

const someString = 'I am independent string!';
const anotherString = new String('I am String too!');

// можно на строке вызвать функцию sayHello, т.к. мы создали его на Object,
// а Object является родителем для String (в том числе) 

// prototype - это некоторый объект, с помощью которых мы расширяем свойство некоторых
// объектов или классов