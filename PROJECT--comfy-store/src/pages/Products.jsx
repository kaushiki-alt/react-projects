import React from 'react'
import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils';

const url = '/products/';

export const loader = async ({ request }) => {
  const searchParams = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]) 
  const response = await customFetch(url, {params: searchParams,})
  const products = response.data.data
  const metaInfo = response.data.meta  
  return { products, metaInfo, searchParams }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products
