import { useState } from "react"

const ProfileHook = ()=> {
    const [user, setUser] = useState({
        firstname: "tester",
        lastname: "testLast",
        email: "test@gmail.com",
    });

    const { first, last, eml } = user;

    return (
        <div className="m-3 border-2 border-pink-800 w-auto bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-xl">
            <h1 className="text-4xl font-extrabold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-mono justify-center text-center">User Profile Hook</h1>
            <hr className="m-3 ring-offset-sky-300" />
            <p className="text-brown-400 font-serif p-2">First name: {first}</p>
            <p className="text-brown-400 font-serif p-2">Last name: {last}</p>
            <p className="text-brown-400 font-serif p-2">Email: {eml}</p>
        </div>
    )
}

export default ProfileHook;

