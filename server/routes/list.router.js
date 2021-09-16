const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//TODO - Add routes here...


//GET list items from database
router.get('/', (req, res) => {
    console.log('Getting items from list');
    
    const queryText = 'SELECT * FROM "tasks" ORDER BY "item";';
}).then((response) => {
    console.log('');
    
}).catch((error) => {
    console.log(error);
    alert();
});


 //POST new item 
router.post('/', (req, res) => {
    console.log('Posting items to list', req.body);
    
}).then((response) => {

}).catch((error) => {
    console.log(error);
    alert();
});


//PUT ('/:id')
router.put('/:id', (req, res) => {
    console.log('PUT request received');
    
}).then((response) => {

}).catch((error) => {
    console.log(error);
    alert();
});


//DELETE ('/:id')
router.delete('/:id', (req, res) => {
    console.log('DELETE request received');
    
}).then((response) => {

}).catch((error) => {
    console.log(error);
    alert();
});



module.exports = router;