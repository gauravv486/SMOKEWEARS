import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { addItem } from '../../utils/cartSlice';
import AddtoCartButton from '../Cart/AddtoCartButton';

const ProductDetail = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/product/` + productId);
                const data = await response.json();
                setProduct(data.product);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [productId])



    function handleCart() {
        dispatch(addItem(product));
    }


    if (error) return <div>{error}</div>;
    if (loading) return <div>Loading...</div>

    return (
        <div className="max-w-6xl mx-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="space-y-4">
                    <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                        <img
                            src={product?.images?.[0]?.url}
                            alt={product?.name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {product?.images?.length > 1 && (
                        <div className="flex gap-2">
                            {product.images.slice(0, 4).map((img, index) => (
                                <div key={index} className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    {/* Title and Rating */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-yellow-400">
                                {'★'.repeat(Math.floor(product.rating || 0))}
                                {'☆'.repeat(5 - Math.floor(product.rating || 0))}
                            </div>
                            <span className="text-sm text-gray-600">({product.numReviews})</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-gray-900">${product.discountPrice || product.price}</span>
                        {product.discountPrice && (
                            <span className="text-lg text-gray-500 line-through">${product.price}</span>
                        )}
                    </div>


                    {/* Sizes */}
                    {product?.sizes && (
                        <div>
                            <h3 className="font-medium mb-3 text-gray-900">Select Size</h3>
                            <div className="flex gap-2">
                                {product.sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-2 border border-gray-300 rounded-md hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity */}
                    <div>
                        <h3 className="font-medium mb-3 text-gray-900">Quantity</h3>
                        <div className="flex items-center border border-gray-300 rounded-md w-fit">
                            <button className="px-4 py-2 hover:bg-gray-100">−</button>
                            <span className="px-4 py-2 border-x border-gray-300">01</span>
                            <button className="px-4 py-2 hover:bg-gray-100">+</button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4">
                        {/* <button onClick={handleCart} className="w-full bg-white border-2 border-gray-900 text-gray-900 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                            Add to cart
                        </button> */}
                        <AddtoCartButton productId={productId} />
                        <button className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                            Buy it now
                        </button>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="pt-6 border-t border-gray-200">
                <h2 className='font-bold'>Description</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Additional Info */}
            <div className="space-y-2 text-sm text-gray-600 flex gap-10 mt-6">
                <p><span className="font-medium">Brand:</span> {product.brand}</p>
                <p><span className="font-medium">Material:</span> {product.material}</p>
                <p><span className="font-medium">SKU:</span> {product.sku}</p>
                <p><span className="font-medium">Stock:</span> {product.countInStock} items available</p>
            </div>
        </div>
    )

}

export default ProductDetail
