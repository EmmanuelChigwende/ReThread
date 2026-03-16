import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import LoadingAnimation from "../../../animations/Loading";
import Header from "../../../components/Header";
import NavigationFooter from "../../../components/NavigationFooter";
const CreateListing = () => {
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState({
    title: "",
    description: "",
    price: "",
    currency: "",
    category: "",
    size: "",
    condition: "",
    status: "",
  });

  function HandleListingDetails(e) {
    setListing({
      ...listing,
      [e.target.name]: e.target.value,
    });
  }

  function HandleListingUpload() {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/createNewListing", listing, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="h-[80vh]">
      <Header />
      <div className="h-[80vh]  w-full ">
        <h1 className="text-[1.2rem] font-bold pl-2 mb-[20px]">
          Create New Lisitng
        </h1>
        <div className="min-h-[300px] p-2 shadow-lg rounded-lg grid gap-2">
          <div className="grid grid-cols-1">
            <label htmlFor="">Title</label>
            <input
              required
              name="title"
              value={listing.title}
              onChange={HandleListingDetails}
              type="text"
              className=" pl-1 outline outline-2 outline-secondary"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="">Description</label>
            <input
              required
              name="description"
              value={listing.description}
              onChange={HandleListingDetails}
              type="text"
              className="pl-1 outline outline-2 outline-secondary"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="">Price</label>
            <input
              required
              name="price"
              value={listing.price}
              onChange={HandleListingDetails}
              type="number"
              className="pl-1 outline outline-2 outline-secondary"
            />
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="">Currency</label>
            <select
              name="currency"
              value={listing.currency}
              onChange={HandleListingDetails}
              id=""
              className=" w-[220px] bg-secondary p-1 rounded-md text-textDefault"
            >
              <option name="usd">Usd</option>
              <option name="zig">Zig</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="">Category</label>
            <select
              name="category"
              value={listing.category}
              onChange={HandleListingDetails}
              className="w-[220px] bg-secondary p-1 rounded-md text-textDefault"
            >
              <option value="tops">tops</option>
              <option value="bottoms">bottoms</option>
              <option value="one piece">one piece</option>
              <option value="outer wear">outer wear</option>
              <option value="foot wear">foot wear</option>
              <option value="accessories">accessories</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="flex gap-12 items-center">
            <label htmlFor="">Size</label>
            <select
              name="size"
              value={listing.size}
              onChange={HandleListingDetails}
              id=""
              className="w-[220px] bg-secondary text-textDefault rounded-md p-1"
            >
              <option name="S">S</option>
              <option name="M">M</option>
              <option name="L">L</option>
              <option name="XL">XL</option>
              <option name="XXL">XXL</option>
            </select>
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="">Condition</label>
            <select
              name="condition"
              value={listing.condition}
              onChange={HandleListingDetails}
              id=""
              className="w-[220px] bg-secondary text-textDefault rounded-md p-1"
            >
              <option name="new">new</option>
              <option name="good">good</option>
              <option name="okay">okay</option>
            </select>
          </div>
          {/* <div>
            <input required type="file" accept='.png,.jpg,.jpeg,.webp' />
          </div> */}

          <div>
            <button
              onClick={(e) => HandleListingUpload}
              className="font-bold bg-secondary w-full p-2 text-textDefault rounded-md"
            >
              {loading ? "Loading" : "Create"}
            </button>
          </div>
        </div>
      </div>
      <NavigationFooter />
    </div>
  );
};

export default CreateListing;
