//CTX: 25-Nov-2k25

// function add(num1: number, num2 : number): number{
//     return num1+num2;
// }

// const n1: number = 20;
// const n2: number = 30;

// console.log(add(n1, n2));

// const details: {
//     firstname: string;
//     lastname: string;
//     age: number;
//     gender: string;

//     // NESTED OBJECT
//     xyz: {
//         address: string;
//         skills: string[];
//     }
// } = {
//     firstname: "brajesh",
//     lastname: "prajapati",
//     age: 21,
//     gender: "M",
//     xyz:{
//         address: "narmadapuram",
//         skills: ["java", "nextjs", "typescript"],
//     }
// }

// console.log(details.xyz);
// console.log(details.firstname);
// console.log(details.xyz.skills);


//N: TUPLE

// const person: {
//     name: string;
//     age: number;
//     skills: string[];
//     product: [number, string];
// } = {
//     name: "brajesh",
//     age: 21,
//     skills: ["java", "typescript", "nextjs", "springboot"],
//     product: [43, "brajesh"],
// }

// person.product[1] = "Brajesh";
// console.log(person.product);

//N: ENUM

enum Role {ADMIN, USER, READ_USER_ONLY};

//N const declarations must be initialized
const person: {
    name: string;
    age: number;
    interest: [string, string, number];
    role: Role;
} = {
    name: "Brajesh",
    age: 21,
    interest: ["brajesh", "prajapati", 66],
    role: Role.USER
}

if(person.role == Role.ADMIN){
    console.log("Admin");
}else if(person.role == Role.USER){
    console.log("User");
}else{
    console.log("Read_User_Only");
}
