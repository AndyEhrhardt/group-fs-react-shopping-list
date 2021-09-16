const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//TODO - Add routes here...


router.get('/', (req, res) => {
    console.log('Getting items from list');
    
    const queryText = 'SELECT * FROM "tasks" ORDER BY "item";';



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





module.exports = router;