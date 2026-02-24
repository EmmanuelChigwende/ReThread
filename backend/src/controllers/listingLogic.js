import ListingModel from "../models/listingModel.js";
import HandleImages from "../services/imageHandling.js";
import DecodeToken from "../utils/jwtDecodeToken.js";

async function GetAllListings(req, res) {
  try {
    const auhtHeader = req.headers.authorization;
    const decoded = DecodeToken(auhtHeader)

    const listings = await ListingModel.find({owner:decoded.id});
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
    const ListingData = req.body;

    if (!ListingData.images) {
      return res
        .status(400)
        .json({ message: "please insert one or more images of the listing" });
    } else {
      const imagesUrl = await HandleImages(ListingData.images);

      await ListingModel.create({ ...ListingData, images: imagesUrl });
      return res.status(201).json({ message: "listing created successfully" });
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
