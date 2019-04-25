import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditDeck from './EditDeck/EditDeck';
import Learn from './Learn/Learn';
import Header from './Header'
import { switchEditMode, switchLearnMode } from '../actions/actions'
import '../style/App.scss'

class App extends Component {
  render() {
    const { appMode, switchEditMode, switchLearnMode } = this.props
    return (
      <div className="app">
        <Header switchEditMode={switchEditMode} switchLearnMode={switchLearnMode} appMode={appMode} />
        {appMode === "EDIT_MODE" ? <EditDeck /> : null}
        {appMode === "LEARN_MODE" ? <Learn /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appMode: state.appMode
})

const mapDispatchToProps = (dispatch) => ({
  switchEditMode: () => dispatch(switchEditMode()),
  switchLearnMode: () => dispatch(switchLearnMode())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
