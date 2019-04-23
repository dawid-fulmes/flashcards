import React from 'react';
import { connect } from 'react-redux'
import CardListItem from './CardsListItem';
import { removeCard } from '../../actions/actions'

const mapStateToProps = state => ({
    deck: state.deck
})
const mapDispatchToProps = dispatch => ({
    removeCard: (id) => dispatch(removeCard(id))
})

const CardsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ deck, removeCard }) => {
    return (
        <ul>
            {deck.map((card, index) => (
                <CardListItem key={index} {...card} handleClick={() => removeCard(index)} />
            ))}
        </ul>
    );
})

export default CardsList;