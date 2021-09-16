const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//TODO - Add routes here...


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
    pool.query(sqlText, [itemId])
}).then((result) => {
    console.log('DELETE items in /list');
    res.send(200)
}).catch((error) => {
    console.log(error);
    alert('Could not delete');
});


module.exports = router;
