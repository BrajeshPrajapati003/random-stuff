const timeout = new Promise((_, reject) => setTimeout(()=> reject("Timeout"), 2000));
const timeout2 = new Promise((_, reject) = setTimeout(()=> reject("Timeout"), 3000));
const timeout3 = new Promise((_, reject) = setTimeout(()=> reject("Timeout"), 4000));
const timeout4 = new Promise((_, reject) = setTimeout(()=> reject("Timeout"), 5000));


await Promise.race([fetch(url), timeout]);
await Promise.race([fetch(url2), timeout2]);
await Promise.race([fetch(url3), timeout3]);


const promise = new Promise((res, rej) => {
    const success = Math.random() > 0.5;
    if(success){
        res("Data Received");
    }else{
        rej("Error Occurred!");
    }
});

promise
    .then(data => console.log(data))
    .catch(err => console.log(err));


const promise2 = new Promise((res, rej)=> {
    const success = Math.random() > 0.8;
    if(success){
        res("Data received");
    } else{
        rej("Error occurred");
    }
});

promise
    .then(data => console.log(data))
    .catch(err => console.log(err));



const res = await fetch("https://api.example.com/users");
const data = res.json();

const res2 = await fetch("url");
const data2 = res.json();


await fetch("/api/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "Dev" })
});


await fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "Dev" })
});


try{
    const res = await fetch(url);
    if(!res.ok){
        throw new Error("API Failed");
    }
    const data = res.json();
}catch(err){
    console.error(err);
}

try{
    const res = await fetch(url);
    if(!res.ok){
        throw new Error("Api failed");
    }
    const data = res.json();
}catch(err){
    console.error(err);
}



import {useEffect, useState} from "react";

function Users1(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchUsers = async ()=> {
            try{
                setLoading(true);
                const res = await fetch(url);

                if(!res.ok){
                    throw new Error("Api failed");
                }

                const data = await res.json();
                setUsers(data);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <ul>
            {users.map(user => {
                <li key={user.id}>{user.name}</li>
            })}
        </ul>
    );
}

function Users2(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        
        const fetchUsers = async ()=> {
            try{
                setLoading(true);
                const res = await fetch(url);
                if(!res.ok){
                    throw new Error("Api failed");
                }
                const data = await res.json();
                setUsers(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };

        fetchUsers();
    },[])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <ul>
            {users.map(user => 
                <li key={user.id}>{user.name}</li>
            )}
        </ul>
    );
}


function User3(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const controller = new AbortController();
        const fetchData = async ()=> {
            try{
                setLoading(true);
                const res = await fetch(url, {
                    signal: controller.signal
                });
                
                const data = await res.json();
                setUsers(data);
            }catch(err){
                if(err.name !== "AbortError"){
                    setError(err);
                }
            }finally{
                setLoading(false);
            }
        }

        fetchData();
        return ()=> controller.abort();
    }, [])

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>

    return (
        <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li> // due to {} jsx expects an explicit return; else use ()
            })}
        </ul>
    )
}

                            /** MEMORIZE THE PATTERN */
function User4(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {

        const controller = new AbortController();
        const fetchData = async ()=> {
            try{
                setLoading(true);
                const res = await fetch(url, {
                    signal: controller.signal
                });

                if(!res.ok){
                    throw new Error("Fetch Failed");
                }

                const data = await res.json();
                setUsers(data);

            }catch(err){
                if(err.name !== "AbortError"){
                    setError(err);
                }
            }finally{
                if(!controller.signal.aborted){
                    setLoading(false);
                }
            }
        };

        fetchData();
        return ()=> controller.abort();
    }, []);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}


function User5(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {

        const controller = new AbortController();
        const fetchData = async ()=> {
            try{
                setLoading(true);
                const res = await fetch(url, {
                    signal: controller.signal
                });

                if(!res.ok){
                    throw new Error("Failed to Fetch users!");
                }

                const data = res.json();
                setUsers(data);
            }catch(err){
                if(err.name !== "AbortError"){
                    setError(err);
                }
            }finally{
                if(!controller.signal.aborted){
                    setLoading(false);
                }
            }
        };

        fetchData();
        return ()=> controller.abort();
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}


