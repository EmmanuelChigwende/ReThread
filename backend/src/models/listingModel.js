import mongoose from 'mongoose'

const ListingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number
    },

    currency:{
        type:String,
        enum:['usd','zig'],
        default:'usd'
    },

    category: {
        type:String,
        enum:['tops','bottoms','one piece','outer wear','foot wear','accessories','other'],
        default:'other'
    },

    size:{
        type:String,
        emun:['S','M','L','XL','XXL']
    },

    condition:{
        type:String,
        emun:['new','good','okay'],
        default:'good'
    },

    status:{
        type:String,
        enum:['for sale','sold'],
        default:"for sale"
    },

    images:{
        type:[String]
    },

    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'userSchema'
    } 
},{timestamps:true})


const ListingModel = mongoose.model('listingSchema',ListingSchema)

export default ListingModel