
function resetAllItems ({itemList}) {
    // clear purchased status
    // might need to call the PUT request here doing something like this:
    for (item of itemList) {
        item.completed = !completed;
        }
    props.getList();
}

function clearAllItems(event) {
    // might have to call DELETE request here
    props.getList();
}


function changeListItems(props) {
    console.log('Resetting items ');
    return (
        <>
            <button onClick={/* entire list ??? */}>Reset</button>
            <button onClick={/* entire list ??? */}>Clear</button>
        </>
    )    
}

export default changeListItems