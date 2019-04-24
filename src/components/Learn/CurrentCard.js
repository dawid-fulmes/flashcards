import React, { Component } from 'react';
import { connect } from 'react-redux'

class CurrentCard extends Component {
    state = {
        isTurned: false
    }
    handleTurnClick = () => {
        this.setState({ isTurned: true });
    }
    render() {
        const { isTurned } = this.state
        const { deck, currentCardIndex } = this.props
        const { handleTurnClick, } = this
        const checkButton = (
            <button>Check</button>
        )
        const CorrectWrongButtons = (
            <>
                <button>Wrong</button>
                <button>Correct</button>
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

export default connect(
    mapStateToProps,
    null
)(CurrentCard);