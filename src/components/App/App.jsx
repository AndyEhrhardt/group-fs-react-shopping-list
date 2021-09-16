import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import InputItemForm from '../InputItemForm/InputItemForm.jsx';
import ResetAndClearButton from '../ResetAndClearButton/ResetAndClearButton.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import CompletedItemList from '../CompletedItemList/CompletedItemList.jsx';


function App() {
    let [itemList, setItemList] = useState([]);

    //Any variables and functions needed by Greg can go here:
    
    
    
    //Any variables and functions needed by Tou can go here:
    useEffect(() => {
        getItemList()
    
    }, [])
    
    const getItemList = () => {
        axios.get('/list').then(response => {
            setItemList(response.data)
        }).catch((error) => {
            console.log('error in GET', error);
            alert('ERRPR can not add item')
        })
    }
    
    //Any variables and functions needed by Anwar can go here:
    
    
    //Any variables and functions needed by Andy can go here:
    let [newItemName, setNewItemName] = useState('');
    let [newItemQuantity, setNewItemQuantity] = useState('');
    let [newItemUnit, setNewItemUnit] = useState('');

    const addItem = () => {
        axios.post('/list', { name: newItemName, quantity: newItemQuantity, unit: newItemUnit })
        .then(response => {
            // clear inputs
            setNewItemName('');
            setNewItemQuantity('');
            setNewItemUnit('');
            getItemList();
        })
        .catch(err => {
            alert('Error Adding Item');
            console.log(err);
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItemName) {
            addItem();
        }
        else {
            alert('Must enter an item name and quantity.');
        }
    }
    

    

    //Only edit the component you're working on below if props are needed

    return (
        <div className="App">
            <Header />

            <InputItemForm 
                handleSubmit={handleSubmit}
                addItem={addItem}
                setNewItemName={setNewItemName}
                setNewItemQuantity={setNewItemQuantity}
                setNewItemUnit={setNewItemUnit}
            />

            {/*   <ResetAndClearButton /> */}


            <ItemList list={itemList} />


            {/*   <CompletedItemList /> */}

        </div>
    );
}

export default App;
