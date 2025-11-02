import { useState } from "react"

const StatusMessage = ()=> {
    const [ status, setStatus ] = useState('loading');

    const renderMessage = ()=> {
        switch(status){
            case 'loading': return <p>Loading...</p>;
            case 'success': return <p>Data loaded successfully!</p>;
            case 'error': return <p>Error loading data.</p>;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-600 m-2 p-2 rounded-2xl text-white justify-center place-items-center">
            {renderMessage()}
            <ul className="list-[circle] text-amber-200 pt-2 underline">
                <li>
                <button onClick={()=> setStatus('loading')}>Loading button</button>
                </li>
                <li>
                <button onClick={()=> setStatus('success')}>Success button</button>
                </li>
                <li>
                <button onClick={()=> setStatus('error')}>Error button</button>
                </li>
            </ul>
        </div>
    )
}

export default StatusMessage;