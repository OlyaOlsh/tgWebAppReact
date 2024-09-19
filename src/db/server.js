const express = require('express');
const cors = require('cors');
const db = require('../../api/datebase.js');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/add-product', (req, res) => {
    const { name, description, price, image } = req.body;
    db.run(`INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)`, [name, description, price, image], function(err) {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.status(201).json({ id: this.lastID });
    });
});

app.get('/get-product', (req, res) => {
    db.all(`SELECT * FROM products`, [], (err, rows) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.json(rows);
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});