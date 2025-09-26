import React from 'react'

const DeleteCartItem = ({ productId }) => {

    async function handleDelete() {
        try {
            const obj = {
                productId
            }
            console.log(productId);
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/cart/removefromcart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj),
                credentials: "include"
            })

            const data = await response.json();

            if (data.success) {
                alert("Item Deleted Successfully");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteCartItem
