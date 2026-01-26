import React from 'react'
import { Form, Link,  useLoaderData, useSearchParams } from 'react-router-dom'
import FormInput from './formInput'
import SelectInput from './SelectInput'
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { metaInfo, searchParams } = useLoaderData();
   const { product, company, categories, shipping, order, price } = searchParams;

  const maxPrice = 100000;
  const step = 1000;
  return (
    <Form
      className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>

      {/* input fields */}
      <FormInput
        label="search product"
        name="product"
        type="search"
        defaultValue={product}
        size="input-sm" />

      <SelectInput
        name="categories"
        label="select category"
        list={metaInfo.categories}
        defaultValue={categories}
        size='select-sm' />

      <SelectInput
        name="company"
        label="select company"
        list={metaInfo.companies}
        defaultValue={company}
        size='select-sm' />

      <SelectInput
        name="order"
        label="sort by"
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        size='select-sm' />

      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        defaultValue={price}
        min={0} max={maxPrice} step={step} />

      <FormCheckbox
        name="shipping"
        label="free shipping"
        defaultValue={shipping}
        size="checkbox-sm" />

      {/* buttons */}
      <button
        type='submit'
        className='btn btn-primary uppercase'>
        search
      </button>
      <Link to="/products" className='btn btn-accent uppercase'>Reset</Link>
    </Form>
  )
}

export default Filters
