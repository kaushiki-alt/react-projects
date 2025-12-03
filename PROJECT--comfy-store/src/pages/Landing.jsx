import React from 'react'
import Hero from '../components/Hero'
import { customFetch } from '../utils';
import FeaturedProdcuts from '../components/FeaturedProdcuts';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url)
  console.log(response);
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
