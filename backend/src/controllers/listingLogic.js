import ListingModel from "../models/listingModel.js";
import HandleImages from "../services/imageHandling.js";
import DecodeToken from "../utils/jwtDecodeToken.js";

async function GetAllListings(req, res) {
  try {
    const AuthHead = req.headers.authorization
    if(AuthHead.lenght === 0){
      return res. status(401).json({message:"no auth header found"})
    }

    const decodedTkn =  DecodeToken(AuthHead)
    const OwnerID = decodedTkn.id.userID
    if(decodedTkn){
      const Listings = await ListingModel.find({owner:OwnerID})
      return res.status(200).json({message:"successfully fetched listings",data:Listings})
    }
    
  } catch (err) {
    console.log("failed to get listings", err);
  }
}

async function CreateListing(req, res) {
  try {
   const AuthHead = req.headers.authorization
   if(AuthHead.length === 0){
    return res.status(401).json({message:"no auth header found"})
   }

   const ownerId = DecodeToken(AuthHead)
   if(!ownerId){
    return res.status(401).json({message:"no user information found"})
   }

   const listingDetails = req.body
   if(listingDetails.length === 0){
    return res.status(401).json({message:"please fill in all fields"})
   }
   else{
    await ListingModel.create({...listingDetails,owner:ownerId.userID})
    return res.status(201).json({message:"successfully created listing"})
   }


  } catch (err) {
    console.log("failed to create listing", err);
  }
}

async function DeleteListingByID(req, res) {
  try {
    const listingId = req.params.id;
    if (await ListingModel.findById(listingId)) {
      await ListingModel.deleteOne({ _id: listingId });
      return res.status(200).json({ message: "listing successfully deleted" });
    } else {
      res.status(404).json({ message: `listing id ${listingId} not found` });
    }
  } catch (err) {
    console.log("failed to delete  listing", err);
  }
}

async function DeleteAllListings(req, res) {
  try {
    const Listings = await ListingModel.deleteMany();

    if (Listings.deletedCount === 0) {
      return res
        .status(200)
        .json({ message: "no action taken: There are no listings yet" });
    } else {
      return res
        .status(200)
        .json({ message: "successfully deleted all listings" });
    }
  } catch (err) {
    console.log("failed to delete listings", err);
  }
}

export { GetAllListings, CreateListing, DeleteListingByID, DeleteAllListings };
