function ItemList(props){

    return(
  <>
    <h2>Item List</h2>
    <h3>Items Left to Purchase</h3>
    <ul>
        {props.list.map(item =>( !item.completed && (<li key={item.name}>{item.name} {item.quantity} {item.unit} 
        <button>Purchased</button><button>Delete</button>
        </li>)))}
    </ul>
    <h3>Purchased Items</h3>
    <ul>
        {props.list.map(item =>( item.completed && (<li key={item.name}>{item.name} {item.quantity} {item.unit} 
        <button>Delete</button>
        </li>)))}
    </ul>
    </>
    )

}

export default ItemList;