import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = ({ headerValue, selectedSubreddit }) => {
    return(
        <Jumbotron>
            <h1>my favourite subreddits</h1>
            <h2>currently viewing: <small>{headerValue}</small></h2>
        </Jumbotron>)
}
export default Header; 