import React, { Component } from 'react';
import { H1, PageContent, DivWrapper, PurpleGradientH1 } from './app-styles/AppTheme';
import PeopleCard from './PeopleCard';
import FetchAPI from './shared/FetchAPI.js';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleObjects: [],
            peopleElements: [],
        }
        this.buildElements = this.buildElements.bind(this);
    }

    buildElements(resultArr) {
        let myElements = resultArr.map((val) => {
            return <PeopleCard key={val.key} peopleData={val}></PeopleCard>
        });
        this.setState({
            peopleObjects: resultArr,
            peopleElements: myElements,
        });
    }

    componentDidMount() {
        FetchAPI.people(this.buildElements);
    }
    render() {
        return (
            <PageContent>
                <DivWrapper>
                    <PurpleGradientH1 style={{textAlign: 'center'}}>People</PurpleGradientH1>
                    {this.state.peopleElements}
                </DivWrapper>
            </PageContent>
        );
    }
}

export default People;