import{ useState } from 'react';
import {toast} from 'react-toastify'
const Form = ({addNew}) => {
    const [newItem, setNewItem] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem) {
            addNew(newItem);
            setNewItem('');
        }
        else{
            toast.error("Please provide the value")
        }
    }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <h4>Grocery Bud</h4>
        <div className='form-control'>
        <input type="text" value = {newItem} className="form-input" onChange={(e)=> setNewItem(e.target.value)}/>
        <button type='submit' className='btn'>Add item</button>
        </div>
    </form>
  )
}

export default Form
