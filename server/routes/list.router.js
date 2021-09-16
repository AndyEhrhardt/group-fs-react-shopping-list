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


router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO groceries (name, quantity, unit)
                     VALUES ($1, $2, $3)`;
    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added item to the database`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})


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