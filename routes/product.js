import express from 'express'
import { getTenProducts } from '../handlers/product.js';

const productRouter = express.Router();

productRouter.get('/', getTenProducts)

export default productRouter