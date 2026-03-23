import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import NavigationFooter from "../../../components/NavigationFooter";
import LoadingAnimation from "../../../animations/Loading";
import ProductCard from "../../../components/ProductCard";
import axios from "axios";
import toast from "react-hot-toast";

const DeleteListings = () => {
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getAllMyListing", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setListing(res.data.data);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(setLoading(false));
  }, []);

  function DeleteListing(ListingId) {
    try{
      axios.delete(`http://localhost:5000/api/deleteListingById/${ListingId}`,{headers:{
        Authorization : `Bearer ${localStorage.getItem("token")}`
      }})
      .then(
        (res)=>{
          toast.success("Listing Deleted Successfully")
          setListing(listing.filter((item)=>item._id !== ListingId))
        }
      )
      .catch((err)=>{
        console.log(err)
      })
    }
    catch(err){
      toast.error("Something Went Wrong")
      console.log(err)
    }
  }

  return (
    <div>
      <Header />
      <div className="h-[80vh]">
        {loading ? (
          <LoadingAnimation />
        ) : (
          <div>
            {listing?.length === 0 ? (
             <div className="h-[80vh] flex items-center justify-center">
              <div>
                <h1 className="text-[1.5rem] ">No listings created</h1>
                <button
                  onClick={() => navigate("/YourShop/CreateListing")}
                  className="text-center h-[40px] w-full bg-secondary text-textDefault rounded-[15px] shadow-lg"
                >
                  Create New Listing
                </button>
              </div>
            </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {listing?.map((listingItem) => (
                  <div key={listingItem._id}>
                    <ProductCard listings={listingItem} />
                    <button  onClick={()=>DeleteListing(listingItem._id)} className="w-full p-1 bg-red-600 text-textDefault font-bold rounded-lg mt-[10px] ">Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <NavigationFooter />
    </div>
  );
};

export default DeleteListings;
