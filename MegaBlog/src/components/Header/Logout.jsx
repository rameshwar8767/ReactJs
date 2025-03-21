import React from 'react'
import{useDispatch} from 'react-redux'
import authService from '../../appwrite/conf'
import {logout} from '../../store/authSlice'
const Logout = () => {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default Logout
