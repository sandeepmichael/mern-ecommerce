const router = require('express').Router()
const Product = require('../models/ProductModel')


router.get('/products' , async (req, res) => {
    try {
        const product = await Product.find({})
        res.json(product)
        
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
})

router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(product){
            res.json(product)
        } else {
           
         res.status(404).json({message:'product not found'})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
})



router.post('/addproduct', async(req, res) => {
    try {
        const {product} = req.body

        const newproduct = new Product({
            name:product.name,
            price:product.price,
            description:product.description,
            category:product.category,
            image:product.image,
            countInStock:product.countInStock,
            brand:product.brand,
        })
        await newproduct.save()
        res.send('product added successfully')
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error})
    }
})


router.post('/getproductbyid', async(req, res) => {
    try {
        const {productid} = req.body
        const product = await Product.findOne({_id:productid})
        res.json(product)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error})
    }
})


router.post('/editproduct', async(req, res) => {
    try {
        const {updatedproduct} = req.body
        const product = await Product.findOne({_id:updatedproduct._id})

        product.name=updatedproduct.name,
        product.price=updatedproduct.price,
        product.image=updatedproduct.image,
        product.brand=updatedproduct.brand,
        product.description=updatedproduct.description,
        product.countInStock=updatedproduct.countInStock
        product.category=updatedproduct.category

        await product.save()
        res.send('product updated successfully')

        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error})
    }
})

router.post('/deleteproduct', async(req, res) => {
    const {productid} = req.body

    try {
        await Product.findOneAndDelete({_id:productid})
        res.json('product deleted..')
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router