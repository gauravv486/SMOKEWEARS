import express from "express"
import Product from "../models/Product.js";
import { isAutherized } from "../middleware/auth.js"

const router = express.Router();

//create products 
router.post("/create", isAutherized, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            sku,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            rating,
            numReviews, } = req.body;

        const newProduct = await Product.create({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            sku,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            rating,
            numReviews
        })

        await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: newProduct
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error" + error.message
        })
    }
})

//all products 
router.get("/feed", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

//men products
router.get("/men", async (req, res) => {
    try {
        const products = await Product.find({
            gender: "Men"
        });
        res.status(200).json({
            success: true,
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

//women products 
router.get("/women", async (req, res) => {
    try {
        const products = await Product.find({
            gender: "Women"
        });
        res.status(200).json({
            success: true,
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})


//top wear 
router.get("/top-wear", async (req, res) => {
    try {
        const products = await Product.find({
            category: "Top Wear"
        });
        res.status(200).json({
            success: true,
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

//bottom wear
router.get("/bottom-wear", async (req, res) => {
    try {
        const products = await Product.find({
            category: "Bottom Wear"
        });
        res.status(200).json({
            success: true,
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

//search products
router.post("/search", async (req, res) => {
    try {
        const { searchText } = req.body;
        const products = await Product.find({
            name: {
                $regex: searchText.trim(),
                $options: 'i'
            }
        })
        res.status(200).json({
            success: true,
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

//productDetails 
router.get("/:productId", async (req, res) => {

    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        res.status(201).json({
            product : product
        });
    } catch (error) {
        res.json({
            succsess : false ,
            message : error.message
        })
    }
})

export default router;