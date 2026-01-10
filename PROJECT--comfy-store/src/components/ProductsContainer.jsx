import React, { useState } from 'react'
import ProductsList from './ProductsList'
import { useLoaderData } from 'react-router-dom';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import ProductsGrid from './ProductsGrid';

const ProductsContainer = () => {
    const [layout, setLayout] = useState('grid');
    const { metaInfo } = useLoaderData();
    const totalProducts = metaInfo.pagination.total;

    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content'}`
    }
    return (
        <div>
            {/* header */}
            <div className="flex border-b border-base-300 justify-between items-center mt-8 pb-5">
                <h4 className="font-medium text-md">{totalProducts} product{totalProducts > 1 && 's'} </h4>

                <div className="flex gap-2">
                    <button onClick={() => setLayout('grid')}
                        className={setActiveStyles('grid')}>
                        <BsFillGridFill />
                    </button>

                    <button onClick={() => setLayout('list')}
                        className={setActiveStyles('list')}>
                        <BsList />
                    </button>

                </div>
            </div>

            {/* products section */}
            <div>
                {totalProducts === 0 ? (
                    <h4 className="text-2xl mt-16">
                        Sorry, no products matched your search...
                    </h4>
                ) : (
                    layout === 'grid' ? <ProductsGrid /> : <ProductsList />)
                }
            </div>


        </div>
    )
}

export default ProductsContainer
