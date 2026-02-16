import { useEffect, useState } from "react";

// useEffect(() => {
//   const controller = new AbortController();

//   const fetchData = async () => {
//     try {
//       const res = await fetch(url, {
//         signal: controller.signal
//       });
//       const data = await res.json();
//       setData(data);
//     } catch (err) {
//       if (err.name !== "AbortError") {
//         setError(err);
//       }
//     }
//   };

//   fetchData();

//   return () => controller.abort();
// }, []);


const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=> {
    const controller = new AbortController();

    const fetchData = async ()=> {
        setLoading(true);
        try{
            const res = await fetch(URL, {
                signal: controller.signal
            });
            
            if(!res.ok){
                throw new Error("Failed to fetch");
            }
            
            const data = await res.json();
            setData(data);
        }catch(err){
            if(err.name !== "AbortError"){
                setError(err);
            }
        }finally{
            setLoading(false);
        }
    };

    fetchData();

    return ()=> controller.abort();
}, []);

