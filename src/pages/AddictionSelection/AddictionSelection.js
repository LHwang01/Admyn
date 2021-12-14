import './AddictionSelection.css'
import NavBar from '../NavBar/NavBar';
import React, { Component } from "react";

class AddictionSelection extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    render() {
        return (
            <div>
                <NavBar />

                <form className="addictionCard" onSubmit={this.formSubmit}>
                    <div className="form-content"><h3 className="heading">Choose your focus:</h3>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="SocialMedia"
                                    checked={this.state.selectedOption === "Male"}
                                    onChange={this.onValueChange}
                                />
                                Social Media
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="VideoGames"
                                    checked={this.state.selectedOption === "VideoGames"}
                                    onChange={this.onValueChange}
                                />
                                Video Games
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="Vaping"
                                    checked={this.state.selectedOption === "Vaping"}
                                    onChange={this.onValueChange}
                                />
                                Vaping
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="Other"
                                    checked={this.state.selectedOption === "Other"}
                                    onChange={this.onValueChange}
                                />
                                Other
                            </label>
                        </div>
                        <div>
                            Selected option is : {this.state.selectedOption}
                        </div>
                        <button className="btn btn-default" type="submit">
                            <a href="/journal">Let's get started!</a>
                        </button>
                    </div>
                </form>

            </div>

        );
    }
}

export default AddictionSelection;





