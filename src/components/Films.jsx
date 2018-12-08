import React, { Component } from 'react';
import { H1, PageContent, DivWrapper, PurpleGradientH1 } from './app-styles/AppTheme';
import FetchAPI from './shared/FetchAPI.js';
import FilmCard from './FilmCard';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmObjects: [],
            filmElements: [],
        }
        this.buildElements = this.buildElements.bind(this);
    }

    buildElements(resultArr) {
        let myElements = resultArr.map((val) => {
            return <FilmCard key={val.key} filmData={val}></FilmCard>
        });
        this.setState( () => {
            return {
            filmObjects: resultArr,
            filmElements: myElements,
        }
        });
    }

    componentDidMount() {
        FetchAPI.films(this.buildElements);        
    }

    render() {
        return (
            <PageContent>
                <DivWrapper>
                        <PurpleGradientH1 style={{textAlign: 'center'}}>Films</PurpleGradientH1>
                    {this.state.filmElements}
                </DivWrapper>
            </PageContent>
        );
    }
}

export default Films;