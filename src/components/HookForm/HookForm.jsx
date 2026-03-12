import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit', name, email);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameOnChange} defaultValue={name} type="text" name="" id="" />
                <br />
                <input onChange={emailOnChange} defaultValue={email} type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;