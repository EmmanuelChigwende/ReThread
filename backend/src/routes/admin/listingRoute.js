import express from "express";
import {
  GetAllListings,
  CreateListing,
} from "../../controllers/listingLogic.js";
import CheckToken from "../../middleware/jwtTokenCheck.js";

const listRoutes = express.Router();

listRoutes.get("/getAllListings",CheckToken, GetAllListings);
listRoutes.post("/createNewListing",CheckToken,CreateListing);

export default listRoutes;
