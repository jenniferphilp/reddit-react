//external dependencies
import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import axios from 'axios';

//internal dependencies
import './App.css';
import Header from './Header';
import FeaturesBox from './FeaturesBox';
import Stories from './Stories';
import PageLoader from './PageLoader'

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
        selectedSubreddit: 'nosleep',
        redditItems: [],
        loaded: false
    
    }
}

componentDidMount(){
    this.getData();
}


getData = () => {
    const subreddit = this.state.selectedSubreddit;
    axios.get(`https://www.reddit.com/r/${subreddit}.json`)
    .then(results => {
        const redditItems = results.data.data.children.map(item => item.data) 
            this.setState({ 
                redditItems, 
                loaded: true
             })
        })   
  
}

changeReddit = (e) => {
   this.setState({
       selectedSubreddit: e.target.value
   })
}

handleLoadReddits = (e) => {
    e.preventDefault();
    this.setState({
        loaded: false
    })
    this.getData();
}
    
render() {
    return (
      <Grid>
        <Header 
            selectedSubreddit={this.state.selectedSubreddit}
        />
        <PageLoader
            loaded={this.state.loaded} />
        <Row>
            <Col sm={10} smOffset={2}>
                <Stories 
                    redditItems={this.state.redditItems}
                />
            </Col>
            <FeaturesBox
                changeReddit={this.changeReddit}
                handleLoadReddits={this.handleLoadReddits}
            />
        </Row>
      </Grid>
    );
  }
}

export default App;
