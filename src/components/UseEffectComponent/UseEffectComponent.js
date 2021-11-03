import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent"

const UseEffectComponent = () => {
    const [showHideUserInfo,setShowHideUserInfo] = useState(false)
    const [flagShowHide,setFlagShowHide] = useState(false)
    
    useEffect( () => {
        setShowHideUserInfo(!showHideUserInfo)
    },[flagShowHide])

    return (
        <div>
            <h1>Show/hide user info</h1>
            <button onClick={() => setFlagShowHide(!flagShowHide) } >Toggle show hide component</button>
            { showHideUserInfo && <UserInfoComponent />}
            
        </div>
    )
}

export default UseEffectComponent