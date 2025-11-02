const Conditional = ()=> {
    const isLoggedIn = false;
    return (
        <div>
            {isLoggedIn ? <h1> Welcome back!</h1> : <h1>Please Sig In First!!!</h1>}
        </div>
    )
}

export default Conditional