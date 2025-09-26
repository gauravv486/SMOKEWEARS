import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Common/ProductCard';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteCartItem from './DeleteCartItem';

const CartPage = () => {

  const [cartItems, setCartItems] = useState([]);

  // const cartItems = useSelector((store) => store.cart.items);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/cart/cartitems`, {
          headers: { "Content-Type": "application/json" },
          credentials: "include"
        });

        const data = await response.json();

        setCartItems(data.items);

      } catch (error) {
        console.log(error.message);
      }
    }
    fetchCartItems();
  }, [])

  console.log(cartItems)


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {cartItems?.map((product) => (
        <div>
          {product.productId.name}
          <img src={product.productId.images[0].url} alt="" />
          {product.productId.price}

          <div><span>Total Price{product.price * product.quantity}</span></div>
          <DeleteCartItem productId={product.productId._id} />
        </div>
      ))}
    </div>
  )
}

export default CartPage
