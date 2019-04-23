import React from 'react';
import { connect } from 'react-redux'
import CardListItem from './CardsListItem';

const mapStateToProps = state => ({
    deck: state.deck
})

const CardsList = connect(
    mapStateToProps,
    null
)(({ deck }) => {
    return (
        <ul>
            {deck.map((card, index) => (
                <CardListItem key={index} {...card} />
            ))}
        </ul>
    );
})

export default CardsList;