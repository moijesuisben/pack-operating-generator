import React from 'react';
import useStylesLoader from "./useStylesLoader";

export default function Loader() {
    const classes = useStylesLoader();

    return (
        <div id="loader" className={classes.loader_container}>
            <img src="https://react-pdf.org/images/logo.png" alt="loader" className={classes.loader_media} />
            <p>Loading …</p>
        </div>
    )
}
