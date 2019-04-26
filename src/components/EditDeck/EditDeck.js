import React from 'react';
import CardsList from './CardsList';
import AddCardForm from './AddCardForm';
import '../../style/EditDeck.scss'

const EditDeck = () => {
    return (
        <div className="edit-deck">
            <AddCardForm />
            <CardsList />
        </div>
    );
}

export default EditDeck;