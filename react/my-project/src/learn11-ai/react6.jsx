import { useCallback, useEffect, useMemo, useState } from "react";


function Users({ users }){
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <>
            <input onChange={e => setSearch(e.target.value)} />
            <button onClick={()=> setCount(count+1)}>+</button>

            {
                filteredUsers.map(u => (
                    <div key={u.id}>{u.name}</div>
                ))
            }
        </>
    );
}


const filteredUsers = useMemo(()=> {
    return users.filter(user =>
        user.name.toLowercase().includes(search.toLocaleLowerCase())
    );
}, [users, search]);



const analytics = useMemo(()=> {
    return processHugeDataset(data);
}, [data]);



const user = {id: 1, role: "admin"};
<Child user={user} />


const user1 = useMemo(()=> ({id: 1, role: "admin"}), []);



const Child = React.memo(function Child({ onSave }){
    console.log("Child rendered");
    return <button onClick={onSave}>Save</button>
});


function Parent(){
    const [count, setCount] = useState(0);

    const handleSave = ()=> {
        console.log("Saved");
    };

    return (
        <>
            <button onClick={()=> setCount(count+1)}>+</button>
            <Child onSave={handleSave} />
        </>
    );
}


const handleSave = useCallback(()=> {
    console.log("Saved");
}, []);


items.map(item => (
    <Item key={item.id} onClick={()=> handleClick(item.id)} />
));

const handleClick = useCallback((id) => {
    console.log(id);
}, []);

<Item key={item.id} onClick={()=> handleClick(item.id)} />
// Even better if memoized


useEffect(()=> {
    fetchData();
}, [fetchData]);

// fetchData is declared inside component
const fetchData = ()=> {{/* ... */}}; 

const fetchData1 = useCallback(()=> {
    // ...
}, []);



