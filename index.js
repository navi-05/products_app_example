import express from 'express'
import cors from 'cors'
import productRouter from './routes/product.js';

const app = express();
app.use(cors())

// ROUTES
// 1. PRODUCT ROUTE
app.use('/products', productRouter)

app.listen(3000, () => {
  console.log("SERVER STARTED")
})