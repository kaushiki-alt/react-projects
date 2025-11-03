import React, { useState } from 'react'

const Form = ({addColor}) => {
    const [color, setColor] = useState('');
    const handleSubmit =(e)=> {
        e.preventDefault();
        addColor(color);
    }
  return (
    <section className='container'>
        <form onSubmit={(e) => handleSubmit(e)} className='color-form'>
            <input type="color" name="color" id="color" value={color} onChange={(e)=> setColor(e.target.value)}/>
            <input type="text" name="color-text" id="color-text" value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#f15025'/>

            <button className='btn' type='submit'>Generate</button>
        </form>
    </section>
  )
}

export default Form
