import React, { Component } from 'react';
import { H1 } from './app-styles/AppTheme';

class People extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props.match);
    }
    
    render() {

        return (
            <>
                <H1>People</H1>
            </>
        
        );
    }
}

export default People;