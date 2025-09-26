import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, productId }) => {
    return (

        <Link to={`/product/${productId}`}>
            <div className="bg-white rounded-lg overflow-hidden w-80">

                <div className="relative aspect-square bg-gray-100">
                    <img
                        src={product.images[0]?.url}
                        alt={product.images[0]?.altText}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6">

                    <h3 className="text-md font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        {product.name}
                    </h3>

                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-gray-900">
                            ${product.discountPrice || product.price}
                        </span>
                        {product.discountPrice && (
                            <span className="text-lg text-gray-400 line-through">
                                ${product.price}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
