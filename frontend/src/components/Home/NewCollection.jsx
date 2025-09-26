import React from 'react'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

const NewCollection = () => {
    const products = [
        {
            id: 1,
            image: card1,
            name: "SHADOW DRIP",
            description: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
            price: "$89",
            originalPrice: "$120"
        },
        {
            id: 2,
            image: card3,
            name: "URBAN PHANTOM",
            description: "Urban Phantom - A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.",
            price: "$89",
            originalPrice: "$120"
        },
        {
            id: 3,
            image: card2,
            name: "NEON REBELLION",
            description: "A statement piece with vibrant neon details and rebellious street art influences for a standout look.",
            price: "$89",
            originalPrice: "$120"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 tracking-wide">NEW DROPS</h1>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Stand out with our latest collection—bold designs, premium fabrics, and street-ready fits. Once they're gone, they're gone. Don't miss out!
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="group">
                        {/* Product Image Container */}
                        <div className="relative mb-6 overflow-hidden rounded-2xl bg-gray-100">
                            {/* NEW Badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-black text-white px-3 py-1 text-sm font-medium rounded-full">
                                    NEW
                                </span>
                            </div>

                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-110 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold tracking-wide">
                                {product.name}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {product.description}
                            </p>

                            {/* Price Section */}
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-bold">
                                    {product.price}
                                </span>
                                <span className="text-gray-400 line-through">
                                    {product.originalPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewCollection
