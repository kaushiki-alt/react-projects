import React from 'react'
import Hero from '../components/Hero'
import { customFetch } from '../utils/index.jsx';
import FeaturedProdcuts from '../components/FeaturedProdcuts';

const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};


export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
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
