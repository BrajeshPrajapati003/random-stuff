import { h1 } from "motion/react-client";

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


