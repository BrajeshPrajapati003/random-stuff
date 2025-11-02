const UserProfile = ({firstname = "tester", lastname = "surname", email = "test@gmail.com", age="20"})=> {
    return (
        <div className="m-2 p-2 border-lime-600 border-2">
            <h1 className="text-red-400 text-center font-serif">User Profile</h1>
            <p className="p-1 text-emerald-400">First Name: {firstname}</p>
            <p className="p-1 text-emerald-400">Last Name: {lastname}</p>
            <p className="p-1 text-emerald-400">Email: {email}</p>
            <p className="p-1 text-emerald-400">Age: {age}</p>
        </div>
    )
    
}

export default UserProfile;