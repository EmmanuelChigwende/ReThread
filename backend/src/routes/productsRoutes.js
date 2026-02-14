import express from 'express'
import { GetProduct,GetProductById } from '../controllers/productslogic.js'

const prodRoutes = express.Router()

prodRoutes.get('/AllProducts',GetProduct)
prodRoutes.get('product',GetProductById)

export default prodRoutes