import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

// AnchorButton is a customized <button> that borrows some DOM object properties from the <a> element
//   to extend <button> functionality and maintain button properties and styling.

const AnchorButton = (props) => {
    const {

        // Anchor elements I may want to make available to the <button> element.
        // Only href is needed for our purposes, but doesn't hurt to include them all.
        charset,
        download,
        hash,
        host,
        hostname,
        href,
        hreflang,
        origin,
        name,
        password,
        pathname,
        port,
        protocol,
        rel,
        rev,
        search,
        target,
        text,
        type,
        username,

        // React Router PropTypes that need to be included
        staticContext,

        // Standard JS object properties
        ...rest

    } = props
    return (
        <button
            {...rest}
            onClick={(event) => {
                props.onClick && props.onClick(event);
                window.location.href = href; // Applies minimal <a> functionality
            }}
        />
    )
}
// Requiring properties for future references
AnchorButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(AnchorButton);