import ListingModel from "../models/listingModel.js";
import HandleImages from "../services/imageHandling.js";
import image from "../middleware/multer.js";
import e from "express";

async function GetAllListings(req, res) {
  try {
    const listings = await ListingModel.find();
    if (listings.lenght === 0) {
      return res
        .status(200)
        .json({ message: "there are no listings as of yet", data: listings });
    } else {
      return res
        .status(200)
        .json({ message: "successfully fetched listing data", data: listings });
    }
  } catch (err) {
    console.log("failed to get listings", err);
  }
}

async function CreateListing(req, res) {
  try {
    const newListing = req.body;

    if (!newListing) {
      res.status("no listing data found");
    } else {
      const imageBuffer = image(newListing.images);
      if (imageBuffer.lenght === 0) {
        return res.status(404).json({ message: "please provide images" });
      } else {
        const imageUrl = HandleImages(imageBuffer);
        if (!imageUrl) {
          return res
            .status(400)
            .json({ message: "failed to upload image to supabase" });
        } else {
          if(await ListingModel.create({
            ...newListing,
            owner: newListing.owner,
            images: imageUrl,
          })){
            return res.status(200).json({message:"successfully created listing"})
          }
          else{
            return res.status(400).json({message:"failed to create listing"})
          }
        }
      }
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
