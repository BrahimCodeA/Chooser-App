import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()

productRouter.post('/add', adminAuth, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), addProduct);
productRouter.delete('/remove', adminAuth, removeProduct)
productRouter.get('/single', singleProduct)
productRouter.get('/list', listProducts)

export default productRouter