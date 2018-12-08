import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

// LinkButton is a customized button that borrows some React-DOM object properties from the <Link> element
//   to extend <button> functionality and maintain button properties and styling.

const LinkButton = (props) => {
    const {

        // Properties belonging to React Router <Link> component
        history,
        location,
        match,
        staticContext,
        to,
        onClick,
        
        // Standard JS object properties:
        ...rest
    } = props
    return (
        <button
            {...rest}
            onClick={(event) => {
                onClick && onclick(event);
                history.push(to); // Applies <Link> functionality via Link PropTypes
            }}
        />
    )
}
// Requiring properties for future references
LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(LinkButton);