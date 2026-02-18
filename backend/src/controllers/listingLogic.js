import ListingModel from "../models/listingModel.js"


async function GetAllListings(req,res){
    try{
        const listings = await ListingModel.find()
        return res.status(200).json({message:"listings successfully fetched",data:listings})
    }
    catch(err){
        console.log("failed to get listings",err)
    }
}

async function CreateListing(req,res){
    try{
        const newListing =  req.body
        const listingOwner = req.body.id
        const listingImages = req.body.images

        if(!newListing){
            return res.status(400).json({message:"no listing was provided"})
        }
        await ListingModel({...newListing,owner:listingOwner})

        return res.status(200).json({message:"listing created successfully"})
    }
    catch(err){
        console.log("failed to create listing",err)
    }
}

export {GetAllListings}