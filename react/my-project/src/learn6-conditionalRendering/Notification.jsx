import { useState } from "react";

const Notification = ()=> {
    const [ showNotification, setShowNotification ] = useState(true);

    return (
        <div className="bg-linear-to-b from-green-300  to-gray-200 m-5 p-3 rounded shadow-2xl hover:translate-y-2.5 transform-3d bg-emerald-700">
            { showNotification && <p>You have new messages!</p>}
            <button onClick={ ()=> setShowNotification(false)}>Dismiss</button>
        </div>
    )
}

export default Notification;