const url = 'https://www.course-api.com/react-tours-project';
import { useState, useEffect } from "react";
import Tours from "./Components/Tours";
import Loading from "./Components/Loading";

const App = () => {

  const [tours, setTours] = useState([]);
  const [isloading, setIsloading] = useState(true)

  const removeTour =(idTodelete) => {
    const newTours = tours.filter((note) => note.id !== idTodelete)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsloading(true)
    try {
      const response = await fetch(url)
      if (response.ok) {
        const result = await response.json()
        setTours(result)
      } else {
        console.log("error"), 402;
      }
    } catch (error) {
      console.error('Network error', error);
    }
    setIsloading(false)
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (isloading){
    return(
    <main>
    <Loading/>
    </main>
    )
  }

  if(tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>No Tours left</h2>
        <button className="btn" type="button" onClick={fetchTours} style={{margin:'2rem',}}>Refesh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours= {tours} removeTour={removeTour}/>
    </main>
  )
};
export default App;
