function ItemList(){

    return(
  <>
    <h2>Item List</h2>
    <ul>
        {itemsList.map(item =>
          (<li key={item.name}>{item.quantity} {item.unit} {item.completed}</li>)  
            
            )}
    </ul>
    </>
    )

}

export default ItemList;