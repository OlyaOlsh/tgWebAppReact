import React, { useState, useEffect} from 'react';




const Mydatabase = () => {

const [products, setProducts] = useState([]);
const [error, setError] = useState(null); 

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


 const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:5000/get-products');
        if (!response.ok) {
            throw new Error('Ошибка при загрузке продуктов');
        }
        const data = await response.json();
        setProducts(data);
    } catch (err) {
        setError(err.message);
    }
};

useEffect(() => {
    fetchProducts();
}, []); 


    return (

        <div>
            <main className="section">
                <div className="container">
                    <h1 className="test connect">Contacts</h1>
                    <h1>Приложение с SQLite</h1>
                    <button onClick={addProduct}>Добавить товар</button>
                    <button onClick={fetchProducts}>Показать</button>
                    {error && <p>{error}</p>}
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>{product.description}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Mydatabase;