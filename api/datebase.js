const sqlite3 = require('sqlite3').verbose();
{/*const db = new sqlite3.Database('./api/products.db');*/}

const db = new sqlite3.Database(path.join(__dirname, 'products.db'));

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, price REAL, image TEXT)", (err) => {
        if (err) {
            console.error(err.message);
        }
    });
}); 

module.exports = db;