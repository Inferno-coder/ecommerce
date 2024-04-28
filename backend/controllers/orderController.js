const orderModel=require('../models/orderModel')
exports.createOrder=async(req,res,next)=>{
const cartItems=req.body
const amount=cartItems.reduce((acc,item)=>(acc+item.product.price*item.count),0)
const status='pending'
const order=await orderModel.create({cartItems,amount,status})
console.log(amount);
res.json({
    success:true,
    order
})
}