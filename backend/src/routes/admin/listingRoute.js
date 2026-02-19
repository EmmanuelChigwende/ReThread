import express from "express";
import {
  GetAllListings,
  CreateListing,
} from "../../controllers/listingLogic.js";

const listRoutes = express.Router();

listRoutes.get("/getAllListings", GetAllListings);
listRoutes.post("/createNewListing",CreateListing);

export default listRoutes;
