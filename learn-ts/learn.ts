var a = 32;
console.log(a);

function abcd(): void{ }

function abcdef(name: string, age: number, cb: (arg: string) => void){ 
    cb("Hi");
}

abcdef("Brajesh", 20, ()=>{
    console.log("abcdef");
})


function fun1(name: string, age: number, title: string, sum: (a: number, b: number)=> number){
    let ans = sum(2, 4);
    console.log(ans);
    
}

fun1("brajesh", 20, "student", (a, b) => {
    return (a + b);
})


function fun2(name: string, age: number, gender?: string){ // IDEA: gender is optional
    console.log(name, age, gender);
    
}

fun2("brajesh", 20, "male");
fun2('brajesh', 20); // gender is undefined


function fun3(name: string, age: number, gender: string = 'not to be disclosed'){ // NOTE: default parameters
    console.log(name, age, gender);
}

fun3('brajesh', 20, "male");
fun3('xyz', 21);



// ... rest/spread -> operator (keep everything in same one variable)


function sum2(...args: number[]): number{ // NOTE: ... -> rest operator
    console.log(args);
    let sum = 0;
    for(let i of args){
        sum += i;
    }
    console.log(sum);
    return sum;
    
}

sum2(1,2,3,4,5,6,7,8,9,10); // 55


let arr1 = [1, 2, 3, 5];
let arr2 = [...arr1]; // NOTE: ... -> spread operator

console.log(arr2);



// function overloading
function fun5(a: string): void;
function fun5(a: string, b: number): number;

function fun5(a: any, b?: any): void | number{ // FIXME: void | number is necessary to be declared
    if(typeof a === "string" && b === undefined){
        console.log("above function");
    }else if(typeof a === "string" && typeof b === "number"){
        console.log("below function");
        return 0;
    }
    else throw new Error("Something is seriously wrong!");
}

fun5("brajesh");
fun5("brajesh", 20);


// generics
interface Halua<T> {
    name: string;
    age: number;
    key: T;
}

function fun6(obj: Halua<string>){
    console.log(obj.key.charAt(2));
}

fun6(({
    name: 'brajesh',
    age: 20,
    key: 'are ooo lala'
}))


class BottleMaker<T>{
    constructor(public key: T){
        // TypeScript generics don't exist at runtime, <T> is only a compile-time type. At runtime, you can't log the type directly.
        // console.log("constructor of type: "+ <T> + "is called"); // BUG: NaN
        console.log(`constructor of type: ${typeof key} is called`);
    }
}

let b1 = new BottleMaker<string>('bottlemaker-1');
let b2 = new BottleMaker<number>(2);

// INFO: TypeScript erases generics at runtime, so you cannot access T directly in console.log.
// INFO: typeof key works for primitive types (string, number, boolean).
// INFO: For objects or arrays, typeof will return "object". You might need Array.isArray or instanceof if you want more detail.


