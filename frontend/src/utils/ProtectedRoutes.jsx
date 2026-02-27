import React from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    if(token){
        navigate()
    }
    else{
        navigate("/")
        toast.error("How about we log in first okay")
    }
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoutes
