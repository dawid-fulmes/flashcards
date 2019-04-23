import React from 'react';

const CardListItem = ({ eng, pol, handleClick }) => {
    return (
        <li>
            {eng} = {pol}
            <button onClick={handleClick}>X</button>
        </li>
    );
}

export default CardListItem;