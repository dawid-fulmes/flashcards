import React, { Component } from 'react';
import { connect } from 'react-redux'
import { nextCard } from '../../actions/actions';

class CurrentCard extends Component {
    state = {
        isTurned: false
    }
    handleTurnClick = () => {
        this.setState({ isTurned: true });
    }
    handleCorrectClick = () => {
        this.props.nextCard(this.props.deck.length)
        this.setState({ isTurned: false });
    }
    render() {
        const { isTurned } = this.state
        const { deck, currentCardIndex } = this.props
        const { handleTurnClick, handleCorrectClick } = this
        const checkButton = (
            <button onClick={handleTurnClick}>Check</button>
        )
        const CorrectWrongButtons = (
            <>
                <button onClick={handleCorrectClick} className="wrong">Wrong</button>
                <button onClick={handleCorrectClick} className="correct">Correct</button>
            </>
        )
        return (
            <>
                <div onClick={handleTurnClick} className="current-card">
                    <p>{deck[currentCardIndex].pol}</p>
                    <p>{isTurned ? deck[currentCardIndex].eng : null}</p>
                </div>
                <div className="buttons">
                    {isTurned ? CorrectWrongButtons : checkButton}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    currentCardIndex: state.currentCardIndex,
    deck: state.deck
})
const mapDispatchToProps = (dispatch) => ({
    nextCard: max => dispatch(nextCard(max))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentCard);