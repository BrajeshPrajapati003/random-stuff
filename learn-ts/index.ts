type Person = {
    name: string;
};

const person: Person = {
    name: "John",
};

console.log(person.name);


let myName: string = "Brajesh";

// myName = 32; // error
console.log(myName);


let favNumber: number = 43;
console.log(favNumber);


let isHard: boolean = false;
isHard = true;
console.log(isHard);


let tech = "TypeScript";
let anyNumber = 8;
let isEasy = true;

console.log(typeof tech);
console.log(anyNumber);
console.log(isEasy);


let color: any = 'crimson';
color = 20;
color = false;
// color();
// color.toUpperCase();
console.log(color);

// regular func
function addOne(num: number): number{
    return num+1;
}

const result = addOne(3);
console.log(result);

// // Arrow func annotations
// const double = (x: number, y: number) => x * y;
// const res = double(2, 10);
// console.log(res);


function greet(person: string = "Anonymous"){
    return `Hello ${person}`;
}

const res = greet();
console.log(res);

let square = (x: number) : number => x * x;
console.log(square(4));


function printMessage(message: string) : void{
    console.log(message);
    // error
    // return message
}

printMessage("Hello how are you?");

function throwError(msg: string): never{
    throw new Error('Throwing an error');
}

function infiniteLoop(): never{
    while(true){
        
    }
}
