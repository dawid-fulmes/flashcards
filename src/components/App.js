import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditDeck from './EditDeck/EditDeck';
import Learn from './Learn/Learn';
import Header from './Header'

class App extends Component {
  render() {
    const { appMode } = this.props
    return (
      <div className="App">
        <Header />
        {appMode === "EDIT_MODE" ? <EditDeck /> : null}
        {appMode === "LEARN_MODE" ? <Learn /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appMode: state.appMode
})

export default connect(
  mapStateToProps,
  null
)(App);
