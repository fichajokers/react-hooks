import { useEffect } from "react"

const UserInfoComponent = () => {

    useEffect( () =>{
        console.log('Component mount')

        return () =>{
            console.log('component will unmount')
        }
    },[])

    return(
        <div>User info</div>
    )
}
export default UserInfoComponent