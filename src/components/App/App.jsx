import { useState, useEffect } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import InputItemForm from '../InputItemForm/InputItemForm.jsx';
import ResetAndClearButton from '../ResetAndClearButton/ResetAndClearButton.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import CompletedItemList from '../CompletedItemList/CompletedItemList.jsx';


function App() {
    let [itemList, setList] = useState([]);

    //Any variables and functions needed by Greg can go here:
    
    
    
    //Any variables and functions needed by Tou can go here:
    useEffect(() => {
        getList()
    
    }, [])
    
    const getList = () => {
        axios.get('/list').then(response => {
            setList(response.data)
        }).catch((error) => {
            console.log('error in GET', error);
        })
    }
    
    //Any variables and functions needed by Anwar can go here:
    
    
    
    //Any variables and functions needed by Andy can go here:
    
    
    
    
    //Only edit the component you're working on below if props are needed

    return (
        <div className="App">
            <Header />

            {/*   <InputItemForm />  */}

            {/*   <ResetAndClearButton /> */}

            {/*   <ItemList /> */}

            {/*   <CompletedItemList /> */}

        </div>
    );
}

export default App;
