import React from 'react';

const CardListItem = ({ eng, pol, handleClick }) => {
    return (
        <li>
            <p>{eng} : {pol}</p>
            <button onClick={handleClick}><i class="fas fa-trash"></i></button>
        </li>
    );
}

export default CardListItem;