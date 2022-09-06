import {NavLink} from 'react-router-dom'
import './navigator.css'


export default Navigator = () =>{
    return(
        <div>
            <NavLink className={({isActive}) => isActive ? "active" : ""} to='/'>Home</NavLink>
            <NavLink to='/login' >Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
        )
};