import express from "express";
import {
  CreateUser,
  GetAllUsers,
  DeleteUserById,
  DeleteAllUsers,
} from "../../controllers/usersLogic.js";
import CheckToken from "../../middleware/jwtTokenCheck.js";

const useRoutes = express.Router();

useRoutes.get("/getAllUsers",CheckToken,GetAllUsers);
useRoutes.put("/createUser", CheckToken, CreateUser);
useRoutes.delete("/deleteUserById/:id", CheckToken, DeleteUserById);
useRoutes.delete("/deleteAllUsers", CheckToken, DeleteAllUsers);

export default useRoutes;
