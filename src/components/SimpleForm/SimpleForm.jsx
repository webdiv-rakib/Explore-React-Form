import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Enter Your Email' />
                <br />
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;