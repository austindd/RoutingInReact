import React, { Component } from 'react';
import { H1 } from './app-styles/AppTheme';

class Films extends Component {

    componentDidMount() {
        console.log(this.props.match);
    }
    
    render() {
        return <H1>Films</H1>;
    }
}

export default Films;