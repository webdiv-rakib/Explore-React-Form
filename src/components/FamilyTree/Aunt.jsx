import React from 'react';
import Cousin from './Cousin';
import './FamilyTree.css'

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='TomTom'></Cousin>
                <Cousin name='JoJooo'></Cousin>
            </section>
        </div>
    );
};

export default Aunt; <h3>Aunt</h3>