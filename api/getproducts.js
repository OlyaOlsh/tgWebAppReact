const express = require('express');
const cors = require('cors');

const db = require('./datebase.js');


const app = express();
app.use(cors());
app.use(express.json());



app.get('/api/getproducts', (req, res) => {
    db.all(`SELECT * FROM products`, [], (err, rows) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.json(rows);
    });
});



module.exports = (req, res) => {
    app(req, res);
};