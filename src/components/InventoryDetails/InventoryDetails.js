import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    return (
        <div>
            <img src={item.img} alt="" />
            <h2>Name:{item.name}</h2>
            <p>Price:${item.price}</p>
            <p>Quantity:{item.quantity}</p>
            <p>Supplier Name:{item.supplier}</p>
            <p><small>Description:{item.description}</small></p>
        </div>
    );
};

export default InventoryDetails;