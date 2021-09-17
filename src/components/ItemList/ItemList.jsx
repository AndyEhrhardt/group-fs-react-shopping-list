import './list.css';

function ItemList(props){

    return(
    <>

    <h2>Item List</h2>
    <h3>Items Left to Purchase</h3>
    <div class="list">
        {props.list.map(item =>( !item.completed && (<div class="container"><p>{item.name} </p> <p>{item.quantity} {item.unit}</p>
        <button key={item.id}>Purchase</button><button key={item.id}>Delete</button> </div>)))}
        {props.list.map(item =>( item.completed && (<div class="container"><p key={item.id}>{item.name} {item.quantity} {item.unit} </p> <p>Purchased</p> <button key={item.id}>Delete</button></div>)))}
    </div>
    </>
    )
}

export default ItemList;