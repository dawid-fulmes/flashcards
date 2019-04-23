import React from 'react';
import CardsList from './CardsList';
import AddCardForm from './AddCardForm';

const EditDeck = () => {
    return (
        <div>
            <AddCardForm />
            <CardsList />
        </div>
    );
}

export default EditDeck;