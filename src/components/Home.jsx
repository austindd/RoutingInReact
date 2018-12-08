import React, { Component } from 'react';
import { DivWrapper, H3, PageContent, HomePageHeader } from './app-styles/AppTheme';

class Home extends Component {

    render() {
        return (
            <PageContent>
                <DivWrapper style={{ textAlign: 'center' }}>
                    <HomePageHeader>Home Page</HomePageHeader>
                    <H3>Definitely nothing to see here.</H3>
                </DivWrapper>
            </PageContent>
        );
    }
}

export default Home;