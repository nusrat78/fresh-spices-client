import React from 'react';

const Inventory = ({ inventory }) => {
    const { name, img, description, price } = inventory;
    return (
        <div>
            <img src={img} alt=""></img>
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>
            <button>Update</button>
        </div>
    );
};

export default Inventory;