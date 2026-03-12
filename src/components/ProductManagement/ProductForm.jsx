import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('');
    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity);

        // validation
        if (name.length === 0) {
            setError('Please Provide a Product Name');
            return;
        }
        else if (price.length === 0) {
            setError('Please Provide a Price');
            return;
        }
        else if (price < 0) {
            setError('Price can not be Negative')
            return;
        }
        else if (quantity < 0) {
            setError('Quantity can not be empty');
            return;
        }
        else {
            setError('');
        }


        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        handleAddProduct(newProduct);

    }
    return (
        <div>
            <h3>Add A Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" id="" placeholder='Product Name' />
                <br />
                <input type="text" name="price" id="" placeholder='Product Price' />
                <br />
                <input type="text" name="quantity" id="" placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>{error}</p>
        </div>
    );
};

export default ProductForm;