import React from "react";
import Header from "../../components/Header";
import NavigationFooter from "../../components/NavigationFooter";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingAnimation from "../../animations/Loading";

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
      <div className="h-[80vh] grid grid-cols-2 gap-2 overflow-scroll">
        {loading ? (
          <LoadingAnimation />
        ) : (
          listings?.map((listing) => (
            <>
              <div key={listing._id} className="mb-[10px shadow-md rounded-[10px]">
                <div className="pl-1">
                  <p>
                    owner account
                  </p>
                </div>
                <div className="grid">
                  {/* image placeholder */}
                  <div className="h-[100px] rounded-[15px] bg-primary"></div>
                  <div className="p-2 text-[1rem]">
                    <h1>{listing.title}</h1>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
      <NavigationFooter />
    </div>
  );
};

export default Home;
