import React from "react";
import {
  HomeIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  UserIcon,
} from "lucide-react";

const NavigationFooter = () => {
  return (
    <div className="h-[10vh] flex gap-2 justify-between items-center p-2">
      <div className="flex flex-col items-center justify-center">
        <HomeIcon size={20} className="text-center" />
        <p className="text-[1rem]">Home</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ShoppingBagIcon size={20} />
        <p className="text-[1rem]" >Shop</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ShoppingCartIcon />
        <p className="text-[1rem]">Cart</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <UserIcon />
        <p className="text-[1rem]">Profile</p>
      </div>
    </div>
  );
};

export default NavigationFooter;
