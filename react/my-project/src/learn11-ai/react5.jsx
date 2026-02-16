import { number, setDragLock } from "motion";
import { h1 } from "motion/react-client";
import { useCallback, useEffect, useMemo, useState } from "react";

document.getElementById("count").innerText = count;


function Welcome(){
    return <h1>Hello</h1>;
}

React.createElement("h1", null, "Hello");


function add(a, b){
    return a+b;
}

add(2, 3);


function Welcome(props){
    return <h1>Hello {props.name}</h1>;
}

<Welcome name="Brajesh" />
// props.name = "Brajesh"


function welcome({name}){
    return <h1>Hello {name}</h1>;
}

// Props are immutable and controlled by the parent

function User({name, age}){
    return <p>{name} is {age} years old.</p>;
}

<User name="Brajesh" age={21} />


function Card({children}){
    return <div className="card">{children}</div>
}

<Card>
    <h1>Hello</h1>
    <p>World</p>
</Card>



function Parent(){
    const name = "Brajesh";
    return <Child name={name} />
}

function Child({name}){
    return <h1>{name}</h1>
}

// child receives, parent owns

// -----------------------------------------------------------

// ! Real World Examples of useEffect() hook

// wrong (leak)
useEffect(()=> {
    setInterval(()=> {
        console.log("Tick");
    }, 1000);
}, []); 
// Interval never stops


// correct
useEffect(()=> {
    const id = setInterval(()=> {
        console.log("Tick");
    }, 1000);
    
    return ()=> clearInterval(id);
}, []);



// wrong
useEffect(()=> {
    window.addEventListener("resize", ()=> {
        console.log("Resize");
    });
}, []);


// Correct
useEffect(()=> {
    const handler = console.log("Resize");
    
    window.addEventListener("resize", handler);

    return ()=> {
        window.removeEventListener("resize", handler);
    };
}, []);



// fetch + cleanup
useEffect(()=> {
    const controller = new AbortController();
    
    async function load(){
        try{
            const res = await fetch(url, {
                signal: controller.signal
            });
            const data = await res.json();
            setData(data);
        }catch(err){
            if(err.name !== "AbortError"){
                console.error(err);
            }
        }
    }

    load();

    return ()=> controller.abort();
}, [url]);

// -----------------------------------------------------


// Infinite loop - common mistake
useEffect(()=> {
    setCount(count+1);
}, [count]);


// Expensive Calculation
function App({numbers}){
    const sum = numbers.reduce((a, b)=> a+b, 0);
    return <p>{sum}</p>
}

// useMemo()
const sum = React.useMemo(()=> {
    return numbers.reduce((a,b)=> a+b, 0);
}, [numbers]);


// Child renders unnecessarily
function Parent(){
    const handleClick = ()=> {
        console.log("Clicked");
    };

    return <Child onClick={handleClick} />;
}

// useCallback()
const handleClick = React.useCallback(()=> {
    console.log("Clicked");
}, []);



const Child = React.memo(function Child({ onClick }) {
    console.log("Child render");
    return <button onClick={onClick}>Click</button>;
});



useCallback(fn, deps)
// is equivalent to
useMemo(()=> fn, deps)


function Parent(){
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={()=> setCount(count+1)}>+</button>
            <Child />
        </>
    );
}
// child re-renders every time; if child is heavy -> problem

const Child = React.memo(function Child(){
    console.log("Child render");
    return <p>Static Content</p>
});
// Now child doesn't re-render unnecessarily


// ! React.memo does shallow prop comparison
<Child data={{id: 1}} /> 
// this breaks memo because object reference changes every render.

// Fix:
const data = useMemo(()=> ({id: 1}), []);
<Child data={data} />


