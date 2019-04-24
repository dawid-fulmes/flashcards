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
            <button>Check</button>
        )
        const CorrectWrongButtons = (
            <>
                <button onClick={handleCorrectClick}>Wrong</button>
                <button onClick={handleCorrectClick}>Correct</button>
            </>
        )
        return (
            <div className="current-card">
                <div onClick={handleTurnClick}>
                    {deck[currentCardIndex].pol}
                    {isTurned ? deck[currentCardIndex].eng : null}
                    {isTurned ? CorrectWrongButtons : checkButton}
                </div>
            </div>
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