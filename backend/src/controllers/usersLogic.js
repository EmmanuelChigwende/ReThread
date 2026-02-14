import UserModel from '../models/userModel.js'
import EncryptPassword from '../middleware/hashPassword.js'

async function CreateUser(req,res) {
    try{
        const userDetails = req.body
        const password = req.body.password
        const hashed =  await EncryptPassword(password)
        console.log(hashed)
        const AlreadyExists = await UserModel.findOne({name:UserModel.name})

        await UserModel.create({...userDetails,password:hashed})    

        return  res.status(200).json({message:"User created succesfully"})

    }
    catch(err){
        console.log("failed to create user",err)
    }
}


async function DeleteUserById(req,res) {
    try{
        const userId = req.params.id

        if(!userId){
            return res.status(400).json({message:"user id does not exist"})
        }
        await UserModel.deleteOne({_id:userId})

        return res.status(200).json({message:`user successfully deleted ID:${userId}`})
    }
    catch(err){
        console.log("failed to delete user",err)
    }
}


async function  DeleteAllUsers(req,res) {
    try{
        await UserModel.deleteMany()
        return res.status(200).json({message:"All Users have been deleted successfully"})
    }
    catch(err){
        console.log("failed to delete user",err)
    }
}


export {CreateUser,DeleteUserById,DeleteAllUsers}