import React, { Component } from 'react';
import { H1 } from './app-styles/AppTheme';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmArr: [],
            filmKeys: [],
        }
    }

    componentDidMount() {
        console.log(this.props.match);
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then((res) => res.json())
        .then((obj) => {
            console.log(obj);
            let myKeys = obj.map((val, index) => index) // generating keys based on number of object properties
            this.setState({
                filmArr: obj,
                filmKeys: myKeys,
            })
        })
    }

    render() {
        return (
            <>
                <H1>Films</H1>
                
            </>
        );
    }
}

export default Films;