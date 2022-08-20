import React from 'react'

export default function Error() {
    const throwError=()=>{
        throw new Error("custom error throwen");
    }
  return (
    <div>
        <div>
            <button onClick={throwError}>throw Errow</button>
        </div>
    </div>
  )
}
