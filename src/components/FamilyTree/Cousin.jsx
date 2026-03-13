import React, { use } from 'react';
import Special from './Special';
import Friend from './Friend';
import { MoneyContext } from './FamilyTree';

const Cousin = ({ name, asset }) => {
    // const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Tom Tom' && <Special asset={asset}></Special>
            }
            {
                name === "Jo Jooo" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;