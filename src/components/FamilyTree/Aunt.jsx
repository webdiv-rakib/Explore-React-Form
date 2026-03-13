import React from 'react';
import Cousin from './Cousin';
import './FamilyTree.css'

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin asset={asset} name='Tom Tom'></Cousin>
                <Cousin name='Jo Jooo'></Cousin>
            </section>
        </div>
    );
};

export default Aunt; <h3>Aunt</h3>