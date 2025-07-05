
// function createAnimal(name) {
//     return {
//         name: name,
//         speak() {
//             console.log(`Animal sound`);
//         }
//     };
// }

// function createCat(name, color) {
//     const cat = {
//         color: color,
//         meow() {
//             console.log(`${name} says moew!`);
//         },
//         toString() {
//             return (`Cat: name - ${name}, color - ${color}`);
//         }

//     };
//     cat.__proto__ = createAnimal(name);

//     return cat;
// }

// const c = createCat('Catty', 'black');

// c.meow();
// c.speak();

// console.log(c.toString());



// function createComputer(brand) {
//     return {
//         brand: brand,
//         info() {
//             console.log(`Computer brand: ${brand}`);
//         }
//     }
// }

// function createLaptop(brand, weight) {
//     const laptop = {
//         weight: weight,
//         carry() {
//             console.log(`Carrying ${brand} laptop that weighs ${weight}kg`);
//         },
//         toString() {
//             return (`Laptop: ${brand}, ${weight}kg`)
//         }
//     }
//     laptop.__proto__ = createComputer(brand);

//     return laptop;
// }

// const I = createLaptop(`Asus`, 7);

// I.carry();
// I.info();
// console.log(I.toString());


// -------------------------------------------

// function setName(name) {
//     this.name = name;
// }

// function setAge(age) {
//     this.age = age
// }

// function Person() {

// }

// Person.prototype.desctibe = function () {
//     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
// }

// const p = new Person();

// setName.call(p, 'Ana');
// setAge.call(p, 25);

// p.desctibe();

// console.log(p);


// -------------------------------------------


// function Being(name) {
//     this.name = name;
// }

// Being.prototype.exist = function () {
//     console.log(`I exist. My name is ${this.name}`)
// }

// function Human(name, language) {
//     Being.call(this, name);
//     this.language = language;
// }

// Human.prototype = Object.create(Being.prototype);
// Human.prototype.constructor = Human;


// Human.prototype.speak = function () {
//     console.log(`I speak ${this.language}`);
// }

// function Student(name, language, subject) {
//     Human.call(this, name, language);
//     this.subject = subject;
// }

// Student.prototype = Object.create(Human.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function () {
//     console.log(`I study ${this.subject}`);
// }

// Student.prototype.describe = function () {
//     console.log(`I'm ${this.name}, my language is ${this.language} and I study ${this.subject}`);
// }


// const y = new Human(`Michael`, `English`);
// y.speak();
// y.exist();


// const x = new Student(`Jones`, `French`, `Math`);
// x.study();
// x.speak();
// x.describe();


// console.log(x);

// --------------------------------------------------


// Threed exercise OOP

// function Device(brand) {
//     this.brand = brand;
// }

// Device.prototype.powerOn = function () {
//     console.log(`Device by ${this.brand} is now on`)
// }

// function Smartphone(brand, os) {
//     Device.call(this, brand);
//     this.os = os;
// }

// Smartphone.prototype = Object.create(Device.prototype);
// Smartphone.prototype.constructor = Smartphone;

// Smartphone.prototype.info = function () {
//     console.log(`Smartphone by ${this.brand} running ${this.os}`);
// }

// const phone = new Smartphone(`Samsung`, `Android`);

// phone.powerOn();
// phone.info();


// --------------------------------------------------

// Stopwatch and OOP

// function Stopwatch() {
//     this.startTime;
//     this.endTime;
//     this.running;
//     this.duration = 0;
// }

// Stopwatch.prototype.start = function () {
//     if (this.running)
//         throw new Error('Stopwatch has already started');
//     this.running = true;

//     this.startTime = new Date();
// };

// Stopwatch.prototype.stop = function () {
//     if (!this.running)
//         throw new Error('Stopwatch is not started.');
//     this.running = false;

//     this.endTime = new Date();

//     const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;

//     this.duration += seconds;
// };

// Stopwatch.prototype.reset = function () {
//     this.startTime = null;
//     this.endTime = null;
//     this.running = false;
//     this.duration = 0;
// };

// const sw = new Stopwatch()

// sw.start();

// --------------------------------------------------


// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//     Shape.call(this, color);
//     this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function () {
//     console.log('draw');
// }

// function Square(size) {
//     this.size = size;
// }

// extend(Square, Shape);

// const s = new Shape();
// const c = new Circle(1, 'red');
// const sq = new Square(10);


// --------------------------------------------------

// method overriding

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function () {
//     console.log(`${this.name} makes a sound.`)
// }

// function Dog(name) {
//     Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function () {
//     console.log(`${this.name} barks.`);
// }

// function Cat(name) {
//     Animal.call(this, name);
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.speak = function () {
//     console.log(`${this.name} meows.`);
// }

// const dog = new Animal('Dog');
// const dog2 = new Dog('Zeus');
// const cat = new Animal('Cat');
// const cat2 = new Cat('Kitty');

// console.log(dog2);
// dog2.speak();

// console.log(dog);
// dog.speak();

// console.log(cat);
// cat2.speak();

// --------------------------------------------------

// function extend(Cihld, Parent) {
//     Cihld.prototype = Object.create(Parent.prototype);
//     Cihld.prototype.constructor = Cihld;
// }

// function Shape() { }

// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }

// function Circle() {

// }

// extend(Circle, Shape);

// Circle.prototype.duplicate = function () {
//     Shape.prototype.duplicate.call(this);

//     console.log('duplicate circle');
// }

// const c = new Circle();

// c.duplicate();

// --------------------------------------------------


// function extend(Cihld, Parent) {
//     Cihld.prototype = Object.create(Parent.prototype);
//     Cihld.prototype.constructor = Cihld;
// }

// function Shape() { }

// Shape.prototype.duplicate = function () {
//     console.log('duplicate');
// }

// function Circle() {

// }

// extend(Circle, Shape);

// Circle.prototype.duplicate = function () {
//     console.log('duplicate circle');
// }

// function Square() {

// }

// extend(Square, Shape);

// Square.prototype.duplicate = function () {
//     console.log('duplicate square');
// }

// const shapes = [
//     new Circle(),
//     new Square()
// ];

// for (let shape of shapes) shape.duplicate();


// const c = new Circle();
// const x = new Square();

// --------------------------------------------------


// function canFight(obj) {
//     obj.fight = function () {
//         console.log(`${this.name} swings a weapon!`);
//     };
// }

// function canHeal(obj) {
//     obj.heal = function () {
//         console.log(`${this.name} heals an ally!`);
//     };
// }

// function canCast(obj) {
//     obj.cast = function () {
//         console.log(`${this.name} casts a spell!`);
//     };
// }

// function createCharacter(name) {
//     const character = { name };
//     return character;
// }

// const warrior = createCharacter("Thorin");
// canFight(warrior);

// const priest = createCharacter("Audin");
// canHeal(priest);

// const mage = createCharacter("Jaina");
// canCast(mage);

// const paladin = createCharacter("Uther");
// canFight(paladin);
// canHeal(paladin);

// warrior.fight();
// priest.heal();
// mage.cast();
// paladin.fight();
// paladin.heal();

// --------------------------------------------------

// Mixins

function mixin(target, ...source) {
    Object.assign(target, ...source);
}

const canEat = {
    eat: function () {
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('swim');
    }
};

function Person() {

}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();

console.log(person);

function Goldfish() {

}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();

console.log(goldfish);