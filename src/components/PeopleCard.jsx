import React from 'react';
import { ContentBox, H2, AnchorBtn1} from './app-styles/AppTheme';

const PeopleCard = (props) => {
    return (
        <ContentBox style={{ width: '50vh', textAlign: 'center'}}>
            <AnchorBtn1 href={props.peopleData.url} style={{ border: 'none', boxShadow: 'none' }}>
                <H2>{props.peopleData.name}</H2>
            </AnchorBtn1>
            <p>Age: {props.peopleData.age}</p>
            <p>Eye Color: {props.peopleData.eye_color}</p>
            <p>Hair Color: {props.peopleData.hair_color}</p>
        </ContentBox>
    );
}

export default PeopleCard;