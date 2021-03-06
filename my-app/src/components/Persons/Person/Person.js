import React, {Component} from 'react';

import classes from './Person.css';

class Person extends Component {
    render () {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}! {this.props.age} years old.</p>
                <input text="Toptest" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;