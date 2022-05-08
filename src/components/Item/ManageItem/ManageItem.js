import React from 'react';
import useInventory from '../../hooks/useInventory';

const ManageItem = () => {
    const [inventories, setinventories] = useInventory();
    const handleDelete = id => {
        const proceed = window.confirm('are you sure');
        if (proceed) {
            const url = `http://localhost:3000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = inventories.filter(inventories._id !== id);
                    setinventories(remaining);
                })
        }
    }

    return (
        <div>
            <h2>Manage your item</h2>
            {
                inventories.map(inventories => <div key={inventories._id}> <img src={inventories.img} alt=""></img>
                    <h2>{inventories.name}</h2>
                    <p>Price:${inventories.price}</p>
                    <p>Quantity:{inventories.quantity}</p>
                    <p>{inventories.supplier}</p>
                    <p><small>{inventories.description}</small></p>
                    <button onClick={() => handleDelete(inventories._id)}>delete</button>
                </div>)}
        </div>
    );
};

export default ManageItem;