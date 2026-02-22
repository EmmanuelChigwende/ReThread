import ListingModel from "../models/listingModel.js";
import HandleImages from "../services/imageHandling.js";
import image from "../middleware/multer.js";

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
  return res.json("still building endpoint");
}

async function DeleteListingByID(req, res) {
  try {
    const listingId = req.params.id;
    if (await ListingModel.findById(listingId)) {
      await ListingModel.deleteOne({ id: listingId });
      return res.status(200).json({ message: "listing successfully deleted" });
    } else {
      res.status(404).json({ message: `listing id ${listingId} not found` });
    }
  } catch (err) {
    console.log("failed to delete  listing", err);
  }
}

export { GetAllListings, CreateListing ,DeleteListingByID};
