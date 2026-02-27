import React from 'react'
import RethreadLogo from "../assets/RethreadLogo.webp";
import { useNavigate } from 'react-router-dom';
import {SearchIcon} from 'lucide-react'


const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='h-[10vh]'>
      <div className='flex justify-between items-center p-2'>
        <img onClick={()=>navigate("/Home")} src={RethreadLogo} alt="rethreadlogo" className='h-[40px] cursor-pointer' />
        <SearchIcon size={35} className='font-bold' />
      </div>
    </div>
 )
}

export default Header
