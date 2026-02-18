import express from 'express'
import { GetAllListings } from '../../controllers/listingLogic.js'

const listRoutes = express.Router()

listRoutes.get("/getAllListings",GetAllListings)


export default listRoutes