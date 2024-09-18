import React from 'react';

import MagsShop_170_162  from "./../../imagesItem/MagsShop_170_162.png";


const addProduct = async () => {
    const response = await fetch('http://localhost:5000/add-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Товар 1',
            description: 'Описание товара 1',
            price: 100,
            image: 'test'
        }),
    });
    const data = await response.json();
    console.log(data);



  };

const Mydatabase = () => {
    return (
        <div>
       <main className="section">
        <div className="container">
                <h1 className="test connect">Contacts</h1>
                <h>
            <h1>Приложение с SQLite</h1>
             <button onClick={addProduct}>Добавить товар</button>
                </h>
                

        </div>
        </main>
        </div>
    );
};

export default Mydatabase;