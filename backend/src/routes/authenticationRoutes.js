import express from 'express'
import { LoginUser,SignupUser } from '../controllers/authentication.js'

const authRoute = express.Router()

authRoute.post('/Login',LoginUser)
authRoute.post('/signUp',SignupUser)

export default authRoute