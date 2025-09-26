import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const MenSection = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchMenCollection = async () => {
      try {
        setLoading(true);
        const resposnse = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/product/men`);
        const data = await resposnse.json();
        setProducts(data.products);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

    }

    fetchMenCollection();

  }, [])

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading Collection...</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} productId={product._id} />
      ))}
    </div>
  )
}

export default MenSection
