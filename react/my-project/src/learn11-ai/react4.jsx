//! TOPIC - MEMORY LEAK

import { useCallback, useEffect, useMemo } from "react";

// Closures holding memory
function createLeak() {
  let bigData = new Array(1_000_000).fill("🔥");

  return function () {
    console.log(bigData[0]);
  };
}
const fn = createLeak();


let fn2 = createLeak();
fn2 = null; // allow GC



// setInterval & setTimeout leaks
setInterval(() => {
  console.log("Polling...");
}, 1000);



const id = setInterval(()=> {}, 1000);
clearInterval(id);



// Listener not removed
function attach(){
    window.addEventListener("resize", ()=> {
        console.log("resized");
    });
}


function onResize(){
    console.log("resized");
}

window.addEventListener("resize", onResize);
window.removeEventListener("resize", onResize);


// Detached DOM nodes
let el = document.getElementById("box");
document.body.removeChild(el); // but el still referenced


el = null;


// setState after unmount ??? we didn't use async and await here
useEffect(()=> {
    fetch(url).then(res => res.json()).then(setData);
}, []);


useEffect(()=> {
    const controller = new AbortController();

    fetch(url, {signal: controller.signal})
        .then(res => res.json())
        .then(setData)
        .catch(err => {
            if(err.name != "AbortError") throw err;
        });

    return ()=> controller.abort();
}, []);



// missing dependency array
useEffect(()=> {
    fetchData();
});


useEffect(()=> {
    fetchData();
}, []);


// ! TOPIC - PERFORMANCE TRAPS

// unnecessary re-renders
function Parent(){
    const handleClick = ()=> {};
    return <Child onClick={handleClick} />;
}

const handleClick = useCallback(()=> {}, []);


// Expensive calculations
const result = heavyCalculation(data);

const result2 = useMemo(()=> heavyCalculation(data), [data]);


// large lists
items.map(item => <Item key={item.id} />)

// use pagination / virtualization (react-window) / infinite scroll



// microtask starvation
function loop(){
    Promise.resolve().then(loop);
}
loop();

// excessive microtasks can starve the event loop

