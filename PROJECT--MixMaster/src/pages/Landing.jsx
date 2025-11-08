import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios';
import CocktailList from '../../components/CocktailList';
import SearchForm from '../../components/SearchForm';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm ? searchTerm : 'a'}`);
  return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  console.log(drinks);

  return (
    <div>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </div>
  )
}

export default Landing
