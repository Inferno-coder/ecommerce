const express=require('express');
const { getAllProducts, getSingleProducts } = require('../controllers/productController');
const router=express.Router();

router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getSingleProducts);
module.exports=router   