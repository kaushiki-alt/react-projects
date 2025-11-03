
const SingleItem = ({item, deleteItem, editItem}) => {
  const {id, isCompleted, name} = item;
  return (
    <div className='single-item'>
        <input type="checkbox" name="completed" id="completed" onChange={() => editItem(id)} checked= {isCompleted}/>
      <p className="name"  style={{textDecorationLine: isCompleted? `line-through`:''}}>{name}</p>
      <button className='btn remove-btn' onClick={()=> deleteItem(id)}> Delete</button>
    </div>
  )
}

export default SingleItem
