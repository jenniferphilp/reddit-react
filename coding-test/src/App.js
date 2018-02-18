//external dependencies
import React, { Component } from "react";
import { Row, Col, Grid } from "react-bootstrap";
import axios from "axios";
import _ from "lodash";

//internal dependencies
import "./App.css";
import Header from "./Components/Header";
import FeaturesBox from "./Components/FeaturesBox";
import Stories from "./Components/Stories";
import PageLoader from "./Components/PageLoader";

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
      ? (sortedReddits = _.sortBy(redditData, [o => o.ups]))
      : (sortedReddits = _.sortBy(redditData, [o => -o.ups]));

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
        <PageLoader loaded={this.state.loaded} />
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
