
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



function createComputer(brand) {
    return {
        brand: brand,
        info() {
            console.log(`Computer brand: ${brand}`);
        }
    }
}

function createLaptop(brand, weight) {
    const laptop = {
        weight: weight,
        carry() {
            console.log(`Carrying ${brand} laptop that weighs ${weight}kg`);
        },
        toString() {
            return (`Laptop: ${brand}, ${weight}kg`)
        }
    }
    laptop.__proto__ = createComputer(brand);

    return laptop;
}

const I = createLaptop(`Asus`, 7);

I.carry();
I.info();
console.log(I.toString());