'use client' // Error boundaries must be client components

import { useEffect } from "react"

export default function Error({error, reset}){

    useEffect(()=> (
        // Log the error to an error reporting service
        console.error(error)
    ), [error])

    return (
        <div className="m-3 items-center">
            <button onClick={
                // Attempt to recover by trying to re-render the segment
                ()=> reset()
            }
            >
             Try Again   
            </button>
        </div>
    )
};