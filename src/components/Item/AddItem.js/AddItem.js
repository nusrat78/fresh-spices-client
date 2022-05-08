import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo URL'{...register("img")} />
                <br />
                <input className='mb-2' placeholder='Name'{...register("name")} />
                <br />
                <input className='mb-2' placeholder='Description'{...register("description")} />
                <br />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <br />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default AddItem;