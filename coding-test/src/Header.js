import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = (props) => {
    return(
        <Jumbotron>
            <h1>My favourite subreddits</h1>
            <h2>You are viewing: <small>{props.selectedSubreddit}</small></h2>
        </Jumbotron>)
}
export default Header; 