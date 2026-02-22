import express from "express";
import {
  GetAllListings,
  CreateListing,
  DeleteListingByID,
  DeleteAllListings
} from "../../controllers/listingLogic.js";
import CheckToken from "../../middleware/jwtTokenCheck.js";

const listRoutes = express.Router();

listRoutes.get("/getAllListings", CheckToken, GetAllListings);
listRoutes.post("/createNewListing", CheckToken, CreateListing);
listRoutes.delete("/deleteListingById/:id", CheckToken, DeleteListingByID);
listRoutes.delete("/deleteAllListings",CheckToken,DeleteAllListings)

export default listRoutes;
