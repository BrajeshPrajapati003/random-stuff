// 9 OCT 2K25


// function greet(name){
//     return `Hello, ${name}!`;
// }

// console.log(greet("Brajesh"));


// Functions are hoisted
console.log(hoisted());

function hoisted(){
    return `I'm hosted!`;
}

// Function expressions are not hoisted, so you must define them before using
const greet1 = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet1("Brajesh"));


// Arrow functions
const greet2 = (name) =>  `Hello, ${name}!`;
console.log(greet2("The official Tyrant"));

const greet3 = ()=> "Hi!";
console.log(greet3); // Function: greet3
console.log(greet3()); // Function is called -> Hi!

const sumAndLog = (a, b) => {
    const result = a + b;
    console.log(result);
    return result;
};

// Arrow functions don't have this of their own, the inherit it from the surrounding scope. This is huge in React/TypeScript


// Default parameters
function greet4(name = "Guest"){
    return `Hello, ${name}`;
}
console.log(greet4());


// Rest parameters -> can only be used once and must be last in the parameter list
function sum(...numbers){
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


// Arguments Object
// Arrow functions don't have arguments, use rest parameters instead
function sum(){
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(sum(1,2,3)); // 6


