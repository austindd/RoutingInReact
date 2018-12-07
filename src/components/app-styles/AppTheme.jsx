import styled from 'styled-components';
import LinkButton from './LinkButton';

export const AppHeader = styled.div`
    position: fixed;
    height: 8vh;
    width: 100%;
    background-color: #447a9f;
    color: #daedfa;
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
`
export const LinkBtn1 = styled(LinkButton)`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #447a9f;
    color: #447a9f;
    margin: 1em 1em;
    padding: 0.25em 1em;
    text-decoration: none;
    &:hover {cursor: pointer;}
`
export const LinkBtn2 = styled(LinkButton)`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #daedfa;
    color: #daedfa;
    margin: 1em 1em;
    padding: 0.25em 1em;
    text-decoration: none;
    &:hover {cursor: pointer;}
`
export const Button1 = styled.button`
    background: transparent;
    background-color: none;
    border-radius: 3px;
    border: 2px solid #447a9f;
    color: #447a9f;
    margin: 1em 1em;
    padding: 0.25em 1em;
    text-decoration: none;
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
    text-decoration: none;
    &:hover {cursor: pointer;}
`
export const H1 = styled.h1`
    margin: 0.5em 1.5em;
` 

export default AppHeader;