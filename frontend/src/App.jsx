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
import Profile from "./pages/protected/Profile";

const App = () => {
  return (
    <div className="h-[100vh] w-[100vw] p-2 bg-background font-sans">
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
          <Route path="/Profile" element={<Profile/>}/>
        </Route>
    </Routes>
    </div>
  );
};

export default App;
