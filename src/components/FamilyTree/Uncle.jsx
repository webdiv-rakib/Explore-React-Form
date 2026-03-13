import React from 'react';
import Cousin from './Cousin';
import './FamilyTree.css'
const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Rafsan'></Cousin>
                <Cousin name='Raju'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;