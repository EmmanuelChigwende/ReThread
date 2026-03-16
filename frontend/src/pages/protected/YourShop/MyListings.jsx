import React, { use } from "react";
import ProductCard from "../../../components/ProductCard";
import axios from "axios";
import LoadingAnimation from "../../../animations/Loading";
import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import NavigationFooter from "../../../components/NavigationFooter";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyListings = () => {
  const [loading, setLoading] = useState(true);
  const [mylistings, setMyListings] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getAllMyListing", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMyListings(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  }, []);

  return (
    <div className="h-[80vh]">
      <Header />
      {loading ? (
        <div className="h-[80vh]">
          <LoadingAnimation />
        </div>
      ) : (
        <div className="h-[80vh] grid grid-2">
          {mylistings?.length === 0 ? (
            <div className="h-[80vh] flex items-center justify-center">
              <div>
                <h1 className="text-[1.5rem] ">
                No listings created
              </h1>
              <button onClick={()=>navigate("/YourShop/CreateListing")} className="text-center h-[40px] w-full bg-secondary text-textDefault rounded-[15px] shadow-lg">
                Create New Listing
              </button>
              </div>
            </div>
          ) : (
            mylistings?.map((listing) => (
              <ProductCard key={listing._id} listings={listing} />
            ))
          )}
        </div>
      )}
      <NavigationFooter />
    </div>
  );
};

export default MyListings;
