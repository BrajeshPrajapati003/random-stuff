const { useEffect, useState } = require("react");

const promise = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Data received!");
    }else{
        reject("Error occurred!");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));


async function getData(){
    try{
        const res = await fetch(url);
        const data = await res.json();
    }catch(error){
        console.log(error);
    }
}


fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(data => console.log(data));


async function getUsers(){
    const res = await fetch("https://api.example.com/users");
    const data = res.json();
    console.log(data);
}


await fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "Brajesh" })
});


const p1 = fetch("/users");
const p2 = fetch("/posts");

await Promise.all([p1, p2, p3]); // fails if any fails
await Promise.allSettled([p1, p2]); // returns all results
await Promise.race([p1, p2]); // returns first resolved/rejected



useEffect(()=> {
    fetchData();
}, []);

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(()=> {
    const fetchData = async ()=> {
        try{
            setLoading(true);
            const res = await fetch(url);
            const data = res.json();
            setData(data);
        }catch(e){
            setError(e);
        }finally{
            setLoading(false);
        }
    };

    fetchData();
}, []);


// ----------------------------------------------

const user = {name: "A"};
user.name = "B"; // Allowed


// Scope

let x = 10; // global

if(true){
    let y = 20; // block
}

function test(){
    let z = 30; // function
}

console.log(a);
var a = 10;

var a;
console.log(a); // undefined
a = 10;

console.log(b);
let b = 10;


// const promise = new Promise((resolve, reject) => {
//     const success = true;

//     if(success){
//         resolve("Data received");
//     }else{
//         reject("Error occurred");
//     }
// })



// ! Abort Controller -> to cancel pending requests
useEffect(()=> {
    const controller = new AbortController();

    const fetchData = async ()=> {
        try{
            const res = await fetch(url, {
                signal: controller.signal
            });

            const data = await res.json();
            setData(data);
        }catch(err){
            if(err.name !== "AbortError"){
                setError(err);
            }
        }
    };

    fetchData();

    return ()=> controller.abort();
}, []);



const [users, posts] = await Promise.all([ // handle multiple apis for dashboards
    fetch("/users").then(res => res.json()),
    fetch("/posts").then(res => res.json())
]);




function Form(){
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });
    };

    return (
        <form>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}



// Callback hell (pyramid of doom)
getUsers(id, user => {
    getOrders(user, orders => {
        getPayment(user, payment => {
            getReceipt(user, receipt => {
                console.log(receipt);
            });
        });
    });
});


// sol 1 : Promises
getUsers(id)
    .then(getOrders)
    .then(getPayment)
    .then(getReceipt)
    .catch(err => console.log(err));


// sol 2: async/await
try{
    const user = await getUser(id);
    const orders = await getOrders(user);
    const payment = await getPayment(orders);
    const receiept = await getReceipt(payment);
}catch(err){
    console.log(err);
}


// timeout logic
const timeout = new Promise((_, reject) => 
    setTimeout(()=> reject("Timeout"), 3000)
);

await Promise.race([fetch(url), timeout]);

const timeout2 = new Promise((_, reject)=> 
    setTimeout(()=> reject("Timeout"), 3000)
);

await Promise.race([fetch(url), timeout2]);



async function test(){
    console.log("1");
    await Promise.resolve();
    console.log("2");
}

console.log("3");
test();
console.log("4"); // 3, 1, 4, 2
