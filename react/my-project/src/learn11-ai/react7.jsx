import { useContext, useEffect, useMemo, useState } from "react";

// 1. create context
const UserContext = React.createContext();

// 2. provide value
function App() {
    const [user, setUser] = useState("Dev");

    return (
        <UserContext.Provider value={user}>
            <Profile />
        </UserContext.Provider>
    );
}
// Everything inside Provider can access user

// 3. consume context
function Profile(){
    const user = React.useContext(UserContext);
    return <h1>{user}</h1>;
}

// ---------------------------------------------------

const UserContext1 = React.createContext();

function App(){
    const [user, setUser] = useState("Dev");

    return (
        <UserContext1.Provider value={user}>
            <Profile />
        </UserContext1.Provider>
    )
}

function Profile(){
    const user = React.useContext(UserContext);

    return <h1>{user}</h1>;
}



// ----------------------------------------------------------------

// 1. create context
const ThemeContext = React.createContext();

// 2. provider
function App(){
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

// 3. consume in deep child
function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme === "light" ? "white" : "black" }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme
    </button>
  );
}
// -----------------------------------------------------

{/* <Provider value={{user, setUser}}></Provider> */}

// const value = useMemo(()=> ({user, setUser}), [user]);
// <Provider value={value}>



const ref = useRef(initialValue);
ref.current



// ------------------------------------------
// correct way to access DOM in React
function InputFocus(){
    const inputRef = useRef(null);

    const focusInput = ()=> {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus</button>
        </>
    );
}

// track previous value
function Counter(){
    const [count, setCount] = useState(0);
    const prevCount = useRef();

    useEffect(()=> {
        prevCount.current = current;
    });

    return (
        <>
            <p>Now: {count}</p>
            <p>Before: {prevCount.current}</p>
            <button onClick={()=> setCount(count+1)}>+</button>
        </>
    );
}


// Avoiding stale closures
const latestValue = useRef(value);

useEffect(()=> {
    latestValue.current = value;
}, [value]);



