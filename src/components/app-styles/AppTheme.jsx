import styled from 'styled-components';
import LinkButton from './LinkButton';
import AnchorButton from './AnchorButton';

// Colors:
// ----------------------------------------------------------
// faint blue: #daedfa | rgb(218, 237, 250)
// primary blue: #447a9f | rgb(68, 122, 159)
// primary soft gradient: #5a92b9 | rgb(90, 146, 185)
// secondary pink: #c36386 |
// box-shadow: #033854 |
// ----------------------------------------------------------

export const AppContainer = styled.div`
    position: relative;
    background: none;
    height: 100%;
    width: 100%;
`
export const AppHeader = styled.div`
    display: flex;
    position: fixed;
    height: 8vh;
    width: 100%;
    background: linear-gradient(
        135deg,
        #447a9f 0%,
        #5a92b9 20%,
        #5a92b9 80%,
        #447a9f 100%);
    color: #daedfa;
    box-shadow: 0 2px 0.5em #033854;
`
export const AppBody = styled.div`
    position: fixed;
    overflow-y: scroll;
    top: 8vh;
    width: 100%;
    height: 90vh;
    padding-top: 1em;
    background-color: #daedfa;
    color: #447a9f;
    z-index: -1;
`
export const PageContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    background: transparent;
    width: 96%;
    height: 90vh;
    margin: 0 0 0 2.5%;
`
export const ContentBox = styled.div`
    position: relative;
    /* background: linear-gradient(
        160deg,
        rgba(193, 218, 234, 0.40) 0%,
        rgba(193, 218, 234, 0.30) 20%,
        rgba(193, 218, 234, 0.30) 40%,
        rgba(193, 218, 234, 0.60) 100%
        ); */
    border: 2px solid #447a9f;
    border-radius: 8px;
    height: fit-content;
    width: fit-content;
    padding: 1em 1.5em 1.5em 1.5em;
    margin: 1em;
    box-shadow: 0px 0px 4px #033854;


    color: rgb(68, 122, 159, 0.6);
    background: linear-gradient(
        110deg,
        rgba(19, 45, 132, 1) 0%,
        #c91d84 100%
        );


    /* background: transparent; */
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;

`
export const DivWrapper = styled.div`
    background: none;
    height: fit-content;
    width: fit-content;
    margin: 0 auto;
`
export const Button1 = styled.button`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #447a9f;
    color: #447a9f;
    margin: 1em 1em;
    padding: 0.25em 1em;
    box-shadow: 0px 0px 2px #033854;
    text-decoration: none;
    outline: none;
    &:hover {cursor: pointer;}
`
export const Button2 = styled.button`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #daedfa;
    color: #daedfa;
    margin: 1em 1em;
    padding: 0.25em 1em;
    box-shadow: 0px 0px 2px #033854;
    text-decoration: none;
    outline: none;
    &:hover {cursor: pointer;}
`
// LinkButton is a custom <Link> component. See './LinkButton.jsx'
export const LinkBtn1 = styled(LinkButton)`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #447a9f;
    color: #447a9f;
    margin: 0.5em 0.5em;
    padding: 0.25em 1em;
    box-shadow: 0px 0px 2px #033854;
    text-decoration: none;
    outline: none;
    &:hover {cursor: pointer;}
`
export const LinkBtn2 = styled(LinkButton)`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #daedfa;
    color: #daedfa;
    margin: 0.5em 0.5em;
    padding: 0.25em 1em;
    box-shadow: 0px 0px 2px #033854;
    text-decoration: none;
    outline: none;
    &:hover {cursor: pointer;}
`
// AnchorButton is a custom <a> component. See './AnchorButton.jsx'.
export const AnchorBtn1 = styled(AnchorButton)`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #447a9f;
    color: #447a9f;
    margin: 0.5em 0.5em;
    padding: 0.25em 1em;
    box-shadow: 0px 0px 2px #033854;
    text-decoration: none;
    outline: none;
    &:hover {cursor: pointer;}
`
export const AnchorBtn2 = styled(AnchorButton)`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #daedfa;
    color: #daedfa;
    margin: 0.5em 0.5em;
    padding: 0.25em 1em;
    box-shadow: 0px 0px 2px #033854;
    text-decoration: none;
    outline: none;
    &:hover {cursor: pointer;}
`
export const H1 = styled.h1`
    font-size: 3em;
    margin: 0em 1.5em;
` 
export const H2 = styled.h2`
    margin: 0.5em 0.5em;
` 
export const H3 = styled.h3`
    margin: 0.5em 0em;
`
export const HomePageHeader = styled.h1`
    margin: 0;
    padding: 18vh 0 18vh 0;
    font-size: 6em;
    letter-spacing: 14px;
    word-spacing: 30px;
    color: rgba(255,255,255,0.5);
    opacity: 1;
    background: linear-gradient(
        110deg,
        rgba(19, 45, 132, 1) 0%,
        #c91d84 100%
        );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
`
export const PurpleGradientText = styled.div`
    color: rgba(255,255,255,0.5);
    opacity: 1;
    background: linear-gradient(
        110deg,
        rgba(19, 45, 132, 1) 0%,
        #c91d84 100%
        );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
`
export const PurpleGradientH1 = styled.h1`
    width: fit-content;
    padding: 0 1em;
    margin: 0 auto;
    color: rgba(255,255,255,0.5);
    opacity: 1;
    background: linear-gradient(
        110deg,
        rgba(19, 45, 132, 1) 0%,
        #c91d84 100%
        );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
`


export default AppHeader;