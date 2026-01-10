import React from 'react'
import Hero from '../components/Hero'
import { customFetch } from '../utils/index.jsx';
import FeaturedProdcuts from '../components/FeaturedProdcuts';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data
  return {products}
};

const Landing = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProdcuts/>
    </div>
  )
}

export default Landing
