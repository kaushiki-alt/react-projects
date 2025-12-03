import axios from 'axios';

const productsUrl = 'https://strapi-store-server.onrender.com/api';
export const customFetch = axios.create({
    baseURL: productsUrl,
})

export const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price/100).toFixed(2));

  return formattedPrice;
}
