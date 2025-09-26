import express from "express"
import { isAutherized } from "../middleware/auth.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const router = express.Router();

//addToCart
router.post("/addtocart", isAutherized, async (req, res) => {

    try {
        const quantity = 1;

        const { productId } = req.body;
        const userId = req.user[0]._id;

        const product = await Product.findById(productId);

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = await Cart.create({
                userId,
                items: []
            })
        }

        const existingItemIndex = await cart.items.findIndex(item => item.productId.toString() == productId);

        if (existingItemIndex >= 0) {
            cart.items[existingItemIndex].quantity += quantity;
        } else {
            cart.items.push({
                productId,
                quantity,
                price: product.price
            })
        }

        cart.totalAmount = cart.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0)

        await cart.save();

        await cart.populate('items.productId', 'name image');

        res.status(200).json({
            success: true,
            items: cart.items,
            totalAmount: cart.totalAmount,
            totalQuantity: cart.items.reduce((total, item) => total + item.quantity, 0)
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

router.post("/removefromcart", isAutherized, async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user[0]._id;

        const cart = await Cart.findOne({ userId });


        cart.items = cart.items.filter(
            (item) => item.productId.toString() !== productId
        );

        await cart.save();

        res.status(200).json({
            success: true,
            items: cart.items,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

router.get("/cartitems", isAutherized, async (req, res) => {
    try {
        const userId = req.user[0]._id;
        const cartItems = await Cart.findOne({
            userId
        })
            .populate("items.productId", "name price images");

        console.log(cartItems);

        if (!cartItems) {
            return res.status(404).json({
                success: false,
                message: "Your Cart is empty"
            });
        }

        return res.json({
            success: true,
            items: cartItems.items
        });

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }
});



export default router