import React, { useState } from "react";
import data from './data'
import List from "./List";
import './index.css'



const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
    <div className="container">
    <header>
      <h3 className="count">
        {people.length} Birthdays today
      </h3>
    </header>
      <List people ={people}/>
      <button className="clear-list btn" onClick={() => setPeople([])}>
  Clear List
</button>

</div>
</main>
  )
};
export default App;
