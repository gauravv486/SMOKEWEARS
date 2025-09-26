import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const SearchFeed = () => {

    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchSearchProduct = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/product/search`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ searchText: q })
                })
                const data = await response.json();
                if (data.success) {
                    setProducts(data.products)
                } else {
                    setError("Product Not Found")
                }
            } catch (error) {
                setError(error.message);
            }
        }
        fetchSearchProduct();

    }, [q])

    if (error) {
        return <div>
            {error}
        </div>
    }

    return (
        <div>
            {
                products.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} productId={product._id} />
                    ))}
                </div> : <div className="h-100">Product Not found</div>
            }
        </div>

    );
};

export default SearchFeed;
