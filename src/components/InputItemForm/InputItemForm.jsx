

function inputItemForm(props) {
    return(
        <>
            <h3>Add New Grocery Item</h3>
            <form onSubmit={props.handleSubmit}>
            <label>
                Grocery Item
            </label>
                <input
                    type="text"
                    placeholder="Item"
                    value={props.newItemName}
                    onChange={(evt) => props.setNewItemName(evt.target.value)}
                />
            <label>
                Quantity
            </label>
                <input
                    type="text"
                    placeholder="Quantity"
                    value={props.newItemQuantity}
                    onChange={(evt) => props.setNewItemQuantity(evt.target.value)}
                />
            <label>
                Unit
            </label>
                <input
                    type="text"
                    placeholder="Unit"
                    value={props.newUnitName}
                    onChange={(evt) => props.setnewUnitName(evt.target.value)}
                />
            
            <button type="submit">Add Item</button>
            </form>
        </>
    )
}