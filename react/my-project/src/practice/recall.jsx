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



import { tr } from "motion/react-client";
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


const [users5, posts1] = await Promise.all([
    fetch("/users").then(res => res.json()),
    fetch("/posts").then(res => res.json())
]);


const [users, posts] = Promise.all([
    fetch("/users").then(res => res.json()),
    fetch("/posts").then(res => res.json())
]);




const res1 = await fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
});

if (!res1.ok){
    throw new Error("Failed to save user");
}


const res3 = await fetch("/api/v1/users",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({name})
});

if (!res2.ok){
    throw new Error("Failed to save");
}

function Form(){
    const [name, setName] = useState("");

    const handleSubmit = async (e)=> {
        e.preventDefault(); // prevent page refresh

        await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json"}, // tells server, sending json
            body: JSON.stringify({name}) // shorthand for stringify({ name: name })
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} />{/* controlled input */}
            <button type="submit">Submit</button>
        </form>
    )
}


const [loading, setLoading] = useState(false);
try{
    setLoading(true);
    const res = await fetch(url);

    if(!res.ok){
        throw new Error("Request failed");
    }

    console.log("Success");
    setName("");
    
}catch(err){
    console.error(err);   
}finally{
    setLoading(false);
}

<button onClick={handleSubmit} disabled={loading}>
    {loading ? "Submitting" : "Submit"}
</button>



function Form2(){
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e)=> {
        e.preventDefault(); // prevents page refresh

        try{
            setLoading(true);
            setError(null);

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // tells server, sending json
                },
                body: JSON.stringify({ name }), // shorthand for stringify({name: name})
            })

            if(!res.ok){
                throw new Error("Failed to create user");
            }

            setName("");
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}



                                    /** MEMORIZE THE PATTERN */
function Form3(){
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e)=> {
        e.preventDefault(); // prevents page refresh

        const trimmedName = name.trim(); // input validation

        if(!trimmedName){
            setError(new Error("Name is required."));
            return;
        }

        try{
            setLoading(true);
            setError(null);
            setSuccess(false);

            const res = await fetch("/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // tells server, sending json
                },
                body: JSON.stringify({
                    name: trimmedName,
                }),
            });
            
            if(!res.ok){
                throw new Error("Failed to save user");
            }

            setSuccess(true);
            setName("");
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter your name"
                value={name} 
                onChange={(e) => {
                    setName(e.target.value);
                    if(error) setError(null); // clear error as soon as user edits the input
                }} 
            />

            <button 
                type="submit"
                disabled={loading}
            >
                {loading ? "Submitting..." : "Submit"}
            </button>

            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
            {success && <p style={{ color: "green" }}>User created successfully</p>}
        </form>
    )
}



