import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard.jsx';

const Feed = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/product/feed`);
        const data = await response.json();
        if (!data.success) {
          throw new Error("Fetch Error");
        }
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

  }, [])

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading Products...</div>

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} productId={product._id} />
      ))}
    </div>

  )
}

export default Feed
