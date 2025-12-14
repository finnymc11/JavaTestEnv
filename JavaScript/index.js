//BASIC JS

//variables
let username = 'Finbar'; //string literal
let age = 22; //number literal
let isValid = true; //boolean literal
let something; //undefined
let unknown = null; //object

console.log(typeof age);

//object
let person = {
    name: 'Finbar',
    age: 22
};

console.log(person);

//dot notation
person.name = 'John';

//bracket notation
person['name'] = 'Mary';

//using let
let selection = 'name';
person[selection] = 'Mary';

console.log(person);

//arrays
let fruits = ['apple', 'banana', 'orange'];
fruits[3] = 'pear';
console.log(fruits); 
console.log('2nd fruit is ' + fruits[1]);
console.log('there are ' + fruits.length + ' fruits');

//functions
function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName); 
}

greet('finbar', 'mccarron');
greet('john', 'smith');

//square
function square(num) {
    return num*num;
}

console.log(square(4));


//OBJECT ORIENTED PROGRAMMING for JS

//Object literal
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

//Factory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
};
const circle2 = createCircle(1);

//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}
const another = new Circle(1);