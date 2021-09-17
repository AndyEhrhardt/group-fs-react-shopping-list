const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//TODO - Add routes here...


// GET list items from database
router.get('/', (req, res) => {
    console.log('Getting items from list');
    
    const queryText = 'SELECT * FROM "groceries" ORDER BY "name";';
    pool.query(queryText)
    .then((result) => {
        console.log('Got this back from the database', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        alert('error in GET');
        res.sendStatus(500);
    });
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


// PUT ('/:id')
// router.put('/:id', (req, res) => {
//     console.log('PUT request received');
    
// }).then((response) => {

// }).catch((error) => {
//     console.log(error);
//     alert();
// });


// DELETE ('/:id')
router.delete('/:id', (req, res) => {
    console.log('DELETE request received');
    const itemId = req.params.id;
    const sqlText = 'DELETE FROM groceries WHERE id = $1;';
    pool.query(sqlText, [itemId]).then((result) => {
        console.log('DELETE items in /list');
        res.send(200)
    }).catch((error) => {
        console.log(error);
        alert('Could not delete');
    });
});

// PUT ('/:id')
router.put('/:id', (req, res) => {
    let reqId = req.params.id;  // id parameter received from client request
    console.log('PUT request received');
    // Toggle boolean value for completed
    let queryText = `UPDATE "groceries" SET "completed" = NOT "completed" WHERE "id" = $1 RETURNING *;`;
    pool.query(queryText, [reqId]) // sending query to database via pool module, filtering client data through pg
    .then((result) => {
        console.log('Item complete status switched');
        res.sendStatus(200); // Send back success
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500); // or send back the error
    });
});


module.exports = router;