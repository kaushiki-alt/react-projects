import { useState } from "react";
import lorem_data from "./data";
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([]);


  const handleSubmit = (e) => {    
    e.preventDefault();    
    const text_value = lorem_data.slice(0,count);
    console.log(text_value);
    setText(text_value);
  }

  return (
  <main className="section-center">
    <h4>tired of lorem ipsum?</h4>
    <form onSubmit={handleSubmit} className="lorem-form">
      <label htmlFor="number">Paragraphs: </label>
      <input type="number" name="number" id="number" min={1} max={8} value={count} onChange={(e)=> setCount(e.target.value)} />
      <button type="submit" className="btn">Generate</button>
          </form>

          <div className="lorem-text">
            {text.map((i) => {
              return <p key={nanoid()}>{i}</p>
            })}
          </div>
  </main>
  )
};
export default App;
