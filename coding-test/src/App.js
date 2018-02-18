//external dependencies
import React, { Component } from "react";
import { Row, Col, Grid } from "react-bootstrap";
import axios from "axios";
import { sortBy } from "lodash";
// because you're not using the whole library, I destructured the method and then you can use it without the ._ below, but that's personal preferenc
//really, it's just seems wise to implicity import things when it might make it more clear what you're doing!
// you can consider doing the same thing with prop. Instead of sending a whole component props you can send what you want it to have, and it can
// help the reader understand what the component does!

//internal dependencies
import "./App.css";
import Header from "./Components/Header";
import FeaturesBox from "./Components/FeaturesBox";
import Stories from "./Components/Stories";
// import PageLoader from "./Components/PageLoader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubreddit: "nosleep",
      redditItems: [],
      loaded: false,
      sorted: false,
      changeHeader: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const subreddit = this.state.selectedSubreddit;
    axios.get(`https://www.reddit.com/r/${subreddit}.json`).then(results => {
      const redditItems = results.data.data.children.map(item => item.data);
      this.setState({
        redditItems,
        loaded: true,
        changeHeader: true
      });
    });
  };

  handleSort = e => {
    e.preventDefault();

    const redditData = { ...this.state.redditItems };
    const sorted = this.state.sorted;

    let sortedReddits;
    sorted
      ? (sortedReddits = sortBy(redditData, [o => o.ups]))
      : (sortedReddits = sortBy(redditData, [o => -o.ups]));

    this.setState({
      redditItems: sortedReddits,
      sorted: !sorted
    });
  };

  changeReddit = e => {
    this.setState({
      selectedSubreddit: e.target.value,
      changeHeader: false
    });
  };

  handleLoadReddits = e => {
    e.preventDefault();
    this.setState({
      loaded: false
    });
    this.getData();
  };

  render() {
    return (
      <Grid>
        <Header
          selectedSubreddit={this.state.selectedSubreddit}
          changeHeader={this.state.changeHeader}
        />
        {/* <PageLoader loaded={this.state.loaded} /> */}
        <Row>
          <Col xs={12} sm={9}>
            <Stories redditItems={this.state.redditItems} />
          </Col>
          <Col xs={12} sm={3} className="select-reddit-form">
            <FeaturesBox
              changeReddit={this.changeReddit}
              handleLoadReddits={this.handleLoadReddits}
              handleSort={this.handleSort}
              sorted={this.state.sorted}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

//for whatever reason, I could not get pageLoader to compile (I probably have to install something), I could be wrong (I dont know the package) but I think you'd want this loader to wrap the whole component
//in the loader, so that it prevents the app from rendering until loaded. In it's current state it's not doin much.
