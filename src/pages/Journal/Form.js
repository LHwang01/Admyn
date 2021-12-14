import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            body: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { title, body } = this.state;

        return (
            <div>
                <form>
                    <div className="title">
                        <label>Title</label>
                        <input
                            placeholder="Enter title"
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={this.handleChange} />
                    </div>
                    <div className="textArea">
                        <label>Entry</label>
                        <input
                            placeholder="I am feeling.."
                            type="textarea"
                            name="body"
                            id="body"
                            value={body}
                            onChange={this.handleChange} />
                    </div>

                </form>
                <button className="submit" onClick={this.submitForm}>Submit</button>
            </div>
        )
    }
}

export default Form;