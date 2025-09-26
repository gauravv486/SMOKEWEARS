import React from 'react'

const AddtoCartButton = ({ productId }) => {

    async function handleCart() {

        try {
            const obj = {
                productId
            }

            const data = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/cart/addtocart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj),
                credentials: "include"
            })

            const res = await data.json();

            if (res.success) {
                alert("Added to cart Successfully");
                console.log("gaurav")
            }

        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <button onClick={handleCart} className="w-full bg-white border-2 border-gray-900 text-gray-900 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Add to cart
            </button>
        </div>
    )
}

export default AddtoCartButton
