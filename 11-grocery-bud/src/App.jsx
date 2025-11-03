import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const defaultList = JSON.parse(localStorage.getItem("list") || '[]')
  const [items, setItems] = useState(defaultList);

  const newItem = (itemName) => {
    const newitem = {
      id : nanoid(), 
      name: itemName,
      isCompleted : false
    }
    const newItems = [...items, newitem];
    setItems(newItems);
    localStorage.setItem("list", JSON.stringify(newItems));
    toast.success("Item Added");
  }

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id != id)
    setItems(newList);
    localStorage.setItem("list", JSON.stringify(newList));
    toast.success("Item Deleted");
  }


  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = {...item, isCompleted: !item.isCompleted}
        return newItem;
      }
      return item
    })
    setItems(newItems);
    localStorage.setItem("list", JSON.stringify(newItems));
  }
  return (
  <main className="section-center">
    <ToastContainer position="top-center"/>
    <Form addNew = {newItem}/>
    <Items items = {items} deleteItem = {deleteItem} editItem = {editItem}/>
  </main>
  )
};

export default App;
