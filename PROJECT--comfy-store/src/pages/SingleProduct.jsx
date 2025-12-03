import React, { useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { customFetch, formatPrice } from '../utils'

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
      <div className="">
        {/* image */}
        <img src={image} alt={title} className='' />

        {/* info */}
        <div className="">
          <h1 className="">
            {title}
          </h1>

          <h4 className="">
            {company}
          </h4>

          <p className="">{formattedPrice}</p>

          <p className="">{description}</p>

          {/* colors */}
          <div className="">
            <h4 className="">colors</h4>
            <div className="">
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
          <div className="form-control">
            <label className="label">
              <h4 className="">
                Amount
              </h4>
            </label>

            <select className="select select-secondary" value={amount} onChange={handleAmount}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>

          {/* cart button */}
          <div className="">
            <button className='btn btn-secondary' onClick={() => console.log("added to the cart")}> Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default SingleProduct
