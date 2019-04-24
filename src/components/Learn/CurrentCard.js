import React, { Component } from 'react';
import { connect } from 'react-redux'

class CurrentCard extends Component {
    state = {
        isTurned: false
    }
    handleClick = () => {
        this.setState({ isTurned: true });
    }
    render() {
        const { isTurned } = this.state
        const { currentCard } = this.props
        const { handleClick } = this
        return (
            <div className="current-card">
                <div onClick={handleClick}>
                    {currentCard.pol}
                    {isTurned ? currentCard.eng : null}
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