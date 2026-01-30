import React from 'react'
import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils';

const url = '/products/';

const productsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: ['Products', search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams, })
  }
}

export const loader = (queryClient) => async ({ request }) => {
  const searchParams = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
  const response = await queryClient.ensureQueryData(productsQuery(searchParams))
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
