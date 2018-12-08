import React from 'react';
import { ContentBox, H2, AnchorBtn1, DivWrapper } from './app-styles/AppTheme';

const FilmCard = (props) => {
    return (
        <ContentBox style={{ width: '50vh' }}>
            <DivWrapper style={{textAlign: 'center'}}>
                <AnchorBtn1 href={props.filmData.url} style={{ border: 'none', boxShadow: 'none' }}>
                    <H2>{props.filmData.title}</H2>
                </AnchorBtn1>
            </DivWrapper>
            <h4 style={{ marginBottom: '0' }}>Description:</h4>
            <p style={{ margin: '0' }}>{props.filmData.description}</p>
        </ContentBox>
    );
}

export default FilmCard;