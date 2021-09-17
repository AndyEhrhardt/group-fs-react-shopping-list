
function ChangeAllItems({itemList, deleteItem, markCompleted}) {

    const clearList = () => {
        console.log('cliecked clear button');
        for( item of itemlist ) {
            deleteItem(item);
        }
    }

    const resetAllItems = () => {
        console.log('Resetting items ');
        for( item of itemList ) {
            markCompleted(item);
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