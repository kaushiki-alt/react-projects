import React from 'react'
import CocktailCard from './CocktailCard'

const CocktailList = ({ drinks }) => {
    if (!drinks) {
        return (
            <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
        );
    }
    return (
        
        <div className='cocktail-list'>
            {drinks.map((drink) => {
                return (
                    <CocktailCard key={drink.idDrink} drink={drink} />
                )

            })}
        </div>
    )
}

export default CocktailList
