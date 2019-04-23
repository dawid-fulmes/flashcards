import React, { Component } from 'react';

class AddCardForm extends Component {
    state = {
        engInput: '',
        polInput: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const { polInput, engInput } = this.state
        const { handleChange, handleSubmit } = this
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="eng">eng:</label>
                    <input type="text" id="eng" value={engInput} name="engInput" onChange={handleChange} />
                    <label htmlFor="pol">pol:</label>
                    <input type="text" id="pol" value={polInput} name="polInput" onChange={handleChange} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddCardForm;