
function ChangeAllItems({itemList, deleteItem, markCompleted}) {

    const clearList = () => {
        console.log('cliecked clear button');
        for(let item of itemList ) {
            deleteItem(item.id);
        }
    }

    const resetAllItems = () => {
        console.log('Resetting items ');
        for(let item of itemList ) {
            markCompleted(item.id);
        }
    }
        
    return (
        <>
        <div className="BigButtons">
            <button onClick={ () => resetAllItems(itemList) }>Reset</button>
            <button onClick={ () => clearList(itemList) }>Clear</button>
        </div>
        </>
    )    
}

export default ChangeAllItems;