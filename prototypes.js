
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

// function Stopwatch() {
//     let startTime;
//     let endTime;
//     let running;
//     let duration = 0;

//     this.start = function () {
//         if (running)
//             throw new Error('Stopwatch has already started');
//         running = true;

//         startTime = new Date();
//     };

//     this.stop = function () {
//         if (!running)
//             throw new Error('Stopwatch is not started.');
//         running = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

//         duration += seconds;
//     };

//     this.reset = function () {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function () { return duration; }
//     });

//     Object.defineProperty(this, 'display', {
//         get: function () { return duration.toFixed(2); }
//     });
// }

// const sw = new Stopwatch()

// sw.start();



function Stopwatch() {
    this.startTime;
    this.endTime;
    this.running;
    this.duration = 0;

    // Object.defineProperty(this, 'duration', {
    //     get: function () { return duration; }
    // });

    // Object.defineProperty(this, 'display', {
    //     get: function () { return duration.toFixed(2); }
    // });
}


Stopwatch.prototype.start = function () {
    if (this.running)
        throw new Error('Stopwatch has already started');
    this.running = true;

    this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stopwatch is not started.');
    this.running = false;

    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;

    this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};

const sw = new Stopwatch()

sw.start();
