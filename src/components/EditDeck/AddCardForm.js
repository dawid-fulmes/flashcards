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
        const errorMessage = "At least one letter!";
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="eng">eng:</label>
                        <input type="text" id="eng" value={engInput} name="engInput" onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label htmlFor="pol">pol:</label>
                        <input type="text" id="pol" value={polInput} name="polInput" onChange={handleChange} />
                    </div>
                    <button>Add</button>
                </form>
                <p className="error-message">{errorVisible ? errorMessage : null}</p>
            </div>
        );
    }
}

export default connect()(AddCardForm);