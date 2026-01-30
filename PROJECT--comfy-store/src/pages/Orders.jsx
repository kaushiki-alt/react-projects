import React from 'react'
import { OrdersList, PaginationContainer } from '../components';
import SectionTitle from '../components/SectionTitle';
import { customFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';


export const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader = (store, queryClient) => async ({ request }) => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to view orders');
    return redirect('/login');
  }

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const response = await queryClient.ensureQueryData(
      ordersQuery(params, user)
    );
    return { orders: response.data.data, metaInfo: response.data.meta }
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'there was an error accessing your orders';

    toast.error(errorMessage);
    if (error?.response?.status === 401 || 403) return redirect('/login');

    return null;
  }
}


const Orders = () => {
  const { metaInfo } = useLoaderData();
  if (metaInfo.pagination.total < 1) {
    return <SectionTitle text='Please make an order' />
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <PaginationContainer />
    </>
  )
}

export default Orders
