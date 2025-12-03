import React from 'react'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeaturedProdcuts = () => {
  return (
    <div>
        <div className="pt-25"  >
      <SectionTitle text="Featured Products"/>
        </div>
        
      <ProductsGrid/>
    </div>
  )
}

export default FeaturedProdcuts
