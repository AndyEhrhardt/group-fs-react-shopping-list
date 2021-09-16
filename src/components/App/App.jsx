import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import InputItemForm from '../InputItemForm/InputItemForm.jsx'
import ResetAndClearButton from '../ResetAndClearButton/ResetAndClearButton.jsx'
import ItemList from '../ItemList/ItemList.jsx'
import CompletedItemList from '../CompletedItemList/CompletedItemList.jsx'

//Any variables and functions needed by Greg can go here:



//Any variables and functions needed by Tou can go here:



//Any variables and functions needed by Anwar can go here:



//Any variables and functions needed by Andy can go here:



function App() {
    return (
        <div className="App">
            <Header />
            <InputItemForm />
            <ResetAndClearButton />
            <ItemList />
            <CompletedItemList />
        </div>
    );
}

export default App;
