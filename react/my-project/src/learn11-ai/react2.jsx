// import { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch("https://api.example.com/users");

//         if (!res.ok) {
//           throw new Error("Failed to fetch");
//         }

//         const data = await res.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }



import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchUsers = async ()=> {
            try{
                setLoading(true);
                const res = await fetch("https://api.example.com/users");

                if(!res.ok){
                    throw new Error("Failed to fetch");
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
    },[]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
