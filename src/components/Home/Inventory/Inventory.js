import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, price } = inventory;
    const navigate = useNavigate();
    const navigateDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <img src={img} alt=""></img>
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateDetail(_id)}>Update</button>
        </div>
    );
};

export default Inventory;