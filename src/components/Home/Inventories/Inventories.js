import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    return (
        <div>
            <h1 className='inventory-tittle'>Inventory</h1>
            <div className="inventory-container">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>

        </div>
    );
};

export default Inventories;