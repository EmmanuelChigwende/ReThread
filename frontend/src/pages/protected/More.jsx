import React, { useState } from "react";
import Header from "../../components/Header";
import NavigationFooter from "../../components/NavigationFooter";
import LoadingAnimation from "../../animations/Loading";
import {
  ChevronRight,
  User,
  KeyRound,
  Package,
  Settings,
  LogOut,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const More = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full">
      <Header />
      <div className="h-[80vh] overflow-scroll">
        <div className="grid gap-2  pl-2 pt-[20px]">
          <div>
            <div className="flex justify-between p-1">
              <h1 className="flex gap-2">
                <User />
                Account Settings
              </h1>
              <ChevronRight />
            </div>
            <div className="grid gap-1 pl-12">
              <div>
                <h2>Profile</h2>
              </div>
              <div>
                <h2>Edit Profile</h2>
              </div>
              <div>
                <h2>Change Password</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between p-1">
              <h1 className="flex gap-2">
                <Package />
                Your Shop
              </h1>
              <ChevronRight />
            </div>
            <div className="grid gap-1 pl-12">
              <div onClick={()=>navigate('/YourShop/MyListings')} >
                <h2>My Listings</h2>
              </div>
              <div onClick={()=>navigate("/YourShop/CreateListing")}>
                <h2>Create listings</h2>
              </div>
              <div>
                <h2>Delete listings</h2>
              </div>
              <div>
                <h2>Update Listings</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-1">
            <h1 className="flex gap-2">
              <Settings />
              Settings
            </h1>
            <ChevronRight />
          </div>
          <div>
            <div className="flex justify-between p-1">
              <h1 className="flex gap-2">
                <Info />
                Information
              </h1>
              <ChevronRight />
            </div>
            <div className="grid gap-1 pl-12">
              <div>
                <h2>About Rethread</h2>
              </div>
              <div>
                <h2>Terms and Conditions</h2>
              </div>
              <div>Rethread Developers</div>
            </div>
          </div>
          <div className="flex justify-between p-1 mt-[20px]">
            <h1 className="flex gap-2">
              <LogOut />
              Logout
            </h1>
            <ChevronRight />
          </div>
        </div>
      </div>
      <NavigationFooter />
    </div>
  );
};

export default More;
