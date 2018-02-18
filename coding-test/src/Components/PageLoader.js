import React from "react";
import Loader from "react-loader";

const PageLoader = props => {
  return <Loader loaded={props.loaded} />;
};

export default PageLoader;

//I dont know if this needs to be it's own component? It's not doing much, it just takes the prop loaded and it could probably do that in App.js
