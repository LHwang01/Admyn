import React, { Component } from 'react';
import './Journal.css';
import './DayCounter/DayCounter';
import NavBar from '../NavBar/NavBar';
import DayCounter from './DayCounter/DayCounter';
import PanicButton from './PanicButton/PanicButton';
import Entries from './Entries';
import Form from './Form';


class Journal extends Component {
    state = {
        entries: [

        ]
    }

    removeEntry = index => {
        const { entries } = this.state

        this.setState({
            entries: entries.filter((entry, i) => {
                return i != index
            })
        })
    }

    handleSumbit = entry => {
        this.setState({ entries: [...this.state.entries, entry] })
    }

    render() {
        const { entries } = this.state

        return (
            <div>
                <NavBar />
                <div className="journal">
                    <Entries entryData={entries} removeEntry={this.removeEntry}
                    />
                    <Form handleSumbit={this.handleSubmit} />
                </div>

                <DayCounter />
                <PanicButton />
            </div>
        )
    }
}
export default Journal;