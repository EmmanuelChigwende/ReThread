import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import toast from 'react-hot-toast'

const ProtectedRoutes = ({children}) => {
    const token = localStorage.getItem("token")
    if(!token){
        toast.error("how about you signin first okay")
        return <Navigate to='/'/>
    }
  return <Outlet/>
}

export default ProtectedRoutes
