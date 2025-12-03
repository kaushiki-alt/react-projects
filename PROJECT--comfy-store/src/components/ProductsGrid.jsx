import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils';

const ProductsGrid = () => {
    const { products } = useLoaderData();
    console.log(products);


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12'>
            {products.map((product) => {
                const { title, price, image } = product.attributes;
                const formattedPrice = formatPrice(price)
                return (
                    <Link key={product.id} to={`/products/${product.id}`} className='card bg-base-100 w-full shadow-xl hover:shadow-2xl transition duration-300'>
                        <figure className="px-4 pt-4">
                            <img
                                src={image}
                                alt={title}
                                className="rounded-xl object-cover w-full h-64 md:h-48" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title capitalize tracking-wider">{title}</h2>
                            <span className='text-secondary'>{formattedPrice}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductsGrid
