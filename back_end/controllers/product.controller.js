import Product from '../models/Product.model.js'
export async function getById(req, res){
    const id = req.params.id
    try {
       const data = await Product.findById(id)
       res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
    
}

export async function getAll(req, res){
    try {
       const data = await Product.find({})
       res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
    
}
export async function CreatePRD(req, res){
    const body = req.body
    try {
       const data = await Product.create({...body})
       res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
    
}
export async function deleteProduct(req, res){
    const id = req.params.id
    try {
       const data = await Product.findByIdAndDelete(id)
       res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
    
}