import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

async function connectMongoose(){
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test14')
    console.log("Succcesfully!");
  } catch (error) {
    console.log("can't connect to db")
  }
}
app.get('/', (req, res) => {
});

import routerProduct from "./routers/product.router.js"

app.use('/product', routerProduct)
app.listen(port, () => {
  connectMongoose();
  console.log(`Example app listening on port ${port}`)
})