import React, { useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { customFetch, formatPrice, generateAmountOptions } from '../utils/index.jsx'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data }
}


const SingleProduct = () => {

  const { product } = useLoaderData()
  console.log(product.attributes);

  
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  }
  
  const { image, title, price, description, colors, company } =
  product.attributes;
  
  const formattedPrice = formatPrice(price)
  
  // states
  const [amount, setAmount] = useState(1)
  const [productColor, setProductColor] = useState(colors[0])


  return (
    <section>
      <div className="breadcrumbs text-md">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </div>

      {/* product info */}
      <div className="mt-6 grid lg:grid-cols-2 gap-y-8 lg:gap-x-16">
        {/* image */}
        <img src={image} alt={title} className='rounded-lg object-cover size-96 lg:w-full' />

        {/* info */}
        <div className='flex flex-col gap-2'>
          <h1 className="font-bold text-3xl capitalize">
            {title}
          </h1>

          <h4 className="font-bold text-xl capitalize">
            {company}
          </h4>

          <p className="text-xl mt-1">{formattedPrice}</p>

          <p className="mt-4 leading-8">{description}</p>

          {/* colors */}
          <div className="mt-4">
            <h4 className="capitalize font-medium text-md tracking-wider">colors</h4>
            <div className="mt-2 ">
              {colors.map((color) => {
                return (
                  <button type='button' key={color}
                    className={`badge size-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}>
                  </button>
                )
              })}
            </div>
          </div>

          {/* amount */}
          <div className="form-control mt-2 flex flex-col gap-2 w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize text-neutral-content">
                Amount
              </h4>
            </label>

            <select className="select select-secondary select-lg" value={amount} onChange={handleAmount}>
{generateAmountOptions(20)}            </select>
          </div>

          {/* bag button */}
          <div className="mt-10">
            <button className='btn btn-secondary btn-lg font-medium uppercase text-sm' onClick={() => console.log("added to the cart")}> Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default SingleProduct
