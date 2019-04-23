import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCard } from '../../actions/actions'

class AddCardForm extends Component {
    state = {
        engInput: '',
        polInput: '',
        errorVisible: false
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { polInput, engInput } = this.state;
        if (polInput.trim().length > 0 && engInput.trim().length > 0) {
            this.props.dispatch(addCard(engInput, polInput));
            this.setState({
                engInput: '',
                polInput: '',
                errorVisible: false
            });
        } else {
            this.setState({
                errorVisible: true
            });
        }
    }

    componentDidUpdate() {
        if (this.state.errorVisible) {
            setTimeout(() => this.setState({
                errorVisible: false
            }), 3000)
        }
    }

    render() {
        const { polInput, engInput, errorVisible } = this.state;
        const { handleChange, handleSubmit } = this;
        const errorMessage = <p className="errorMessage">Each input need at least one letter!</p>;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="eng">eng:</label>
                    <input type="text" id="eng" value={engInput} name="engInput" onChange={handleChange} />
                    <label htmlFor="pol">pol:</label>
                    <input type="text" id="pol" value={polInput} name="polInput" onChange={handleChange} />
                    <button>Add</button>
                    {errorVisible ? errorMessage : null}
                </form>
            </div>
        );
    }
}

export default connect()(AddCardForm);