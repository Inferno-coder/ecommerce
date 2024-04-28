const mongoose=require('mongoose')
const productSch=mongoose.Schema({
   name:String,
   price:String,
   description:String,
   ratings:String,
   images:[
    {
        image:String
    }
   ],
   category:String,
   seller:String,
   stock:String,
   numOfReviews:String,
   createdAt:Date 
})

const ProductMod=mongoose.model('product',productSch)
module.exports=ProductMod