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
        const { currentCard } = this.props
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
                    {currentCard.pol}
                    {isTurned ? currentCard.eng : null}
                    {isTurned ? CorrectWrongButtons : checkButton}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentCard: state.deck[0]
})

export default connect(
    mapStateToProps,
    null
)(CurrentCard);