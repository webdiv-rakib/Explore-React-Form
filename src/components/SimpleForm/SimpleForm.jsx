import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />
                <br />
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;