const data=require('./data/products.json')
const productModel=require('./models/productModel')
const mongoose=require('mongoose')
const path=require('path')
const dotenv=require('dotenv')
dotenv.config({path:path.join(__dirname,'config','config.env')}) 
const seeder=async ()=>{
    mongoose.connect(process.env.DB_URL)
.then(console.log('mongo database is connected'))
  await productModel.deleteMany()
  await productModel.insertMany(data)
  console.log('all products deleted and inserted successfully');
}
seeder()