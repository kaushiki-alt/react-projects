import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['drink', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data;
    }
  }
}


export const loader = (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    return {id}
  }


const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) {
    <h2>Data not found....</h2>
  }
  console.log(data);
  
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIng = Object.keys(singleDrink).filter((key) => key.startsWith('strIngredient') && singleDrink[key] !== null).map((key) => singleDrink[key]);

  console.log(validIng);



  return (
    <div className='cocktail-details'>
      <header>
        <Link to='/' className='btn'>Back Home </Link>
        <h3 className='name'>{name}</h3>
      </header>

      <div className="drink">
        <img src={image} alt={name} className='img' />

        <div className="drink-info">
          <p>
            <span className='drink-data'>name :</span> {name}
          </p>
          <p>
            <span className='drink-data'>category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          <p>
            <span className='drink-data'>Ingredients :</span> {validIng.map((item, index) => {
              return (
                <span className='ing' key={item}>{item} {index < validIng.length - 1 ? ',' : ''}</span>
              )
            })}
          </p>
          <p>
            <span className='drink-data'>instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cocktail
