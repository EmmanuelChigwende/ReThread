import React from "react";
import { Routes, Route } from "react-router-dom";

// all routes
import Signup from "../src/pages/Signup";
import Signin from "./pages/Signin";

// protected routes
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./pages/protected/Home";
import Messages from "./pages/protected/Messages";
import Shop from './pages/protected/Shop'
import Cart from "./pages/protected/Cart";
import More from "./pages/protected/More";

// listing routes
import MyListings from "./pages/protected/YourShop/MyListings";
import CreateListing from './pages/protected/YourShop/CreateListing'
import DeleteListings from './pages/protected/YourShop/DeleteListings'
import UpdateListings from './pages/protected/YourShop/UpdateListings'

const App = () => {
  return (
    <div className="h-screen w-full p-2 bg-background font-sans overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Signup />} replace />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes/>}>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Message" element={<Messages/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/More" element={<More/>}/>

          {/* Protected  lisitng Routes */}
          <Route path="/YourShop/CreateListing" element={<CreateListing/>}/>
          <Route path="/YourShop/UpdateListings" element={<UpdateListings/>} />
          <Route path="/YourShop/Mylistings" element={<MyListings/>} />
          <Route path="/YourShop/DeleteListings" element={<DeleteListings/>} />
        </Route>
    </Routes>
    </div>
  );
};

export default App;
