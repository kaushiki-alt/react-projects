import { useState } from "react";
import menu_data from "./data";
import MenuList from "./MenuList";
import Categories from "./Categories";

const allCategories = ['all', ...new Set( menu_data.map((item)=> item.category))]

const App = () => {
  const [menu, setMenu] = useState(menu_data)
  const [categories, setCategories] = useState(allCategories)  
  
  const selectCategory = (category) => {
    console.log(`${category} cliccked`);
    const categoryItem = category === 'all'?  menu_data :
    menu_data.filter((item) =>item.category === category)
    setMenu(categoryItem)
  }
  
  
  return (
    <>
    <main>
    <div className="title">
    <h2>Our Menu</h2>
<div className="title-underline"></div>
    </div>

    <div className="btn-container">
      <Categories categories={categories} categoryItem = {selectCategory}/>
    </div>
    <div className="menu">
      <MenuList items = {menu}/>
      </div>
    </main>
    </>
  )
};
export default App;
