import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header = props => {
  return (
    <Jumbotron>
      <h1>my favourite subreddits</h1>
      <h2>
        currently viewing:{" "}
        <small>{props.changeHeader ? props.selectedSubreddit : " "}</small>
      </h2>
    </Jumbotron>
  );
};
export default Header;
