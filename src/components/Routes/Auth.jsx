import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const IsLoggedIn = ({children}) =>{
    const token = localStorage.getItem('token')
    return token ? children : <Navigate to='/login'/>
}

export const IsAuth = ({children}) =>{
    const token = localStorage.getItem('token')
    return token ? <Navigate to="/"/> : children
}

export const ProtectedAuth = ({children}) =>{
    const trigger = useSelector(state=> state.trigger)
    console.log(trigger)
    return trigger.isOpen ? children : <Navigate to="/dashboard"/>

}
