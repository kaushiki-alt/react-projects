import { useState } from "react";
import Form from "./Form";
import Values from 'values.js';
import ColorList from "./ColorList";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [color, setColor] = useState(new Values('#f15025').all(10));
  

  const addColor = (selected_color) => {
    try {
          const colors =new Values(selected_color).all(10);
    setColor(colors);
    toast.success('Color palatte successfully fetched...');

    } catch (error) {
      toast.error(error.message)
    }
  }

  return <main>
    <Form addColor = {addColor}/>
    <ColorList colors = {color}/>
    <ToastContainer position='top-center' />
      </main>
};
export default App;
