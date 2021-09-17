
// function resetAllItems ({itemList}) {
     // clear purchased status
     // might need to call the PUT request here doing something like this:
//     for (item of itemList) {
//         item.completed = !completed;
//         }
//     props.getList();
// }

function changeListItems(props) {

    const handleClearList = (everythingInAList) => {
        console.log('CreatureItem.jsx user clicked delete: ', creatureId);
        // Call a method on props... pass this down from App.jsx
        deleteList(everythingInAList);
    }

    const handleResetAllItems (allItems)
    
    // console.log('Resetting items ');
    
    return (
        <>
        <li>
            {itemList}
            <button onClick={() => handleClearList(itemList)}>Clear</button>
            {/* <button onClick=>Reset</button> */}
        </li>
        </>
    )    
}

export default changeListItems;

// function CreatureItem({creature, deleteCreature}) {

//     const handleDelete = (creatureId) => {
//         console.log('CreatureItem.jsx user clicked delete: ', creatureId);
         // Call a method on props... pass this down from App.jsx
//         deleteCreature(creatureId);
//     }

//     return (
//         <li>
//             {creature.name} is from {creature.origin}
//             <button onClick={() => handleDelete(creature.id)}>Delete Creature</button>
//         </li>
//     )
// }

// export default CreatureItem;