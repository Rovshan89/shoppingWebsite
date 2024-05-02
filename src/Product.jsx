
import React, { useState } from 'react';

function Product({ name, imageUrl }) {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        const newItem = `${count} ${name}`;
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <div className="item">
            <img src={imageUrl} alt={name} />
            <div className='button'>
                <div id='left-buttons'>
                    <button onClick={handleIncrement}>+</button>
                    <h3>{count}</h3>
                    <button onClick={handleDecrement}>-</button>
                </div>
                <button onClick={handleAdd}>add</button>
            </div>
        </div>
    );
}

export default Product;
