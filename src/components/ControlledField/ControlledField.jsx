import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name);
        if (password.length < 6) {
            setError('6 characters or longer password needed.')
        }
        else {
            setError('')
        }

    }

    const handleNameOnChange = e => {
        setName(e.target.value);
    }

    const handleEmailOnChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
        // method-1
        // if (password.length < 6) {
        //     setError('Password must be 6 characters or longer');
        // }
        // else {
        //     setError('')
        // }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={handleNameOnChange} type="text" name="" id="" placeholder='Enter Your Name' />
                <br />
                <input onChange={handleEmailOnChange} defaultValue={email} type="email" name="name" id="" placeholder='Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required defaultValue={password} onChange={handlePasswordOnChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;