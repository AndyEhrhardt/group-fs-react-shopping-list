function ItemList(props){

    return(
  <>
    <h2>Item List</h2>
    <ul>
        {props.list.map(item =>( item.completed (<li key={item.name}>{item.name} {item.quantity} {item.unit} </li>)))}
    </ul>
    </>
    )

}

export default ItemList;