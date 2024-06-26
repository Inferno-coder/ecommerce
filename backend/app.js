const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')
const productRoutes=require('./routes/productRoute')
const orderRoutes=require('./routes/orderRoute')    
const dotenv=require('dotenv')
const mongoose=require('mongoose')
//LLSfAIPtjT5q9jfQ
dotenv.config({path:path.join(__dirname,'config','config.env')})    
app.use(express.json())
app.use(cors())
app.use('/api/v1',productRoutes)
app.use('/api/v1/',orderRoutes)
mongoose.connect(process.env.DB_URL)
.then(console.log('mongo database is connected'))
app.listen(process.env.PORT,()=>console.log('server started in the port '+ process.env.PORT))