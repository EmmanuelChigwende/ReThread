import React from "react";
import {
  HomeIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  UserIcon,
  MessageCircleIcon
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavigationFooter = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[10vh] flex gap-2 justify-between items-center p-2">
      <div onClick={()=>navigate("/Home")}  className="cursor-pointer flex flex-col items-center justify-center">
        <HomeIcon size={20} className="text-center" />
        <p className="text-[0.8rem]">Home</p>
      </div>
      <div onClick={()=>navigate("/Message")} className="flex flex-col items-center justify-center" >
        <MessageCircleIcon size={20}/>
        <p className="text-[0.8rem]">Message</p>
      </div>
      <div onClick={()=>navigate("/Shop")} className="cursor-pointer flex flex-col items-center justify-center">
        <ShoppingBagIcon size={20} />
        <p className="text-[0.8rem]" >Shop</p>
      </div>
      <div onClick={()=>navigate("/Cart")}  className="flex flex-col items-center justify-center">
        <ShoppingCartIcon />
        <p className="text-[0.8rem]">Cart</p>
      </div>
      <div onClick={()=>navigate("/Profile")} className="flex flex-col items-center justify-center">
        <UserIcon />
        <p className="text-[0.8rem]">Profile</p>
      </div>
    </div>
  );
};

export default NavigationFooter;
