import React from "react";
import Header from "../../components/Header";
import NavigationFooter from "../../components/NavigationFooter";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingAnimation from "../../animations/Loading";

import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);
    axios
      .get("http://localhost:5000/api/getAllListings", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setListings(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="h-[80vh] overflow-scroll p-2">
        {loading ? (
          <div className="h-[80vh]">
            <LoadingAnimation/>
          </div>
        ) : (
         <div className="grid grid-cols-2">
           {
            listings?.map((listing) => (
            <ProductCard key={listing._id} listings={listing} />
          ))
           }
         </div>
        )}
      </div>
      <NavigationFooter />
    </div>
  );
};

export default Home;
