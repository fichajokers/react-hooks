import React, { useState } from "react"

const UseStateComponent = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => setCount(count - 1)}>Remove count</button>
                <button onClick={() => setCount(count + 1)} >Add count</button>                
            </div>
        </div>
    ) 
}

export default UseStateComponent