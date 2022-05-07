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
            <h2>{item.name}</h2>
        </div>
    );
};

export default InventoryDetails;