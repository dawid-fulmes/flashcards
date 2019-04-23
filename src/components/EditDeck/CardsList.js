import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    deck: state.deck
})

const CardsList = connect(
    mapStateToProps,
    null
)(({ deck }) => {
    return (
        <ul>
            {deck.map(card => (
                <li>{card.eng} - {card.pol}</li>
            ))}
        </ul>
    );
})

export default CardsList;