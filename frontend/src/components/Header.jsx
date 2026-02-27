import React from 'react'
import RethreadLogo from "../assets/RethreadLogo.webp";
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className='flex justify-between p-2'>
        <img onClick={()=>navigate("/Home")} src={RethreadLogo} alt="rethreadlogo" className='h-[40px] cursor-pointer' />
      </div>
    </div>
 )
}

export default Header
