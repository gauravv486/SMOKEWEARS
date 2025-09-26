import React from 'react'

const StreetWear = () => {
    return (
        <div className="mb-30 bg-white">
            {/* Header */}
            <div className="text-center pt-12 pb-8">
                <h1 className="text-gray-600 text-lg">Streetwear with a Story</h1>
            </div>

            {/* Main Content */}
            <div className="flex max-w-7xl mx-auto px-8">
                {/* Left Side - Large Text */}
                <div className="w-1/2 pr-8">
                    <h2 className="text-7xl font-black text-black ">
                        WEAR THE
                        MOVEMENT,
                        BREAK THE
                        MOLD.
                    </h2>
                </div>

                {/* Right Side - Description and Button */}
                <div className="w-1/2 flex flex-col justify-center pl-8">
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        Born from the pulse of the streets, our brand is a tribute to the rebels,
                        the dreamers, and the rule-breakers who shape the culture. Inspired
                        by the raw energy of city life—graffiti-covered alleys, underground
                        music scenes, and late-night skate sessions—we craft streetwear
                        that speaks to individuality and self-expression.
                    </p>

                    <p className="text-gray-500 text-lg leading-relaxed mb-12">
                        Every stitch, every design, and every drop is a reflection of the
                        movement, blending bold graphics, oversized silhouettes, and urban
                        edge. More than just clothing, we're a statement—wear your story,
                        break the mold, and define your own path.
                    </p>

                    {/* Button */}
                    <div>
                        <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg hover:bg-gray-800 transition-colors">
                            Get it now
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StreetWear
