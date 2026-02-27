import express from "express";
import {
  GetAllListings,
  CreateListing,
  DeleteListingByID,
  DeleteAllListings,
  GetAllMyListings
} from "../../controllers/listingLogic.js";
import CheckToken from "../../middleware/jwtTokenCheck.js";

const listRoutes = express.Router();

listRoutes.get("/getAllListings", CheckToken, GetAllListings);
listRoutes.get("/getAllMyListing",CheckToken,GetAllMyListings)
listRoutes.post("/createNewListing", CheckToken, CreateListing);
listRoutes.delete("/deleteListingById/:id", CheckToken, DeleteListingByID);
listRoutes.delete("/deleteAllListings",CheckToken,DeleteAllListings)

export default listRoutes;
