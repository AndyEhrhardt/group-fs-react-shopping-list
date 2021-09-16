function ItemList(props){

    return(
  <>
    <h2>Item List</h2>
    <ul>
        {props.itemsList.map(item =>
          (<li key={item.name}>{item.quantity} {item.unit} {item.completed}</li>)  
            
            )}
    </ul>
    </>
    )

}

export default ItemList;