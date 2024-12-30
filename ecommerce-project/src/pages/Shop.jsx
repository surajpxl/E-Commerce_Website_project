import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const Shop = () => {  
  const products = useSelector((state) => state.product);

  // Shuffling the products before rendering
  const shuffledProducts = shuffleArray(products.products);

  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
        {shuffledProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
