import SingleItem from './SingleItem'

const Items = ({items, deleteItem, editItem}) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem item = {item} key={item.id} deleteItem = {deleteItem} editItem = {editItem}/>
     })}
    </div>
  )
}

export default Items
