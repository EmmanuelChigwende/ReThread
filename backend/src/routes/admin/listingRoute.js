import express from "express";
import {
  GetAllListings,
  CreateListing,
  DeleteListingByID,
} from "../../controllers/listingLogic.js";
import CheckToken from "../../middleware/jwtTokenCheck.js";

const listRoutes = express.Router();

listRoutes.get("/getAllListings", CheckToken, GetAllListings);
listRoutes.post("/createNewListing", CheckToken, CreateListing);
listRoutes.delete("/deleteListingById:id", CheckToken, DeleteListingByID);

export default listRoutes;
