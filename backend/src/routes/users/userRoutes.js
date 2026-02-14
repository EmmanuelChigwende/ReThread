import express from 'express'
import { CreateUser, DeleteUserById,DeleteAllUsers } from '../../controllers/usersLogic.js'
import CheckToken from '../../middleware/jwtTokenCheck.js'

const useRoutes = express.Router()

useRoutes.put('/createUser',CheckToken,CreateUser)
useRoutes.delete('/deleteUserById',CheckToken,DeleteUserById)
useRoutes.delete('/deleteAllUsers',CheckToken,DeleteAllUsers)

export default useRoutes

