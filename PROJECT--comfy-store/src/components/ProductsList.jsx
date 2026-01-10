import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';
const ProductsList = () => {
    const { products } = useLoaderData();

    return (
        <div className='grid gap-4 pt-12'>
            {console.log(products)}

            {products.map((product) => {
                const { image, title, company, price } = product.attributes;

                const dollarsAmount = formatPrice(price)

                return (
                    <Link key={product.id} to={`/products/${product.id}`} className='card card-side bg-base-100 w-full shadow-xl hover:shadow-2xl transition duration-300 p-10 group'>

                        <img
                            src={image}
                            alt={title}
                            className="rounded-lg object-cover size-24 sm:size-32 group-hover:scale-105 transition duration-300" />
                        <div className="card-body py-0 px-20">
                            <h2 className="card-title capitalize tracking-wide text-xl">{title}</h2>
                            <h4 className='card-title text-neutral-content text-md'>{company}</h4>
                        </div>


                        <p className='font-medium ml-0 sm:ml-auto text-lg'>
                            {dollarsAmount}
                        </p>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductsList
