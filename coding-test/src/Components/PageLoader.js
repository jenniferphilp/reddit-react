import React from 'react';
import Loader from 'react-loader'


const PageLoader = (props) => {
    return(
        <Loader 
            loaded={props.loaded}
        />
    )
}

export default PageLoader;