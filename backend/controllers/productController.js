const productModel=require('../models/productModel')
exports.getAllProducts=async(req,res,next)=>{
  const products=await productModel.find();
  res.json({
    success:true,   
    products
  })
}

exports.getSingleProducts=async(req,res,next)=>{
    try {
        const product=await productModel.findById(req.params.id)    
        res.json({
          success:true,
          product
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            msg:'unable to get the product'
        })   
    }
  }